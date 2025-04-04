/*
 *
 * UserStoriesListing reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_USER_STORIES,
  GET_USER_STORIES_SUCCESS,
  GET_USER_STORIES_FAIL,
  GET_USER_STORY_DETAIL,
  GET_USER_STORY_DETAIL_SUCCESS,
  GET_USER_STORY_DETAIL_FAIL,
} from './constants';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  userStoriesList: {},
  userStoryDetail: {},
  loading: false,
  pageNo: 0,
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const userStoriesListingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.userStoriesListing.userStoriesList'))) {
          draft.userStoriesList = get(action, 'payload.userStoriesListing.userStoriesList');
        }
        if (!isEmpty(get(action, 'payload.userStoriesListing.userStoryDetail'))) {
          draft.userStoryDetail = get(action, 'payload.userStoriesListing.userStoryDetail');
        }
        if (!isEqual(get(action, 'payload.userStoriesListing.pageNo'), 0)) {
          draft.pageNo = get(action, 'payload.userStoriesListing.pageNo');
        }
        break;
      case GET_USER_STORIES:
        draft.pageNo = action.payload.page_number;
        draft.loading = true;
        break;
      case GET_USER_STORIES_SUCCESS:
        draft.userStoriesList = action.payload;
        draft.loading = false;
        break;
      case GET_USER_STORIES_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
      case GET_USER_STORY_DETAIL:
        draft.loading = true;
        break;

      case GET_USER_STORY_DETAIL_SUCCESS:
        draft.userStoryDetail = action.payload;
        draft.loading = false;
        break;

      case GET_USER_STORY_DETAIL_FAIL:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default userStoriesListingReducer;
