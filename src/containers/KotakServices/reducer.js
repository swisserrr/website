/*
 *
 * ConciergeServices reducer
 *
 */
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import {
  DEFAULT_ACTION,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAIL,
  CREATE_CONCIERGE,
  CREATE_CONCIERGE_SUCCESS,
  CREATE_CONCIERGE_FAIL,
} from './constants';

export const initialState = {
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const kotakServicesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        if (!isEmpty(get(action, 'payload.kotakServices.data'))) {
          draft.data = get(action, 'payload.kotakServices.data');
        }
        break;

      case GET_SERVICES_SUCCESS:
        draft.data = action.payload;
        break;

      case CREATE_CONCIERGE:
      case CREATE_CONCIERGE_SUCCESS:
      case CREATE_CONCIERGE_FAIL:
      case GET_SERVICES_FAIL:
        break;
    }
  });

export default kotakServicesReducer;
