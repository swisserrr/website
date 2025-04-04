import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_USER_STORY_DETAIL } from '../UserStoriesListing/constants';
import { getUserStoryDetailFail, getUserStoryDetailSuccess } from '../UserStoriesListing/actions';
import { APIS } from '../../../constants';

function* getUserStoryDetailData({ payload }) {
  let url = Helpers.getUrl(APIS.USER_STORIES_DETAIL);
  url = url.replace(':id', payload?.uuid);

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);

    yield put(getUserStoryDetailSuccess(res?.data));
  } catch (e) {
    yield put(getUserStoryDetailFail(e));
  }
}

// Individual exports for testing
export default function* userStoryDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_USER_STORY_DETAIL, getUserStoryDetailData);
}
