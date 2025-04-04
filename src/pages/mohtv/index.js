import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import dynamic from 'next/dynamic';

// Static imports for server
import {
  getAllShows,
  getMohTVCategories,
  getCategoryShows,
  getSearchResult,
} from 'containers/Mohtv/MohtvHomePage/actions';

// Dynamic import with SSR disabled for client-only components
const Mohtv = dynamic(() => import('containers/Mohtv/MohtvHomePage'), { ssr: true });

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  try {
    // Optimize initial payload - use constant sizes
    const INITIAL_PAGE_SIZE = 10;

    // Initialize empty results for SEO
    let initialData = null;

    // Fire saga actions on server
    store.dispatch(getMohTVCategories());

    if (query?.search) {
      store.dispatch(
        getSearchResult({
          topic: query.search,
          page_size: INITIAL_PAGE_SIZE,
          page_number: 1,
        })
      );
    } else if (query?.category_uuid) {
      store.dispatch(
        getCategoryShows({
          page_size: INITIAL_PAGE_SIZE,
          mohtv_category_uuid: query.category_uuid,
          mohtv_sub_category_uuid: '',
          page_number: 1,
        })
      );
    } else {
      store.dispatch(
        getAllShows({
          page_size: INITIAL_PAGE_SIZE,
          mohtv_category_uuid: '',
          mohtv_sub_category_uuid: '',
          page_number: 1,
        })
      );
    }

    // End saga and wait for completion
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        initialQuery: query || {},
      },
    };
  } catch (err) {
    console.error('Server-side fetch error:', err);
    return {
      props: {
        error: true,
        initialQuery: query || {},
      },
    };
  }
});

export default Mohtv;
