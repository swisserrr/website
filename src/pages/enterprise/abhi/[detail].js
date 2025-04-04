// import { END } from 'redux-saga';
import Enterprise from 'containers/Enterprise';
import Helpers from '../../../utils/helpers';
import { APIS } from '../../../constants';

// import wrapper from 'utils/configure-store';

// import { getQues } from 'containers/ChatSurvey/actions';
// import { parse } from 'cookie';
// import { axiosInstance } from 'utils/request';
// import { isNil } from 'lodash';

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
//     try {

//     } catch (err) {
//         // Error.
//     }
// });

const EnterpriseAbhi = () => {
  return <Enterprise endPoint={Helpers.getUrl(APIS.ENTERPRISE)} />;
};

export default EnterpriseAbhi;
