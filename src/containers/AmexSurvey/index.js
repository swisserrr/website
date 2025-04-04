/**
 *
 * AmexSurvey
 *
 */

import React, { memo, useState, useCallback } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import IntlTelInput from 'react-intl-tel-input';
import { Formik, Form, useFormikContext } from 'formik';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { v4 as uuid } from 'uuid';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from 'react-date-picker';
import { toast } from 'react-toastify';

import { CustomInput, CustomSelect, CustomButton, LocationContainer } from './styles.js';
import { amexReviewSchema } from 'utils/validationSchema';
import { getPhoneNumberDetails, isValid } from 'utils/phoneUtil';
import makeSelectAmexSurvey from './selectors';
import { submitData } from './actions';
import AmexBanner from '../../../public/static/images/amex_banner.webp';

import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const HomePageText = dynamic(() => import('components/HomePageText'));
function CustomForm({ handleSubmitData, setOpenModal }) {
  const { errors, values, handleChange, setFieldValue, validateForm, setFieldError } = useFormikContext();

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

  const ordinalSuffix = i => {
    const j = i % 10;
    const k = i % 100;

    if (j == 1 && k != 11) {
      return i + 'st';
    }
    if (j == 2 && k != 12) {
      return i + 'nd';
    }
    if (j == 3 && k != 13) {
      return i + 'rd';
    }
    return i + 'th';
  };

  const constructJSX = (detailObj, index) => {
    return (
      <div style={{ marginBottom: 20 }}>
        {divPadding(
          <>
            {customLabel(`${ordinalSuffix(index + 1)} Elder's Name`)}
            <CustomInput
              backgroundColor="#F8F8F8"
              id={`name_${detailObj?.id}`}
              width={'100%'}
              value={detailObj.name}
              onChange={event => onChange(detailObj?.id, event?.target?.value, 'name')}
              type="text"
              margin="1rem 0"
              placeholder="Enter first & last name"
            />
            {errorDiv(errors?.parentsDetails?.[index]?.name)}
          </>
        )}

        {divPadding(
          <>
            {customLabel(`${ordinalSuffix(index + 1)} Elder's Date Of Birth`)}
            <DatePicker
              onChange={value => onChange(detailObj?.id, value, 'dob')}
              value={detailObj?.dob}
              maxDate={new Date()}
              defaultActiveStartDate={new Date(1970, 0, 1)}
            />
            {errorDiv(errors?.parentsDetails?.[index]?.dob)}
          </>
        )}

        {divPadding(
          <>
            {customLabel(`${ordinalSuffix(index + 1)} Elder's Phone Number`)}

            <IntlTelInput
              containerClassName="intl-tel-input-contact amex-input"
              inputClassName="otp_style_contact_amex"
              preferredCountries={['in']}
              onPhoneNumberChange={(_, phoneNumber) => {
                const regex = new RegExp(/^[0-9]*$/);
                if (regex.test(phoneNumber)) {
                  onChange(detailObj?.id, phoneNumber, 'phoneNumber');
                }
              }}
              value={detailObj?.phoneNumber}
              separateDialCode={true}
              placeholder="Enter your number"
              onSelectFlag={(_, infoObj) => {
                onChange(detailObj?.id, '', 'phoneNumber');
                onChange(detailObj?.id, infoObj?.dialCode, 'countryCode');
                setFieldValue(detailObj?.id, infoObj?.iso2, 'regionCode');
              }}
            />
            {errorDiv(errors?.parentsDetails?.[index]?.phoneNumber)}
          </>
        )}

        {divPadding(
          <>
            {customLabel(`Elder’s relationship with you`)}
            <CustomSelect
              marginToggle
              value={detailObj?.elder_relationship_with_you}
              sx={{
                '& fieldset': { border: 'none' },
              }}
              onChange={event => {
                onChange(detailObj?.id, event.target.value, 'elder_relationship_with_you');
              }}
              inputProps={{ 'aria-label': 'With label' }}
              displayEmpty>
              <MenuItem value={''}>Select relationship</MenuItem>
              <MenuItem value={'grand_father'}>Grand Father</MenuItem>
              <MenuItem value={'grand_mother'}>Grand Mother</MenuItem>
              <MenuItem value={'father'}>Father</MenuItem>
              <MenuItem value={'mother'}>Mother</MenuItem>
              <MenuItem value={'father_in_law'}>Father in law</MenuItem>
              <MenuItem value={'mother_in_law'}>Mother in law</MenuItem>
              <MenuItem value={'brother'}>Brother</MenuItem>
              <MenuItem value={'sister'}>Sister</MenuItem>
              <MenuItem value={'cousin'}>Cousin</MenuItem>
              <MenuItem value={'neighbor_friend'}>Neighbor Friend</MenuItem>
            </CustomSelect>
            {errorDiv(errors?.parentsDetails?.[index]?.elder_relationship_with_you)}
          </>
        )}

        <>
          {customLabel(`${ordinalSuffix(index + 1)} Elder's Location`)}
          <CustomInput
            backgroundColor="#F8F8F8"
            id={`state_${detailObj?.id}`}
            width={'100%'}
            value={detailObj.state}
            onChange={event => onChange(detailObj?.id, event?.target?.value, 'state')}
            type="text"
            margin="1rem 0"
            placeholder="State"
          />
          {errorDiv(errors?.parentsDetails?.[index]?.state)}
        </>
        <LocationContainer>
          <CustomInput
            backgroundColor="#F8F8F8"
            id={`city_${detailObj?.id}`}
            width={'100%'}
            value={detailObj.city}
            onChange={event => onChange(detailObj?.id, event?.target?.value, 'city')}
            type="text"
            margin="1rem 0"
            placeholder="City"
          />
          {errorDiv(errors?.parentsDetails?.[index]?.city)}
        </LocationContainer>
      </div>
    );
  };

  const renderParentSections = details =>
    map(details, (item, index) => <div key={item?.id}>{constructJSX(item, index)}</div>);

  const onChange = (id, text, fieldName) => {
    const updatedArray = map(values?.parentsDetails, item => {
      const itemObj = { ...item };

      if (itemObj?.id === id) {
        itemObj[fieldName] = text;
      }

      return itemObj;
    });

    setFieldValue('parentsDetails', updatedArray);
  };

  const fireEmployeeCodeError = useCallback(err => {
    setFieldError('employee_code', err);
  }, []);

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

  const onSubmit = () => {
    validateForm(values)
      .then(result => {
        if (isEmpty(result)) {
          const isValidRes = isValid(
            get(values, 'phoneNumber'),
            getPhoneNumberDetails(`+${get(values, 'countryCode')}${get(values, 'phoneNumber')}`).regionCode
          );
          const isValidatePhoneNumbersRes = validatePhoneNumbers();
          if (isValidRes && isValidatePhoneNumbersRes) {
            const finalValues = {
              ...values,
              fireEmployeeCodeError,
            };
            handleSubmitData(finalValues, setOpenModal);
          } else {
            toast.error('One of your phone numbers is not valid!!', {
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
                setFieldValue('phoneNumber', phoneNumber);
              }
            }}
            value={values?.phoneNumber}
            separateDialCode={true}
            placeholder="Enter your number"
            onSelectFlag={(_, infoObj) => {
              setFieldValue('phoneNumber', '');
              setFieldValue('countryCode', infoObj?.dialCode);
              setFieldValue('regionCode', infoObj?.iso2);
            }}
          />
          {errorDiv(errors?.phoneNumber)}
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
          {customLabel('Gender')}
          <CustomSelect
            value={values.gender}
            sx={{
              '& fieldset': { border: 'none' },
            }}
            placeholder="Gender"
            onChange={event => {
              setFieldValue('gender', event.target.value);
            }}
            inputProps={{ 'aria-label': 'With label' }}
            displayEmpty>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </CustomSelect>
        </>
      )}
      {divPadding(
        <>
          {customLabel('Number of elders opted under the Health Plus Plan - Elder Care Plan')}
          <CustomSelect
            value={values.numberOfEldersOpted}
            sx={{
              '& fieldset': { border: 'none' },
            }}
            onChange={event => {
              const items = [...values?.parentsDetails];

              setFieldValue('numberOfEldersOpted', event.target.value);

              for (let i = 1; i < event.target.value; i++) {
                if (items?.length < event.target.value) {
                  items.push({
                    id: uuid(),
                    name: '',
                    dob: '',
                    countryCode: '91',
                    regionCode: 'in',
                    phoneNumber: '',
                    city: '',
                    state: '',
                    elder_relationship_with_you: '',
                  });
                }
              }

              for (let i = items.length; i >= event.target.value; i--) {
                if (items?.length > event.target.value) {
                  items.pop();
                }
              }

              setFieldValue('parentsDetails', items);
            }}
            inputProps={{ 'aria-label': 'With label' }}
            displayEmpty>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </CustomSelect>
        </>
      )}

      {renderParentSections(values?.parentsDetails)}

      {divPadding(
        <>
          {customLabel('Please enter your employee code ')}

          <CustomInput
            backgroundColor="#F8F8F8"
            name="employee_code"
            width={'100%'}
            value={values.employee_code}
            type="text"
            onChange={handleChange}
            margin="1rem 0"
            placeholder="Code"
          />
          {errorDiv(errors?.employee_code)}
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
function AmexSurvey({ handleSubmitData }) {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <HeaderBar position="relative" backgroundColor="#1A1A1A" hideSideButtons={true} />
      <div
        style={{
          backgroundColor: '#F4EFEF',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '1.2rem 2rem',
        }}>
        <HomePageBox>
          <HomePageBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={{ xs: '100%', md: '100%' }}>
            <HomePageBox width={{ xs: '100%', md: '55%' }}>
              <HomePageImage src={AmexBanner} width="100%" height="100%" />
            </HomePageBox>
            <HomePageBox width={{ xs: '90%', md: '45%' }}>
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
                Amex | Emoha Member Onboarding
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
                  phoneNumber: '',
                  gender: 'male',
                  numberOfEldersOpted: '1',
                  employee_code: '',
                  parentsDetails: [
                    {
                      id: uuid(),
                      name: '',
                      dob: '',
                      countryCode: '91',
                      regionCode: 'in',
                      phoneNumber: '',
                      city: '',
                      state: '',
                      elder_relationship_with_you: '',
                    },
                  ],
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={amexReviewSchema}>
                <CustomForm handleSubmitData={handleSubmitData} setOpenModal={setOpenModal} />
              </Formik>
            </HomePageBox>
          </HomePageBox>

          <ThankYouModal openModal={openModal} closeModal={closeModal} hideCallUsButton />
        </HomePageBox>
      </div>
    </>
  );
}

AmexSurvey.propTypes = { ...AmexSurvey };
CustomForm.propTypes = { ...CustomForm };

const mapStateToProps = createStructuredSelector({
  amexSurvey: makeSelectAmexSurvey(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitData: (payload, callback) => dispatch(submitData(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AmexSurvey);
