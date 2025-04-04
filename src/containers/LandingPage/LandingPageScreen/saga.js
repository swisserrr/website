import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_LANDING_DETAIL } from './constants';
import { getLandingDetailFail, getLandingDetailSuccess } from './actions';
import { APIS } from '../../../constants';

function* getLandingDetailData({ payload }) {
  let url = Helpers.getUrl(APIS.LANDING_PAGE_API);
  const options = {
    method: 'POST',
    url,
    data: { page_url: payload.slug },
  };
  try {
    const res = yield call(request, options);
    yield put(getLandingDetailSuccess(res?.data));
  } catch (e) {
    yield put(getLandingDetailFail(e));
  }
}

export default function* landingScreenSaga() {
  yield takeLatest(GET_LANDING_DETAIL, getLandingDetailData);
}
