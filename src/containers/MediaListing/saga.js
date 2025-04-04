import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_MEDIA_DATA } from './constants';
import Helpers from 'utils/helpers';
import request from 'utils/request';
import get from 'lodash/get';
import { fetchMediaDataSuccess } from './actions';

import { APIS } from '../../constants';

function* fetchMediaData({ payload }) {
  let url = Helpers.getUrl(get(payload, 'api') || APIS.MEDIA_LISTING);
  url = url.replace(':page_number', get(payload, 'page_number'));

  const options = {
    method: 'get',
    url,
  };

  try {
    const res = yield call(request, options);

    yield put(fetchMediaDataSuccess(get(res, 'data')));
  } catch (e) {
    // console.log('->', e);
  }
}

export default function* mediaListingSaga() {
  yield takeLatest(FETCH_MEDIA_DATA, fetchMediaData);
}
