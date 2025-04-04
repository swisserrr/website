/*
 *
 * MediaListing reducer
 *
 */
import produce from 'immer';
import { FETCH_MEDIA_DATA, FETCH_MEDIA_DATA_SUCCESS } from './constants';
import { HYDRATE } from 'next-redux-wrapper';
import get from 'lodash/get';

export const initialState = {
  data: [],
  loading: false,
  pageNo: 0,
};

/* eslint-disable default-case, no-param-reassign */
const mediaListingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        draft.data = get(action, 'payload.mediaListing.data');
        draft.pageNo = get(action, 'payload.mediaListing.pageNo');
        break;
      case FETCH_MEDIA_DATA:
        draft.pageNo = action.payload.page_number;
        draft.loading = true;
        break;
      case FETCH_MEDIA_DATA_SUCCESS:
        draft.data = [...state.data, ...action.payload];
        draft.loading = false;
        break;
    }
  });

export default mediaListingReducer;
