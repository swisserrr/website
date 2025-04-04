/*
 *
 * CyientSurvey actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_CYIENT_DATA, SUBMIT_CYIENT_DATA_SUCCESS, SUBMIT_CYIENT_DATA_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitCyientData(payload, callback) {
  return {
    type: SUBMIT_CYIENT_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitCyientDataSuccess() {
  return {
    type: SUBMIT_CYIENT_DATA_SUCCESS,
  };
}

export function submitCyientDataFail() {
  return {
    type: SUBMIT_CYIENT_DATA_FAIL,
  };
}
