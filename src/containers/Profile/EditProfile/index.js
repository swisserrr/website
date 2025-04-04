/**
 *
 * EditProfile
 *
 */

import React, { memo, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import Checkbox from '@mui/material/Checkbox';
import MuiContainer from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import includes from 'lodash/includes';
import get from 'lodash/get';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import startsWith from 'lodash/startsWith';
import isEqual from 'lodash/isEqual';
import toNumber from 'lodash/toNumber';
import isNil from 'lodash/isNil';

import {
  CameraContainer,
  CameraIconContainer,
  CheckBoxContainer,
  Heading,
  ImageContainer,
  ReceiveText,
  Input,
  HeadingContainer,
  InformationContainer,
  CustomImage,
  CustomSelect,
  CustomImageProfilePhoto,
} from './styles';
import makeSelectEditProfile from './selectors';
import Image from 'utils/CustomImage';
import { profileValidationSchema } from 'utils/validationSchema';
import { getPhoneNumberDetails, isValid } from 'utils/phoneUtil';
import IntlTelInput from 'react-intl-tel-input';
import { genderItems } from 'utils/static';
import { updateUser, uploadProfilePicture } from 'containers/Login/actions';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const Footer = dynamic(() => import('components/Footer'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));

export function EditProfile({ handleUpdateUser, handleProfilePictureUpdate }) {
  const { user } = useSelector(state => state.login);
  const [isSelectOne, setIsSelectOne] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  const numberFormatter = useCallback((code, number) => {
    if (includes(code, '+')) {
      return `${code}${number}`;
    }
    return `+${code}${number}`;
  });

  const whatsAppNumber = numberFormatter(
    get(user, 'consumer_data.whatsapp_country_code') ? get(user, 'consumer_data.whatsapp_country_code') : '+91',
    get(user, 'consumer_data.whatsapp_mobile_number')
  );

  const userContactNumber = numberFormatter(get(user, 'country_code'), get(user, 'mobile_number'));

  const onFileChange = e => {
    let files = e.target.files;
    if (files) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = event => {
        const data = {
          data: {
            image: event.target.result,
          },
          userId: user?.uuid,
          error: err => {
            toast.error(err?.message ?? 'Something went wrong!!!', {
              autoClose: 10000,
              draggable: false,
            });
          },
        };
        handleProfilePictureUpdate(data);
      };
    }
  };
  const getNumberDetails = useCallback(() => {
    if (user) {
      let numberObj = getPhoneNumberDetails(userContactNumber);
      if (get(user, 'consumer_data.whatsapp_mobile_number')) {
        numberObj = getPhoneNumberDetails(whatsAppNumber);
      }
      return numberObj;
    }
    return;
  }, [userContactNumber, whatsAppNumber, user, getPhoneNumberDetails]);

  const onSave = useCallback(
    values => {
      const isValidRes = isValid(
        get(values, 'whatsappMobileNumber'),
        getPhoneNumberDetails(`+${get(values, 'whatsAppCallingCode')}${get(values, 'whatsappMobileNumber')}`).regionCode
      );
      if (isValidRes) {
        const payload = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          gender: toNumber(values.gender),
          mobile_number: values.mobileNumber,
          whatsapp_mobile_number: values.whatsappMobileNumber,
          whatsapp_country_code: values.whatsAppCallingCode,
          whatsapp_mobile_number_opt_in: values.receiveUpdatesOnWhatsApp,
          userId: user?.uuid,
        };
        handleUpdateUser(payload, () => {
          let path = '/';
          if (!isEmpty(get(router, 'query.from'))) {
            if (isEqual(get(router, 'query.from'), 'home')) {
              router.push(path);
            } else {
              if (startsWith(`${get(router, 'query.from')}`, '/')) {
                path = `${get(router, 'query.from')}`;
              } else {
                path = `/${get(router, 'query.from')}`;
              }
              router.push(path);
            }
          } else {
            router.push(path);
          }
        });
      } else {
        toast.error('Please enter a valid number.', {
          autoClose: 10000,
          draggable: false,
        });
      }
    },
    [user, router]
  );
  return (
    <section style={{ backgroundColor: '#f8f8f8', paddingTop: 100 }}>
      <HeaderBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      <Formik
        enableReinitialize
        initialValues={{
          firstName: get(user, 'first_name'),
          lastName: get(user, 'last_name'),
          email: get(user, 'email'),
          gender: get(user, 'gender'),
          mobileNumber: get(user, 'mobile_number'),
          whatsappMobileNumber: getNumberDetails()?.phoneNumber,
          whatsAppCallingCode: getNumberDetails()?.countryCode,
          whatsAppCountryCode: getNumberDetails()?.regionCode,
          receiveUpdatesOnWhatsApp: get(user, 'consumer_data.whatsapp_mobile_number_opt_in', false),
        }}
        validationSchema={profileValidationSchema}
        onSubmit={onSave}
        validateOnChange={false}
        validateOnBlur={false}>
        {({ values, errors, handleChange, setFieldValue, handleSubmit, handleReset }) => (
          <>
            <MuiContainer>
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageContainer onClick={() => ref.current.click()}>
                  <input
                    style={{ display: 'none' }}
                    onChange={onFileChange}
                    ref={ref}
                    type="file"
                    accept="image/*"
                    capture="camera"
                  />
                  <CustomImageProfilePhoto
                    src={
                      get(user, 'photoUrl')
                        ? get(user, 'photoUrl')
                        : get(user, 'profile_picture', '/static/images/preview.webp')
                    }
                    alt="Login screen image"
                    fill
                  />
                  <CameraIconContainer>
                    <CameraContainer>
                      <CustomImage src={'/static/images/add_a_photo.webp'} alt="camera icon" fill />
                    </CameraContainer>
                  </CameraIconContainer>
                </ImageContainer>
              </div>

              <InformationContainer>
                <HeadingContainer>
                  <Heading variant={'h1'}>Enter your information</Heading>
                </HeadingContainer>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  width={'100%'}
                  value={values.firstName}
                  type="text"
                  onChange={handleChange('firstName')}
                  margin="1rem 0"
                  error={errors.firstName}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  width={'100%'}
                  value={values.lastName}
                  type="text"
                  onChange={handleChange('lastName')}
                  margin="1rem 0"
                  error={errors.lastName}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  width={'100%'}
                  value={values.email}
                  type="text"
                  onChange={handleChange('email')}
                  margin="1rem 0"
                  error={errors.email}
                />
                <CustomSelect
                  open={isSelectOne}
                  onOpen={() => {
                    setIsSelectOne(true);
                  }}
                  onClose={() => {
                    setIsSelectOne(false);
                  }}
                  MenuProps={{ variant: 'menu', disableScrollLock: true }}
                  IconComponent={props => (
                    <Image
                      priority
                      src={'/static/images/expand_more_black.webp'}
                      height={14}
                      width={14}
                      aria-hidden={true}
                      style={{ marginRight: '1rem' }}
                      alt="View All"
                      {...props}
                    />
                  )}
                  sx={{
                    '& fieldset': { border: 'none' },
                  }}
                  style={{
                    display: 'flex',
                  }}
                  renderValue={isNil(values.gender) || values.gender === 0 ? () => 'Select gender' : undefined}
                  displayEmpty
                  value={`${isNil(values.gender) || values.gender === 0 ? undefined : values.gender}`}
                  onChange={event => setFieldValue('gender', event.target.value)}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  {map(genderItems, (data, index) => {
                    return (
                      <MenuItem key={index} value={data?.value}>
                        {data?.label}
                      </MenuItem>
                    );
                  })}
                </CustomSelect>
                <IntlTelInput
                  ref={ref => {
                    if (ref && values.mobileNumber !== undefined) {
                      ref.updateFlagFromNumber(
                        `+${getPhoneNumberDetails(userContactNumber).countryCode}${values.mobileNumber}`,
                        true
                      );
                    }
                  }}
                  disabled
                  separateDialCode={true}
                  placeholder="Phone number"
                  value={`${values.mobileNumber}`}
                  containerClassName="edit-input-disabled intl-tel-input-contact intl-tel-input-login"
                  inputClassName="otp_style_edit"
                  defaultCountry={values.whatsAppCountryCode}
                />
              </InformationContainer>
              <InformationContainer>
                <HeadingContainer>
                  <Heading variant={'h1'}>Whatsapp number</Heading>
                </HeadingContainer>
                <IntlTelInput
                  containerClassName="edit-input intl-tel-input-contact intl-tel-input-login"
                  inputClassName={'otp_style_editable'}
                  defaultCountry={values.whatsAppCountryCode}
                  value={values.whatsappMobileNumber}
                  onSelectFlag={(_, infoObject) => {
                    setFieldValue('whatsAppCallingCode', `+${infoObject.dialCode}`);
                    setFieldValue('whatsappMobileNumber', '');
                  }}
                  ref={ref => {
                    if (ref && values.whatsappMobileNumber !== undefined) {
                      ref.updateFlagFromNumber(`+${values.whatsAppCallingCode}${values.whatsappMobileNumber}`, true);
                    }
                  }}
                  onPhoneNumberChange={(_, phoneNumber, country) => {
                    if (!isNaN(phoneNumber)) {
                      setFieldValue('whatsAppCallingCode', `+${country.dialCode}`);
                      setFieldValue('whatsappMobileNumber', phoneNumber);
                    }
                  }}
                  separateDialCode
                  placeholder="Phone number"
                />
                <CheckBoxContainer>
                  <Checkbox
                    size="medium"
                    color="green"
                    inputProps={{ 'aria-label': 'controlled' }}
                    checked={values.receiveUpdatesOnWhatsApp}
                    onChange={e => setFieldValue('receiveUpdatesOnWhatsApp', e.target.checked)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />
                  <ReceiveText>Receive updates on Whatsapp</ReceiveText>
                </CheckBoxContainer>
              </InformationContainer>
            </MuiContainer>
            <HomePageBox
              width={{ xs: '100%', md: '100%' }}
              zIndex={{ xs: 0, md: 0 }}
              onClick={handleReset}
              backgroundColor={{ xs: '#fff', md: '#fff' }}
              boxShadow={{
                xs: '4px 0px 50px rgba(0, 0, 0, 0.1);',
                md: '4px 0px 50px rgba(0, 0, 0, 0.1);',
              }}
              display="flex"
              justifyContent="center"
              padding={{
                xs: '4.8rem 0rem',
                md: '5rem 0rem',
              }}
              margin={{
                xs: '0rem 0rem',
                md: '0rem',
              }}>
              <HomePageButton
                padding={{
                  xs: '1.2rem 3rem',
                  md: '1.2rem 10rem',
                }}
                lineHeight={{
                  xs: '1.8rem',
                  md: '2.1rem',
                }}
                onClick={() => router.push('/')}
                backgroundColor={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontWeight={{
                  xs: '400',
                  md: '400',
                }}
                fontSize={{
                  xs: '1.5rem',
                  md: '1.7rem',
                }}
                borderRadius={{ xs: '50px', md: '50px' }}>
                Cancel
              </HomePageButton>
              <HomePageButton
                onClick={handleSubmit}
                margin={{
                  xs: '0 0 0 20px',
                  md: '0 0 0 20px',
                }}
                padding={{
                  xs: '1.2rem 3rem',
                  md: '1.2rem 10rem',
                }}
                lineHeight={{
                  xs: '1.8rem',
                  md: '2.1rem',
                }}
                color="primary"
                fontWeight={{
                  xs: '400',
                  md: '400',
                }}
                fontSize={{
                  xs: '1.5rem',
                  md: '1.7rem',
                }}
                borderRadius={{ xs: '50px', md: '50px' }}>
                Save
              </HomePageButton>
            </HomePageBox>
          </>
        )}
      </Formik>
      <Footer />
    </section>
  );
}

EditProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleUpdateUser: PropTypes.func,
  handleProfilePictureUpdate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  editProfile: makeSelectEditProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleUpdateUser: (payload, callback) => dispatch(updateUser(payload, callback)),
    handleProfilePictureUpdate: payload => dispatch(uploadProfilePicture(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EditProfile);
