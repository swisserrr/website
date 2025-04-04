/**
 *
 * ContactFormModal
 *
 */

import React from 'react';

import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import split from 'lodash/split';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { LandingPageSchema, VasLandingPageSchema } from 'utils/validationSchema';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { saveContact } from '../../containers/Home/actions';

import { AboutUsSection, CustomInput, CustomSelect, ButtonContainer, CustomButton } from './styles';
import HomePageText from 'components/HomePageText';
import { isValid } from 'utils/phoneUtil';
import MobileNumberPicker from 'components/MobileNumberPicker';

function ContactForm({ closeModal, setOpenModal, showsFrom, activePlan, leadsFrom, fromVas }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const onSave = (values, resetForm, setFieldValue) => {
    const isValidRes = isValid(get(values, 'phoneNumber'), get(values, 'code'));

    const leadsToSend = {
      utm_medium: 'Other',
      utm_source: 'Google Ads',
      utm_campaign: fromVas ? 'Business_Partner_SHC_Lead_Gen_Kolkata' : 'Google campaign',
    };

    const { utm_medium, utm_source, utm_campaign } = router.query;
    const utm_final = utm_medium || utm_source || utm_campaign;

    const finalLeads = isNil(leadsFrom) ? {} : isEmpty(utm_final) ? leadsToSend : router.query;

    if (isValidRes) {
      const payload = {
        data: {
          name: values.fullName,
          mobile: values.phoneNumber,
          email: values.email,
          country_code: values.country_code,
          what_is_your_top_concern_for_your_parents: values.what_is_your_top_concern_for_your_parents,
          how_did_you_hear_from_us: values.how_did_you_hear_from_us,
          lead_source_category: 'Paid',
          lead_source: 'Google Ads',
          timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
          website_page_name: router.asPath,
          lead_sub_source1: split(router.asPath, '/')[1],
          area_pincode: values.areaPincode,
          ...finalLeads,
        },
        setOpenModal,
      };
      dispatch(saveContact(payload));
      setFieldValue('phoneNumber', '');
      closeModal();
      resetForm();
      pushEvent(EVENT_NAME.FORM_FILLED, {
        block_name: showsFrom,
        page_name: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
        source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
        plan_name: activePlan && activePlan,
      });
    } else {
      toast.error('Please enter a valid number.', {
        autoClose: 10000,
        draggable: false,
      });
    }
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: 20 }}>
      <AboutUsSection>
        {/* <HomePageText
          variant="h3"
          textAlign={{ xs: 'center', md: 'center' }}
          fontSize={{ xs: '1.7rem', md: '2.2rem' }}
          lineHeight={{ xs: '2rem', md: '3rem' }}
          letterSpacing={{ xs: '-3', md: '-3' }}
          margin={{ xs: '0  0 4px 0 ', md: '0 0 8px 0' }}
          fontWeight={{ xs: '500', md: '500' }}>
          <p style={{ color: '#CC4746', fontSize: '2.2rem', fontWeight: '700', lineHeight: '3rem' }}>Connect with us</p>
        </HomePageText> */}
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            what_is_your_top_concern_for_your_parents: '',
            how_did_you_hear_from_us: '',
            code: '',
            areaPincode: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={val => {
            const LandingVasSchema =
              isEmpty(val.fullName) || isEmpty(val.email) || isEmpty(val.phoneNumber) || isEmpty(val.areaPincode);
            const Schema =
              isEmpty(val.fullName) ||
              isEmpty(val.email) ||
              isEmpty(val.phoneNumber) ||
              isEmpty(val.what_is_your_top_concern_for_your_parents);
            const condition = fromVas ? LandingVasSchema : Schema;
            if (condition)
              toast.error('Please fill all the details.', {
                autoClose: 10000,
                draggable: false,
              });
          }}
          validationSchema={fromVas ? VasLandingPageSchema : LandingPageSchema}
          onSubmit={(values, { resetForm, setFieldValue }) => {
            onSave(values, resetForm, setFieldValue);
          }}>
          {({ errors, values, handleChange, handleSubmit, setFieldValue }) => (
            <Form>
              <HomePageText
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 0 0 ', md: '10px 0 0 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Full Name
              </HomePageText>
              <CustomInput
                name="fullName"
                width={'100%'}
                value={values.fullName}
                type="text"
                onChange={handleChange}
                margin="1rem 0"
                placeholder="Enter full name"
                error={errors.fullName}
              />
              <HomePageText
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 5px 0 ', md: '10px 0 0 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Mobile Number
              </HomePageText>
              <MobileNumberPicker
                error={errors.phoneNumber}
                val={values.phoneNumber}
                callback={(phoneNumber, country) => {
                  if (!isNaN(phoneNumber)) {
                    setFieldValue('country_code', country.dialCode);
                    setFieldValue('code', country.iso2);
                    setFieldValue('phoneNumber', phoneNumber);
                  }
                }}
              />
              <HomePageText
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 0 0 ', md: '10px 0 0 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Email
              </HomePageText>
              <CustomInput
                name="email"
                width={'100%'}
                value={values.email}
                type="text"
                onChange={handleChange}
                margin="1rem 0"
                placeholder="Email address"
                error={errors.email}
              />
              {fromVas ? (
                <>
                  <HomePageText
                    textAlign={{ xs: 'left', md: 'left' }}
                    fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                    lineHeight={{ xs: '1.5rem', md: '2rem' }}
                    letterSpacing={{ xs: '-2', md: '-2' }}
                    padding={{ xs: '0', md: '0' }}
                    margin={{ xs: '10px  0 0 0 ', md: '10px 0 0 0' }}
                    fontWeight={{ xs: '500', md: '500' }}>
                    Please Share Your Area Name with Pincode
                  </HomePageText>
                  <CustomInput
                    name="areaPincode"
                    width={'100%'}
                    value={values.areaPincode}
                    type="text"
                    onChange={handleChange}
                    margin="1rem 0"
                    placeholder="Area Name"
                    error={errors.areaPincode}
                  />
                </>
              ) : (
                <>
                  <HomePageText
                    textAlign={{ xs: 'left', md: 'left' }}
                    fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                    lineHeight={{ xs: '1.5rem', md: '2rem' }}
                    letterSpacing={{ xs: '-2', md: '-2' }}
                    padding={{ xs: '0', md: '0' }}
                    margin={{ xs: '10px  0 0 0 ', md: '10px 0 0 0' }}
                    fontWeight={{ xs: '500', md: '500' }}>
                    What is your top concern for your parents in India?
                  </HomePageText>
                  <CustomSelect
                    error={errors.what_is_your_top_concern_for_your_parents}
                    value={values.what_is_your_top_concern_for_your_parents}
                    className="contact-form"
                    onChange={event => setFieldValue('what_is_your_top_concern_for_your_parents', event.target.value)}
                    inputProps={{ 'aria-label': 'With label' }}
                    displayEmpty
                    style={{
                      color: values.what_is_your_top_concern_for_your_parents ? '#2447ff' : '#d9d9d9',
                      display: 'flex',
                    }}
                    sx={{
                      '& fieldset': { border: 'none' },
                    }}
                    renderValue={
                      values.what_is_your_top_concern_for_your_parents !== ''
                        ? undefined
                        : () => 'Top concern for your parents'
                    }>
                    <MenuItem value={'What if there is an emergency'}>What if there is an emergency</MenuItem>
                    <MenuItem value={'Who can provide health support'}>Who can provide health support</MenuItem>
                    <MenuItem value={'How can I get help at home'}>How can I get help at home</MenuItem>
                    <MenuItem value={"How can I ensure they're engaged"}>
                      How can I ensure they&apos;re engaged
                    </MenuItem>
                  </CustomSelect>
                </>
              )}

              {/* <HomePageText
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                How did you hear from us?
              </HomePageText>
              <CustomSelect
                value={values.how_did_you_hear_from_us}
                onChange={event => setFieldValue('how_did_you_hear_from_us', event.target.value)}
                inputProps={{ 'aria-label': 'Without label' }}
                displayEmpty
                renderValue={values.how_did_you_hear_from_us !== '' ? undefined : () => 'How did you hear from us?'}>
                <MenuItem value={'Search Engine(Google, Bing, etc.)'}>Search Engine(Google, Bing, etc.)</MenuItem>
                <MenuItem value={'Social Media (FB, Insta, etc.)'}>Social Media (FB, Insta, etc.)</MenuItem>
                <MenuItem value={'YouTube'}>YouTube</MenuItem>
                <MenuItem value={'Friends or Family'}>Friends or Family</MenuItem>
                <MenuItem value={'Others'}>Others</MenuItem>
              </CustomSelect> */}

              <ButtonContainer>
                <CustomButton
                  id="ContactFormSubmit"
                  type="submit"
                  variant="contained"
                  color="primary"
                  onPress={handleSubmit}>
                  Connect with us
                </CustomButton>
              </ButtonContainer>
              {/* {!showNumber && (
                <HomePageText
                  textAlign={{ xs: 'center', md: 'center' }}
                  fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                  lineHeight={{ xs: '1.5rem', md: '2rem' }}
                  letterSpacing={{ xs: '-2', md: '-2' }}
                  padding={{ xs: '0', md: '0' }}
                  margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                  cursor="pointer"
                  fontWeight={{ xs: '500', md: '500' }}
                  onClick={() => setShowNumber(true)}>
                  or Call us now
                </HomePageText>
              )}

              {showNumber && (
                <>
                  <HomePageText
                    textAlign={{ xs: 'center', md: 'center' }}
                    fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                    lineHeight={{ xs: '2rem', md: '3rem' }}
                    letterSpacing={{ xs: '-2', md: '-2' }}
                    padding={{ xs: '0', md: '0' }}
                    margin={{ xs: '10px 0 0 0', md: '10px 0 0 0' }}
                    cursor="pointer"
                    fontWeight={{ xs: '500', md: '500' }}>
                    <a href="tel:+91 1800-203-5135" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                      India Toll-Free: 1800-203-5135
                    </a>
                  </HomePageText>
                  <HomePageText
                    textAlign={{ xs: 'center', md: 'center' }}
                    fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                    lineHeight={{ xs: '2rem', md: '3rem' }}
                    letterSpacing={{ xs: '-2', md: '-2' }}
                    padding={{ xs: '0', md: '0' }}
                    margin={{ xs: '2px 0 2.188rem 0', md: '5px 0 2.188rem 0' }}
                    cursor="pointer"
                    fontWeight={{ xs: '500', md: '500' }}>
                    <a href="tel:+1888-866-0486" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                      International Toll-Free: +1888-866-0486
                    </a>
                  </HomePageText>
                </>
              )} */}
            </Form>
          )}
        </Formik>
      </AboutUsSection>
    </div>
  );
}

ContactForm.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.bool,
  onPress: PropTypes.func,
  setOpenModal: PropTypes.func,
  showsFrom: PropTypes.string,
  activePlan: PropTypes.string,
  leadsFrom: PropTypes.string,
  fromVas: PropTypes.bool,
};

export default ContactForm;
