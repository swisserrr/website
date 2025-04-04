import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mohtvSubCategoryPage state domain
 */

const selectMohtvSubCategoryPageDomain = state => state.mohtvSubCategoryPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MohtvSubCategoryPage
 */

const makeSelectMohtvSubCategoryPage = () => createSelector(selectMohtvSubCategoryPageDomain, substate => substate);

export default makeSelectMohtvSubCategoryPage;
export { selectMohtvSubCategoryPageDomain };
