import { END } from 'redux-saga';
import Plans from 'containers/Membership';

import wrapper from 'utils/configure-store';

import { getPlans } from 'containers/Membership/actions';

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(getPlans());

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default Plans;
