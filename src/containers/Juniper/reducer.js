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

import { FETCHING_HOME_JUNIPER_DATA_SUCCESS } from './constants';

export const initialState = {
  err: null,
  data: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.juniper.data'))) {
          draft.data = get(action, 'payload.juniper.data');
        }
        break;

      case FETCHING_HOME_JUNIPER_DATA_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default homeReducer;
