import { findIndex, get } from 'lodash';
import isEqual from 'lodash/isEqual';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const AccountDetailsSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name is required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});

const PhoneSchema = Yup.object().shape({
  mobile_number: Yup.string().required('Phone number is required'),
  country_code: Yup.string(),
  code: Yup.string(),
});

const ConciergeSchema = Yup.object().shape({
  date: Yup.string().required('Please select any date'),
  address: Yup.string().required('Please select any address'),
  timeSlot: Yup.string().required('Please select any time slot'),
});

const AddressSchema = Yup.object().shape({
  address_line_1: Yup.string().required('Address is required'),
  state: Yup.string().required('State  is required'),
  city: Yup.string().required('City  is required'),
  country: Yup.string().required('Country is required'),
  pincode: Yup.string().required('Pin code  is required'),
  landmark: Yup.string().required('Landmark is required'),
});

const OTPSchema = Yup.object().shape({
  otp: Yup.string()
    .min(4, 'All 4 digits are required')
    .required('OTP is required'),
});

const profileValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Last name is required.'),
  email: Yup.string()
    .email('Correct email is required.')
    .nullable(),
});

const amexReviewSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email()
    .required('Email is requird.'),
  countryCode: Yup.string(),
  gender: Yup.string().required('Gender is required.'),
  phoneNumber: Yup.string().required('Phone number is required.'),
  numberOfEldersOpted: Yup.number(),
  employee_code: Yup.string().required('Corporate code is required.'),
  parentsDetails: Yup.array()
    .transform(originalValue => (originalValue.length > 0 ? [originalValue[0]] : []))
    .of(
      Yup.object({
        name: Yup.string().required('Name is required.'),
        dob: Yup.string().required('DOB is required.'),
        countryCode: Yup.string(),
        phoneNumber: Yup.string().required('Phone number is required.'),
        city: Yup.string().required('City is required.'),
        state: Yup.string().required('State is required.'),
        elder_relationship_with_you: Yup.string().required('Relationship is required.'),
      })
    ),
});
const cyientReviewSchema = heading =>
  Yup.object().shape({
    name: Yup.string().required('Name is required.'),
    email: Yup.string()
      .email()
      .required('Email is required.'),
    countryCode: Yup.string(),
    phoneNumber: Yup.string().required('Phone number is required.'),
    gender: Yup.string().required('Gender is required.'),
    employee_code:
      !isEqual(heading, 'Google') && isEqual(heading, 'Apollo') && Yup.string().required('Corporate code is required.'),
    numberOfEldersOpted: Yup.number(),
    parentsDetails: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Name is required.'),
        dob: Yup.string().required('DOB is required.'),
        countryCode: Yup.string(),
        phoneNumber: Yup.string().required('Phone number is required.'),
        city: Yup.string().required('City is required.'),
        state: Yup.string().required('State is required.'),
        elder_relationship_with_you: Yup.string().required('Relationship is required.'),
      })
    ),
  });

const shellReviewSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email()
    .required('Email is required.'),
  countryCode: Yup.string(),
  phoneNumber: Yup.string().required('Phone number is required.'),
  gender: Yup.string().required('Gender is required.'),
  employee_code: Yup.string().required('employee code is required.'),
  numberOfEldersOpted: Yup.number(),
  parentsDetails: Yup.array().of(
    Yup.object({
      name: Yup.string().required('Name is required.'),
      dob: Yup.string().required('DOB is required.'),
      countryCode: Yup.string(),
      phoneNumber: Yup.string().required('Phone number is required.'),
      city: Yup.string().required('City is required.'),
      state: Yup.string().required('State is required.'),
      elder_relationship_with_you: Yup.string().required('Relationship is required.'),
    })
  ),
});

const policyBazaarReviewSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Name is required.'),
    email: Yup.string()
      .email()
      .required('Email is required.'),
    countryCode: Yup.string(),
    phoneNumber: Yup.string().required('Phone number is required.'),
    gender: Yup.string().required('Gender is required.'),
    numberOfEldersOpted: Yup.number(),
    parentsDetails: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Name is required.'),
        dob: Yup.string().required('DOB is required.'),
        countryCode: Yup.string(),
        phoneNumber: Yup.string().required('Phone number is required.'),
        city: Yup.string().required('City is required.'),
        state: Yup.string().required('State is required.'),
        elder_relationship_with_you: Yup.string().required('Relationship is required.'),
      })
    ),
  });

const careHealthInsuranceReviewSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email()
    .required('Email is requird.'),
  countryCode: Yup.string(),
  mobile: Yup.string().required('Phone number is required.'),
  exploring_emoha_for: Yup.string('Please select any option.'),
});

const LandingPageSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  what_is_your_top_concern_for_your_parents: Yup.string().required('Required'),
});

const BusinessPartnerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  investment_budget_of_5_lacs_for_business: Yup.bool().required('Required'),
  city: Yup.string().required('Required'),
});

const VasLandingPageSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  areaPincode: Yup.string().required('Required'),
});

const enterpriseReviewSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  residential_address: Yup.string().required('Address is required.'),
  email_id: Yup.string()
    .email('Not a valid email')
    .required('Corporate email is required.'),
  city: Yup.string().required('City is required.'),
  state: Yup.string().required('State is required.'),
  p_email: Yup.string(),
  gender: Yup.string().required('Gender is required.'),
  countryCode: Yup.string(),
  phoneNumber: Yup.string()
    .required('Phone number is required.')
    .matches(/^\d{10}$/, 'Invalid Mobile number'),
  consent: Yup.bool().oneOf([true], 'Field must be checked'),
  notify: Yup.bool().oneOf([true], 'Field must be checked'),
  parentsDetails: Yup.array()
    .transform(originalValue => {
      const requiredRelationIndex = findIndex(originalValue, item => isEqual(get(item, 'is_primary_elder'), true));
      if (isEqual(requiredRelationIndex, 0)) {
        return [originalValue[0], null];
      } else if (isEqual(requiredRelationIndex, 1)) {
        return [null, originalValue[1]];
      }
    })
    .of(
      Yup.object({
        name: Yup.string().required('Name is required.'),
        age: Yup.string().required('Age is required.'),
        countryCode: Yup.string(),
        phoneNumber: Yup.string()
          .required('Phone number is required.')
          .matches(/^\d{10}$/, 'Invalid Phone number'),
        elder_relationship_with_you: Yup.string().required('Relationship is required.'),
      }).nullable(true)
    ),
});

export {
  SignupSchema,
  AccountDetailsSchema,
  PhoneSchema,
  OTPSchema,
  BusinessPartnerSchema,
  profileValidationSchema,
  ConciergeSchema,
  AddressSchema,
  amexReviewSchema,
  cyientReviewSchema,
  careHealthInsuranceReviewSchema,
  LandingPageSchema,
  VasLandingPageSchema,
  enterpriseReviewSchema,
  policyBazaarReviewSchema,
  shellReviewSchema,
};
