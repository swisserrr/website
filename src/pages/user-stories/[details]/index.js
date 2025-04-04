import UserStoryDetails from 'containers/UserStory/UserStoryDetails';

import { END } from 'redux-saga';

import wrapper from 'utils/configure-store';

import { getUserStoryDetail } from 'containers/UserStory/UserStoriesListing/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  try {
    // Fire saga action on server.
    store.dispatch(getUserStoryDetail({ uuid: query?.details }));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default UserStoryDetails;
