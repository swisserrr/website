import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import Cookie from 'js-cookie';
import get from 'lodash/get';
import { GET_VAS_DETAIL, CREATE_APOLLO_LEAD_ACTION } from './constants';
import { getVasDetailFail, getVasDetailSuccess } from './actions';
import { APIS } from '../../../constants';
import { onUserLoginHandler, userDataForCtEvents } from 'utils/cleverTap';
import { verifyOTPSuccess } from 'containers/Login/actions';

function* getVasDetailData({ payload }) {
  let url = Helpers.getUrl(APIS.VAS_PAGE_API);
  const options = {
    method: 'POST',
    url,
    data: { page_url: payload.slug },
  };
  try {
    const res = yield call(request, options);
    yield put(getVasDetailSuccess(res?.data));
  } catch (e) {
    yield put(getVasDetailFail(e));
  }
}
function* createApolloLead({ payload }) {
  let url = Helpers.getUrl(APIS.APOLLO_LEAD);
  const options = {
    method: 'POST',
    url,
    data: payload,
  };
  try {
    const res = yield call(request, options);
    onUserLoginHandler(userDataForCtEvents(get(res, 'data.user_data')));

    Cookie.set('access_token', res?.data?.access_token, { expires: 365, secure: true });

    yield put(verifyOTPSuccess(res?.data));
  } catch (e) {
    //console.log(e);
  }
}

export default function* VasScreenSaga() {
  yield takeLatest(GET_VAS_DETAIL, getVasDetailData);
  yield takeLatest(CREATE_APOLLO_LEAD_ACTION, createApolloLead);
}
