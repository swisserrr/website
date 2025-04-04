/**
 *
 * Preferences
 *
 */

import React, { memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { submitData, sendOtpMail, verifyOtpMail, handleUserLoginAction, handleMappingAction } from './actions';
import { createStructuredSelector } from 'reselect';
import MuiContainer from '@mui/material/Container';
import {
  BannerContainer,
  BannerHeadingTextContainer,
  CustomInput,
  CustomSelect,
  CustomButton,
  PreferenceSubContainer,
  PreferencesContainer,
  WelcomeHeading,
  WelcomeSubHeading,
  FormHeading,
  DetailBox,
  CombineTextComponentBox,
  DetailBoxContainer,
  CheckboxContainer,
  CheckboxText,
  RadioText,
  ButtonContainer,
  ButtonSubContainer,
  GridMainContainer,
  LoginImageContainer,
  LoginContainer,
  LoginSubContainer,
  BannerHeaderText,
  BannerHeaderSubText,
  BannerHeaderDescription,
  ButtonContainerForPopUp,
  CustomButtonHomepage,
  Divider,
} from './styles';
import IntlTelInput from 'react-intl-tel-input';
import { Formik, Form, useFormikContext } from 'formik';
import map from 'lodash/map';
import get from 'lodash/get';
import split from 'lodash/split';
import { getPhoneNumberDetails, isValid } from 'utils/phoneUtil';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { enterpriseReviewSchema } from 'utils/validationSchema';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuid } from 'uuid';
import HeaderBar from 'components/HeaderBar';
import HomePageText from 'components/HomePageText';
import { toast } from 'react-toastify';
import HomePageBox from 'components/HomePageBox';
import Checkbox from '@mui/material/Checkbox';
import Image from 'utils/CustomImage';
import Otp from 'components/Otp';
import isEqual from 'lodash/isEqual';
import filter from 'lodash/filter';
import useMediaQuery from '@mui/material/useMediaQuery';
import CircularProgress from '@mui/material/CircularProgress';
import selectEnterpriseDomain from './selectors';

