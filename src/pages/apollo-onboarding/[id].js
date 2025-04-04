import ApolloSurvey from 'containers/ApolloSurvey';
import { nokData } from 'containers/ApolloSurvey/actions';
import wrapper from 'utils/configure-store';
import { END } from 'redux-saga';
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  try {
    const { id } = params;
    console.log('Apollololo', id);
    store.dispatch(nokData(id));

    store.dispatch(END);

    await store.sagaTask.toPromise();
  } catch (err) {
    console.error('Error in Apollo Onboarding:', err);

    // Error.
    return {
      props: {
        id: '',
      },
    };
  }
});
export default ApolloSurvey;
