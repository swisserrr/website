/*
 *
 * PepsicoSurvey actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_PEPSICO_DATA,
  SUBMIT_PEPSICO_DATA_SUCCESS,
  SUBMIT_PEPSICO_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitPepsicoData(payload, callback) {
  return {
    type: SUBMIT_PEPSICO_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitPepsicoDataSuccess() {
  return {
    type: SUBMIT_PEPSICO_DATA_SUCCESS,
  };
}

export function submitPepsicoDataFail() {
  return {
    type: SUBMIT_PEPSICO_DATA_FAIL,
  };
}
