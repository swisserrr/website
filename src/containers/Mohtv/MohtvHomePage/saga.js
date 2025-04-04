import { call, put, takeLatest, select } from 'redux-saga/effects';

import concat from 'lodash/concat';
import get from 'lodash/get';

import { makeSelectMohtvCategoryShows } from '../MohtvHomePage/selectors';

import request from 'utils/request';

import {
  getAllShowsFail,
  getAllShowsSuccess,
  getSearchSuggestionSuccess,
  getSearchSuggestionFail,
  getMohTVCategoriesSuccess,
  getMohTVCategoriesFail,
  getCategoryShowsSuccess,
  getCategoryShowsFail,
  getSearchResultSuccess,
  getSearchResultFail,
} from './actions';
import {
  GET_ALL_SHOWS,
  GET_SEARCH_SUGGESTION,
  GET_MOHTV_CATEGORIES,
  GET_CATEGORY_SHOWS,
  GET_SEARCH_RESULT,
} from './constants';
import { APIS } from '../../../constants';
import Helpers from 'utils/helpers';

// Individual exports for testing

function* getAllShowHandler({ payload }) {
  const url = Helpers.getUrl(APIS.GET_ALL_SHOWS);
  const options = {
    method: 'POST',
    url,
    data: payload,
  };
  try {
    const res = yield call(request, options);

    yield put(
      getAllShowsSuccess({
        total_count: res?.data?.length,
        data: res?.data,
        mohtv_category_name: 'All',
        mohtv_category_uuid: '',
      })
    );
  } catch (e) {
    yield put(getAllShowsFail(e));
  }
}

function* getSearchSuggestionHandler({ payload }) {
  const url = Helpers.getUrl(APIS.GET_SUGGESTION);

  const options = {
    method: 'POST',
    url,
    data: payload,
  };

  try {
    const res = yield call(request, options);
    yield put(getSearchSuggestionSuccess(res?.data));
  } catch (e) {
    yield put(getSearchSuggestionFail(e));
  }
}

function* getSearchResultHandler({ payload }) {
  const url = Helpers.getUrl(APIS.GET_SEARCH_RESULT);

  const options = {
    method: 'POST',
    url,
    data: payload,
  };

  try {
    const res = yield call(request, options);
    yield put(getSearchResultSuccess(res?.data));
  } catch (e) {
    yield put(getSearchResultFail(e));
  }
}

function* getMohtvCategoriesHandler() {
  const url = Helpers.getUrl(APIS.GET_MOHTV_CATEGORIES);
  const options = {
    method: 'GET',
    url,
  };
  try {
    const res = yield call(request, options);
    const manipulatedData = concat(
      [
        {
          mohtv_category_uuid: '',
          mohtv_category_name: 'All',
          mohtv_category_image: '/static/images/more_all.webp',
          mohtv_category_image_mobile: '/static/images/more_all_mob.webp',
          mohtv_category_text: 'Streaming Memories, Connecting Elders Through the Screen ',
          sub_category: [],
        },
      ],
      res?.data
    );
    yield put(getMohTVCategoriesSuccess(manipulatedData));
  } catch (e) {
    yield put(getMohTVCategoriesFail(e));
  }
}

function* getMohtvCategoryShowsHandler({ payload }) {
  const url = Helpers.getUrl(APIS.GET_ALL_SHOWS);
  const options = {
    method: 'POST',
    url,
    data: payload,
  };
  try {
    const res = yield call(request, options);

    const categoryShows = yield select(makeSelectMohtvCategoryShows());
    const updatedsubCategoryShows = categoryShows?.data
      ? concat(categoryShows?.data, get(res, 'data.data'))
      : get(res, 'data.data');

    const updatedPayload = Object.assign(res?.data, { data: updatedsubCategoryShows });

    yield put(getCategoryShowsSuccess({ activeTabUuid: payload?.mohtv_category_uuid, data: updatedPayload }));
  } catch (e) {
    yield put(getCategoryShowsFail(e));
  }
}

export default function* mohtvSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_ALL_SHOWS, getAllShowHandler);
  yield takeLatest(GET_SEARCH_SUGGESTION, getSearchSuggestionHandler);
  yield takeLatest(GET_MOHTV_CATEGORIES, getMohtvCategoriesHandler);
  yield takeLatest(GET_CATEGORY_SHOWS, getMohtvCategoryShowsHandler);
  yield takeLatest(GET_SEARCH_RESULT, getSearchResultHandler);
}
