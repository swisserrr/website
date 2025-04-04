import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';
import { FETCHING_HOME_JUNIPER_DATA } from './constants';
import { fetchingHomeJuniperDataSuccess } from './actions';

function* fetchHomeJuniperData() {
  const url = Helpers.getUrl(APIS.GET_CORPORATE_DATA);
  const options = {
    method: 'GET',
    url,
  };

  try {
    const resultSaga = yield call(request, options);
    yield put(fetchingHomeJuniperDataSuccess(get(resultSaga, 'data')));
  } catch (err) {
    // removed console.log
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeLatest(FETCHING_HOME_JUNIPER_DATA, fetchHomeJuniperData);
}
