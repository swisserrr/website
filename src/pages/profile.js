import EditProfile from 'containers/Profile/EditProfile';
import includes from 'lodash/includes';
export default EditProfile;

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  if (includes(cookies, 'access_token')) {
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
}
