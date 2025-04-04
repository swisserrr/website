import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diseaseScreen state domain
 */

const selectVasScreenDomain = state => state.vas || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VasScreen
 */

const makeSelectVasScreen = () => createSelector(selectVasScreenDomain, substate => substate);
const makeSelectVasDetail = () => createSelector(selectVasScreenDomain, substate => substate.vasDetail);
export default makeSelectVasScreen;
export { selectVasScreenDomain, makeSelectVasDetail };
