/*
 *
 * AccertifySurvey reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUBMIT_ACCERTIFY_DATA,
  SUBMIT_ACCERTIFY_DATA_SUCCESS,
  SUBMIT_ACCERTIFY_DATA_FAIL,
} from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const accertifySurveyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SUBMIT_ACCERTIFY_DATA:
        draft.isLoading = true;
        break;

      case SUBMIT_ACCERTIFY_DATA_SUCCESS:
      case SUBMIT_ACCERTIFY_DATA_FAIL:
        draft.isLoading = false;
        break;
    }
  });

export default accertifySurveyReducer;
