import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the showDetails state domain
 */

const selectShowDetailsDomain = state => state.showDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShowDetails
 */

const makeSelectShowDetails = () => createSelector(selectShowDetailsDomain, substate => substate);
const makeSelectMeetingDetails = () => createSelector(selectShowDetailsDomain, substate => substate.eventDetails);

export default makeSelectShowDetails;
export { selectShowDetailsDomain, makeSelectMeetingDetails };
