import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diseaseScreen state domain
 */

const selectDiseaseScreenDomain = state => state.disease || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DiseaseScreen
 */

const makeSelectDiseaseScreen = () => createSelector(selectDiseaseScreenDomain, substate => substate);
const makeSelectDiseaseDetail = () => createSelector(selectDiseaseScreenDomain, substate => substate?.diseaseDetail);
export default makeSelectDiseaseScreen;
export { selectDiseaseScreenDomain, makeSelectDiseaseDetail };