function CustomForm({ handleSendOtp, setisModalShow, user, enterprise, mappedData, enterpriseEmohaPage }) {
  const { errors, values, handleChange, setFieldValue, validateForm } = useFormikContext();
  const matches = useMediaQuery('(max-width:600px)');
  const [isWhiteList, setisWhiteList] = useState(true);

  const customLabel = (text, redDot) => {
    return (
      <HomePageText
        padding={{ xs: '0 0 10px 0', md: '0 0 10px 0' }}
        fontWeight={{ xs: '500', md: '500' }}
        textTransform={{ xs: 'none', md: 'none' }}
        margin={{ xs: '0', md: '0 1.5rem' }}
        fontSize={{ xs: '1.5rem', md: '1.5rem' }}
        lineHeight={{ xs: '1.8rem', md: '1.8rem' }}>
        {`${text}  `}
        {!redDot ? <span style={{ color: 'red' }}>&#42;</span> : ''}
      </HomePageText>
    );
  };

  const whichCheckBoxSelected = index_ => {
    let data = index_ >= 1;
    filter(values.parentsDetails, (item, index) => {
      if (item.is_primary_elder && index == 1) {
        data = index_ == 0;
      } else {
        index_ >= 1;
      }
    });
    return data;
  };

  const divPadding = (children, widthToggle) => {
    return (
      <DetailBoxContainer
        widthToggle={widthToggle}
        style={{
          padding: '0 0 0.5rem 0rem',
        }}>
        {children}
      </DetailBoxContainer>
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

  const constructJSX = (detailObj, index) => {
    return (
      <DetailBox style={{ marginBottom: 10, width: '100%' }}>
        {divPadding(
          <CombineTextComponentBox>
            {customLabel(`Relation`, whichCheckBoxSelected(index))}
            <CustomSelect
              value={detailObj?.elder_relationship_with_you}
              sx={{
                '& fieldset': { border: 'none' },
              }}
              onChange={event => {
                onChange(detailObj?.id, event.target.value, 'elder_relationship_with_you');
              }}
              inputProps={{ 'aria-label': 'With label' }}
              displayEmpty>
              <MenuItem style={{ fontSize: 15 }} value={''}>
                Select relationship
              </MenuItem>
              <MenuItem style={{ fontSize: 15 }} value={'father'}>
                Father
              </MenuItem>
              <MenuItem style={{ fontSize: 15 }} value={'mother'}>
                Mother
              </MenuItem>
            </CustomSelect>
            {errorDiv(errors?.parentsDetails?.[index]?.elder_relationship_with_you)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel(`Name`, whichCheckBoxSelected(index))}
            <CustomInput
              backgroundColor="#F8F8F8"
              id={`name_${detailObj?.id}`}
              width={'100%'}
              value={detailObj.name}
              onChange={event => {
                const { value } = event.target;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  if (!value.startsWith(' ')) {
                    onChange(detailObj?.id, value, 'name');
                  }
                }
              }}
              type="text"
              margin="1rem 0"
              placeholder="Enter first & last name"
            />
            {errorDiv(errors?.parentsDetails?.[index]?.name)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel(`Age`, whichCheckBoxSelected(index))}
            <CustomInput
              backgroundColor="#F8F8F8"
              id={`name_${detailObj?.id}`}
              width={'100%'}
              value={detailObj.age}
              onChange={event => {
                const newValue = event.target.value.replace(/\D/, '');
                const maxLength = 3; // Adjust this value as needed
                const truncatedValue = newValue.slice(0, maxLength);
                onChange(detailObj?.id, truncatedValue, 'age');
              }}
              type="number"
              max={'999'}
              margin="1rem 0"
              placeholder="Age"
            />
            {errorDiv(errors?.parentsDetails?.[index]?.age)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel(`Phone Number`, whichCheckBoxSelected(index))}
            <IntlTelInput
              containerClassName="intl-tel-input-contact enterprise-input"
              inputClassName="otp_style_contact_enterprise"
              preferredCountries={['in']}
              onPhoneNumberChange={(_, phoneNumber) => {
                const regex = new RegExp(/^[0-9]*$/);
                if (regex.test(phoneNumber)) {
                  onChange(detailObj?.id, phoneNumber, 'phoneNumber');
                }
              }}
              value={detailObj?.phoneNumber}
              separateDialCode={true}
              placeholder="Enter number"
              onSelectFlag={(_, infoObj) => {
                onChange(detailObj?.id, '', 'phoneNumber');
                onChange(detailObj?.id, infoObj?.dialCode, 'countryCode');
                // setFieldValue(detailObj?.id, infoObj?.iso2, 'regionCode');
              }}
            />
            {errorDiv(errors?.parentsDetails?.[index]?.phoneNumber)}
          </CombineTextComponentBox>
        )}

        <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 10px 0' }}>
          <input
            checked={detailObj?.is_primary_elder}
            type="radio"
            style={{ width: 20, height: 20 }}
            onClick={() => {
              if (!detailObj?.is_primary_elder) {
                onChange(detailObj?.id, !detailObj?.is_primary_elder, 'is_primary_elder', index);
              }
            }}
          />
          <RadioText>Call this number</RadioText>
        </div>
        {matches && index === 0 ? <Divider /> : null}
      </DetailBox>
    );
  };

  const renderParentSections = details =>
    map(details, (item, index) => <div key={item?.id}>{constructJSX(item, index)}</div>);

  const onChange = (id, text, fieldName, index) => {
    const updatedArray = map(values?.parentsDetails, (item, indexing) => {
      const itemObj = { ...item };

      if (itemObj?.id === id) {
        itemObj[fieldName] = text;
      }
      if (fieldName === 'is_primary_elder' && index === 0 && indexing === 1) {
        itemObj[fieldName] = !itemObj[fieldName];
      }
      if (fieldName === 'is_primary_elder' && index === 1 && indexing === 0) {
        itemObj[fieldName] = !itemObj[fieldName];
      }

      return itemObj;
    });
    setFieldValue('parentsDetails', updatedArray);
  };

  const onSubmit = () => {
    if (!isWhiteList) {
      return false;
    }
    validateForm(values)
      .then(result => {
        if (isEmpty(result) && !isEmpty(values.email_id)) {
          if (
            isEqual(values.phoneNumber, values.parentsDetails[0].phoneNumber) ||
            isEqual(values.phoneNumber, values.parentsDetails[1].phoneNumber) ||
            isEqual(values.parentsDetails[0].phoneNumber, values.parentsDetails[1].phoneNumber)
          ) {
            toast.info('Duplicate number entered', {
              autoClose: 5000,
              draggable: false,
            });
            return;
          }
          handleSendOtp({ email: values.email_id, name: values.name }, () => {
            toast.info('Otp has been sent to your corporate email Id', {
              autoClose: 5000,
              draggable: false,
            });
          });
          setisModalShow(true);
        } else if (!isEmpty(result) && isEmpty(values.email_id)) {
          toast.error('Please check corporate email id', {
            autoClose: 5000,
            draggable: false,
          });
        } else {
          toast.error('Please check all the fields', {
            autoClose: 5000,
            draggable: false,
          });
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
      <FormHeading>Please Provide Your Details</FormHeading>

      <DetailBox>
        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Full Name')}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="name"
              width={'100%'}
              value={values.name}
              disabled={get(enterprise, 'preFilledFormData.name') || get(user, 'full_name') || false}
              type="text"
              onChange={event => {
                const { value } = event.target;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  if (!value.startsWith(' ')) {
                    handleChange(event);
                  }
                }
              }}
              placeholder="Enter first & last name"
            />
            {errorDiv(errors?.name)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Mobile Number')}
            <IntlTelInput
              containerClassName="intl-tel-input-contact enterprise-input"
              inputClassName="otp_style_contact_enterprise"
              preferredCountries={['in']}
              onPhoneNumberChange={(_, phoneNumber) => {
                const regex = new RegExp(/^[0-9]*$/);

                if (regex.test(phoneNumber)) {
                  setFieldValue('phoneNumber', phoneNumber);
                }
              }}
              value={values?.phoneNumber}
              disabled={get(user, 'mobile_number') || false}
              separateDialCode={true}
              placeholder="Enter your number"
              onSelectFlag={(_, infoObj) => {
                setFieldValue('phoneNumber', '');
                setFieldValue('countryCode', infoObj?.dialCode);
                setFieldValue('regionCode', infoObj?.iso2);
              }}
            />
            {errorDiv(errors?.phoneNumber)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Corporate Email Id')}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="email_id"
              width={'100%'}
              value={values.email_id}
              disabled={get(enterprise, 'preFilledFormData.email') || get(user, 'email') || false}
              type="text"
              onChange={handleChange}
              margin="1rem 0"
              placeholder="Email Id"
              onBlur={() => {
                const domain = mappedData?.current?.whitelist_corporate_email_domain;
                const inputValue = split(values.email_id, '@')?.[1];
                const data = filter(domain, (item, value) => {
                  if (isEqual(item, `@${inputValue}`)) {
                    return true;
                  }
                });

                if (enterpriseEmohaPage) {
                  const writeEmailDomain = split(get(values, 'email_id'), '@')?.[1];
                  if (!isEqual(writeEmailDomain, 'emoha.com') && !isEmpty(writeEmailDomain)) {
                    setisWhiteList(false);
                  } else {
                    setisWhiteList(true);
                  }
                } else {
                  if (isEmpty(data) && !isEmpty(domain)) {
                    setisWhiteList(false);
                  } else {
                    setisWhiteList(true);
                  }
                }
              }}
            />
            {errorDiv(errors?.email_id)}
            {!isWhiteList &&
              errorDiv(
                `${enterpriseEmohaPage ? 'Domain should be @emoha.com' : 'Please enter WhiteList or Correct Domain'} `
              )}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Gender')}
            <CustomSelect
              value={values.gender}
              sx={{
                '& fieldset': { border: 'none' },
              }}
              onChange={event => {
                setFieldValue('gender', event.target.value);
              }}
              inputProps={{ 'aria-label': 'With label' }}
              displayEmpty>
              <MenuItem style={{ fontSize: 15 }} value={''}>
                Select Gender
              </MenuItem>
              <MenuItem style={{ fontSize: 15 }} value={'male'}>
                Male
              </MenuItem>
              <MenuItem style={{ fontSize: 15 }} value={'female'}>
                Female
              </MenuItem>
            </CustomSelect>
            {errorDiv(errors?.gender)}
          </CombineTextComponentBox>
        )}

        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Personal Email Id', true)}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="p_email"
              width={'100%'}
              value={values.p_email}
              type="text"
              onChange={handleChange}
              margin="1rem 0"
              placeholder="Email Id"
            />
          </CombineTextComponentBox>
        )}
      </DetailBox>

      <FormHeading>Please Provide Details of Your Parents.</FormHeading>
      {renderParentSections(values?.parentsDetails)}
      <DetailBox style={{ marginBottom: 10, width: '100%' }}>
        {divPadding(
          <CombineTextComponentBox>
            {customLabel('Address')}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="residential_address"
              width={'100%'}
              value={values.residential_address}
              type="text"
              onChange={handleChange}
              margin="1rem 0"
              placeholder="Enter parents address"
            />
            {errorDiv(errors?.residential_address)}
          </CombineTextComponentBox>,
          true
        )}
        {divPadding(
          <CombineTextComponentBox>
            {customLabel('City')}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="city"
              width={'100%'}
              value={values.city}
              type="text"
              onChange={handleChange}
              margin="1rem 0"
              placeholder="City"
            />
            {errorDiv(errors?.city)}
          </CombineTextComponentBox>
        )}
        {divPadding(
          <CombineTextComponentBox>
            {customLabel('State')}
            <CustomInput
              backgroundColor="#F8F8F8"
              name="state"
              width={'100%'}
              value={values.state}
              type="text"
              onChange={handleChange}
              margin="1rem 0"
              placeholder="State"
            />
            {errorDiv(errors?.state)}
          </CombineTextComponentBox>
        )}
      </DetailBox>

      <CheckboxContainer>
        <Checkbox
          style={{
            color: '#0000ff',
            padding: 0,
          }}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 21, padding: 0 } }}
          checked={values.consent}
          onChange={() => {
            setFieldValue('consent', !values.consent);
          }}
          type="checkbox"
        />
        <CheckboxText>
          I hereby grant consent to Emoha to contact my parents to inform them about the inclusions of this plan, as
          outlined in the plan details.
        </CheckboxText>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox
          style={{
            color: '#0000ff',
            padding: 0,
          }}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 21, padding: 0 } }}
          checked={values.notify}
          onChange={() => {
            setFieldValue('notify', !values.notify);
          }}
          type="checkbox"
        />
        <CheckboxText>
          I will notify my parents to anticipate a phone call from Emoha Eldercare to discuss their care options.
        </CheckboxText>
      </CheckboxContainer>

      <ButtonContainer>
        <ButtonSubContainer>
          <CustomButton
            width="100%"
            // disabled={
            //   isEqual(values.notify, false) ||
            //   isEqual(values.consent, false) ||
            //   isEmpty(values.email_id) ||
            //   isEmpty(values.name) ||
            //   isEmpty(values.phoneNumber) ||
            //   isEmpty(values.gender) ||
            //   isEmpty(values.name) ||
            //   isEmpty(values.residential_address) ||
            //   isEmpty(values.city) ||
            //   isEmpty(values.state) ||
            //   isEmpty(values.name) ||
            //   isEmpty(values.name) ||
            //   isEmpty(values.parentsDetails[0].name) ||
            //   isEmpty(values.parentsDetails[0].age) ||
            //   isEmpty(values.parentsDetails[0].phoneNumber) ||
            //   isEmpty(values.parentsDetails[0].elder_relationship_with_you)
            // }
            variant="contained"
            margin={'0 0 2rem 0'}
            color="primary"
            backgroundColor="#1A1A1A"
            onClick={onSubmit}>
            Verify Corporate Email
          </CustomButton>
        </ButtonSubContainer>
      </ButtonContainer>
    </Form>
  );
}

