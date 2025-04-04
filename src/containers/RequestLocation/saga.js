import { call, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import Helpers from 'utils/helpers';
import { SEND_LOCATION_ACTION } from './constants';
// import { eventDetailsSuccess, eventDetailsFail } from './actions';
import { APIS } from '../../constants';
function* sendLocation({ payload, callback }) {
  const url = Helpers.getUrl(APIS.REQUEST_LOCATION);

  const options = {
    method: 'POST',
    url,
    data: payload,
  };

  try {
    const res = yield call(request, options);
    if (res) {
      callback(true);
    }
  } catch (err) {}
}
// Individual exports for testing
export default function* requestLocationSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SEND_LOCATION_ACTION, sendLocation);
}
