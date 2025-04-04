import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import includes from 'lodash/includes';
import toString from 'lodash/toString';
import { toast } from 'react-toastify';
import config from '../config';
import { CONSTANTS } from '../constants';
import isEmpty from 'lodash/isEmpty';

import GlobalConfig from '../utils/globalVariables';

export function isClientAndClevertapExists() {
  return !isEqual(typeof window, 'undefined') && window?.clevertap;
}

export function initializeClevertap() {
  if (isClientAndClevertapExists()) {
    window?.clevertap?.init?.(config.CLEVERTAP_ACCOUNT_ID, config.CLEVERTAP_REGION);
    window?.clevertap?.setLogLevel?.(3);
    GlobalConfig.isClevertapInitialised = true;
    //console.log('++++++CT++++', window.clevertap.getCleverTapID());
    return window.clevertap;
  } else {
    toast.error('Error while initializing CleverTap!!!', {
      autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
      draggable: false,
    });
  }
}

export function pushEvent(eventName, eventParams) {
  if (isClientAndClevertapExists()) {
    window?.clevertap?.event?.push?.(eventName, eventParams);
    return true;
  }
  toast.error('Error while pushing event!!!', {
    autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
    draggable: false,
  });
}

// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

export function onUserLoginHandler(eventParams) {
  //console.log('++++++params++++++', eventParams);
  if (isClientAndClevertapExists()) {
    window?.clevertap?.onUserLogin?.push({
      Site: eventParams,
    });
    window?.clevertap.privacy.push({ useIP: true });

    return true;
  }
  toast.error('Error while clevertap onUserLogin event!!!', {
    autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
    draggable: false,
  });
}

export function updateProfileCtHandler(eventParams) {
  if (isClientAndClevertapExists()) {
    window?.clevertap?.profile?.push({
      Site: eventParams,
    });
    return true;
  }
  toast.error('Error while clevertap update profile event!!!', {
    autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
    draggable: false,
  });
}

const handleNullOrEmptyValues = key => {
  if (!isNil(key)) {
    return key;
  }
  return 'N/A';
};
const handleNullOrEmptyDate = key => {
  if (!isNil(key) && !isEqual(key, 'N/A')) {
    const date = new Date(key);
    return date;
  }
  return 'N/A';
};

const getPhoneNumber = number => {
  if (includes(number, '+')) {
    return number;
  }
  return `+${number}`;
};

export const manipulateUserUpdate = res => {
  let userPayload = {
    Name: `${get(res, 'first_name', get(res, 'data.user_data.first_name', 'N/A'))} ${get(
      res,
      'last_name',
      get(res, 'data.user_data.last_name', 'N/A')
    )}`,
    full_name: `${get(res, 'first_name', get(res, 'data.user_data.first_name', 'N/A'))} ${get(
      res,
      'last_name',
      get(res, 'data.user_data.last_name', 'N/A')
    )}`,
  };

  const Email = get(res, 'email');

  if (!isEmpty(Email)) {
    userPayload = Object.assign(userPayload, {
      email_id: handleNullOrEmptyValues(get(res, 'email', 'N/A')),
    });

    if (!isNil(Email)) {
      userPayload = Object.assign(userPayload, {
        Email,
      });
    }
  }

  if (!isEmpty(get(res, 'consumer_data.dob'))) {
    userPayload = Object.assign(userPayload, {
      date_of_birth: new Date(handleNullOrEmptyDate(get(res, 'consumer_data.dob', 'N/A'))),
    });
  }

  if (!isNil(get(res, 'consumer_data.blood_group'))) {
    userPayload = Object.assign(userPayload, {
      blood_group: handleNullOrEmptyValues(get(res, 'consumer_data.blood_group', 'N/A')),
    });
  }

  if (!isNil(get(res, 'whatsapp_mobile_number'))) {
    userPayload = Object.assign(userPayload, {
      whatsapp_mobile_number: handleNullOrEmptyValues(get(res, 'whatsapp_mobile_number', 'N/A')),
    });
  }

  if (!isNil(get(res, 'gender'))) {
    userPayload = Object.assign(userPayload, {
      gender: isEqual(get(res, 'gender'), 1) ? 'Male' : isEqual(get(res, 'gender'), 2) ? 'Female' : 'Other',
    });
  }

  if (!isNil(get(res, 'is_coorperate_user'))) {
    userPayload = Object.assign(userPayload, {
      is_coorperate_user: isEqual(get(res, 'is_coorperate_user'), '0') ? 'false' : 'true',
    });
  }

  if (!isNil(get(res, 'consumer_data.whatsapp_mobile_number_opt_in'))) {
    userPayload = Object.assign(userPayload, {
      'MSG-whatsapp': get(res, 'consumer_data.whatsapp_mobile_number_opt_in'),
    });
  }

  if (!isEmpty(get(res, 'consumer_data.created_at'))) {
    userPayload = Object.assign(userPayload, {
      user_created_at: handleNullOrEmptyDate(get(res, 'consumer_data.created_at')),
    });
  }

  return userPayload;
};

