/**
 *
 * ApolloSurvey
 *
 */

import React, { memo, useEffect, useCallback, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import IntlTelInput from 'react-intl-tel-input';
import { Formik, Form, useFormikContext } from 'formik';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import split from 'lodash/split';
import get from 'lodash/get';
import concat from 'lodash/concat';
import reduce from 'lodash/reduce';
import { v4 as uuid } from 'uuid';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from 'react-date-picker';
import { useRouter } from 'next/router';
import delay from 'lodash/delay';
import dynamic from 'next/dynamic';

import { CustomInput, CustomSelect, CustomLoadingButton, LocationContainer } from './styles.js';
import { cyientReviewSchema } from 'utils/validationSchema';
import { getPhoneNumberDetails, isValid } from 'utils/phoneUtil';

import makeSelectApolloSurvey from './selectors.js';
import { submitApolloData } from './actions.js';
import PepsicoBanner from '../../../public/static/images/pepsico_banner.webp';

const HeaderBar = dynamic(() => import('components/HeaderBar'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
function CustomForm({
  isLoading,
  handleSubmitData,
  setOpenModal,
  leadsFrom,
  noOfElderOptedText,
  url,
  heading,
  apolloSurvey,
}) {
  const { errors, values, handleChange, setFieldValue, validateForm, resetForm, setFieldError } = useFormikContext();
  const router = useRouter();

  const customLabel = useCallback(text => {
    return (
      <HomePageText
        className="error-parent"
        padding={{ xs: '0 0 10px 0', md: '0 0 10px 0' }}
        fontWeight={{ xs: '500', md: '500' }}
        textTransform={{ xs: 'none', md: 'none' }}
        fontSize={{ xs: '1.5rem', md: '1.5rem' }}
        lineHeight={{ xs: '1.8rem', md: '1.8rem' }}>
        {`${text}`} <span style={{ color: 'red' }}>&#42;</span>
      </HomePageText>
    );
  }, []);

  const divPadding = useCallback(children => {
    return (
      <div
        style={{
          padding: '0 0 2rem 0rem',
        }}>
        {children}
      </div>
    );
  }, []);

  const errorDiv = useCallback(text => {
    if (text) {
      return (
        <div
          className="field-error"
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
  }, []);

  const ordinalSuffix = useCallback(i => {
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
  }, []);

  const onChange = useCallback(
    (id, text, fieldName) => {
      const updatedArray = map(values?.parentsDetails, item => {
        const itemObj = { ...item };

        if (itemObj?.id === id) {
          itemObj[fieldName] = text;
        }

        return itemObj;
      });

      setFieldValue('parentsDetails', updatedArray);
    },
    [values?.parentsDetails]
  );

  const constructJSX = useCallback(
    (detailObj, index) => {
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
    },
    [onChange, errorDiv, ordinalSuffix, errors]
  );

  const renderParentSections = useCallback(
    details => map(details, (item, index) => <div key={item?.id}>{constructJSX(item, index)}</div>),
    [constructJSX]
  );

  const resetFormValues = useCallback(() => {
    resetForm();
    setOpenModal(true);
  }, []);

  const constructPhoneNumbersArrayFunc = useCallback(() => {
    const combinedValues = [];

    map(values.parentsDetails, (item, index) => {
      const isValidRes = isValid(
        get(item, `phoneNumber`),
        getPhoneNumberDetails(`+${get(item, `countryCode`)}${get(item, `phoneNumber`)}`).regionCode
      );

      combinedValues.push({
        index,
        fieldName: 'phoneNumber',
        phoneNumber: item[`countryCode`] + item[`phoneNumber`],
        isValid: isValidRes,
      });
    });
    return combinedValues;
  }, [values?.parentsDetails]);

  const checkDuplicateEntries = useCallback(phoneNumbers => {
    let obj = {};

    const result = reduce(
      phoneNumbers,
      (acc, curr) => {
        if (obj[curr?.phoneNumber]) {
          curr.isDuplicate = true;
        }

        obj = {
          ...obj,
          [curr?.phoneNumber]: curr?.phoneNumber,
        };

        acc.push(curr);

        return acc;
      },
      []
    );

    return result;
  }, []);

  const scrollToError = useCallback(() => {
    delay(() => {
      document
        .getElementsByClassName('field-error')
        ?.item(0)
        ?.parentElement?.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    }, 100);
  }, []);

  // const fireEmployeeCodeError = useCallback(err => {
  //   setFieldError('employee_code', err);
  //   scrollToError();
  // }, []);

  const generateActivePlanError = useCallback(
    payload => {
      const { parentsDetails } = values;

      const result = Object.values(
        reduce(
          concat(parentsDetails, payload),
          (acc, curr) => {
            if (!acc?.[curr?.phoneNumber]) {
              acc = {
                ...acc,
                [curr?.phoneNumber]: { ...curr, isValid: true },
              };
            } else {
              acc = {
                ...acc,
                [curr?.phoneNumber]: { ...curr, isValid: false },
              };
            }

            return acc;
          },
          {}
        )
      );

      map(result, (item, index) => {
        if (!item?.isValid) {
          setFieldError(`parentsDetails.[${index}].phoneNumber`, 'This elder have an active plan in our system!');
        }
      });

      scrollToError();
    },
    [values]
  );

  const onSubmit = useCallback(() => {
    const leadsToSend = {
      utm_medium: 'Other',
      utm_source: 'Alliance and Corporate',
      utm_campaign: leadsFrom,
    };

    const finalLeads = isNil(leadsFrom) ? {} : isEmpty(router.query) ? leadsToSend : router.query;

    validateForm(values)
      .then(result => {
        if (isEmpty(result)) {
          const constructPhoneNumbersArrayFuncRes = constructPhoneNumbersArrayFunc();

          const mergedPhoneNumbersArray = concat(
            [
              {
                fieldName: 'phoneNumber',
                phoneNumber: values[`countryCode`] + values[`phoneNumber`],
                isValid: isValid(
                  get(values, 'phoneNumber'),
                  getPhoneNumberDetails(`+${get(values, 'countryCode')}${get(values, 'phoneNumber')}`).regionCode
                ),
              },
            ],
            constructPhoneNumbersArrayFuncRes
          );

          const checkDuplicateEntriesRes = checkDuplicateEntries(mergedPhoneNumbersArray);
          let isFormValid = true;

          map(checkDuplicateEntriesRes, item => {
            if (!item?.isValid) {
              isFormValid = false;
              setFieldError(`parentsDetails.[${item?.index}].phoneNumber`, 'Phone number is invalid!');
            } else if (item?.isDuplicate) {
              isFormValid = false;
              setFieldError(`parentsDetails.[${item?.index}].phoneNumber`, 'Phone number should be unique!');
            }
          });

          if (isFormValid) {
            const { id } = router.query;
            const finalValues = {
              ...values,
              lead_sub_source1: isEqual(router.pathname, '/') ? 'home' : split(router.asPath, '/')[1],
              nok_uuid: id,
              ...finalLeads,
              // fireEmployeeCodeError,
              generateActivePlanError,
              url,
            };

            handleSubmitData(finalValues, resetFormValues);
          } else {
            scrollToError();
          }
        } else {
          scrollToError();
        }
      })
      .catch(() => {
        // Handle error here!!
      });
  }, [values, router, leadsFrom]);

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
            disabled={apolloSurvey?.data?.[0]?.nok_name}
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
            containerClassName="intl-tel-input-contact edit-input-disabled"
            disabled={apolloSurvey?.data?.[0]?.mobile_number}
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
            disabled={apolloSurvey?.data?.[0]?.email}
            type="text"
            onChange={handleChange}
            margin="1rem 0"
            placeholder="We keep your information safe"
            // error={errors.email}
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
            disabled={apolloSurvey?.data?.[0]?.gender}
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
          {customLabel(noOfElderOptedText || 'Number of elders opted under the Health Plus Plan - Elder Care Plan')}
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
            {map(new Array(isEqual(heading, 'Google') ? 2 : 2), (item, key) => (
              <MenuItem value={key + 1}>{key + 1}</MenuItem>
            ))}
          </CustomSelect>
        </>
      )}

      {renderParentSections(values?.parentsDetails)}
      <CustomLoadingButton
        width="100%"
        variant="contained"
        margin={'0 0 2rem 0'}
        color="primary"
        loading={isLoading}
        backgroundColor="#1A1A1A"
        onClick={onSubmit}>
        Submit
      </CustomLoadingButton>
    </Form>
  );
}
export function ApolloSurvey({ apolloSurvey, handleSubmitData, heading, noOfElderOptedText, url }) {
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
              <HomePageImage src={PepsicoBanner} width="100%" height="100%" />
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
                {heading || 'Apollo'} | Emoha Member Onboarding
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
                  name: get(apolloSurvey, 'data.[0].nok_name') || '',
                  email: get(apolloSurvey, 'data.[0].email') || '',
                  gender: apolloSurvey?.data?.[0]?.gender?.toLowerCase() || 'male',
                  countryCode: get(apolloSurvey, 'data.[0].country_code') || '91',
                  regionCode: 'in',
                  phoneNumber: get(apolloSurvey, 'data.[0].mobile_number') || '',
                  numberOfEldersOpted: '1',
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
                validationSchema={cyientReviewSchema(heading)}>
                <CustomForm
                  handleSubmitData={handleSubmitData}
                  setOpenModal={setOpenModal}
                  isLoading={apolloSurvey?.isLoading}
                  noOfElderOptedText={noOfElderOptedText}
                  url={url}
                  heading={heading}
                  apolloSurvey={apolloSurvey}
                />
              </Formik>
            </HomePageBox>
          </HomePageBox>

          <ThankYouModal openModal={openModal} closeModal={closeModal} hideCallUsButton />
        </HomePageBox>
      </div>
    </>
  );
}

ApolloSurvey.propTypes = {
  ...ApolloSurvey,
};

CustomForm.propTypes = { ...CustomForm };

const mapStateToProps = createStructuredSelector({
  apolloSurvey: makeSelectApolloSurvey(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitData: (payload, callback) => dispatch(submitApolloData(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ApolloSurvey);
