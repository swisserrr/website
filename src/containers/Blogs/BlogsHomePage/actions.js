/*
 *
 * Blogs actions
 *
 */

import {
  ADD_BLOGS_CATEGORIES_DATA,
  DEFAULT_ACTION,
  GET_BLOGS_CATEGORIES,
  GET_BLOGS_CATEGORIES_FAILURE,
  GET_BLOGS_CATEGORIES_SUCCESS,
  GET_BLOGS_DATA,
  GET_BLOGS_DATA_FAILURE,
  GET_BLOGS_DATA_SUCCESS,
  GET_DETAIL_DATA,
  GET_DETAIL_DATA_FAILURE,
  GET_DETAIL_DATA_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getBlogsData(payload) {
  return {
    type: GET_BLOGS_DATA,
    payload,
  };
}

export function getBlogsDataSuccess(payload) {
  return {
    type: GET_BLOGS_DATA_SUCCESS,
    payload,
  };
}

export function getBlogsDataFail(payload) {
  return {
    type: GET_BLOGS_DATA_FAILURE,
    payload,
  };
}

export function getBlogsCategory(payload) {
  return {
    type: GET_BLOGS_CATEGORIES,
    payload,
  };
}

export function getBlogsCategorySuccess(payload) {
  return {
    type: GET_BLOGS_CATEGORIES_SUCCESS,
    payload,
  };
}

export function getBlogsCategoryFailure(payload) {
  return {
    type: GET_BLOGS_CATEGORIES_FAILURE,
    payload,
  };
}

export function addBlogsCategoryData(payload) {
  return {
    type: ADD_BLOGS_CATEGORIES_DATA,
    payload,
  };
}

export function getBlogsDetail(payload) {
  return {
    type: GET_DETAIL_DATA,
    payload,
  };
}

export function getBlogsDetailSuccess(payload) {
  return {
    type: GET_DETAIL_DATA_SUCCESS,
    payload,
  };
}

export function getBlogsDetailFailure(payload) {
  return {
    type: GET_DETAIL_DATA_FAILURE,
    payload,
  };
}
