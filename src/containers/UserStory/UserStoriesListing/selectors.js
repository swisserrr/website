import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userStoriesListing state domain
 */

const selectUserStoriesListingDomain = state => state.userStoriesListing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserStoriesListing
 */

const makeSelectUserStoriesListing = () => createSelector(selectUserStoriesListingDomain, substate => substate);
const makeSelectUserStoriesList = () =>
  createSelector(selectUserStoriesListingDomain, substate => substate?.userStoriesList);

export default makeSelectUserStoriesListing;
export { selectUserStoriesListingDomain, makeSelectUserStoriesList };
