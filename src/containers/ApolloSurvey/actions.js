/*
 *
 * ApolloSurvey actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_APOLLO_DATA,
  SUBMIT_APOLLO_DATA_SUCCESS,
  SUBMIT_APOLLO_DATA_FAIL,
  NOK_DATA,
  NOK_DATA_SUCCESS,
  NOK_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitApolloData(payload, callback) {
  return {
    type: SUBMIT_APOLLO_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitApolloDataSuccess() {
  return {
    type: SUBMIT_APOLLO_DATA_SUCCESS,
  };
}

export function submitApolloDataFail() {
  return {
    type: SUBMIT_APOLLO_DATA_FAIL,
  };
}

export function nokData(payload) {
  return {
    type: NOK_DATA,
    payload,
  };
}
export function nokDataSuccess(payload) {
  return {
    type: NOK_DATA_SUCCESS,
    payload,
  };
}
export function nokDataFail() {
  return {
    type: NOK_DATA_FAIL,
  };
}
