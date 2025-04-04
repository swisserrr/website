import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import Login from 'containers/Login';

export function getServerSideProps({ req, params }) {
  // Extract the subcat parameter from the dynamic route
  const { subcat } = params;

  if (isEmpty(req?.cookies?.access_token) || isNil(req?.cookies?.access_token)) {
    return {
      props: {
        subcat, // Pass the subcat to the Login component
      },
    };
  }

  return {
    props: {
      subcat, // Pass the subcat to the Login component even during redirect
    },
    redirect: {
      permanent: false,
      destination: `/enterprise/medibuddy/${subcat}/services`, // Dynamically include subcat in the URL
    },
  };
}

export default function LoginPage(props) {
  return <Login {...props} />;
}
