import RequestLocation from 'containers/RequestLocation';
// import { END } from 'redux-saga';
// import wrapper from 'utils/configure-store';
// import { getVasDetail } from 'containers/VasPage/VasPageScreen/actions';

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ res, params }) => {
//   res.setHeader('Cache-Control', 'public, s-maxage=31536000');
//   try {
//     // Fire saga action on server.
//     store.dispatch(getVasDetail({ slug: params?.detail }));
//     // End saga on server.
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   } catch (err) {
//     // Error.
//   }
// });

export default RequestLocation;
