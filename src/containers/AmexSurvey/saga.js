import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import isEqual from 'lodash/isEqual';

import { SUBMIT_DATA } from './constants';
import { submitDataSuccess, submitDataFail } from './actions';
import { APIS } from '../../constants';

function* submitData({ payload }) {
  const url = Helpers.getUrl(APIS.AMEX_REVIEW_2);

  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    yield put(submitDataSuccess());
    payload?.callback(true);
  } catch (err) {
    if (isEqual(err?.response?.data?.code, 1001)) {
      payload?.data?.fireEmployeeCodeError?.(err?.response?.data?.message);
    }
    yield put(submitDataFail());
  }
}
export default function* amexSurveySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_DATA, submitData);
}
