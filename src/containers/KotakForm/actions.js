/*
 *
 * KotakForm actions
 *
 */

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

export function membershipCheckoutAction(payload) {
  return {
    type: MEMBERSHIP_CHECKOUT,
    payload,
  };
}
export function membershipCheckoutSuccess(payload) {
  return {
    type: MEMBERSHIP_CHECKOUT_SUCCESS,
    payload,
  };
}
export function membershipCheckoutFail() {
  return {
    type: MEMBERSHIP_CHECKOUT_FAIL,
  };
}

export function checkoutAction(payload, req, useCoins) {
  return {
    type: CHECKOUT,
    payload,
    req,
    useCoins,
  };
}
export function checkoutSuccess(payload) {
  return {
    type: CHECKOUT_SUCCESS,
    payload,
  };
}
export function checkoutFail() {
  return {
    type: CHECKOUT_FAIL,
  };
}

export function checkoutPaymentAction(payload) {
  return {
    type: CHECKOUT_PAYMENT,
    payload,
  };
}
export function checkoutPaymentSuccess(payload) {
  return {
    type: CHECKOUT_PAYMENT_SUCCESS,
    payload,
  };
}
export function checkoutPaymentFail() {
  return {
    type: CHECKOUT_PAYMENT_FAIL,
  };
}
