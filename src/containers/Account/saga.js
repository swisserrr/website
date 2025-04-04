import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';

import get from 'lodash/get';

import { UPDATE_USER } from '../Login/constants';
import { updateUserSuccess, updateUserFail } from '../Login/actions';
import { APIS } from '../../constants';

import { manipulateUserUpdate, updateProfileCtHandler /*, userDataForCtEvents */ } from 'utils/cleverTap';

function* updateUserApiHandler({ payload }) {
  let url = Helpers.getUrl(APIS.UPDATE_USER);
  url = url.replace(':id', payload?.data?.userId);

  delete payload?.data?.userId;

  const options = {
    method: 'PUT',
    url,
    data: payload?.data,
  };

  try {
    const res = yield call(request, options);
    updateProfileCtHandler(manipulateUserUpdate(get(res, 'data.user_data')));
    const partnerObject = JSON.parse(localStorage.getItem('partnerObj'));
    if (partnerObject) {
      // res.data.user_data.partnerObj = {...res.data.userdata, ...partnerObject};
      res.data.user_data.partnerObj = partnerObject;
      localStorage.setItem('user_data', JSON.stringify(res.data.user_data));
    }
    yield put(updateUserSuccess(res?.data));

    payload?.callback?.();
  } catch (e) {
    yield put(updateUserFail());
  }
}

// Individual exports for testing
export default function* accountSaga() {
  yield takeLatest(UPDATE_USER, updateUserApiHandler);
}
