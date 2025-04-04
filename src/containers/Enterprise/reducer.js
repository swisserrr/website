/*
 *
 * Preferences reducer
 *
 */
import produce from 'immer';
import {
  HANDLE_USER_LOGIN,
  HANDLE_USER_LOGIN_SUCCESS,
  HANDLE_MAPPING_SUCCESS,
  VERIFY_OTP_MAIL,
  VERIFY_OTP_MAIL_SUCCESS,
  VERIFY_OTP_MAIL_FAIL,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAIL,
} from './constants';

export const initialState = {
  loading: false,
  verifyOtpLoading: false,
  preFilledFormData: [],
  mappingData: [],
};

/* eslint-disable default-case, no-param-reassign */
const enterpriseReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HANDLE_USER_LOGIN:
        draft.loading = true;
        break;
      case HANDLE_USER_LOGIN_SUCCESS:
        draft.loading = false;
        draft.preFilledFormData = action.payload;
        break;
      case HANDLE_MAPPING_SUCCESS:
        draft.mappingData = action.payload;
        break;
      case VERIFY_OTP_MAIL:
        draft.verifyOtpLoading = true;
        break;
      case VERIFY_OTP_MAIL_FAIL:
        draft.verifyOtpLoading = false;
        break;
      case SUBMIT_DATA_SUCCESS:
        draft.loading = false;
        break;
      case SUBMIT_DATA_FAIL:
        draft.loading = false;
        break;
    }
  });

export default enterpriseReducer;
