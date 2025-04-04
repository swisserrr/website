import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(selectHomeDomain, substate => substate);
const makePosts = () => createSelector(selectHomeDomain, substate => substate.posts);
const makeSelectContactToEmoha = () => createSelector(selectHomeDomain, substate => substate.contactToEmoha);
const makeSelectHomePageData = () => createSelector(selectHomeDomain, substate => substate.data);
const makeSelectService = () => createSelector(selectHomeDomain, substate => substate.service);

export default makeSelectHome;
export { selectHomeDomain, makePosts, makeSelectContactToEmoha, makeSelectHomePageData, makeSelectService };
