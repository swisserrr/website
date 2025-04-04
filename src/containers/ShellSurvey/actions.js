/*
 *
 * ShellSurvey actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_SHELL_DATA, SUBMIT_SHELL_DATA_SUCCESS, SUBMIT_SHELL_DATA_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitShellData(payload, callback) {
  return {
    type: SUBMIT_SHELL_DATA,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function submitShellDataSuccess() {
  return {
    type: SUBMIT_SHELL_DATA_SUCCESS,
  };
}

export function submitShellDataFail() {
  return {
    type: SUBMIT_SHELL_DATA_FAIL,
  };
}
