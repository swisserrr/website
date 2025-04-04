import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogListing state domain
 */

const selectBlogListingDomain = state => state.blogListing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogListing
 */

const makeSelectBlogListing = () => createSelector(selectBlogListingDomain, substate => substate);

export default makeSelectBlogListing;
export { selectBlogListingDomain };
