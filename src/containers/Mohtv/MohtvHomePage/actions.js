/*
 *
 * Mohtv actions
 *
 */

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
  GET_MOHTV_CATEGORIES_FAIL,
  GET_MOHTV_CATEGORIES_SUCCESS,
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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getAllShows(payload) {
  return {
    type: GET_ALL_SHOWS,
    payload,
  };
}
export function getAllShowsFail(error) {
  return {
    type: GET_ALL_SHOWS_FAIL,
    error,
  };
}
export function getAllShowsSuccess(payload) {
  return {
    type: GET_ALL_SHOWS_SUCCESS,
    payload,
  };
}

export function getMohTVCategories() {
  return {
    type: GET_MOHTV_CATEGORIES,
  };
}
export function getMohTVCategoriesFail(error) {
  return {
    type: GET_MOHTV_CATEGORIES_FAIL,
    error,
  };
}
export function getMohTVCategoriesSuccess(payload) {
  return {
    type: GET_MOHTV_CATEGORIES_SUCCESS,
    payload,
  };
}

export function getCategoryShows(payload) {
  return {
    type: GET_CATEGORY_SHOWS,
    payload,
  };
}
export function getCategoryShowsFail(error) {
  return {
    type: GET_CATEGORY_SHOWS_FAIL,
    error,
  };
}
export function getCategoryShowsSuccess(payload) {
  return {
    type: GET_CATEGORY_SHOWS_SUCCESS,
    payload,
  };
}
export function getSubCategoryShows(payload) {
  return {
    type: GET_SUB_CATEGORY_SHOWS,
    payload,
  };
}
export function getSubCategoryShowsFail(error) {
  return {
    type: GET_SUB_CATEGORY_SHOWS_FAIL,
    error,
  };
}
export function getSubCategoryShowsSuccess(payload) {
  return {
    type: GET_SUB_CATEGORY_SHOWS_SUCCESS,
    payload,
  };
}

export function getSearchSuggestion(payload) {
  return {
    type: GET_SEARCH_SUGGESTION,
    payload,
  };
}
export function getSearchSuggestionSuccess(payload) {
  return {
    type: GET_SEARCH_SUGGESTION_SUCCESS,
    payload,
  };
}
export function getSearchSuggestionFail(error) {
  return {
    type: GET_SEARCH_SUGGESTION_FAIL,
    error,
  };
}

export function getSearchResult(payload) {
  return {
    type: GET_SEARCH_RESULT,
    payload,
  };
}
export function getSearchResultSuccess(payload) {
  return {
    type: GET_SEARCH_RESULT_SUCCESS,
    payload,
  };
}
export function getSearchResultFail(error) {
  return {
    type: GET_SEARCH_RESULT_FAIL,
    error,
  };
}

export function clearSuggestion() {
  return {
    type: CLEAR_SUGGESTION,
  };
}
