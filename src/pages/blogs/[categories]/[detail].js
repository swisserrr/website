import axios from 'axios';
import filter from 'lodash/filter';
import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import Blogs from 'containers/Blogs/BlogDetailPage';
import { getBlogsDetail } from 'containers/Blogs/BlogsHomePage/actions';

export async function getStaticPaths() {
  try {
    const formattedPaths = [];
    // const allPostsApi = Array.from({ length: 10 }).map(async (_, i) => {
    //   const res = await axios.get(`https://testing.emoha.com/blogs/wp-json/wp/v2/posts?per_page=100&page=${i + 1}`);
    //   return res.data;
    // });
    const res = await axios.get(`https://testing.emoha.com/blogs/wp-json/wp/v2/posts?per_page=20&page=1`);
    const latestBlogs = res.data;
    // const arrayPromiseResolve = await Promise.all(allPostsApi);
    // const resolvedArray = arrayPromiseResolve.flat(10);

    const categoriesRes = await axios.get(
      `https://testing.emoha.com/blogs/wp-json/wp/v2/categories?per_page=100&page=${i + 1}`
    );
    const categories = categoriesRes.data;
    const filteredCategories = filter(categories, data => data.parent === 0);

    // filteredCategories.map(data => {
    //   const categoriesData = resolvedArray.filter(obj => obj.categories[0] === data.id);
    //   categoriesData.map(catData => {
    //     formattedPaths.push({ params: { categories: data.slug, detail: catData.slug } });
    //   });
    // });

    filteredCategories.forEach(category => {
      latestBlogs.forEach(blog => {
        if (blog.categories[0] === category.id) {
          formattedPaths.push({ params: { categories: category.slug, detail: blog.slug } });
        }
      });
    });

    return {
      paths: formattedPaths,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
  try {
    // Fire saga action on server.
    store.dispatch(getBlogsDetail(params));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 60,
    };
  } catch (err) {
    // Error.
    return {
      notFound: true,
    };
  }
});

export default Blogs;
