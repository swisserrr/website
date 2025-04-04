/*
 *
 * DiseaseListing reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_VAS_DETAIL, GET_VAS_DETAIL_FAIL, GET_VAS_DETAIL_SUCCESS } from './constants';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  vasDetail: {},
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
        if (!isEmpty(get(action, 'payload.vas.vasDetail'))) {
          draft.vasDetail = get(action, 'payload.vas.vasDetail');
        }
        break;
      case GET_VAS_DETAIL:
        draft.loading = true;
        break;

      case GET_VAS_DETAIL_SUCCESS:
        draft.vasDetail = action.payload;
        draft.loading = false;
        break;
      case GET_VAS_DETAIL_FAIL:
        // draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default userStoriesListingReducer;
