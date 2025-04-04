import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';

import { GET_PLANS } from './constants';
import { getPlansSuccess, getPlansFail } from './actions';

import { APIS } from '../../constants';

function* getPlansHandler() {
  const url = Helpers.getUrl(APIS.GET_PLANS);

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);
    //console.log('+++++++++++++++++++++++++++++', res);

    yield put(getPlansSuccess(res?.data?.plans ?? []));
  } catch (e) {
    //console.log('+++++++++++++++++++++++++++++', e);

    yield put(getPlansFail(e));
  }
}

// Individual exports for testing
export default function* membershipSaga() {
  yield takeLatest(GET_PLANS, getPlansHandler);
}
