import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogs state domain
 */
const selectBlogsDomain = state => state.blogs || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Mohtv
 */

/**
 * Other specific selectors
 */

/**
 * Default selector used by Blogs
 */

const makeSelectBlogs = () => createSelector(selectBlogsDomain, substate => substate);
const makeSelectAllBlogs = () => createSelector(selectBlogsDomain, substate => substate.allBlogsData);
const makeSelectAllCategoriesBlogs = () => createSelector(selectBlogsDomain, substate => substate.paginationData);
const makeSelectAllDetailBlogs = () => createSelector(selectBlogsDomain, substate => substate.detailData);

export { makeSelectBlogs, makeSelectAllBlogs, makeSelectAllCategoriesBlogs, makeSelectAllDetailBlogs };
