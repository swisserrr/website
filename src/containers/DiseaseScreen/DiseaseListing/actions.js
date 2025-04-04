/*
 *
 * DiseaseListing actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_DISEASE_DETAIL,
  GET_DISEASE_DETAIL_FAIL,
  GET_DISEASE_DETAIL_SUCCESS,
  GET_DISEASE_LISTING,
  GET_DISEASE_LISTING_FAIL,
  GET_DISEASE_LISTING_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDiseaseAction(payload) {
  return {
    type: GET_DISEASE_LISTING,
    payload,
  };
}

export function getDiseaseSuccess(payload) {
  return {
    type: GET_DISEASE_LISTING_SUCCESS,
    payload,
  };
}

export function getDiseaseFail(payload) {
  return {
    type: GET_DISEASE_LISTING_FAIL,
    payload,
  };
}

export function getDiseaseDetail(payload) {
  return {
    type: GET_DISEASE_DETAIL,
    payload,
  };
}

export function getDiseaseDetailFail(payload) {
  return {
    type: GET_DISEASE_DETAIL_FAIL,
    payload,
  };
}

export function getDiseaseDetailSuccess(payload) {
  return {
    type: GET_DISEASE_DETAIL_SUCCESS,
    payload,
  };
}
