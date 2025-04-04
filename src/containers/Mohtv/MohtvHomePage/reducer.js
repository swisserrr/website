/*
 *
 * Mohtv reducer
 *
 */
import produce from 'immer';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import {
  DEFAULT_ACTION,
  GET_ALL_SHOWS,
  GET_ALL_SHOWS_FAIL,
  GET_ALL_SHOWS_SUCCESS,
  GET_SEARCH_SUGGESTION,
  GET_SEARCH_SUGGESTION_SUCCESS,
  GET_SEARCH_SUGGESTION_FAIL,
  CLEAR_SUGGESTION,
  GET_MOHTV_CATEGORIES,
  GET_MOHTV_CATEGORIES_SUCCESS,
  GET_MOHTV_CATEGORIES_FAIL,
  GET_CATEGORY_SHOWS,
  GET_CATEGORY_SHOWS_FAIL,
  GET_CATEGORY_SHOWS_SUCCESS,
  GET_SUB_CATEGORY_SHOWS,
  GET_SUB_CATEGORY_SHOWS_FAIL,
  GET_SUB_CATEGORY_SHOWS_SUCCESS,
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_FAIL,
} from './constants';

import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  searchSuggestions: {},
  mohtvCategories: [],
  mohtvCategoryShows: {},
  mohtvSubCategoryShows: {},
  mohtvSearchedShows: {},
  activeTabUuid: '',
  loading: false,
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const mohtvReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.mohTv.mohtvCategories'))) {
          draft.mohtvCategories = get(action, 'payload.mohTv.mohtvCategories');
        }
        if (!isEmpty(get(action, 'payload.mohTv.mohtvCategoryShows'))) {
          draft.mohtvCategoryShows = get(action, 'payload.mohTv.mohtvCategoryShows');
        }
        if (!isEmpty(get(action, 'payload.mohTv.mohtvSubCategoryShows'))) {
          draft.mohtvSubCategoryShows = get(action, 'payload.mohTv.mohtvSubCategoryShows');
        }
        if (!isNil(get(action, 'payload.mohTv.activeTabUuid'))) {
          draft.activeTabUuid = get(action, 'payload.mohTv.activeTabUuid');
        }
        if (!isNil(get(action, 'payload.mohTv.mohtvSearchedShows'))) {
          draft.mohtvSearchedShows = get(action, 'payload.mohTv.mohtvSearchedShows');
        }
        break;
      case GET_ALL_SHOWS:
        draft.loading = true;
        break;
      case GET_ALL_SHOWS_SUCCESS:
        draft.loading = false;
        draft.mohtvCategoryShows = action?.payload;
        draft.activeTabUuid = '';
        break;
      case GET_ALL_SHOWS_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
      case GET_MOHTV_CATEGORIES:
        draft.loading = true;
        break;
      case GET_MOHTV_CATEGORIES_SUCCESS:
        draft.loading = false;
        draft.mohtvCategories = action.payload;
        break;
      case GET_MOHTV_CATEGORIES_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
      case GET_CATEGORY_SHOWS:
        draft.loading = true;
        break;
      case GET_CATEGORY_SHOWS_SUCCESS:
        draft.loading = false;
        draft.mohtvCategoryShows = action?.payload?.data;
        draft.activeTabUuid = action?.payload?.activeTabUuid;
        break;
      case GET_CATEGORY_SHOWS_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;

      case GET_SUB_CATEGORY_SHOWS:
        draft.loading = true;
        break;
      case GET_SUB_CATEGORY_SHOWS_SUCCESS:
        draft.loading = false;
        draft.mohtvSubCategoryShows = action?.payload?.data;
        draft.activeTabUuid = action?.payload?.activeTabUuid;
        break;
      case GET_SUB_CATEGORY_SHOWS_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;

      case CLEAR_SUGGESTION:
        draft.searchSuggestions = {};
        draft.mohtvSearchedShows = {};
        break;
      case GET_SEARCH_SUGGESTION:
        draft.loading = true;
        break;
      case GET_SEARCH_SUGGESTION_SUCCESS:
        draft.loading = false;
        draft.searchSuggestions = action?.payload;
        break;
      case GET_SEARCH_SUGGESTION_FAIL:
        draft.loading = false;
        draft.error = action?.error;
        break;
      case GET_SEARCH_RESULT:
        draft.loading = true;
        break;
      case GET_SEARCH_RESULT_SUCCESS:
        draft.loading = false;
        draft.mohtvSearchedShows = action?.payload;
        break;
      case GET_SEARCH_RESULT_FAIL:
        draft.loading = false;
        draft.error = action?.error;
        break;
    }
  });

export default mohtvReducer;
