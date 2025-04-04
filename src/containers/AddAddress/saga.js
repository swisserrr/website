import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';

import { ADD_ADDRESS, EDIT_ADDRESS } from './constants';
import { addAddressSuccess, addAddressFail } from './actions';
import { APIS } from '../../constants';

function* editAddressHandler({ payload }) {
  let url = Helpers.getUrl(APIS.UPDATE_ADDRESS);
  url = url.replace(':id', payload?.data?.id);

  const options = {
    method: 'PUT',
    url,
    data: payload?.data,
  };
  try {
    yield call(request, options);
    yield put(addAddressSuccess());
    payload?.moveToConciergeBack();
  } catch (e) {
    yield put(addAddressFail(e));
  }
}

function* addAddressHandler({ payload }) {
  const url = Helpers.getUrl(APIS.Add_ADDRESS);

  const options = {
    method: 'POST',
    url,
    data: payload?.data,
  };

  try {
    yield call(request, options);
    yield put(addAddressSuccess());
    payload?.moveToConciergeBack();
  } catch (e) {
    yield put(addAddressFail(e));
  }
}

// Individual exports for testing
export default function* addAddressSaga() {
  yield takeLatest(ADD_ADDRESS, addAddressHandler);
  yield takeLatest(EDIT_ADDRESS, editAddressHandler);
}
