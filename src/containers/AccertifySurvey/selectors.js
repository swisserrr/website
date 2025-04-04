import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the accertifySurvey state domain
 */

const selectAccertifySurveyDomain = state => state.accertifySurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AccertifySurvey
 */

const makeSelectAccertifySurvey = () => createSelector(selectAccertifySurveyDomain, substate => substate);

export default makeSelectAccertifySurvey;
export { selectAccertifySurveyDomain };
