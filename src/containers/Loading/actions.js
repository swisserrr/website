/*
 *
 * Loading actions
 *
 */

import { DEFAULT_ACTION, SET_LOADING } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}
