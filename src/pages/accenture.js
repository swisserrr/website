import { END } from 'redux-saga';
import React from 'react';
import Juniper from 'containers/Juniper';
import wrapper from 'utils/configure-store';
import { fetchingHomeJuniperData } from 'containers/Juniper/actions';
import corporateData from 'utils/static/corporateData';

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(fetchingHomeJuniperData());
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

function Corporate() {
  return <Juniper data={corporateData.accenture} />;
}

export default Corporate;
