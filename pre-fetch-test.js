const axios = require('axios');
const pm2 = require('pm2');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, maxRetries = 3, delayMs = 1000) {
  let retryCount = 0;
  while (retryCount < maxRetries) {
    try {
      return await axios.get(url);
    } catch (err) {
      if (err.response && (err.response.status === 502 || err.response.status === 504)) {
        retryCount++;
        console.error(`Retry ${retryCount} for: ${url}`);
        await delay(delayMs * Math.pow(2, retryCount)); // Exponential backoff
      } else {
        throw err;
      }
    }
  }
  throw new Error(`Failed to fetch after ${maxRetries} retries: ${url}`);
}

async function preFetchPages() {
  // Fetch all categories
  const categoriesApiData = Array.from({ length: 2 }).map(async (_, i) => {
    const res = await fetchWithRetry(
      `https://testing.emoha.com/blogs/wp-json/wp/v2/categories?per_page=100&page=${i + 1}`
    );
    return res.data;
  });
  const categoriesApiDataResolve = await Promise.all(categoriesApiData);
  const categories = categoriesApiDataResolve.flat(2);
  const filteredCategories = categories.filter(data => data.parent === 0);

  // console.log(`Total categories: ${filteredCategories.length}`);

  // Pre-fetch category pages
  for (const category of filteredCategories) {
    try {
      // console.log(`Fetching category page: https://test.emoha.com/blogs/${category.slug}`);
      await fetchWithRetry(`https://test.emoha.com/blogs/${category.slug}`);
    } catch (err) {
      console.error(`Error fetching category page: https://test.emoha.com/blogs/${category.slug}`, err.message);
      continue;
    }

    // Fetch all posts for each category
    let page = 1;
    let posts = [];
    let hasMorePosts = true;

    while (hasMorePosts) {
      try {
        // console.log(`Fetching posts for category ${category.slug} on page ${page}`);
        const res = await fetchWithRetry(
          `https://testing.emoha.com/blogs/wp-json/wp/v2/posts?categories=${category.id}&per_page=100&page=${page}`
        );
        const fetchedPosts = res.data;

        if (fetchedPosts.length > 0) {
          posts = posts.concat(fetchedPosts);
          page++;
        } else {
          hasMorePosts = false;
        }
      } catch (err) {
        console.error(`Error fetching posts for category ${category.slug} on page ${page}`, err.message);
        console.error(
          `Request URL: https://testing.emoha.com/blogs/wp-json/wp/v2/posts?categories=${category.id}&per_page=100&page=${page}`
        );
        hasMorePosts = false;
      }
    }

    // console.log(`Total posts for category ${category.slug}: ${posts.length}`);

    // Pre-fetch detail pages for each post
    for (const post of posts) {
      try {
        // console.log(`Fetching post page: https://test.emoha.com/blogs/${category.slug}/${post.slug}`);
        await fetchWithRetry(`https://test.emoha.com/blogs/${category.slug}/${post.slug}`);
      } catch (err) {
        console.error(
          `Error fetching post page: https://test.emoha.com/blogs/${category.slug}/${post.slug}`,
          err.message
        );
      }
    }
  }
}

preFetchPages()
  .then(() => {
    console.log('Pre-fetching completed.');
    pm2.connect(err => {
      if (err) {
        console.error(err);
        process.exit(2);
      }
      pm2.delete('pre-fetch-test', err => {
        pm2.disconnect();
        if (err) throw err;
      });
    });
  })
  .catch(err => {
    console.error('Error during pre-fetching:', err);
    pm2.connect(err => {
      if (err) {
        console.error(err);
        process.exit(2);
      }
      pm2.delete('pre-fetch-test', err => {
        pm2.disconnect();
        if (err) throw err;
      });
    });
  });
