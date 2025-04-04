import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the membership state domain
 */

const selectMembershipDomain = state => state.membership || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Membership
 */

const makeSelectMembership = () => createSelector(selectMembershipDomain, substate => substate);
const makeSelectPlans = () => createSelector(selectMembershipDomain, substate => substate?.plans);
const makeSelectIndividual = () => createSelector(selectMembershipDomain, substate => substate?.individual);
const makeSelectCouple = () => createSelector(selectMembershipDomain, substate => substate?.couple);

export default makeSelectMembership;
export { selectMembershipDomain, makeSelectPlans, makeSelectIndividual, makeSelectCouple };
