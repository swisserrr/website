/*
 *
 * DiseaseListing reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_LANDING_DETAIL, GET_LANDING_DETAIL_FAIL, GET_LANDING_DETAIL_SUCCESS } from './constants';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  landingDetail: {},
  loading: false,
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const userStoriesListingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.landing.landingDetail'))) {
          draft.landingDetail = get(action, 'payload.landing.landingDetail');
        }
        break;
      case GET_LANDING_DETAIL:
        draft.loading = true;
        break;

      case GET_LANDING_DETAIL_SUCCESS:
        draft.landingDetail = action.payload;
        draft.loading = false;
        break;
      case GET_LANDING_DETAIL_FAIL:
        // draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default userStoriesListingReducer;
