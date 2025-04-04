import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the conciergeCalendar state domain
 */

const selectConciergeCalendarDomain = state => state.conciergeCalendar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConciergeCalendar
 */

const makeSelectConciergeCalendar = () => createSelector(selectConciergeCalendarDomain, substate => substate);
const makeSelectLoading = () => createSelector(selectConciergeCalendarDomain, substate => substate.loading);

export default makeSelectConciergeCalendar;
export { selectConciergeCalendarDomain, makeSelectLoading };
