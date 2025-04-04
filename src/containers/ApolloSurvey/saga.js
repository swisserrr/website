import { call, put, takeLatest } from 'redux-saga/effects';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { SUBMIT_APOLLO_DATA, NOK_DATA } from './constants';
import { submitApolloDataSuccess, submitApolloDataFail, nokDataSuccess, nokDataFail } from './actions';
import { APIS } from '../../constants';

function* submitApolloData({ payload }) {
  const url = Helpers.getUrl(APIS.APOLLO_SUBMIT);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };
  console.log('paaaaa', payload);
  try {
    yield call(request, options);
    yield put(submitApolloDataSuccess());
    payload?.callback();
  } catch (err) {
    console.log('ApolloSubmiterr', err);
    if (isEqual(err?.response?.data?.code, 1001)) {
      payload?.data?.fireEmployeeCodeError?.(err?.response?.data?.message);
    }
    if (isEqual(err?.response?.data?.code, 1002)) {
      payload?.data?.generateActivePlanError?.(err?.response?.data?.message);
    }
    yield put(submitApolloDataFail(err));
  }
}
function* nokData({ payload }) {
  let url = Helpers.getUrl(APIS.GET_NOK_APOLLO);
  url = url.replace(':uuid', payload);
  const options = {
    method: 'GET',
    url,
  };
  try {
    const res = yield call(request, options);
    yield put(nokDataSuccess(res?.data));
  } catch (err) {
    yield put(nokDataFail());
  }
}
export default function* pepsicoSurveySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_APOLLO_DATA, submitApolloData);
  yield takeLatest(NOK_DATA, nokData);
}
