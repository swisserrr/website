import { END } from 'redux-saga';
import Preferences from 'containers/Preferences';

import wrapper from 'utils/configure-store';

import { getQues } from 'containers/ChatSurvey/actions';
import { parse } from 'cookie';
import { axiosInstance } from 'utils/request';
import { isNil } from 'lodash';

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
    store.dispatch(getQues());

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
    if (authToken) {
      return {
        props: {},
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }
  } catch (err) {
    // Error.
  }
});
export default Preferences;
