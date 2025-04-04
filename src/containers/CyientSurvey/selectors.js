import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cyientSurvey state domain
 */

const selectCyientSurveyDomain = state => state.cyientSurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CyientSurvey
 */

const makeSelectCyientSurvey = () => createSelector(selectCyientSurveyDomain, substate => substate);

export default makeSelectCyientSurvey;
export { selectCyientSurveyDomain };
