/*
 *
 * Test actions
 *
 */

import { FETCHING_HOME_JUNIPER_DATA, FETCHING_HOME_JUNIPER_DATA_SUCCESS } from './constants';

export function fetchingHomeJuniperData(payload) {
  return {
    type: FETCHING_HOME_JUNIPER_DATA,
    payload,
  };
}

export function fetchingHomeJuniperDataSuccess(payload) {
  return {
    type: FETCHING_HOME_JUNIPER_DATA_SUCCESS,
    payload,
  };
}
