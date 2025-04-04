import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the preferences state domain
 */

const selectPreferencesDomain = state => state.preferences || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Preferences
 */

const makeSelectPreferences = () => createSelector(selectPreferencesDomain, substate => substate);

export default makeSelectPreferences;
export { selectPreferencesDomain };
