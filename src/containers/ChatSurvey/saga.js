import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../constants';
import get from 'lodash/get';
import { getQuesFail, getQuesSuccess, postSurveyAnsFail, postSurveyAnsSuccess } from './actions';
import { GET_QUES, POST_SURVEY_ANS } from './constants';
// import { answerResponse, getUserQues } from 'constants/delete';

import { pushEvent } from 'utils/cleverTap';

import { surveyEventHandler, surveyMultiCheckEventHandler } from './logicHandler';

import { EVENT_NAME } from 'constants/constants';

function* getQuesAnswers() {
  const url = Helpers.getUrl(APIS.GET_QUES_SURVEY);
  const options = {
    method: 'GET',
    url,
  };
  const url2 = Helpers.getUrl(APIS.GET_ANS_SURVEY);
  const options2 = {
    method: 'GET',
    url: url2,
  };
  try {
    const resultSaga = yield call(request, options);
    const ansSaga = yield call(request, options2);
    const data = {
      questions_answer_tree: get(resultSaga, 'data.questions_answer_tree'),
      user_responses: get(ansSaga, 'data'),
    };
    yield put(getQuesSuccess(data));
  } catch (err) {
    yield put(getQuesFail('Api failed'));
    // removed console.log
  }
}

function* postSurveyAnswers({ payload }) {
  const url = Helpers.getUrl(APIS.POST_SURVEY_ANS);
  const options = {
    method: 'POST',
    url,
    data: payload?.data,
  };
  try {
    const resultSaga = yield call(request, options);
    yield put(postSurveyAnsSuccess(resultSaga));

    const activeQA = surveyEventHandler(get(resultSaga, 'data'));

    const eventPayload = {};
    eventPayload[`${get(activeQA, 'questions')}`] = surveyMultiCheckEventHandler(get(activeQA, 'answers'));
    pushEvent(EVENT_NAME.SURVEY_PREFERENCE, eventPayload);

    payload?.successCallback();
  } catch (err) {
    payload?.failedCallback();
    yield put(postSurveyAnsFail('Api failed'));
  }
}

export default function* chatSurveySaga() {
  yield takeLatest(GET_QUES, getQuesAnswers);
  yield takeLatest(POST_SURVEY_ANS, postSurveyAnswers);
}
