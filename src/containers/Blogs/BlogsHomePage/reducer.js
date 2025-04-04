/*
 *
 * Blogs reducer
 *
 */
import produce from 'immer';
import {
  ADD_BLOGS_CATEGORIES_DATA,
  DEFAULT_ACTION,
  GET_BLOGS_CATEGORIES_FAILURE,
  GET_BLOGS_CATEGORIES_SUCCESS,
  GET_BLOGS_DATA_FAILURE,
  GET_BLOGS_DATA_SUCCESS,
  GET_DETAIL_DATA_FAILURE,
  GET_DETAIL_DATA_SUCCESS,
} from './constants';
import concat from 'lodash/concat';
import { HYDRATE } from 'next-redux-wrapper';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export const initialState = {
  allBlogsData: {},
  paginationData: {},
  detailData: {},
};

/* eslint-disable default-case, no-param-reassign */
const blogsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HYDRATE:
        if (!isEmpty(get(action, 'payload.blogs.allBlogsData'))) {
          draft.allBlogsData = get(action, 'payload.blogs.allBlogsData', state.allBlogsData);
        }
        if (!isEmpty(get(action, 'payload.blogs.paginationData'))) {
          draft.paginationData = get(action, 'payload.blogs.paginationData', state.paginationData);
        }
        if (!isEmpty(get(action, 'payload.blogs.detailData'))) {
          draft.detailData = get(action, 'payload.blogs.detailData', state.detailData);
        }
        break;
      case GET_BLOGS_DATA_SUCCESS:
        draft.allBlogsData = action.payload;
        break;

      case GET_BLOGS_DATA_FAILURE:
        draft.err = action.payload;
        break;

      case GET_BLOGS_CATEGORIES_SUCCESS:
        draft.paginationData = action.payload;
        break;

      case GET_BLOGS_CATEGORIES_FAILURE:
        draft.err = action.payload;
        break;

      case ADD_BLOGS_CATEGORIES_DATA:
        draft.paginationData.paginatedData = concat(state.paginationData.paginatedData, action.payload);
        break;

      case GET_DETAIL_DATA_SUCCESS:
        draft.detailData = action.payload;
        break;
      case GET_DETAIL_DATA_FAILURE:
        draft.err = action.payload;
        break;
    }
  });

export default blogsReducer;
