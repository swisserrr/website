import KotakFlow from '../../../containers/KotakForm/checkoutPage';
import { parse } from 'cookie';
import isNil from 'lodash/isNil';
import { axiosInstance } from 'utils/request';
import { checkoutAction } from 'containers/KotakForm/actions';
import wrapper from 'utils/configure-store';
import { END } from 'redux-saga';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  try {
    const cookies = req.headers.cookie;
    const parsedCookies = cookies ? parse(cookies) : {};
    const authToken = parsedCookies.access_token;
    if (!isNil(authToken)) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
    store.dispatch(checkoutAction({}, req, false));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {}
});

export default KotakFlow;
