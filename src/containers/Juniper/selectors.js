import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

const selectHomeDomain = state => state.juniper || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(selectHomeDomain, substate => substate);
const makeSelectHomePageData = () => createSelector(selectHomeDomain, substate => substate.data);

export default makeSelectHome;
export { selectHomeDomain, makeSelectHomePageData };