CustomForm.propTypes = {
  handleSendOtp: PropTypes.func.isRequired,
  setisModalShow: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
  enterprise: PropTypes.func.isRequired,
};

export function Enterprise({
  handleSubmitData,
  handleSendOtp,
  handleVerifyOtp,
  handleUserLogin,
  handleMappingWithWMS,
  enterprise,
  endPoint,
  enterpriseEmohaPage,
}) {
  const router = useRouter();
  const { user } = useSelector(state => state.login);

  useEffect(() => {
    const data = window.location.search;
    const pathname = window.location.pathname;
    if (!isEmpty(data)) {
      handleUserLogin(data, () => router.replace(pathname));
    }
    !enterpriseEmohaPage && handleMappingWithWMS();
  }, []);

  const [otpVerified, setOtpVerified] = useState(false);
  const [successScreen, setSuccessScreen] = useState(0);
  const [isModalShow, setisModalShow] = useState(false);
  const formRef = useRef();
  const mappedData = useRef();

  const mappingWithApiData = returnParam => {
    if (typeof window !== 'undefined') {
      const pathname = window?.location?.pathname;
      const splitF = split(pathname, '/');
      const pathValue = splitF[splitF?.length - 1];
      let returnValue = '';
      get(enterprise, 'mappingData')?.forEach(element => {
        if (isEqual(get(element, 'page_url'), pathValue)) {
          returnValue = element;
        }
      });
      mappedData.current = returnValue || {};
      return returnValue?.[returnParam];
    }
  };

  const validatePhoneNumbers = () => {
    let invalidCount = 0;
    map(formRef.current.values.parentsDetails, item => {
      if (get(item, `phoneNumber`) !== '') {
        const isValidRes = isValid(
          get(item, `phoneNumber`),
          getPhoneNumberDetails(`+${get(item, `countryCode`)}${get(item, `phoneNumber`)}`).regionCode
        );
        if (!isValidRes) {
          invalidCount++;
        }
      }
    });
    if (invalidCount === 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      <HeaderBar
        backgroundColor="#000"
        changesFromEnterprise={false}
        enterpriseImg={mappingWithApiData('corporate_logo_desktop')}
        position="relative"
        enterpriseEmohaPage={enterpriseEmohaPage}
      />
      <div style={{ display: successScreen === 0 ? 'block' : 'none' }}>
        <BannerContainer>
          <MuiContainer
            sx={{
              height: { xs: '100%' },
              display: { xs: 'flex' },
            }}>
            <BannerHeadingTextContainer>
              <WelcomeHeading>Welcome to Emoha</WelcomeHeading>
              <WelcomeSubHeading>
                We know choosing care for your parents is no small task. Thank you for considering Emoha - we take your
                trust seriously. Our dedicated team is ready to shower your loved ones with exceptional care. Let&apos;s
                start by getting to know them better - please fill out this form for personalized eldercare service.
              </WelcomeSubHeading>
            </BannerHeadingTextContainer>
          </MuiContainer>
        </BannerContainer>
        <PreferencesContainer maxWidth="lg">
          <PreferenceSubContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '1.2rem 0rem',
              }}>
              <>
                <HomePageBox
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  width={{ xs: '100%', md: '100%' }}>
                  <HomePageBox width={{ xs: '100%', md: '100%' }}>
                    {enterprise?.loading ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '80vh',
                        }}>
                        <CircularProgress />
                      </div>
                    ) : (
                      <Formik
                        innerRef={formRef}
                        initialValues={{
                          name: get(enterprise, 'preFilledFormData.name') || get(user, 'full_name') || '',
                          email_id: get(enterprise, 'preFilledFormData.email') || get(user, 'email') || '',
                          p_email: '',
                          gender: '',
                          city: '',
                          state: '',
                          countryCode: get(user, 'country_code') || '91',
                          regionCode: 'in',
                          phoneNumber: get(user, 'mobile_number') || '',
                          residential_address: '',
                          consent: false,
                          notify: false,
                          parentsDetails: [
                            {
                              id: uuid(),
                              name: '',
                              age: null,
                              countryCode: '91',
                              regionCode: 'in',
                              phoneNumber: '',
                              is_primary_elder: true,
                              elder_relationship_with_you: '',
                            },
                            {
                              id: uuid(),
                              name: '',
                              age: null,
                              countryCode: '91',
                              regionCode: 'in',
                              phoneNumber: '',
                              is_primary_elder: false,
                              state: '',
                              elder_relationship_with_you: '',
                            },
                          ],
                        }}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validationSchema={enterpriseReviewSchema}>
                        <CustomForm
                          handleSubmitData={handleSubmitData}
                          handleSendOtp={handleSendOtp}
                          handleVerifyOtp={handleVerifyOtp}
                          otpVerified={otpVerified}
                          isModalShow={isModalShow}
                          setisModalShow={setisModalShow}
                          setOtpVerified={setOtpVerified}
                          successScreen={successScreen}
                          setSuccessScreen={setSuccessScreen}
                          user={user}
                          enterprise={enterprise}
                          mappedData={mappedData}
                          enterpriseEmohaPage={enterpriseEmohaPage}
                        />
                      </Formik>
                    )}
                  </HomePageBox>
                </HomePageBox>
              </>
            </div>
          </PreferenceSubContainer>
        </PreferencesContainer>
      </div>
      {successScreen === 1 && otpVerified ? (
        <GridMainContainer>
          <LoginContainer>
            <LoginSubContainer>
              <div>
                <BannerHeaderText toggle={successScreen === 1 ? true : false}>CONGRATULATIONS!</BannerHeaderText>
                <BannerHeaderSubText>Welcome aboard!</BannerHeaderSubText>
              </div>
              <BannerHeaderDescription>
                Thank you for registering for the care plan by Emoha Eldercare. Filling out the form was great, and now
                it&apos;s time to discuss the plan with your parents. Please inform them to expect a call from Emoha
                Eldercare within next two working days.
              </BannerHeaderDescription>
              <CustomButton
                width="300px"
                variant="contained"
                margin={'0 0 2rem 0'}
                color="primary"
                onClick={() => router.push('/')}
                backgroundColor="#1A1A1A">
                Go to homepage
              </CustomButton>
            </LoginSubContainer>
          </LoginContainer>
          <div>
            <LoginImageContainer>
              <Image
                src="/static/images/elder1.jpg"
                alt="Login screen image"
                fill
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </LoginImageContainer>
          </div>
        </GridMainContainer>
      ) : successScreen === 2 && otpVerified ? (
        <GridMainContainer>
          <LoginContainer>
            <LoginSubContainer>
              <div>
                <BannerHeaderText toggle={successScreen === 1 ? false : true}>UH OH!</BannerHeaderText>
                <BannerHeaderSubText>Age limit applies.</BannerHeaderSubText>
              </div>
              <BannerHeaderDescription>
                Our care plans are currently designed for individuals 55+. While we can&apos;t assist your parents now,
                we&apos;re thrilled to see you planning ahead! Emoha&apos;s mission is to support families throughout
                their journey. If you wish to edit the information, you can simply press the back button.
              </BannerHeaderDescription>
              <ButtonContainerForPopUp>
                <CustomButtonHomepage
                  width="300px"
                  variant="outlined"
                  margin={'0 0 2rem 0'}
                  color="primary"
                  onClick={() => router.push('/')}>
                  Go to homepage
                </CustomButtonHomepage>
                <CustomButton
                  width="300px"
                  variant="contained"
                  margin={'0 0 2rem 0'}
                  color="primary"
                  onClick={() => {
                    setSuccessScreen(0);
                    setOtpVerified(false);
                  }}
                  backgroundColor="#1A1A1A">
                  Try again
                </CustomButton>
              </ButtonContainerForPopUp>
            </LoginSubContainer>
          </LoginContainer>
          <div>
            <LoginImageContainer>
              <Image
                src="/static/images/elder2.jpg"
                alt="Login screen image"
                fill
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </LoginImageContainer>
          </div>
        </GridMainContainer>
      ) : (
        <></>
      )}
      <Otp
        isModalShow={isModalShow}
        setisModalShow={setisModalShow}
        verifyLoading={enterprise?.verifyOtpLoading}
        resendOtpFunc={() => {
          handleSendOtp({ email: formRef.current.values.email_id, name: formRef.current.values.name }, () => {
            toast.info('Otp has been sent to your corporate email Id', {
              autoClose: 5000,
              draggable: false,
            });
          });
        }}
        verifyOtp={otp => {
          handleVerifyOtp(
            {
              email: formRef.current.values.email_id,
              otp: otp,
            },
            () => {
              const isValidRes = isValid(
                get(formRef.current.values, 'phoneNumber'),
                getPhoneNumberDetails(
                  `+${get(formRef.current.values, 'countryCode')}${get(formRef.current.values, 'phoneNumber')}`
                ).regionCode
              );
              const isValidatePhoneNumbersRes = validatePhoneNumbers();
              if (isValidRes && isValidatePhoneNumbersRes) {
                const currentData = formRef.current.values;
                const parentsDetails = currentData.parentsDetails.filter(data => !isEmpty(data.phoneNumber));
                handleSubmitData(
                  {
                    ...formRef.current.values,
                    campaign_name: `abhi_${mappedData?.current?.campaign_name || router?.query?.detail}`,
                    lead_source_category: `${mappedData?.current?.lead_source_category}`,
                    lead_sub_source: `${mappedData?.current?.lead_sub_source}`,
                    lead_source: `${mappedData?.current?.lead_source}`,
                    parentsDetails,
                  },
                  () => {
                    if (formRef.current.values.parentsDetails[0].age > 55) {
                      setSuccessScreen(1);
                    } else if (
                      formRef.current.values.parentsDetails[1].age &&
                      formRef.current.values.parentsDetails[1].age > 55
                    ) {
                      setSuccessScreen(1);
                    } else {
                      setSuccessScreen(2);
                    }
                    setisModalShow(false);
                    setOtpVerified(true);
                  },
                  endPoint
                );
              } else {
                toast.error('One of your phone numbers is not valid!!', {
                  autoClose: 5000,
                  draggable: false,
                });
              }
            },
            () => {
              toast.error('Otp entered is incorrect', {
                autoClose: 5000,
                draggable: false,
              });
            }
          );
        }}
      />
    </>
  );
}

Enterprise.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmitData: PropTypes.func.isRequired,
  handleSendOtp: PropTypes.func.isRequired,
  handleVerifyOtp: PropTypes.func.isRequired,
  handleUserLogin: PropTypes.func.isRequired,
  enterprise: PropTypes.func.isRequired,
  handleMappingWithWMS: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  enterprise: selectEnterpriseDomain,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitData: (payload, callback, endPoint) => dispatch(submitData(payload, callback, endPoint)),
    handleSendOtp: (payload, callback) => dispatch(sendOtpMail(payload, callback)),
    handleVerifyOtp: (payload, callback, error) => dispatch(verifyOtpMail(payload, callback, error)),
    handleUserLogin: (payload, callback) => dispatch(handleUserLoginAction(payload, callback)),
    handleMappingWithWMS: () => dispatch(handleMappingAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Enterprise);
