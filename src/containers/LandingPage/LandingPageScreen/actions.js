/*
 *
 * LandingScreen actions
 *
 */

import { DEFAULT_ACTION, GET_LANDING_DETAIL, GET_LANDING_DETAIL_FAIL, GET_LANDING_DETAIL_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getLandingDetail(payload) {
  return {
    type: GET_LANDING_DETAIL,
    payload,
  };
}

export function getLandingDetailFail(payload) {
  return {
    type: GET_LANDING_DETAIL_FAIL,
    payload,
  };
}

export function getLandingDetailSuccess(payload) {
  return {
    type: GET_LANDING_DETAIL_SUCCESS,
    payload,
  };
}
