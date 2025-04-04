import DiseaseScreen from 'containers/DiseaseScreen/DiseasePage';
import config from 'config';

import { END } from 'redux-saga';

import wrapper from 'utils/configure-store';

// import axios from 'axios';
// import map from 'lodash/map';

import { getDiseaseDetail } from 'containers/DiseaseScreen/DiseaseListing/actions';

export async function getStaticPaths() {
  try {
    const res = await axios.get(`${config.BLOGS_SLUG}/api/v1/admin/website/get-disease-slug-name`);
    const obj = map(res?.data?.data, data => {
      return { params: { details: data.slug_name } };
    });
    return {
      paths: obj,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
  try {
    // Fire saga action on server.
    store.dispatch(getDiseaseDetail({ slug: params?.details }));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: false,
    };
  } catch (err) {
    // Error.
    return {
      notFound: true,
    };
  }
});

export default DiseaseScreen;
