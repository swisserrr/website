import DiseaseScreen from 'containers/DiseaseScreen/DiseasePage';
import React from 'react';

import { END } from 'redux-saga';

import wrapper from 'utils/configure-store';

import { getDiseaseDetail } from 'containers/DiseaseScreen/DiseaseListing/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  try {
    store.dispatch(getDiseaseDetail({ slug: 'awpoo' }));

    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

function AwpoDiseaseScreen() {
  return <DiseaseScreen isFromAwpo={true} />;
}

export default AwpoDiseaseScreen;
