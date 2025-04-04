import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the amexSurvey state domain
 */

const selectEnterpriseDomain = state => state.enterprise || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AmexSurvey
 */

export default selectEnterpriseDomain;
