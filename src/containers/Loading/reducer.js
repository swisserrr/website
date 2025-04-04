/*
 *
 * Loading reducer
 *
 */
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import get from 'lodash/get';

import { DEFAULT_ACTION, SET_LOADING } from './constants';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        draft.isLoading = get(action, 'payload.loading.isLoading', false);
        break;

      case SET_LOADING:
        draft.isLoading = action.payload;
        break;
    }
  });

export default loadingReducer;
