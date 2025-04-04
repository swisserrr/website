import { call, put, takeLatest } from 'redux-saga/effects';
// import Cookie from 'js-cookie';
import get from 'lodash/get';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';
import { SAVE_CONTACT, FETCHING_HOME_SCREEN_DATA } from './constants';
import { saveContactFail, saveContactSuccess, fetchingHomeScreenDataSuccess } from './actions';

function* saveContact({ payload, resetForm }) {
  const url = Helpers.getUrl(APIS.ADD_WEBSITE_LEAD);

  const options = {
    method: 'POST',
    url,
    data: payload.data,
  };

  try {
    yield call(request, options);
    if (resetForm) {
      resetForm();
    }
    yield put(saveContactSuccess());
    payload?.setOpenModal(true);
  } catch (err) {
    yield put(saveContactFail(err));
  }
}

function* fetchHomeScreenData() {
  const url = Helpers.getUrl(APIS.HOME_PAGE);
  const options = {
    method: 'GET',
    url,
  };

  try {
    const resultSaga = yield call(request, options);
    yield put(fetchingHomeScreenDataSuccess(get(resultSaga, 'data')));
  } catch (err) {
    // removed console.log
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeLatest(SAVE_CONTACT, saveContact);
  yield takeLatest(FETCHING_HOME_SCREEN_DATA, fetchHomeScreenData);
}
