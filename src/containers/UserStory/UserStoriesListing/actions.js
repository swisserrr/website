/*
 *
 * UserStoriesListing actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_USER_STORIES,
  GET_USER_STORIES_SUCCESS,
  GET_USER_STORIES_FAIL,
  GET_USER_STORY_DETAIL_SUCCESS,
  GET_USER_STORY_DETAIL_FAIL,
  GET_USER_STORY_DETAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUserStoryAction(payload) {
  return {
    type: GET_USER_STORIES,
    payload,
  };
}

export function getUserStorySuccess(payload) {
  return {
    type: GET_USER_STORIES_SUCCESS,
    payload,
  };
}

export function getUserStoryFail(payload) {
  return {
    type: GET_USER_STORIES_FAIL,
    payload,
  };
}

export function getUserStoryDetail(payload) {
  return {
    type: GET_USER_STORY_DETAIL,
    payload,
  };
}

export function getUserStoryDetailFail(payload) {
  return {
    type: GET_USER_STORY_DETAIL_FAIL,
    payload,
  };
}

export function getUserStoryDetailSuccess(payload) {
  return {
    type: GET_USER_STORY_DETAIL_SUCCESS,
    payload,
  };
}
