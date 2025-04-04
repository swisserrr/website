/*
 *
 * Membership actions
 *
 */

import { DEFAULT_ACTION, GET_PLANS, GET_PLANS_SUCCESS, GET_PLANS_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPlans() {
  return {
    type: GET_PLANS,
  };
}

export function getPlansSuccess(payload) {
  return {
    type: GET_PLANS_SUCCESS,
    payload,
  };
}

export function getPlansFail() {
  return {
    type: GET_PLANS_FAIL,
  };
}
