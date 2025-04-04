import VasScreen from 'containers/VasPage/VasPageScreen';
import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { getVasDetail } from 'containers/VasPage/VasPageScreen/actions';
import config from 'config';

// import axios from 'axios';
// import map from 'lodash/map';

// export async function getStaticPaths() {
//   const res = await axios.get(`${config.BLOGS_SLUG}/api/v1/admin/website/get-landing-page-slug-name`);
//   const obj = map(res?.data?.data, data => {
//     return { params: { detail: data.slug_name } };
//   });
//   return {
//     paths: obj,
//     fallback: false,
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ res, params }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=31536000');
  try {
    // Fire saga action on server.
    store.dispatch(getVasDetail({ slug: params?.detail }));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default VasScreen;
