/*
 *
 * CareHealthInsurance actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_CARE_HEALTH_DATA,
  SUBMIT_CARE_HEALTH_DATA_SUCCESS,
  SUBMIT_CARE_HEALTH_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function submitCareHealthInsuranceData(payload, callback) {
  return {
    type: SUBMIT_CARE_HEALTH_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitCareHealthInsuranceDataSuccess() {
  return {
    type: SUBMIT_CARE_HEALTH_DATA_SUCCESS,
  };
}

export function submitCareHealthInsuranceDataFail() {
  return {
    type: SUBMIT_CARE_HEALTH_DATA_FAIL,
  };
}
