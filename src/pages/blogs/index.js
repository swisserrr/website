import Blogs from 'containers/Blogs/BlogsHomePage';

import { END } from 'redux-saga';
import wrapper from 'utils/configure-store';
import { getBlogsData } from 'containers/Blogs/BlogsHomePage/actions';

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(getBlogsData());

    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 60,
    };
  } catch (err) {
    // Error.
    return {
      notFound: true,
    };
  }
});

export default Blogs;
