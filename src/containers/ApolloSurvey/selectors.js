import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the apolloSurvey state domain
 */

const selectApolloSurveyDomain = state => state.apolloSurvey || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ApolloSurvey
 */

const makeSelectApolloSurvey = () => createSelector(selectApolloSurveyDomain, substate => substate);

export default makeSelectApolloSurvey;
export { selectApolloSurveyDomain };
