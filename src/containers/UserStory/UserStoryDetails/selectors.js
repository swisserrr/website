import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userStoryDetails state domain
 */

const selectUserStoryDetailsDomain = state => state.userStoryDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserStoryDetails
 */

const makeSelectUserStoryDetails = () => createSelector(selectUserStoryDetailsDomain, substate => substate);
const makeSelectUserStoryDetailsData = () =>
  createSelector(selectUserStoryDetailsDomain, substate => substate.userStory);

export default makeSelectUserStoryDetails;
export { selectUserStoryDetailsDomain, makeSelectUserStoryDetailsData };
