import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';
import { CHECKOUT, CHECKOUT_PAYMENT, MEMBERSHIP_CHECKOUT } from './constants';
import {
  membershipCheckoutSuccess,
  membershipCheckoutFail,
  checkoutSuccess,
  checkoutFail,
  checkoutPaymentSuccess,
  checkoutPaymentFail,
} from './actions';
import { get } from 'lodash';
import Router from 'next/router';
import { parse } from 'cookie';
import { use } from 'react';

function* membershipCheckout({ payload }) {
  const url = Helpers.getUrl(APIS.MEMBERSHIP_CHECKOUT);

  const options = {
    method: 'POST',
    data: payload,
    url,
  };

  try {
    const resultSaga = yield call(request, options);
    //console.log('resultSaga', resultSaga);
    if (get(resultSaga, 'code') === 200) {
      yield put(membershipCheckoutSuccess(payload));
      localStorage.setItem('checkoutData', JSON.stringify(payload));
      Router.push(`checkout`);
    }
  } catch (err) {
    //console.log('err', err);
    yield put(membershipCheckoutFail());
    // removed console.log
  }
}

function* Checkout({ payload, req, useCoins }) {
  const cookies = req.headers.cookie;
  const parsedCookies = cookies ? parse(cookies) : {};
  let url = Helpers.getUrl(APIS.CHECKOUT);
  url = url
    .replace(':node-id', parsedCookies.pos_node_id || '')
    .replace(':customer-id', parsedCookies.customer_id || '');
  url = url + '&return_coins=' + useCoins;
  const options = {
    method: 'GET',
    url,
  };
  try {
    const res = yield call(request, options);
    yield put(checkoutSuccess(res?.data));
    payload?.callback?.();
  } catch (err) {
    yield put(checkoutFail());
  }
}

function* Payment({ payload }) {
  const url = Helpers.getUrl(APIS.PAYMENT);

  const options = {
    method: 'POST',
    data: payload.data,
    url,
  };

  try {
    const res = yield call(request, options);
    localStorage.setItem('orderId', JSON.stringify(res?.data?.order?.id ?? null));
    yield put(checkoutPaymentSuccess(res?.data));
    payload?.callback?.(res?.data?.order?.id ?? null);
  } catch (err) {
    payload?.callback?.();
    yield put(checkoutPaymentFail());
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeLatest(MEMBERSHIP_CHECKOUT, membershipCheckout);
  yield takeLatest(CHECKOUT, Checkout);
  yield takeLatest(CHECKOUT_PAYMENT, Payment);
}
