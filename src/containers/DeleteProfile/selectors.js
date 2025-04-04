import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the deleteProfile state domain
 */

const selectDeleteProfileDomain = state => state.deleteProfile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DeleteProfile
 */

const makeSelectDeleteProfile = () => createSelector(selectDeleteProfileDomain, substate => substate);

export default makeSelectDeleteProfile;
export { selectDeleteProfileDomain };
