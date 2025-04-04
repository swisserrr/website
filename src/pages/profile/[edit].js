// import { END } from 'redux-saga';
import EditProfile from 'containers/Profile/EditProfile';

// import wrapper from 'utils/configure-store';

// import { fetchingHomeScreenData } from 'containers/Home/actions';

// export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
//   try {
//     // Fire saga action on server.
//     store.dispatch(fetchingHomeScreenData());

//     // End saga on server.
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   } catch (err) {
//     // Error.
//   }
// });

export default EditProfile;
