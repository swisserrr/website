/*
 *
 * ConciergeCalendar actions
 *
 */

import { DEFAULT_ACTION, GET_ADDRESS_DATA, GET_ADDRESS_DATA_SUCCESS, GET_ADDRESS_DATA_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getAddress() {
  return {
    type: GET_ADDRESS_DATA,
  };
}

export function getAddressSuccess(payload) {
  return {
    type: GET_ADDRESS_DATA_SUCCESS,
    payload,
  };
}

export function getAddressFail() {
  return {
    type: GET_ADDRESS_DATA_FAIL,
  };
}
