/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_OTP,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  SAVE_TIME_STAMP,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  LOG_OUT,
  LOG_OUT_FAIL,
  LOG_OUT_SUCCESS,
  UPLOAD_PROFILE_PICTURE_FAIL,
  UPLOAD_PROFILE_PICTURE,
  UPLOAD_PROFILE_PICTURE_SUCCESS,
  RESET_SENDOTP_FAIL_STATUS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendOTP(payload, callback) {
  return {
    type: SEND_OTP,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function sendOTPSuccess(payload) {
  return {
    type: SEND_OTP_SUCCESS,
    payload,
  };
}

export function sendOTPFail(payload) {
  return {
    type: SEND_OTP_FAIL,
    payload,
  };
}

export function saveTimeStamp(payload) {
  return {
    type: SAVE_TIME_STAMP,
    payload,
  };
}

export function verifyOTP(payload, successCallback, errorCallback) {
  return {
    type: VERIFY_OTP,
    payload: {
      data: payload,
      successCallback,
      errorCallback,
    },
  };
}

export function verifyOTPSuccess(payload) {
  return {
    type: VERIFY_OTP_SUCCESS,
    payload,
  };
}

export function verifyOTPFail() {
  return {
    type: VERIFY_OTP_FAIL,
  };
}

export function updateUser(payload, callback) {
  return {
    type: UPDATE_USER,
    payload: {
      data: payload,
      callback,
    },
  };
}

export function updateUserSuccess(payload) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
}

export function updateUserFail() {
  return {
    type: UPDATE_USER_FAIL,
  };
}

export function uploadProfilePictureFail(error) {
  return {
    type: UPLOAD_PROFILE_PICTURE_FAIL,
    error,
  };
}
export function uploadProfilePicture(payload) {
  return {
    type: UPLOAD_PROFILE_PICTURE,
    payload,
  };
}
export function uploadProfilePictureSuccess(payload) {
  return {
    type: UPLOAD_PROFILE_PICTURE_SUCCESS,
    payload,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function logOutFail() {
  return {
    type: LOG_OUT_FAIL,
  };
}

export function logOutSuccess() {
  return {
    type: LOG_OUT_SUCCESS,
  };
}
export function resetSendOtpFailStatus() {
  return {
    type: RESET_SENDOTP_FAIL_STATUS,
  };
}
