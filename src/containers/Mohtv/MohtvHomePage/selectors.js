import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mohtv state domain
 */

const selectMohtvDomain = state => state.mohTv || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Mohtv
 */

const makeSelectMohtv = () => createSelector(selectMohtvDomain, substate => substate);
const makeSelectSearchSuggestions = () => createSelector(selectMohtvDomain, substate => substate.searchSuggestions);
const makeSelectMohtvCategoryShows = () => createSelector(selectMohtvDomain, substate => substate.mohtvCategoryShows);
const makeSelectSubCategoryShows = () => createSelector(selectMohtvDomain, substate => substate.mohtvSubCategoryShows);
const makeSelectSearchedShows = () => createSelector(selectMohtvDomain, substate => substate.mohtvSearchedShows);
const makeSelectMohtvCategories = () => createSelector(selectMohtvDomain, substate => substate.mohtvCategories);
const makeSelectMohtvActiveTab = () => createSelector(selectMohtvDomain, substate => substate.activeTabUuid);

export default makeSelectMohtv;
export {
  selectMohtvDomain,
  makeSelectMohtvCategoryShows,
  makeSelectSearchSuggestions,
  makeSelectMohtvCategories,
  makeSelectMohtvActiveTab,
  makeSelectSubCategoryShows,
  makeSelectSearchedShows,
};
