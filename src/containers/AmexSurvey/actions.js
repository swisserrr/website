/*
 *
 * AmexSurvey actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_DATA, SUBMIT_DATA_SUCCESS, SUBMIT_DATA_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitData(payload, callback) {
  return {
    type: SUBMIT_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitDataSuccess() {
  return {
    type: SUBMIT_DATA_SUCCESS,
  };
}

export function submitDataFail() {
  return {
    type: SUBMIT_DATA_FAIL,
  };
}
