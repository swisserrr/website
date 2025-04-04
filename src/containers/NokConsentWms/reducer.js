/*
 *
 * NokConsentWms reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_FORM_DETAILS,
  GET_FORM_DETAILS_FAIL,
  GET_FORM_DETAILS_SUCCESS,
  SUBMIT_CONSENT,
  SUBMIT_CONSENT_SUCCESS,
} from './constants';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  isLoading: false,
  // formLoading: false,
  formDetails: [],
};

/* eslint-disable default-case, no-param-reassign */
const nokConsentWmsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SUBMIT_CONSENT:
        draft.isLoading = true;
        break;
      case SUBMIT_CONSENT_SUCCESS:
        draft.isLoading = false;
        break;
      case SUBMIT_CONSENT:
        draft.isLoading = false;
        break;
      case GET_FORM_DETAILS:
        // draft.formLoading = true;
        break;
      case GET_FORM_DETAILS_SUCCESS:
        // draft.formLoading = false;
        draft.formDetails = action.payload;
        break;
      case GET_FORM_DETAILS_FAIL:
        // draft.formLoading = false;
        break;
      case HYDRATE:
        return { ...state, ...action.payload.nokConsentWms };

      default:
        return state;
    }
  });

export default nokConsentWmsReducer;
