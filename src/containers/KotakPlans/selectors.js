import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the membership state domain
 */

const selectKotakPlansDomain = state => state.kotakPlans || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Membership
 */

const makeSelectKotakPlans = () => createSelector(selectKotakPlansDomain, substate => substate);
const makeSelectPlans = () => createSelector(selectKotakPlansDomain, substate => substate);
const makeSelectIndividual = () => createSelector(selectKotakPlansDomain, substate => substate?.individual);
const makeSelectCouple = () => createSelector(selectKotakPlansDomain, substate => substate?.couple);
const makeSelectCoins = () => createSelector(selectKotakPlansDomain, substate => substate?.coins);
const makeSelectActivePlan = () => createSelector(selectKotakPlansDomain, substate => substate?.activeplan);

export default makeSelectKotakPlans;
export {
  selectKotakPlansDomain,
  makeSelectPlans,
  makeSelectIndividual,
  makeSelectCouple,
  makeSelectCoins,
  makeSelectActivePlan,
};
