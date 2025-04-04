import UserStories from 'containers/UserStory/UserStoriesListing';

import { END } from 'redux-saga';

import wrapper from 'utils/configure-store';

import { getUserStoryAction } from 'containers/UserStory/UserStoriesListing/actions';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  try {
    // Fire saga action on server.
    store.dispatch(getUserStoryAction({ page_size: 20, page_number: 1 }));
    // End saga on server.
    store.dispatch(END);
    await store.sagaTask.toPromise();
  } catch (err) {
    // Error.
  }
});

export default UserStories;
