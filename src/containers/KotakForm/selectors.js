import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the kotakForm state domain
 */

const selectKotakFormDomain = state => state.kotakForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by KotakForm
 */

const makeSelectKotakForm = () => createSelector(selectKotakFormDomain, substate => substate);
const makeSelectCheckout = () => createSelector(selectKotakFormDomain, substate => substate.checkoutData);

export default makeSelectKotakForm;
export { selectKotakFormDomain, makeSelectCheckout };
