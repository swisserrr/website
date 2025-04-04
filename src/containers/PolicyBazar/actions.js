/*
 *
 * PepsicoSurvey actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_POLICY_BAZAAR_DATA,
  SUBMIT_POLICY_BAZAAR_DATA_SUCCESS,
  SUBMIT_POLICY_BAZAAR_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitPepsicoData(payload, callback) {
  return {
    type: SUBMIT_POLICY_BAZAAR_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitPepsicoDataSuccess() {
  return {
    type: SUBMIT_POLICY_BAZAAR_DATA_SUCCESS,
  };
}

export function submitPepsicoDataFail() {
  return {
    type: SUBMIT_POLICY_BAZAAR_DATA_FAIL,
  };
}
