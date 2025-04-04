/* eslint-disable no-case-declarations */
/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HYDRATE } from 'next-redux-wrapper';

import { SAVE_CONTACT, SAVE_CONTACT_FAIL, SAVE_CONTACT_SUCCESS, FETCHING_HOME_SCREEN_DATA_SUCCESS } from './constants';

export const initialState = {
  posts: [],
  err: null,
  data: [],
  loading: false,
  contactToEmoha: {
    loading: false,
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.home.data'))) {
          draft.data = get(action, 'payload.home.data');
        }
        break;

      case SAVE_CONTACT:
        draft.contactToEmoha.loading = true;
        break;

      case SAVE_CONTACT_SUCCESS:
        draft.contactToEmoha.loading = false;
        break;

      case SAVE_CONTACT_FAIL:
        draft.contactToEmoha.loading = false;
        draft.contactToEmoha.err = action.payload;
        break;

      case FETCHING_HOME_SCREEN_DATA_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default homeReducer;
