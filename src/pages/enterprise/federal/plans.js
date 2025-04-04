import { END } from 'redux-saga';
// import Plans from 'containers/FederalPlans';
import Plans from 'containers/KotakPlans';

import wrapper from 'utils/configure-store';

import { getKotakPlans } from 'containers/KotakPlans/actions';
import { parse } from 'cookie';
import { axiosInstance } from 'utils/request';
import isNil from 'lodash/isNil';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  try {
    const cookies = req.headers.cookie;
    // Parse the cookie header using the cookie library
    const parsedCookies = cookies ? parse(cookies) : {};
    // Retrieve the value of the specific cookie
    const authToken = parsedCookies.access_token;
    const partnerUUID = parsedCookies?.partner_uuid;
    if (!isNil(authToken)) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
    // Fire saga action on server.
    //console.log('Dispatching getPlans action'); // Log action dispatch
    // const userData = JSON.parse(localStorage.getItem('user_data'));

    store.dispatch(getKotakPlans(partnerUUID));
    // store.dispatch(getKotakCoins());

    // End saga on server.
    store.dispatch(END);
    //console.log('Ending saga'); // Log saga end

    await store.sagaTask.toPromise();
    //console.log('Saga task completed'); // Log saga completion
  } catch (err) {
    console.error('Error in getStaticProps:', err); // Log any errors

    // Error.
  }
});

export default Plans;
