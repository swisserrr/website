import { call, put, takeLatest } from 'redux-saga/effects';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { SUBMIT_SHELL_DATA } from './constants';
import { submitShellDataSuccess, submitShellDataFail } from './actions';
import { APIS } from '../../constants';

function* submitShellData({ payload }) {
  const url = Helpers.getUrl(get(payload, 'data.url') || APIS.SHELL_REVIEW);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    yield put(submitShellDataSuccess());
    payload?.callback();
  } catch (err) {
    if (isEqual(err?.response?.data?.code, 1001)) {
      payload?.data?.fireEmployeeCodeError?.(err?.response?.data?.message);
    }
    if (isEqual(err?.response?.data?.code, 1002)) {
      payload?.data?.generateActivePlanError?.(err?.response?.data?.message);
    }
    yield put(submitShellDataFail());
  }
}
export default function* shellSurveySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_SHELL_DATA, submitShellData);
}
