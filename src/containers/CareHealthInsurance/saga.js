import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';

import { SUBMIT_CARE_HEALTH_DATA } from './constants';
import { submitCareHealthInsuranceDataSuccess, submitCareHealthInsuranceDataFail } from './actions';
import { APIS } from '../../constants';

function* submitCareHealthInsuranceData({ payload }) {
  const url = Helpers.getUrl(APIS.ADD_WEBSITE_LEAD);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };
  try {
    yield call(request, options);
    yield put(submitCareHealthInsuranceDataSuccess());
    payload?.callback();
  } catch (err) {
    yield put(submitCareHealthInsuranceDataFail());
  }
}
export default function* careHealthInsuranceSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_CARE_HEALTH_DATA, submitCareHealthInsuranceData);
}
