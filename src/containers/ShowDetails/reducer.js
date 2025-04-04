/*
 *
 * ShowDetails reducer
 *
 */
import produce from 'immer';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HYDRATE } from 'next-redux-wrapper';

import { DEFAULT_ACTION, EVENT_DETAILS_FAIL, EVENT_DETAILS_SUCCESS } from './constants';

export const initialState = {
  eventDetails: null,
};

/* eslint-disable default-case, no-param-reassign */
const showDetailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case HYDRATE:
        if (!isEmpty(get(action, 'payload.showDetails.eventDetails'))) {
          draft.eventDetails = get(action, 'payload.showDetails.eventDetails');
        }
        break;

      case EVENT_DETAILS_SUCCESS:
        draft.eventDetails = action.payload;
        break;

      case EVENT_DETAILS_FAIL:
        break;
    }
  });

export default showDetailsReducer;
