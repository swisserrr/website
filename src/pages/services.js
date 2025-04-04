import Services from 'containers/ConciergeServices';

import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';

import { getServices } from 'containers/ConciergeServices/actions';

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(getServices());

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default Services;
