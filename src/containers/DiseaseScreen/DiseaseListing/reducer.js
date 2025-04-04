/*
 *
 * DiseaseListing reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_DISEASE_DETAIL,
  GET_DISEASE_DETAIL_FAIL,
  GET_DISEASE_DETAIL_SUCCESS,
  GET_DISEASE_LISTING,
  GET_DISEASE_LISTING_FAIL,
  GET_DISEASE_LISTING_SUCCESS,
} from './constants';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  diseaseList: {},
  diseaseDetail: {},
  loading: false,
  pageNo: 0,
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const userStoriesListingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.diseaseListing.diseaseList'))) {
          draft.diseaseList = get(action, 'payload.diseaseListing.diseaseList');
        }
        if (!isEmpty(get(action, 'payload.diseaseListing.diseaseDetail'))) {
          draft.diseaseDetail = get(action, 'payload.diseaseListing.diseaseDetail');
        }
        if (!isEqual(get(action, 'payload.diseaseListing.pageNo'), 0)) {
          draft.pageNo = get(action, 'payload.diseaseListing.pageNo');
        }
        break;
      case GET_DISEASE_LISTING:
        draft.pageNo = action.payload.page_number;
        draft.loading = true;
        break;
      case GET_DISEASE_LISTING_SUCCESS:
        draft.diseaseList = action.payload;
        draft.loading = false;
        break;
      case GET_DISEASE_LISTING_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;
      case GET_DISEASE_DETAIL:
        draft.loading = true;
        break;

      case GET_DISEASE_DETAIL_SUCCESS:
        draft.diseaseDetail = action.payload;
        draft.loading = false;
        break;

      case GET_DISEASE_DETAIL_FAIL:
        // draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default userStoriesListingReducer;
