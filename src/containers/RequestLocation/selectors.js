import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the requestLocation state domain
 */

const selectRequestLocationDomain = state => state.requestLocation || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RequestLocation
 */

const makeSelectRequestLocation = () => createSelector(selectRequestLocationDomain, substate => substate);

export default makeSelectRequestLocation;
export { selectRequestLocationDomain };
