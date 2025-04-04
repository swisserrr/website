/*
 *
 * Membership reducer
 *
 */
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import { DEFAULT_ACTION, GET_PLANS_SUCCESS, GET_PLANS_FAIL } from './constants';

export const initialState = {
  plans: [],
};

/* eslint-disable default-case, no-param-reassign */
const membershipReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        if (!isEmpty(get(action, 'payload.membership.plans'))) {
          draft.plans = get(action, 'payload.membership.plans');
        }
        break;

      case GET_PLANS_SUCCESS:
        draft.plans = action.payload;
        break;

      case GET_PLANS_FAIL:
        break;
    }
  });

export default membershipReducer;
