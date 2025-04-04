import { call, put, takeLatest, select } from 'redux-saga/effects';
import get from 'lodash/get';
import concat from 'lodash/concat';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_DISEASE_LISTING } from './constants';
import { getDiseaseSuccess, getDiseaseFail } from './actions';
import { APIS } from '../../../constants';
import { makeSelectDiseaseList } from './selectors';

// Individual exports for testing

function* getDiseaseList({ payload }) {
  const url = Helpers.getUrl(APIS.DISEASE_LISTING);
  const options = {
    method: 'POST',
    url,
    data: payload,
  };
  try {
    const res = yield call(request, options);

    const diseaseList = yield select(makeSelectDiseaseList());
    const updatedDiseaseList = get(diseaseList, 'data')
      ? concat(diseaseList?.data, get(res, 'data.data'))
      : get(res, 'data.data');

    const updatedPayload = Object.assign(res?.data, { data: updatedDiseaseList });
    yield put(getDiseaseSuccess(updatedPayload));
  } catch (e) {
    yield put(getDiseaseFail(e));
  }
}

export default function* diseaseListingSaga() {
  yield takeLatest(GET_DISEASE_LISTING, getDiseaseList);
}
