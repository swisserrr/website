import NokConsentWms from 'containers/NokConsentWms';
import wrapper from 'utils/configure-store';
import { getFormDetails } from 'containers/NokConsentWms/actions';
import { END } from 'redux-saga';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  try {
    const { elder_id } = params;
    store.dispatch(getFormDetails(elder_id));

    store.dispatch(END);

    await store.sagaTask.toPromise();
  } catch (err) {
    console.error('Error in NOK Consent:', err);

    // Error.
    return {
      props: {
        id: '',
      },
    };
  }
});

const ElderConsent = () => {
  return (
    <div>
      <NokConsentWms />
    </div>
  );
};

export default ElderConsent;
