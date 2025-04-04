/*
 *
 * ApolloSurvey reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUBMIT_APOLLO_DATA,
  SUBMIT_APOLLO_DATA_SUCCESS,
  SUBMIT_APOLLO_DATA_FAIL,
  NOK_DATA,
  NOK_DATA_FAIL,
  NOK_DATA_SUCCESS,
} from './constants';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  data: [],
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const apolloSurveyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        if (!isEmpty(get(action, 'payload.apolloSurvey.data'))) {
          draft.data = get(action, 'payload.apolloSurvey.data');
        }
        break;

      case SUBMIT_APOLLO_DATA:
        draft.isLoading = true;
        break;

      case SUBMIT_APOLLO_DATA_SUCCESS:
      case SUBMIT_APOLLO_DATA_FAIL:
        draft.isLoading = false;
        break;
      case NOK_DATA:
        draft.isLoading = true;
        break;
      case NOK_DATA_SUCCESS:
        draft.data = action?.payload;
        draft.isLoading = false;
        break;
      case NOK_DATA_FAIL:
        draft.isLoading = false;
        break;
    }
  });

export default apolloSurveyReducer;
