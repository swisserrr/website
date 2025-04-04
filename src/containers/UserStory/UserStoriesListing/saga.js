import { call, put, takeLatest, select } from 'redux-saga/effects';
import get from 'lodash/get';
import concat from 'lodash/concat';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_USER_STORIES } from './constants';
import { getUserStoryFail, getUserStorySuccess } from './actions';
import { APIS } from '../../../constants';

import { makeSelectUserStoriesList } from './selectors';

function* getUserStoryList({ payload }) {
  const url = Helpers.getUrl(APIS.USER_STORIES);
  const options = {
    method: 'POST',
    url,
    data: payload,
  };
  try {
    const res = yield call(request, options);
    const userStoriesList = yield select(makeSelectUserStoriesList());
    const updatedUserStoriesList = get(userStoriesList, 'data')
      ? concat(userStoriesList?.data, get(res, 'data.data'))
      : get(res, 'data.data');

    const updatedPayload = Object.assign(res?.data, { data: updatedUserStoriesList });
    yield put(getUserStorySuccess(updatedPayload));
  } catch (e) {
    yield put(getUserStoryFail(e));
  }
}

// Individual exports for testing
export default function* userStoriesListingSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_USER_STORIES, getUserStoryList);
}
