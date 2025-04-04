import merge from 'lodash/merge';

export default async function handler(req, res) {
  const { slug } = req.query;
  try {
    const categoryDetail = await fetch(
      `https://testing.emoha.com/blogs/wp-json/wp/v2/categories?slug=${slug[0]}`
    ).then(data => data.json());
    const posts = await fetch(
      `https://testing.emoha.com/blogs/wp-json/wp/v2/posts?categories=${
        categoryDetail[0].id
      }&per_page=10&page=${slug[1] + 2}`
    ).then(data => data.json());
    const postsImages = posts.map(async obj => {
      return await fetch(`https://testing.emoha.com/blogs/wp-json/wp/v2/media/${obj?.featured_media}`).then(data =>
        data.json()
      );
    });
    const resolvedImages = await Promise.all(postsImages);
    const imageDataUrl = resolvedImages.map(user => ({ source_url: user.source_url }));
    const mergedData = merge(posts, imageDataUrl);
    res.json({ data: mergedData });
  } catch {
    res.json({ data: [] });
  }
}
