import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the conciergeServices state domain
 */

const selectConciergeServicesDomain = state => state.kotakServices || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConciergeServices
 */

const makeSelectConciergeServices = () => createSelector(selectConciergeServicesDomain, substate => substate);
const makeSelectServices = () => createSelector(selectConciergeServicesDomain, substate => substate.data);

export default makeSelectConciergeServices;
export { selectConciergeServicesDomain, makeSelectServices };
