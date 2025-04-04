import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';
import { CREATE_CONCIERGE, GET_SERVICES } from './constants';
import { getServicesSuccess, getServicesFail, createConciergeSuccess, createConciergeFail } from './actions';

function* getServicesHandler() {
  const url = Helpers.getUrl(APIS.GET_CONCIERGE_SERVICES);

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);

    yield put(getServicesSuccess(res?.data));
  } catch (e) {
    yield put(getServicesFail(e));
  }
}

function* createConcierge({ payload }) {
  const url = Helpers.getUrl(APIS.CREATE_CONCIERGE);
  const options = {
    method: 'POST',
    url,
    data: payload?.data,
  };

  try {
    yield call(request, options);
    yield put(createConciergeSuccess());
    payload?.redirectUserToServiceBack();
  } catch (err) {
    yield put(createConciergeFail(err));
  }
}

// Individual exports for testing
export default function* conciergeServicesSaga() {
  yield takeLatest(GET_SERVICES, getServicesHandler);
  yield takeLatest(CREATE_CONCIERGE, createConcierge);
}
