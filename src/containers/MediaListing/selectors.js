import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mediaListing state domain
 */

const selectMediaListingDomain = state => state.mediaListing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MediaListing
 */

const makeSelectMediaListing = () => createSelector(selectMediaListingDomain, substate => substate);

export default makeSelectMediaListing;
export { selectMediaListingDomain };
