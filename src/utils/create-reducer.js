import { combineReducers } from 'redux';
import localforage from 'localforage';
import isEqual from 'lodash/isEqual';
import { persistReducer } from 'redux-persist';

import homeReducer from 'containers/Home/reducer';
import juniperReducer from 'containers/Juniper/reducer';
import mohTvReducer from 'containers/Mohtv/MohtvHomePage/reducer';
import loginReducer from 'containers/Login/reducer';
import mediaListingReducer from 'containers/MediaListing/reducer';
import showDetailsReducer from 'containers/ShowDetails/reducer';
import blogsReducer from 'containers/Blogs/BlogsHomePage/reducer';
import conciergeReducer from 'containers/ConciergeServices/reducer';
import plansReducer from 'containers/Membership/reducer';
import amexSurveyReducer from 'containers/AmexSurvey/reducer';
import enterpriseReducer from 'containers/Enterprise/reducer';
import chatSurveyReducer from 'containers/ChatSurvey/reducer';

import conciergeCalendarReducer from 'containers/ConciergeCalendar/reducer';
import addAddressReducer from 'containers/AddAddress/reducer';
import userStoriesListingReducer from 'containers/UserStory/UserStoriesListing/reducer';
import diseaseDetailsReducer from 'containers/DiseaseScreen/DiseaseListing/reducer';
import landingReducer from 'containers/LandingPage/LandingPageScreen/reducer';
import pepsicoReducer from 'containers/PepsicoSurvey/reducer';
import vasReducer from 'containers/VasPage/VasPageScreen/reducer';
import Loading from 'containers/Loading/reducer';
import policyBazar from 'containers/PolicyBazar/reducer';
import kotakPlansReducer from 'containers/KotakPlans/reducer';
import kotakFormReducer from 'containers/KotakForm/reducer';
import requestLocationReducer from 'containers/RequestLocation/reducer';
import apolloSurveyReducer from 'containers/ApolloSurvey/reducer';
import accertifySurveyReducer from 'containers/AccertifySurvey/reducer';
import shellSurveyReducer from 'containers/ShellSurvey/reducer';
import nokConsentWmsReducer from 'containers/NokConsentWms/reducer';
import kotakServicesReducer from 'containers/KotakServices/reducer';

const persistConfig = {
  key: 'root',
  storage: localforage,
  whitelist: ['login'],
};

let combinedReducers = combineReducers({
  login: loginReducer,
  home: homeReducer,
  mohTv: mohTvReducer,
  juniper: juniperReducer,
  mediaListing: mediaListingReducer,
  showDetails: showDetailsReducer,
  blogs: blogsReducer,
  conciergeServices: conciergeReducer,
  membership: plansReducer,
  amexSurvey: amexSurveyReducer,
  enterprise: enterpriseReducer,
  conciergeCalendar: conciergeCalendarReducer,
  addAddress: addAddressReducer,
  userStoriesListing: userStoriesListingReducer,
  diseaseListing: diseaseDetailsReducer,
  chatSurvey: chatSurveyReducer,
  landing: landingReducer,
  pepsicoSurvey: pepsicoReducer,
  vas: vasReducer,
  loading: Loading,
  policyBazar,
  kotakPlans: kotakPlansReducer,
  kotakServices: kotakServicesReducer,
  kotakForm: kotakFormReducer,
  requestLocation: requestLocationReducer,
  apolloSurvey: apolloSurveyReducer,
  accertifySurvey: accertifySurveyReducer,
  shellSurvey: shellSurveyReducer,
  nokConsentWms: nokConsentWmsReducer,
});

if (!isEqual(typeof window, 'undefined')) {
  combinedReducers = persistReducer(persistConfig, combinedReducers);
}

export default combinedReducers;
