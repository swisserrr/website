// import { take, call, put, select } from 'redux-saga/effects';
// import request from '../../utils/request';

import { call, put, takeLatest } from 'redux-saga/effects';
import { updateUser /*, uploadProfilePictureFail*/ } from '../../Login/actions';
import request from 'utils/request';
import Helpers from 'utils/helpers';
import { APIS } from '../../../constants';
import isNil from 'lodash/isNil';
import { UPLOAD_PROFILE_PICTURE } from 'containers/Login/constants';

// Individual exports for testing

function* uploadUserProfilePictureHandler({ payload }) {
  let url = Helpers.getUrl(APIS.UPDATE_PROFILE_PICTURE);
  url = url.replace(':id', payload.userId);

  const options = {
    method: 'PUT',
    url,
    data: payload.data,
  };

  try {
    const res = yield call(request, options);
    if (!isNil(res?.data)) {
      const newData = {
        data: {
          photoUrl: res?.data?.image,
        },
        userId: payload.userId,
      };
      yield put(updateUser(newData));
    }
  } catch (e) {
    // yield put(uploadProfilePictureFail(e));
    payload?.error(e);
  }
}

export default function* editProfileSaga() {
  yield takeLatest(UPLOAD_PROFILE_PICTURE, uploadUserProfilePictureHandler);
}
