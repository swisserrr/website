const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
import toString from 'lodash/toString';
import toLower from 'lodash/toLower';

export const isValid = (number, regionCode) => {
  return phoneUtil.isValidNumberForRegion(phoneUtil.parse(number, regionCode), regionCode);
};

export const getPhoneNumberDetails = numberVal => {
  const number = phoneUtil.parseAndKeepRawInput(numberVal);
  return {
    countryCode: toString(number.getCountryCode()),
    phoneNumber: toString(number.getNationalNumber()),
    regionCode: toLower(toString(phoneUtil.getRegionCodeForNumber(number))),
  };
};

export const getRegionCode = val => {
  const regionCode = phoneUtil.getRegionCodeForCountryCode(val);
  return regionCode;
};
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
