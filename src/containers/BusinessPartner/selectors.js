import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the businessPartner state domain
 */

const selectBusinessPartnerDomain = state => state.businessPartner || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BusinessPartner
 */

const makeSelectBusinessPartner = () => createSelector(selectBusinessPartnerDomain, substate => substate);

export default makeSelectBusinessPartner;
export { selectBusinessPartnerDomain };
