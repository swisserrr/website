// Individual exports for testing
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';

import { GET_ADDRESS_DATA } from './constants';
import { getAddressSuccess, getAddressFail } from './actions';
import { setLoading } from '../Loading/actions';

function* getAddressHandler() {
  const url = Helpers.getUrl(APIS.Add_ADDRESS);

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);
    yield put(getAddressSuccess(res?.data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(getAddressFail(e));
  }
}

// Individual exports for testing
export default function* conciergeCalendarSaga() {
  yield takeLatest(GET_ADDRESS_DATA, getAddressHandler);
}
