/*
 *
 * KotakForm reducer
 *
 */
import produce from 'immer';
import {
  MEMBERSHIP_CHECKOUT,
  MEMBERSHIP_CHECKOUT_SUCCESS,
  MEMBERSHIP_CHECKOUT_FAIL,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
  CHECKOUT_PAYMENT,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_PAYMENT_FAIL,
} from './constants';
import { HYDRATE } from 'next-redux-wrapper';
import { get, isEmpty } from 'lodash';
export const initialState = {
  checkoutLoading: false,
  submittedData: null,
  checkoutData: {},
};

/* eslint-disable default-case, no-param-reassign */
const kotakFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.kotakForm.checkoutData'))) {
          draft.checkoutData = get(action, 'payload.kotakForm.checkoutData');
        }
        break;
      case MEMBERSHIP_CHECKOUT:
        draft.checkoutLoading = true;
        break;
      case MEMBERSHIP_CHECKOUT_SUCCESS:
        draft.checkoutLoading = false;
        draft.submittedData = action.payload;

        break;
      case MEMBERSHIP_CHECKOUT_FAIL:
        draft.checkoutLoading = false;
        break;
      case CHECKOUT:
        draft.checkoutLoading = true;
        break;
      case CHECKOUT_SUCCESS:
        draft.checkoutData = action.payload;
        draft.checkoutLoading = false;
        break;
      case CHECKOUT_FAIL:
        draft.checkoutLoading = false;
        break;
      case CHECKOUT_PAYMENT:
        draft.checkoutLoading = true;
        break;
      case CHECKOUT_PAYMENT_SUCCESS:
        draft.checkoutLoading = false;
        break;
      case CHECKOUT_PAYMENT_FAIL:
        draft.checkoutLoading = false;
        break;
        DEFAULT: break;
    }
  });

export default kotakFormReducer;
