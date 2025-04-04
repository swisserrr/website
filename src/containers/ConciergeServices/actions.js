/*
 *
 * ConciergeServices actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SERVICES,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAIL,
  CREATE_CONCIERGE,
  CREATE_CONCIERGE_SUCCESS,
  CREATE_CONCIERGE_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getServices() {
  return {
    type: GET_SERVICES,
  };
}

export function getServicesSuccess(payload) {
  return {
    type: GET_SERVICES_SUCCESS,
    payload,
  };
}

export function getServicesFail() {
  return {
    type: GET_SERVICES_FAIL,
  };
}

export function createConcierge(payload) {
  return {
    type: CREATE_CONCIERGE,
    payload,
  };
}

export function createConciergeSuccess() {
  return {
    type: CREATE_CONCIERGE_SUCCESS,
  };
}

export function createConciergeFail(payload) {
  return {
    type: CREATE_CONCIERGE_FAIL,
    payload,
  };
}
