import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { GET_DISEASE_DETAIL } from '../DiseaseListing/constants';
import { getDiseaseDetailSuccess, getDiseaseDetailFail } from '../DiseaseListing/actions';
import { APIS } from '../../../constants';

function* getDiseaseDetailData({ payload }) {
  let url = Helpers.getUrl(APIS.DISEASE_DETAIL);
  const options = {
    method: 'POST',
    url,
    data: { slug_name: payload.slug },
  };

  try {
    const res = yield call(request, options);
    yield put(getDiseaseDetailSuccess(res?.data));
  } catch (e) {
    yield put(getDiseaseDetailFail(e));
  }
}

export default function* diseaseScreenSaga() {
  yield takeLatest(GET_DISEASE_DETAIL, getDiseaseDetailData);
}
