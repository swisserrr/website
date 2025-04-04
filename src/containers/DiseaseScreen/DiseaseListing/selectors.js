import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diseaseListing state domain
 */

const selectDiseaseListingDomain = state => state.diseaseListing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DiseaseListing
 */

const makeSelectDiseaseListing = () => createSelector(selectDiseaseListingDomain, substate => substate);
const makeSelectDiseaseList = () => createSelector(selectDiseaseListingDomain, substate => substate?.diseaseList);
const makeSelectDiseaseDetail = () => createSelector(selectDiseaseListingDomain, substate => substate?.diseaseDetail);

export default makeSelectDiseaseListing;
export { selectDiseaseListingDomain, makeSelectDiseaseList, makeSelectDiseaseDetail };
