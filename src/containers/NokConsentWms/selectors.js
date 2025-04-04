import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the nokConsentWms state domain
 */

const selectNokConsentWmsDomain = state => state.nokConsentWms || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NokConsentWms
 */

const makeSelectNokConsentWms = () => createSelector(selectNokConsentWmsDomain, substate => substate);

export default makeSelectNokConsentWms;
export { selectNokConsentWmsDomain };