export const userDataForCtEvents = user => {
  const updatedUser = {
    Active_plan: handleNullOrEmptyValues(get(user, 'active_user_plan', 'N/A')),
    Identity: get(user, 'uuid', 'N/A'),
    Name: `${get(
      user,
      'full_name',
      `${get(user, 'userOauthData.user_oauth_provider_data.first_name', 'N/A')} ${get(
        user,
        'userOauthData.user_oauth_provider_data.last_name',
        'N/A'
      )}`
    )}`,
    Phone: `${getPhoneNumber(get(user, 'country_code', 'N/A') + get(user, 'mobile_number', 'N/A'))}`,
    Address: `${get(user, 'address.locality', 'Locality N/A')} , ${get(
      user,
      'address.address_line_1',
      'Address line 1 N/A'
    )} ${get(user, 'address.address_line_2', 'Address line 2 N/A')}, ${get(user, 'address.city', 'City N/A')} , ${get(
      user,
      'address.state',
      'State N/A'
    )}, ${get(user, 'address.country', 'Country N/A')}, ${get(user, 'address.pincode', 'Pincode N/A')}`,
    blood_group: handleNullOrEmptyValues(get(user, 'consumer_data.blood_group', 'N/A')),
    Email: get(user, 'email', get(user, 'userOauthData.user_oauth_provider_data.email', 'N/A')),
    country_code: handleNullOrEmptyValues(get(user, 'country_code', 'N/A')),
    customer_id: handleNullOrEmptyValues(get(user, 'consumer_data.customer_id', 'N/A')),
    date_of_birth: handleNullOrEmptyDate(get(user, 'consumer_data.dob', 'N/A')),
    device_type: handleNullOrEmptyValues(get(user, 'device_type', 'N/A')),
    email_id: get(user, 'email', get(user, 'userOauthData.user_oauth_provider_data.email', 'N/A')),
    full_name: `${get(
      user,
      'full_name',
      `${get(user, 'userOauthData.user_oauth_provider_data.first_name', 'N/A')} ${get(
        user,
        'userOauthData.user_oauth_provider_data.last_name',
        'N/A'
      )}`
    )}`,
    geo_latitude: handleNullOrEmptyValues(get(user, 'address.geo_latitude', 'N/A')),
    geo_longitude: handleNullOrEmptyValues(get(user, 'address.geo_longitude', 'N/A')),
    is_whatsapp_verify: toString(get(user, 'consumer_data.is_whatsapp_verify', 'N/A')),
    live_video_count_used: toString(
      get(
        user,
        'getMohtvShowsUserConfigData.configuration.live_video_count_used',
        get(user, 'getMohtvShowsUserConfigData.configuration.live_video_count_used', '0')
      )
    ),
    mobile_number: `${getPhoneNumber(get(user, 'country_code', 'N/A') + get(user, 'mobile_number', 'N/A'))}`,
    nok_country_code: handleNullOrEmptyValues(get(user, 'consumer_data.nok_country_code', 'N/A')),
    nok_email: handleNullOrEmptyValues(get(user, 'consumer_data.nok_email', 'N/A')),
    nok_name: handleNullOrEmptyValues(get(user, 'consumer_data.nok_name', 'N/A')),
    nok_phone: handleNullOrEmptyValues(get(user, 'consumer_data.nok_phone', 'N/A')),
    // device_city,
    // device_country,
    // device_latitude,
    // device_locality,
    // device_longitude,
    // device_state,
    // device_zip,
    // TG,
    // where_did_you_hear_about_us,
    // Condition,
    // Interest,
    // medical_condition,
    // Help,
  };
  return updatedUser;
};

export const utmDataHandler = utm => {
  const utmPayload = {
    source: get(utm, 'utm_source', 'N/A'),
    medium: get(utm, 'utm_medium', 'N/A'),
    campaign_name: get(utm, 'utm_campaign', 'N/A'),
    content: get(utm, 'utm_content', 'N/A'),
    term: get(utm, 'utm_term', 'N/A'),
    placement: get(utm, 'utm_placement', 'N/A'),
    device: get(utm, 'utm_source', 'N/A'),
    network: get(utm, 'utm_source', 'N/A'),
  };
  return utmPayload;
};
