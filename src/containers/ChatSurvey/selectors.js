import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

const selectChatSurveyDomain = state => state.chatSurvey || initialState;

const makeSelectChatSurvey = () => createSelector(selectChatSurveyDomain, substate => substate.data);
const makeSelectChatSurveyData = () => createSelector(selectChatSurveyDomain, substate => substate);

export default makeSelectChatSurvey;
export { selectChatSurveyDomain, makeSelectChatSurveyData };
