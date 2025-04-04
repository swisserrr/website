import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the indusIndEnterprise state domain
 */

const selectIndusIndEnterpriseDomain = state => state.indusIndEnterprise || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IndusIndEnterprise
 */

const makeSelectIndusIndEnterprise = () => createSelector(selectIndusIndEnterpriseDomain, substate => substate);

export default makeSelectIndusIndEnterprise;
export { selectIndusIndEnterpriseDomain };
