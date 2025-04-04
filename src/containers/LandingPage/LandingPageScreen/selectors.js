import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diseaseScreen state domain
 */

const selectLandingScreenDomain = state => state.landing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingScreen
 */

const makeSelectLandingScreen = () => createSelector(selectLandingScreenDomain, substate => substate);
const makeSelectLandingDetail = () => createSelector(selectLandingScreenDomain, substate => substate.landingDetail);
export default makeSelectLandingScreen;
export { selectLandingScreenDomain, makeSelectLandingDetail };
