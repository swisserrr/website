/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SAVE_TIME_STAMP,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_SUCCESS,
  UPDATE_USER_SUCCESS,
  LOG_OUT,
  SEND_OTP_FAIL,
  RESET_SENDOTP_FAIL_STATUS,
} from './constants';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  lastOTPSendTime: null,
  user: null,
  campaign_name: null,
  access_token: null,
  sendotp_fail_status: null,
};
/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      // case HYDRATE:
      //   if (!isEmpty(get(action, 'payload.login.user'))) {
      //     draft.user = get(action, 'payload.login.user');
      //   }
      //   if (!isEmpty(get(action, 'payload.login.access_token'))) {
      //     draft.access_token = get(action, 'payload.login.access_token');
      //   }

      //   break;

      case SAVE_TIME_STAMP:
        draft.lastOTPSendTime = action.payload;
        break;
      case SEND_OTP_FAIL:
        draft.sendotp_fail_status = action.payload;
        break;

      case UPDATE_USER_SUCCESS:
        draft.user = action.payload.user_data;
        break;

      case VERIFY_OTP_SUCCESS:
        draft.user = action.payload.user_data;
        draft.access_token = action.payload.access_token;
        draft.campaign_name = action.payload.campaign_name;
        break;

      case LOG_OUT:
        draft.lastOTPSendTime = null;
        draft.user = null;
        draft.access_token = null;
        draft.campaign_name = null;
        break;

      case SEND_OTP_SUCCESS:
        // draft.lastOTPSendTime = null;
        break;
      case RESET_SENDOTP_FAIL_STATUS:
        draft.sendotp_fail_status = null;
        break;
    }
  });

export default loginReducer;
