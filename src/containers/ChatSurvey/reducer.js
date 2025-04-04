/* eslint-disable no-case-declarations */
/*
 *
 * Chat Survey reducer
 *
 */
import produce from 'immer';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HYDRATE } from 'next-redux-wrapper';

import { GET_QUES_FAIL, GET_QUES_SUCCESS, POST_SURVEY_ANS, POST_SURVEY_ANS_SUCCESS } from './constants';

export const initialState = {
  data: {},
  loading: false,
  err: null,
};

/* eslint-disable default-case, no-param-reassign */
const ChatSurveyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.chatSurvey.data'))) {
          draft.data = get(action, 'payload.chatSurvey.data');
        }
        break;

      case GET_QUES_SUCCESS:
        draft.data = action.payload;
        break;

      case GET_QUES_FAIL:
        draft.err = action.payload;
        break;

      case POST_SURVEY_ANS:
        draft.loading = true;
        break;

      case POST_SURVEY_ANS_SUCCESS:
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default ChatSurveyReducer;
