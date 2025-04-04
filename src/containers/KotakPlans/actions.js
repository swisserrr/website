// Desc: Actions for KotakPlans
import {
  DEFAULT_ACTION,
  GET_PLANS,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_COINS,
  GET_COINS_FAIL,
  GET_COINS_SUCCESS,
  GET_ACTIVE,
  GET_ACTIVE_SUCCESS,
  GET_ACTIVE_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getKotakPlans(id) {
  //console.log('getKotakPlans');
  return {
    type: GET_PLANS,
    payload: id,
  };
}

export function getKotakPlansSuccess(payload) {
  return {
    type: GET_PLANS_SUCCESS,
    payload,
  };
}

export function getKotakPlansFail() {
  return {
    type: GET_PLANS_FAIL,
  };
}
export function getKotakCoins() {
  //console.log('getKotakCoins');
  return {
    type: GET_COINS,
  };
}

export function getKotakCoinsSuccess(payload) {
  return {
    type: GET_COINS_SUCCESS,
    payload,
  };
}

export function getKotakCoinsFail() {
  return {
    type: GET_COINS_FAIL,
  };
}
export function getActivePlan() {
  //console.log('getActivePlans');
  return {
    type: GET_ACTIVE,
  };
}

export function getActivePlanSuccess(payload) {
  //console.log('plansuccess', payload);
  return {
    type: GET_ACTIVE_SUCCESS,
    payload,
  };
}

export function getActivePlanFail() {
  return {
    type: GET_ACTIVE_FAIL,
  };
}
