/*
 *
 * NokConsentWms actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_FORM_DETAILS,
  GET_FORM_DETAILS_FAIL,
  GET_FORM_DETAILS_SUCCESS,
  SUBMIT_CONSENT,
  SUBMIT_CONSENT_FAIL,
  SUBMIT_CONSENT_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitConsent(payload, callback) {
  return {
    type: SUBMIT_CONSENT,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitConsentSuccess() {
  return {
    type: SUBMIT_CONSENT_SUCCESS,
  };
}

export function submitConsentFail() {
  return {
    type: SUBMIT_CONSENT_FAIL,
  };
}

export function getFormDetails(payload) {
  return {
    type: GET_FORM_DETAILS,
    payload,
  };
}

export function getFormDetailsSuccess(payload) {
  return {
    type: GET_FORM_DETAILS_SUCCESS,
    payload,
  };
}

export function getFormDetailsFail() {
  return {
    type: GET_FORM_DETAILS_FAIL,
  };
}
