/*
 *
 * Test actions
 *
 */

import {
  SAVE_CONTACT,
  SAVE_CONTACT_FAIL,
  SAVE_CONTACT_SUCCESS,
  FETCHING_HOME_SCREEN_DATA,
  FETCHING_HOME_SCREEN_DATA_SUCCESS,
} from './constants';

export function saveContact(payload, resetForm) {
  return {
    type: SAVE_CONTACT,
    payload,
    resetForm,
  };
}

export function saveContactSuccess() {
  return {
    type: SAVE_CONTACT_SUCCESS,
  };
}

export function saveContactFail(payload) {
  return {
    type: SAVE_CONTACT_FAIL,
    payload,
  };
}

export function fetchingHomeScreenData(payload) {
  return {
    type: FETCHING_HOME_SCREEN_DATA,
    payload,
  };
}

export function fetchingHomeScreenDataSuccess(payload) {
  return {
    type: FETCHING_HOME_SCREEN_DATA_SUCCESS,
    payload,
  };
}
