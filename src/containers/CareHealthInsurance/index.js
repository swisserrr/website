/**
 *
 * CareHealthInsurance
 *
 */

import React, { memo, useCallback } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import IntlTelInput from 'react-intl-tel-input';
import { Formik, Form, useFormikContext } from 'formik';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import split from 'lodash/split';
import isEqual from 'lodash/isEqual';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { CustomInput, CustomSelect, CustomButton } from './styles.js';
import { careHealthInsuranceReviewSchema } from 'utils/validationSchema';
import { getPhoneNumberDetails, isValid } from 'utils/phoneUtil';
import makeSelectCareHealthInsurance from './selectors';
import { submitCareHealthInsuranceData } from './actions';
import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));

function CustomForm({ handleSubmitData }) {
  const { errors, values, handleChange, setFieldValue, validateForm } = useFormikContext();
  const router = useRouter();
  const customLabel = text => {
    return (
      <HomePageText
        padding={{ xs: '0 0 10px 0', md: '0 0 10px 0' }}
        fontWeight={{ xs: '500', md: '500' }}
        textTransform={{ xs: 'none', md: 'none' }}
        fontSize={{ xs: '1.5rem', md: '1.5rem' }}
        lineHeight={{ xs: '1.8rem', md: '1.8rem' }}>
        {`${text}`} <span style={{ color: 'red' }}>&#42;</span>
      </HomePageText>
    );
  };

  const divPadding = children => {
    return (
      <div
        style={{
          padding: '0 0 2rem 0rem',
        }}>
        {children}
      </div>
    );
  };

  const errorDiv = text => {
    if (text) {
      return (
        <div
          style={{
            paddingTop: '1rem',
            color: 'red',
            fontFamily: 'inter',
            fontStyle: 'italic',
            fontSize: '1.5rem',
          }}>
          {text}
        </div>
      );
    }
    return null;
  };

  const validatePhoneNumbers = () => {
    let invalidCount = 0;
    map(values.parentsDetails, item => {
      const isValidRes = isValid(
        get(item, `phoneNumber`),
        getPhoneNumberDetails(`+${get(item, `countryCode`)}${get(item, `phoneNumber`)}`).regionCode
      );
      if (!isValidRes) {
        invalidCount++;
      }
    });
    if (invalidCount === 0) {
      return true;
    }
    return false;
  };

  const sendBackToHome = useCallback(() => {
    router.replace(
      {
        pathname: '/',
      },
      '/'
    );
  }, []);

  const onSubmit = () => {
    validateForm(values)
      .then(result => {
        if (isEmpty(result)) {
          const isValidRes = isValid(
            get(values, 'mobile'),
            getPhoneNumberDetails(`+${get(values, 'countryCode')}${get(values, 'mobile')}`).regionCode
          );

          const isValidatePhoneNumbersRes = validatePhoneNumbers();
          if (isValidRes && isValidatePhoneNumbersRes) {
            const finalValues = {
              name: values?.name,
              email: values?.email,
              regionCode: values?.regionCode,
              mobile: values?.mobile,
              exploring_emoha_for: values?.exploring_emoha_for,
              country_code: values.countryCode,
              lead_source: 'Alliances & Corporate',
              lead_source_category: 'Others',
              utm_campaign: 'care-health-user-onboarding',
              lead_sub_source1: isEqual(router.pathname, '/') ? 'home' : split(router.asPath, '/')[1],
            };

            handleSubmitData(finalValues, sendBackToHome);
          } else {
            toast.error('Phone numbers is not valid!!', {
              autoClose: 10000,
              draggable: false,
            });
          }
        }
      })
      .catch(() => {
        // handle error
      });
  };

  return (
    <Form
      style={{
        width: '100%',
      }}>
      {divPadding(
        <>
          {customLabel('Full Name')}
          <CustomInput
            backgroundColor="#F8F8F8"
            name="name"
            width={'100%'}
            value={values.name}
            type="text"
            onChange={handleChange}
            placeholder="Enter first & last name"
          />
          {errorDiv(errors?.name)}
        </>
      )}

      {divPadding(
        <>
          {customLabel('Mobile Number')}
          <IntlTelInput
            containerClassName="intl-tel-input-contact amex-input"
            inputClassName="otp_style_contact_amex"
            preferredCountries={['in']}
            onPhoneNumberChange={(_, phoneNumber) => {
              const regex = new RegExp(/^[0-9]*$/);

              if (regex.test(phoneNumber)) {
                setFieldValue('mobile', phoneNumber);
              }
            }}
            value={values?.mobile}
            separateDialCode={true}
            placeholder="Enter your number"
            onSelectFlag={(_, infoObj) => {
              setFieldValue('mobile', '');
              setFieldValue('countryCode', infoObj?.dialCode);
              setFieldValue('regionCode', infoObj?.iso2);
            }}
          />
          {errorDiv(errors?.mobile)}
        </>
      )}

      {divPadding(
        <>
          {customLabel('Email')}

          <CustomInput
            backgroundColor="#F8F8F8"
            name="email"
            width={'100%'}
            value={values.email}
            type="text"
            onChange={handleChange}
            margin="1rem 0"
            placeholder="We keep your information safe"
          />
          {errorDiv(errors?.email)}
        </>
      )}
      {divPadding(
        <>
          {customLabel('Opting services for?')}
          <CustomSelect
            value={values.exploring_emoha_for}
            sx={{
              '& fieldset': { border: 'none' },
            }}
            onChange={event => {
              setFieldValue('exploring_emoha_for', event.target.value);
            }}
            inputProps={{ 'aria-label': 'With label' }}
            displayEmpty>
            <MenuItem value="myself or spouse">Myself or Spouse</MenuItem>
            <MenuItem value="my parents">My parents</MenuItem>
          </CustomSelect>
          {errorDiv(errors?.exploring_emoha_for)}
        </>
      )}
      <CustomButton
        width="100%"
        variant="contained"
        margin={'0 0 2rem 0'}
        color="primary"
        backgroundColor="#1A1A1A"
        onClick={onSubmit}>
        Submit
      </CustomButton>
    </Form>
  );
}

