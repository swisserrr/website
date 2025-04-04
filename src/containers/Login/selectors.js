import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(selectLoginDomain, substate => substate);
const makeSelectUser = () => createSelector(selectLoginDomain, substate => substate.user);
const makeLastOTPTimeStamp = () => createSelector(selectLoginDomain, substate => substate.lastOTPSendTime);

export default makeSelectLogin;
export { selectLoginDomain, makeSelectUser, makeLastOTPTimeStamp };
