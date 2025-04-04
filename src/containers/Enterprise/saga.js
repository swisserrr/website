import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import replace from 'lodash/replace';
import filter from 'lodash/filter';
import startsWith from 'lodash/startsWith';
import split from 'lodash/split';

import { SUBMIT_DATA, SEND_OTP_MAIL, VERIFY_OTP_MAIL, HANDLE_USER_LOGIN, HANDLE_MAPPING } from './constants';
import {
  submitDataSuccess,
  submitDataFail,
  sendOtpMailSuccess,
  sendOtpMailFail,
  verifyOtpMailSuccess,
  verifyOtpMailFail,
  handleUserLoginActionSuccess,
  handleMappingActionSuccess,
} from './actions';
import { APIS } from '../../constants';
import { verifyOTPSuccess } from '../Login/actions';
import { updateProfileCtHandler } from 'utils/cleverTap';

import Cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

function* submitData({ payload }) {
  const url = get(payload, 'endPoint');

  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    const res = yield call(request, options);
    const ctEvents = get(res, 'data.ctevents');

    yield put(submitDataSuccess());
    payload?.callback(true);

    if (!isEmpty(ctEvents?.[0])) {
      updateProfileCtHandler(ctEvents?.[0]);
    }
  } catch (err) {
    payload?.error();
    yield put(submitDataFail());
  }
}

function* sendOtp({ payload }) {
  const url = Helpers.getUrl(APIS.SEND_OTP_MAIL);

  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    yield put(sendOtpMailSuccess());
    payload?.callback(true);
  } catch (err) {
    yield put(sendOtpMailFail());
  }
}

function* verifyOtp({ payload }) {
  const url = Helpers.getUrl(APIS.VERIFY_OTP_MAIL);

  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    const res = yield call(request, options);
    yield put(verifyOtpMailSuccess());
    payload?.callback(true);

    // updateProfileCtHandler((get(res, 'data.user_data')));
  } catch (err) {
    yield put(verifyOtpMailFail());
  }
}

function* handleUserLogin({ payload, callback }) {
  const manipulatedPayload = encodeURIComponent(
    replace(filter(split(split(payload, '?')[1], '&'), ele => startsWith(ele, 'utm='))[0], 'utm=', '')
  );

  const url = Helpers.getUrl(`partner/decrypt-url?utm=${manipulatedPayload}`);
  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);

    if (!isEmpty(get(res, 'data.access_token'))) {
      Cookie.set('access_token', res?.data?.access_token, { expires: 365, secure: true });
    }

    yield put(verifyOTPSuccess(res?.data));
    callback();
    yield put(handleUserLoginActionSuccess(res?.data));
  } catch (err) {
    yield put(handleUserLoginActionSuccess());
  }
}

function* handleMapping({ payload }) {
  const url = Helpers.getUrl(APIS.HANDLE_MAPPING_API);

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);
    yield put(handleMappingActionSuccess(get(res, 'data')));
  } catch (err) {
    // yield put(verifyOtpMailFail());
  }
}

export default function* enterpriseSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_DATA, submitData);
  yield takeLatest(SEND_OTP_MAIL, sendOtp);
  yield takeLatest(VERIFY_OTP_MAIL, verifyOtp);
  yield takeLatest(HANDLE_USER_LOGIN, handleUserLogin);
  yield takeLatest(HANDLE_MAPPING, handleMapping);
}
