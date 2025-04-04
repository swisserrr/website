import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shellSurvey state domain
 */

const selectShellSurveyDomain = state => state.shellSurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShellSurvey
 */

const makeSelectShellSurvey = () => createSelector(selectShellSurveyDomain, substate => substate);

export default makeSelectShellSurvey;
export { selectShellSurveyDomain };
