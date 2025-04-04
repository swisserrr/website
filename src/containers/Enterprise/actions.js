/*
 *
 * Enterprise actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_DATA,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAIL,
  SEND_OTP_MAIL,
  SEND_OTP_MAIL_FAIL,
  SEND_OTP_MAIL_SUCCESS,
  VERIFY_OTP_MAIL,
  VERIFY_OTP_MAIL_FAIL,
  VERIFY_OTP_MAIL_SUCCESS,
  HANDLE_USER_LOGIN,
  HANDLE_USER_LOGIN_SUCCESS,
  HANDLE_MAPPING,
  HANDLE_MAPPING_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitData(payload, callback, endPoint) {
  return {
    type: SUBMIT_DATA,
    payload: {
      data: payload,
      callback,
      endPoint,
    },
  };
}

export function submitDataSuccess() {
  return {
    type: SUBMIT_DATA_SUCCESS,
  };
}

export function submitDataFail() {
  return {
    type: SUBMIT_DATA_FAIL,
  };
}

export function sendOtpMail(payload, callback) {
  return {
    type: SEND_OTP_MAIL,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function sendOtpMailSuccess() {
  return {
    type: SEND_OTP_MAIL_SUCCESS,
  };
}

export function sendOtpMailFail() {
  return {
    type: SEND_OTP_MAIL_FAIL,
  };
}

export function verifyOtpMail(payload, callback) {
  return {
    type: VERIFY_OTP_MAIL,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function verifyOtpMailSuccess() {
  return {
    type: VERIFY_OTP_MAIL_SUCCESS,
  };
}

export function verifyOtpMailFail() {
  return {
    type: VERIFY_OTP_MAIL_FAIL,
  };
}

export function handleUserLoginAction(payload, callback) {
  return {
    type: HANDLE_USER_LOGIN,
    payload,
    callback,
  };
}
export function handleUserLoginActionSuccess(payload) {
  return {
    type: HANDLE_USER_LOGIN_SUCCESS,
    payload,
  };
}
export function handleMappingAction(payload) {
  return {
    type: HANDLE_MAPPING,
    payload,
  };
}

export function handleMappingActionSuccess(payload) {
  return {
    type: HANDLE_MAPPING_SUCCESS,
    payload,
  };
}
