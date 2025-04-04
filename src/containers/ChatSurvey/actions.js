/*
 *
 * Chat Survey actions
 *
 */

import {
  GET_QUES,
  GET_QUES_FAIL,
  GET_QUES_SUCCESS,
  POST_SURVEY_ANS,
  POST_SURVEY_ANS_FAIL,
  POST_SURVEY_ANS_SUCCESS,
} from './constants';

export function getQues(payload) {
  return {
    type: GET_QUES,
    payload,
  };
}

export function getQuesSuccess(payload) {
  return {
    type: GET_QUES_SUCCESS,
    payload,
  };
}

export function getQuesFail(payload) {
  return {
    type: GET_QUES_FAIL,
    payload,
  };
}

export function postSurveyAns(payload, successCallback, failedCallback) {
  return {
    type: POST_SURVEY_ANS,
    payload: {
      data: payload,
      successCallback,
      failedCallback,
    },
  };
}

export function postSurveyAnsSuccess(payload) {
  return {
    type: POST_SURVEY_ANS_SUCCESS,
    payload,
  };
}

export function postSurveyAnsFail(payload) {
  return {
    type: POST_SURVEY_ANS_FAIL,
    payload,
  };
}
