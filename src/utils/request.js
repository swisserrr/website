// Global request object.

/* eslint-disable no-param-reassign */
import axios from 'axios';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { toast } from 'react-toastify';

import { CONSTANTS } from '../constants';

export const axiosInstance = axios.create({
  responseType: 'json',
});

axiosInstance.interceptors.request.use(
  config => {
    // console.log('REQUEST: ', config);
    return config;
  },
  err => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  response => {
    // console.log('RESPONSE: ', response);
    if (get(response, 'data')) return response.data;
    return response;
  },
  err => {
    // Show error here.
    const shouldShowToast =
      !isEqual(err?.response?.data?.code, 1001) &&
      !isEqual(err?.response?.data?.code, 1002) &&
      !(
        window.location.href.includes('medibuddy') &&
        window.location.href.includes('login') &&
        err?.response?.status === 460
      );

    if (shouldShowToast) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.data?.message ||
          err?.data?.data?.message ||
          err?.message ||
          err?.error ||
          'Something went wrong!',
        {
          autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
          draggable: false,
        }
      );
    }
    if (err?.response && err?.response?.status === 401) {
      // Redirect to /login if 401 Unauthorized error occurs
      window.location.href = '/login';
    }

    return Promise.reject(err);
  }
);

export default function request(options) {
  return axiosInstance(options);
}
