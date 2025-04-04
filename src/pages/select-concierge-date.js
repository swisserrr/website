import ConciergeCalendar from 'containers/ConciergeCalendar';

import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { axiosInstance } from 'utils/request';
import { parse } from 'cookie';
import { getAddress } from 'containers/ConciergeCalendar/actions';
import isNil from 'lodash/isNil';
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  try {
    const cookies = req.headers.cookie;
    // Parse the cookie header using the cookie library
    const parsedCookies = cookies ? parse(cookies) : {};
    // Retrieve the value of the specific cookie
    const authToken = parsedCookies.access_token;
    if (!isNil(authToken)) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
    // Fire saga action on server.
    store.dispatch(getAddress());

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});
export default ConciergeCalendar;
