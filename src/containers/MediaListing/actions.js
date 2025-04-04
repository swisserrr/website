/*
 *
 * MediaListing actions
 *
 */

import { FETCH_MEDIA_DATA, FETCH_MEDIA_DATA_SUCCESS } from './constants';

export function fetchMediaData(payload) {
  return {
    type: FETCH_MEDIA_DATA,
    payload,
  };
}
export function fetchMediaDataSuccess(payload) {
  return {
    type: FETCH_MEDIA_DATA_SUCCESS,
    payload,
  };
}
