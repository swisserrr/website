/*
 *
 * VasScreen actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VAS_DETAIL,
  GET_VAS_DETAIL_FAIL,
  GET_VAS_DETAIL_SUCCESS,
  CREATE_APOLLO_LEAD_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVasDetail(payload) {
  return {
    type: GET_VAS_DETAIL,
    payload,
  };
}

export function getVasDetailFail(payload) {
  return {
    type: GET_VAS_DETAIL_FAIL,
    payload,
  };
}

export function getVasDetailSuccess(payload) {
  return {
    type: GET_VAS_DETAIL_SUCCESS,
    payload,
  };
}

export function createApolloLeadAction(payload) {
  return {
    type: CREATE_APOLLO_LEAD_ACTION,
    payload,
  };
}
