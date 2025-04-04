/*
 *
 * AddAddress actions
 *
 */

import { DEFAULT_ACTION, ADD_ADDRESS, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_FAIL, EDIT_ADDRESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addAddress(payload) {
  return {
    type: ADD_ADDRESS,
    payload,
  };
}

export function addAddressSuccess() {
  return {
    type: ADD_ADDRESS_SUCCESS,
  };
}

export function addAddressFail() {
  return {
    type: ADD_ADDRESS_FAIL,
  };
}

export function editAddress(payload) {
  return {
    type: EDIT_ADDRESS,
    payload,
  };
}
