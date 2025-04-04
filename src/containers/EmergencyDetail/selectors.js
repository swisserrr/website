import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the emergencyDetail state domain
 */

const selectEmergencyDetailDomain = state => state.emergencyDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmergencyDetail
 */

const makeSelectEmergencyDetail = () => createSelector(selectEmergencyDetailDomain, substate => substate);

export default makeSelectEmergencyDetail;
export { selectEmergencyDetailDomain };
