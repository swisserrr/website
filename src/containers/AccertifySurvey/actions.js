/*
 *
 * AccertifySurvey actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_ACCERTIFY_DATA,
  SUBMIT_ACCERTIFY_DATA_SUCCESS,
  SUBMIT_ACCERTIFY_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitAccertifyData(payload, callback) {
  return {
    type: SUBMIT_ACCERTIFY_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitAccertifyDataSuccess() {
  return {
    type: SUBMIT_ACCERTIFY_DATA_SUCCESS,
  };
}

export function submitAccertifyDataFail() {
  return {
    type: SUBMIT_ACCERTIFY_DATA_FAIL,
  };
}
