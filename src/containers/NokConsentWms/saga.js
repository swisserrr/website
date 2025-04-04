import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_FORM_DETAILS, SUBMIT_CONSENT } from './constants';
import { submitConsentSuccess, submitConsentFail, getFormDetailsSuccess, getFormDetailsFail } from './actions';
import { APIS } from '../../constants';

function* submitConsentData({ payload }) {
  const url = Helpers.getUrl(APIS.CONSENT_FORM_SUBMIT);
  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };
  try {
    yield call(request, options);
    yield put(submitConsentSuccess());
    payload?.callback();
  } catch (err) {
    yield put(submitConsentFail(err));
  }
}

function* getFormDetails({ payload }) {
  let url = Helpers.getUrl(APIS.CONSENT_FORM);
  url = url + payload;
  const options = {
    method: 'GET',
    url,
  };
  try {
    const response = yield call(request, options);
    yield put(getFormDetailsSuccess(response.data));
  } catch (err) {
    yield put(getFormDetailsFail(err));
  }
}

export default function* nokConsentWmsSaga() {
  yield takeLatest(SUBMIT_CONSENT, submitConsentData);
  yield takeLatest(GET_FORM_DETAILS, getFormDetails);
}
