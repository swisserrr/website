/*
 *
 * ShellSurvey reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SUBMIT_SHELL_DATA, SUBMIT_SHELL_DATA_SUCCESS, SUBMIT_SHELL_DATA_FAIL } from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const shellSurveyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SUBMIT_SHELL_DATA:
        draft.isLoading = true;
        break;

      case SUBMIT_SHELL_DATA_SUCCESS:
      case SUBMIT_SHELL_DATA_FAIL:
        draft.isLoading = false;
        break;
    }
  });

export default shellSurveyReducer;
