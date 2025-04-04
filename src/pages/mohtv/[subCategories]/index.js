import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import dynamic from 'next/dynamic';

import { getSubCategoryShows, getMohTVCategories } from 'containers/Mohtv/MohtvHomePage/actions';

// Dynamic import with SSR enabled
const MohtvSubCategoryPage = dynamic(() => import('containers/Mohtv/MohtvSubCategoryPage'), { ssr: true });

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query, params }) => {
  try {
    // Get the subcategory from the URL params
    const { subCategories } = params;

    // Fixed page size for consistent initial load
    const INITIAL_PAGE_SIZE = 20;

    // Prepare optimized payload
    const payload = {
      apiPayload: {
        page_size: INITIAL_PAGE_SIZE,
        show_type: query?.show_type || '',
        mohtv_category_uuid: query?.category_uuid || '',
        mohtv_sub_category_uuid: query?.subCategory_uuid || '',
        page_number: 1,
      },
      categoryId: query?.categoryId,
    };

    // Parallel dispatch for faster loading
    await Promise.all([
      new Promise(resolve => {
        store.dispatch(getMohTVCategories());
        resolve();
      }),
      new Promise(resolve => {
        store.dispatch(getSubCategoryShows(payload));
        resolve();
      }),
    ]);

    // End saga and wait for completion
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        subCategory: subCategories,
        initialQuery: query || {},
      },
    };
  } catch (err) {
    console.error('Server-side fetch error:', err);
    return {
      props: {
        error: true,
        subCategory: params?.subCategories || '',
        initialQuery: query || {},
      },
    };
  }
});

export default MohtvSubCategoryPage;
