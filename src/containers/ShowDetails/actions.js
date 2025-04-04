/*
 *
 * ShowDetails actions
 *
 */

import { DEFAULT_ACTION, EVENT_DETAILS, EVENT_DETAILS_SUCCESS, EVENT_DETAILS_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function eventDetails(payload) {
  return {
    type: EVENT_DETAILS,
    payload,
  };
}

export function eventDetailsSuccess(payload) {
  return {
    type: EVENT_DETAILS_SUCCESS,
    payload,
  };
}

export function eventDetailsFail(payload) {
  return {
    type: EVENT_DETAILS_FAIL,
    payload,
  };
}
