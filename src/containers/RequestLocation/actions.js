/*
 *
 * RequestLocation actions
 *
 */

import { SEND_LOCATION_ACTION } from './constants';

export function sendLocationAction(payload, callback) {
  return {
    type: SEND_LOCATION_ACTION,
    payload,
    callback,
  };
}
