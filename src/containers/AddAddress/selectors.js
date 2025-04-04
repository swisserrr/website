import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addAddress state domain
 */

const selectAddAddressDomain = state => state.addAddress || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddAddress
 */

const makeSelectAddAddress = () => createSelector(selectAddAddressDomain, substate => substate);

export default makeSelectAddAddress;
export { selectAddAddressDomain };
