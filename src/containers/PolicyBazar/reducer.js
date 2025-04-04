/*
 *
 * PepsicoSurvey reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUBMIT_POLICY_BAZAAR_DATA,
  SUBMIT_POLICY_BAZAAR_DATA_SUCCESS,
  SUBMIT_POLICY_BAZAAR_DATA_FAIL,
} from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const pepsicoSurveyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SUBMIT_POLICY_BAZAAR_DATA:
        draft.isLoading = true;
        break;

      case SUBMIT_POLICY_BAZAAR_DATA_SUCCESS:
      case SUBMIT_POLICY_BAZAAR_DATA_FAIL:
        draft.isLoading = false;
        break;
    }
  });

export default pepsicoSurveyReducer;
