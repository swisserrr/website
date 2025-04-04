import { END } from 'redux-saga';

import ShowDetails from 'containers/ShowDetails';
import wrapper from 'utils/configure-store';
import { eventDetails } from 'containers/ShowDetails/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  try {
    // Fire saga action on server.
    store.dispatch(eventDetails(params?.slug));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default ShowDetails;
