import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { SUBMIT_ACCERTIFY_DATA } from './constants';
import { submitAccertifyDataSuccess, submitAccertifyDataFail } from './actions';
import { APIS } from '../../constants';

function* submitAccertifyData({ payload }) {
  const url = Helpers.getUrl(get(payload, 'data.url') || APIS.ACCERTIFY_REVIEW);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    yield put(submitAccertifyDataSuccess());
    payload?.callback();
  } catch (err) {
    if (isEqual(err?.response?.data?.code, 1001)) {
      payload?.data?.fireEmployeeCodeError?.(err?.response?.data?.message);
    }
    if (isEqual(err?.response?.data?.code, 1002)) {
      payload?.data?.generateActivePlanError?.(err?.response?.data?.message);
    }
    yield put(submitAccertifyDataFail());
  }
}
export default function* accertifySurveySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_ACCERTIFY_DATA, submitAccertifyData);
}
