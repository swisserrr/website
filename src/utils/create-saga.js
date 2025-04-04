import { all } from 'redux-saga/effects';

import homeSaga from 'containers/Home/saga';
import juniperSaga from 'containers/Juniper/saga';
import loginSaga from 'containers/Login/saga';
import accountSaga from 'containers/Account/saga';
import ProfileSaga from 'containers/Profile/EditProfile/saga';
import showDetailsSaga from 'containers/ShowDetails/saga';
import conciergeServicesSaga from 'containers/ConciergeServices/saga';
import blogSaga from 'containers/Blogs/BlogsHomePage/saga';
import mediaListingSaga from 'containers/MediaListing/saga';
import MohtvHomePageSaga from 'containers/Mohtv/MohtvHomePage/saga';
import MohtvSubCategoryPageSaga from 'containers/Mohtv/MohtvSubCategoryPage/saga';
import PlanSaga from 'containers/Membership/saga';
import AmexSurveySaga from 'containers/AmexSurvey/saga';
import EnterpriseSaga from 'containers/Enterprise/saga';
import ConciergeCalendarSaga from 'containers/ConciergeCalendar/saga';
import AddAddressSaga from 'containers/AddAddress/saga';
import userStoriesListingSaga from 'containers/UserStory/UserStoriesListing/saga';
import userStoryDetailsSaga from 'containers/UserStory/UserStoryDetails/saga';
import DiseaseListingSaga from 'containers/DiseaseScreen/DiseaseListing/saga';
import DiseaseDetailsSaga from 'containers/DiseaseScreen/DiseasePage/saga';
import ChatSurveySaga from 'containers/ChatSurvey/saga';
import CyientSurveySaga from 'containers/CyientSurvey/saga';
import CareHealthInsuranceSaga from 'containers/CareHealthInsurance/saga';
import LandingDetailsSaga from 'containers/LandingPage/LandingPageScreen/saga';
import PepsicoSurveySaga from 'containers/PepsicoSurvey/saga';
import VasDetailsSaga from 'containers/VasPage/VasPageScreen/saga';
import PolicyBazarSaga from 'containers/PolicyBazar/saga';
import kotakPlansSaga from 'containers/KotakPlans/saga';
import kotakFormSaga from 'containers/KotakForm/saga';
import requestLocationSaga from 'containers/RequestLocation/saga';
import apolloSurveySaga from 'containers/ApolloSurvey/saga';
import accertifySurveySaga from 'containers/AccertifySurvey/saga';
import sehllSurveySaga from 'containers/ShellSurvey/saga';
import nokConsentWmsSaga from 'containers/NokConsentWms/saga';
import kotakServicesSaga from 'containers/KotakServices/saga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
    juniperSaga(),
    loginSaga(),
    accountSaga(),
    mediaListingSaga(),
    showDetailsSaga(),
    blogSaga(),
    conciergeServicesSaga(),
    MohtvHomePageSaga(),
    MohtvSubCategoryPageSaga(),
    PlanSaga(),
    ProfileSaga(),
    AmexSurveySaga(),
    ConciergeCalendarSaga(),
    AddAddressSaga(),
    userStoriesListingSaga(),
    userStoryDetailsSaga(),
    ChatSurveySaga(),
    CyientSurveySaga(),
    CareHealthInsuranceSaga(),
    DiseaseListingSaga(),
    DiseaseDetailsSaga(),
    LandingDetailsSaga(),
    PepsicoSurveySaga(),
    VasDetailsSaga(),
    EnterpriseSaga(),
    PolicyBazarSaga(),
    kotakPlansSaga(),
    kotakFormSaga(),
    requestLocationSaga(),
    apolloSurveySaga(),
    accertifySurveySaga(),
    sehllSurveySaga(),
    nokConsentWmsSaga(),
    kotakServicesSaga(),
  ]);
}
