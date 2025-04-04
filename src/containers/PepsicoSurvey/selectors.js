import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pepsicoSurvey state domain
 */

const selectPepsicoSurveyDomain = state => state.pepsicoSurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PepsicoSurvey
 */

const makeSelectPepsicoSurvey = () => createSelector(selectPepsicoSurveyDomain, substate => substate);

export default makeSelectPepsicoSurvey;
export { selectPepsicoSurveyDomain };
