import { call, put, takeLatest, select } from 'redux-saga/effects';

import concat from 'lodash/concat';
import get from 'lodash/get';

import request from 'utils/request';

import { makeSelectSubCategoryShows } from '../MohtvHomePage/selectors';

import { getSubCategoryShowsFail, getSubCategoryShowsSuccess } from '../MohtvHomePage/actions';
import { GET_SUB_CATEGORY_SHOWS } from '../MohtvHomePage/constants';
import { APIS } from '../../../constants';
import Helpers from 'utils/helpers';

function* getSubCategoryShowsHandler({ payload }) {
  const url = Helpers.getUrl(APIS.GET_ALL_SHOWS);
  const options = {
    method: 'POST',
    url,
    data: payload?.apiPayload,
  };
  try {
    const res = yield call(request, options);
    const subCategoryShows = yield select(makeSelectSubCategoryShows());
    const updatedsubCategoryShows = subCategoryShows?.mohtv_sub_category_shows
      ? concat(subCategoryShows?.mohtv_sub_category_shows, get(res, 'data.mohtv_sub_category_shows'))
      : get(res, 'data.mohtv_sub_category_shows');
    const updatedPayload = Object.assign({ mohtv_category_name: 'All', mohtv_category_uuid: '' }, res?.data, {
      mohtv_sub_category_shows: updatedsubCategoryShows,
    });
    yield put(
      getSubCategoryShowsSuccess({
        activeTabUuid: payload?.categoryId ? payload?.categoryId : get(payload, 'apiPayload.mohtv_category_uuid'),
        data: updatedPayload,
      })
    );
  } catch (e) {
    yield put(getSubCategoryShowsFail(e));
  }
}

export default function* mohtvSubCategoryPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_SUB_CATEGORY_SHOWS, getSubCategoryShowsHandler);
}
