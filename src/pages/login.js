import isEmpty from 'lodash/isEmpty';

import isNil from 'lodash/isNil';

import Login from 'containers/Login';

export function getServerSideProps({ req }) {
  if (isEmpty(req?.cookies?.access_token) || isNil(req?.cookies?.access_token)) {
    return {
      props: {},
    };
  }

  return {
    props: {},
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
}

export default Login;
