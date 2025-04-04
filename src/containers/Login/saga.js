import { call, put, takeLatest } from 'redux-saga/effects';
import dayjs from 'dayjs';
import Cookie from 'js-cookie';

import get from 'lodash/get';

import request from 'utils/request';
import Helpers from 'utils/helpers';
import { SEND_OTP, VERIFY_OTP, LOG_OUT } from './constants';

import { APIS } from '../../constants';
import {
  saveTimeStamp,
  sendOTPSuccess,
  sendOTPFail,
  verifyOTPSuccess,
  verifyOTPFail,
  logOutFail,
  logOutSuccess,
} from './actions';

import { onUserLoginHandler, userDataForCtEvents } from 'utils/cleverTap';

function* sendOtpApiHandler({ payload }) {
  const url = Helpers.getUrl(APIS.LOGIN_URL);

  const options = {
    method: 'POST',
    url,
    data: payload?.data,
  };

  try {
    const res = yield call(request, options);

    if (res?.last_otp_send_timestamp) {
      yield put(saveTimeStamp(res?.last_otp_send_timestamp));
    } else {
      yield put(sendOTPSuccess());
      yield put(saveTimeStamp(dayjs()));
    }
  } catch (e) {
    payload?.callback?.(false);
    yield put(sendOTPFail(e?.response?.status));
  }
}

function* verifyOtpApiHandler({ payload }) {
  const url = Helpers.getUrl(APIS.VERIFY_OTP);

  const options = {
    method: 'POST',
    url,
    data: payload?.data,
  };

  try {
    const res = yield call(request, options);

    onUserLoginHandler(userDataForCtEvents(get(res, 'data.user_data')));

    Cookie.set('access_token', res?.data?.access_token, {
      expires: 365,
      secure: window.location.protocol === 'https:',
      sameSite: 'lax', // Improves cookie security policy
    });
    Cookie.set('customer_id', res?.data?.user_data?.uuid, { expires: 365 });
    Cookie.set('partner_uuid', res?.data?.user_data?.partnerObj?.partner_uuid, { expires: 365 });
    localStorage.setItem('user_data', JSON.stringify(res?.data?.user_data));
    localStorage.setItem('partnerObj', JSON.stringify(res?.data?.user_data?.partnerObj));
    yield put(verifyOTPSuccess(res?.data));

    payload?.successCallback(res?.data?.user_data);
  } catch (e) {
    yield put(verifyOTPFail());
    payload?.errorCallback();
  }
}

function* logoutHandler() {
  const url = Helpers.getUrl(APIS.LOGOUT_URL);

  const options = {
    method: 'POST',
    url,
  };

  try {
    yield call(request, options);
    yield put(logOutSuccess());
  } catch (e) {
    yield put(logOutFail());
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(SEND_OTP, sendOtpApiHandler);
  yield takeLatest(VERIFY_OTP, verifyOtpApiHandler);
  yield takeLatest(LOG_OUT, logoutHandler);
}
