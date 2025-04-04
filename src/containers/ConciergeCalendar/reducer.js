/*
 *
 * ConciergeCalendar reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_ADDRESS_DATA_SUCCESS, GET_ADDRESS_DATA_FAIL, GET_ADDRESS_DATA } from './constants';
import { HYDRATE } from 'next-redux-wrapper';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
export const initialState = {
  addressData: {
    data: null,
  },
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const conciergeCalendarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.conciergeCalendar.addressData.data'))) {
          draft.addressData.data = get(action, 'payload.conciergeCalendar.addressData.data');
        }
        break;

      case GET_ADDRESS_DATA:
        draft.loading = true;
        break;
      case GET_ADDRESS_DATA_SUCCESS:
        draft.addressData.data = action.payload;
        draft.loading = false;
        break;

      case GET_ADDRESS_DATA_FAIL:
        draft.loading = false;
        break;
    }
  });

export default conciergeCalendarReducer;
