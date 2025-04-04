import Services from 'containers/KotakServices';
import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { parse } from 'cookie';
import { axiosInstance } from 'utils/request';
import { isNil } from 'lodash'; // Add this import if not already present

import { getServices } from 'containers/KotakServices/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
  const { subcat } = params;

  try {
    const cookies = req?.headers?.cookie;
    // Parse the cookie header using the cookie library
    const parsedCookies = cookies ? parse(cookies) : {};
    // Retrieve the value of the specific cookie
    const authToken = parsedCookies.access_token;
    const partnerUUID = parsedCookies?.partner_uuid;

    if (!isNil(authToken)) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }

    // Fire saga action on server.
    store.dispatch(getServices(partnerUUID));

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    console.error('Error fetching services:', err);
    // Handle error.
  }

  return {
    props: {
      subcat, // Pass the subcat dynamically to the Services component
    },
  };
});

export default function ServicesPage(props) {
  return <Services {...props} />;
}
