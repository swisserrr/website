import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogDetailPage state domain
 */

const selectBlogDetailPageDomain = state => state.blogDetailPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogDetailPage
 */

const makeSelectBlogDetailPage = () => createSelector(selectBlogDetailPageDomain, substate => substate);

export default makeSelectBlogDetailPage;
export { selectBlogDetailPageDomain };
