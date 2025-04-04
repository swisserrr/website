/*
 *
 * Membership reducer
 *
 */
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import {
  DEFAULT_ACTION,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
  GET_ACTIVE_FAIL,
  GET_ACTIVE_SUCCESS,
} from './constants';

export const initialState = {
  plans: [],
  coins: [],
};

/* eslint-disable default-case, no-param-reassign */
const kotakPlansReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        if (!isEmpty(get(action, 'payload.kotakPlans.plans'))) {
          draft.plans = get(action, 'payload.kotakPlans.plans');
        }
        break;

      case GET_PLANS_SUCCESS:
        console.log(action);
        draft.plans = action?.payload;
        break;

      case GET_PLANS_FAIL:
        break;
      case GET_COINS_SUCCESS:
        draft.coins = action?.payload;
        break;

      case GET_COINS_FAIL:
        break;
      case GET_ACTIVE_SUCCESS:
        draft.activeplan = action?.payload;
        break;

      case GET_ACTIVE_FAIL:
        break;
    }
  });

export default kotakPlansReducer;
