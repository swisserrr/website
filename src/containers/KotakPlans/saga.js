import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import Helpers from 'utils/helpers';

import { GET_ACTIVE, GET_COINS, GET_PLANS } from './constants';
import {
  getKotakPlansSuccess,
  getKotakPlansFail,
  getKotakCoinsSuccess,
  getKotakCoinsFail,
  getActivePlanSuccess,
  getActivePlanFail,
} from './actions';

import { APIS } from '../../constants';

function* getPlansHandler(id) {
  // const userData = JSON.parse(localStorage.getItem('user_data'));
  const url = Helpers.getUrl(APIS.GET_PLANS_KOTAK + '?partner_id=' + id?.payload + '&root=plan');

  const options = {
    method: 'GET',
    url,
  };

  try {
    const res = yield call(request, options);
    yield put(getKotakPlansSuccess(res?.data));
  } catch (e) {
    yield put(getKotakPlansFail(e));
  }
}
function* getCoinsHandler() {
  const userData = JSON.parse(localStorage.getItem('user_data'));

  const url = Helpers.getUrl(APIS.KOTAK_COINS + userData?.partnerObj?.userPartnerInfoUuid);
  //console.log('CoinsUrl', url);

  const options = {
    method: 'GET',
    url,
  };

  try {
    //console.log('CoinsSaga');
    const res = yield call(request, options);
    //console.log('CoinsRes', res.data);

    yield put(getKotakCoinsSuccess(res?.data));
  } catch (e) {
    //console.log('CoinsSagaErr', e);
    yield put(getKotakCoinsFail(e));
  }
}
function* getActivePlanHandler() {
  const userData = JSON.parse(localStorage.getItem('user_data'));

  // const url = Helpers.getUrl(APIS.USER_ACTIVE_PLAN + '054650aa-792b-4d7e-9f60-a38467e9b713');
  const url = Helpers.getUrl(APIS.USER_ACTIVE_PLAN + userData?.uuid);
  //console.log('ActivePlans', url);

  const options = {
    method: 'GET',
    url,
  };

  try {
    //console.log('ActivePlansSaga');
    const res = yield call(request, options);
    //console.log('ActivePLansRes', res.data);
    if (!userData?.active_user_plan && res?.data?.status) {
      localStorage.setItem(
        'user_data',
        JSON.stringify({
          ...userData,
          active_user_plan: {
            plan: {
              name: res?.data?.data?.['user_plans.name'],
              uuid: res?.data?.data?.['user_plans.uuid'],
              description: res?.data?.data?.['user_plans.description'],
              plan_category_id: res?.data?.data?.['user_plans.plan_category_id'],
            },
          },
        })
      );
    }

    yield put(getActivePlanSuccess(res?.data));
    //console.log('ActivePlansSagaSuccess');
  } catch (e) {
    //console.log('ActivePlansSagaErr', e);
    yield put(getActivePlanFail(e));
  }
}

// Individual exports for testing
export default function* kotakPlansSaga() {
  yield takeLatest(GET_PLANS, getPlansHandler);
  yield takeLatest(GET_COINS, getCoinsHandler);
  yield takeLatest(GET_ACTIVE, getActivePlanHandler);
}
