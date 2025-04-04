import Blogs from 'containers/Blogs/BlogListing';
import axios from 'axios';
import filter from 'lodash/filter';
import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { getBlogsCategory } from 'containers/Blogs/BlogsHomePage/actions';

export async function getStaticPaths() {
  try {
    const categoriesApiData = Array.from({ length: 2 }).map(async (_, i) => {
      const res = await axios.get(
        `https://testing.emoha.com/blogs/wp-json/wp/v2/categories?per_page=100&page=${i + 1}`
      );
      return res.data;
    });
    const categoriesApiDataResolve = await Promise.all(categoriesApiData);
    const categories = categoriesApiDataResolve.flat(2);
    const filteredCategories = filter(categories, data => data.parent === 0);
    const obj = filteredCategories.map(data => {
      return { params: { categories: data.slug } };
    });
    return {
      paths: obj,
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
    store.dispatch(getBlogsCategory({ category: params.categories }));
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
