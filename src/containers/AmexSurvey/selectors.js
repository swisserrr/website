import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the amexSurvey state domain
 */

const selectAmexSurveyDomain = state => state.amexSurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AmexSurvey
 */

const makeSelectAmexSurvey = () => createSelector(selectAmexSurveyDomain, substate => substate);

export default makeSelectAmexSurvey;
export { selectAmexSurveyDomain };
