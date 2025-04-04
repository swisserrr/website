import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the careHealthInsurance state domain
 */

const selectCareHealthInsuranceDomain = state => state.careHealthInsurance || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CareHealthInsurance
 */

const makeSelectCareHealthInsurance = () => createSelector(selectCareHealthInsuranceDomain, substate => substate);

export default makeSelectCareHealthInsurance;
export { selectCareHealthInsuranceDomain };