export function CareHealthInsurance({ handleSubmitData }) {
  return (
    <>
      <HeaderBar position="relative" backgroundColor="#1A1A1A" hideSideButtons={true} hideLogo={true} />
      <HomePageBox
        display="flex"
        height={{ xs: '100%', md: '90vh' }}
        backgroundColor={{ xs: '#F4EFEF', md: '#F4EFEF' }}
        padding={{ xs: '1.2rem 2rem', md: '1.2rem 2rem' }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position={{ xs: 'relative', md: 'relative' }}
        width={{ xs: '100%', md: '100%' }}>
        <HomePageBox width={{ xs: '90%', md: '45%' }} margin={{ xs: '0 auto', md: '0 auto' }}>
          <HomePageText
            color={{
              xs: '#CC4746',
              md: '#CC4746',
            }}
            fontSize={{
              xs: '2.2rem',
              md: '2.2rem',
            }}
            fontWeight={{ xs: '500', md: '500' }}>
            Member Onboarding Consent Form
          </HomePageText>
          <HomePageText
            color={{
              xs: '#1A1A1A',
              md: '#1A1A1A',
            }}
            fontSize={{
              xs: '1.7rem',
              md: '1.7rem',
            }}
            textTransform
            fontWeight={{ xs: '500', md: '500' }}
            padding={{ xs: '0 0rem 3rem 0', md: '0 0rem 3rem 0' }}>
            We request you to kindly fill out the form at the earliest so that we can start this beautiful journey.
          </HomePageText>
          <Formik
            initialValues={{
              name: '',
              email: '',
              countryCode: '91',
              regionCode: 'in',
              mobile: '',
              exploring_emoha_for: '',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={careHealthInsuranceReviewSchema}>
            <CustomForm handleSubmitData={handleSubmitData} />
          </Formik>
        </HomePageBox>
      </HomePageBox>
    </>
  );
}

CareHealthInsurance.propTypes = { ...CustomForm };
CustomForm.propTypes = { ...CustomForm };

const mapStateToProps = createStructuredSelector({
  careHealthInsurance: makeSelectCareHealthInsurance(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitData: (payload, callback) => dispatch(submitCareHealthInsuranceData(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CareHealthInsurance);
