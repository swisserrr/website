import { END } from 'redux-saga';

import MediaListing from 'containers/MediaListing';
import wrapper from 'utils/configure-store';

import { fetchMediaData } from 'containers/MediaListing/actions';

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  try {
    store.dispatch(
      fetchMediaData({ page_number: 1, api: 'admin/website/third-party-media?page_number=1&page_size=10' })
    );

    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default MediaListing;
