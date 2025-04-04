import { call, put, takeLatest } from 'redux-saga/effects';
import isEqual from 'lodash/isEqual';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { SUBMIT_CYIENT_DATA } from './constants';
import { submitCyientDataSuccess, submitCyientDataFail } from './actions';
import { APIS } from '../../constants';

function* submitCyientData({ payload }) {
  const url = Helpers.getUrl(APIS.CYIENT_REVIEW);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    yield put(submitCyientDataSuccess());
    payload?.callback();
  } catch (err) {
    if (isEqual(err?.response?.data?.code, 1001)) {
      payload?.data?.fireEmployeeCodeError?.(err?.response?.data?.message);
    }
    if (isEqual(err?.response?.data?.code, 1002)) {
      payload?.data?.generateActivePlanError?.(err?.response?.data?.message);
    }
    yield put(submitCyientDataFail());
  }
}
export default function* cyientSurveySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_CYIENT_DATA, submitCyientData);
}
