import DiseaseListing from 'containers/DiseaseScreen/DiseaseListing';

import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { getDiseaseAction } from 'containers/DiseaseScreen/DiseaseListing/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(getDiseaseAction({ page_size: 20, page_number: 1 }));

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default DiseaseListing;
