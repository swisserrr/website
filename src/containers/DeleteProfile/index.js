/**
 *
 * DeleteProfile
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import makeSelectDeleteProfile from './selectors';
import IntlTelInput from 'react-intl-tel-input';
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
import {
  AboutUsSection,
  CustomInput,
  CustomSelect,
  ButtonContainer,
  CustomButton,
  Label,
  LabelUnderline,
} from './styles';

import { SignupSchema } from 'utils/validationSchema';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { saveContact } from '../../containers/Home/actions';
import HomePageText from 'components/HomePageText';
import { isValid } from 'utils/phoneUtil';

export function DeleteProfile({ activePlan, leadsFrom, customUtm, leadsObj }) {
  const [showNumber, setShowNumber] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const showsFrom = 'Connect with us';
  useEffect(() => {
    document.getElementById('label-to-show')?.scrollIntoView();
  }, []);
  const onSave = (values, resetForm, setFieldValue) => {
    const isValidRes = isValid(get(values, 'phoneNumber'), get(values, 'code'));

    const leadsToSend = customUtm || {
      utm_medium: 'Other',
      utm_source: 'Alliance and Corporate',
      utm_campaign: leadsFrom,
    };

    const { utm_medium, utm_source, utm_campaign } = router.query;
    const utm_final = utm_medium || utm_source || utm_campaign;

    const finalLeads = isNil(leadsFrom) ? {} : isEmpty(utm_final) ? leadsToSend : router.query;

    if (isValidRes) {
      const payload = {
        data: {
          name: values.fullName.concat('__delete_profile'),
          mobile: values.phoneNumber,
          email: values.email,
          lead_source: isEmpty(leadsObj) ? 'Website' : leadsObj?.lead_source,
          country_code: values.country_code,
          investment_budget_of_5_lacs_for_business: isEqual(values.investment_budget_of_5_lacs_for_business, 'true')
            ? true
            : false,
          own_an_office_space_of_200_sqft_carpet_area: isEqual(
            values.own_an_office_space_of_200_sqft_carpet_area,
            'true'
          )
            ? true
            : false,
          city: values.city,
          timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
          exploring_emoha_for: values.exploring_emoha_for,
          how_did_you_hear_from_us: values.how_did_you_hear_from_us,
          lead_source_category: isEmpty(leadsObj) ? 'Others' : leadsObj?.lead_source_category,
          lead_sub_source1: isEmpty(leadsObj)
            ? isEqual(router.pathname, '/')
              ? 'home'
              : split(router.asPath, '/')[1]
            : leadsObj?.lead_sub_source1,
          website_page_name: router.asPath,
          ...finalLeads,
          utm_campaign: 'delete',
        },
      };
      dispatch(saveContact(payload));
      setFieldValue('phoneNumber', '');
      resetForm();
      setShowNumber(false);

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
    <AboutUsSection>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          exploring_emoha_for: '',
          how_did_you_hear_from_us: '',
          code: '',
          investment_budget_of_5_lacs_for_business: '',
          own_an_office_space_of_200_sqft_carpet_area: '',
          city: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={val => {
          const footerSchema = isEmpty(val.fullName) || isEmpty(val.email) || isEmpty(val.phoneNumber);

          const condition = footerSchema;
          if (condition)
            toast.error('Please fill all the details.', {
              autoClose: 10000,
              draggable: false,
            });
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setFieldValue }) => {
          onSave(values, resetForm, setFieldValue);
        }}>
        {({ errors, values, handleChange, handleSubmit, setFieldValue }) => (
          <Form id="form">
            <Label
              textAlign={{ xs: 'left', md: 'left' }}
              fontSize={{ xs: '1.3rem', md: '1.7rem' }}
              lineHeight={{ xs: '1.5rem', md: '2rem' }}
              letterSpacing={{ xs: '-2', md: '-2' }}
              padding={{ xs: '0', md: '0' }}
              margin={{ xs: '10px  0 10px 0 ', md: '5px 0 10px 0' }}
              fontWeight={{ xs: '500', md: '500' }}>
              Full Name
            </Label>
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
            <Label
              textAlign={{ xs: 'left', md: 'left' }}
              fontSize={{ xs: '1.3rem', md: '1.7rem' }}
              lineHeight={{ xs: '1.5rem', md: '2rem' }}
              letterSpacing={{ xs: '-2', md: '-2' }}
              padding={{ xs: '0', md: '0' }}
              margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
              fontWeight={{ xs: '500', md: '500' }}>
              Mobile Number
            </Label>
            <IntlTelInput
              containerClassName="intl-tel-input-contact"
              inputClassName={`${errors.phoneNumber ? 'error_style_form' : ''} otp_style_contact `}
              preferredCountries={['in']}
              onPhoneNumberChange={(status, phoneNumber, country) => {
                if (!isNaN(phoneNumber)) {
                  setFieldValue('country_code', country.dialCode);
                  setFieldValue('code', country.iso2);
                  setFieldValue('phoneNumber', phoneNumber);
                }
              }}
              value={values?.phoneNumber}
              separateDialCode={true}
              placeholder="Phone Number"
            />
            <Label
              textAlign={{ xs: 'left', md: 'left' }}
              fontSize={{ xs: '1.3rem', md: '1.7rem' }}
              lineHeight={{ xs: '1.5rem', md: '2rem' }}
              letterSpacing={{ xs: '-2', md: '-2' }}
              padding={{ xs: '0', md: '0' }}
              margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
              fontWeight={{ xs: '500', md: '500' }}>
              Email
            </Label>
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

            <>
              <Label
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Exploring Emoha for
              </Label>
              <CustomSelect
                style={{
                  color: values.exploring_emoha_for ? '#1a1a1a' : '#d9d9d9',
                  display: 'flex',
                }}
                value={values.exploring_emoha_for}
                onChange={event => setFieldValue('exploring_emoha_for', event.target.value)}
                inputProps={{ 'aria-label': 'With label' }}
                displayEmpty
                renderValue={values.exploring_emoha_for !== '' ? undefined : () => 'Exploring Emoha for?'}>
                <MenuItem value={'Myself or spouse'}>Myself or spouse</MenuItem>
                <MenuItem value={'For my parents or an elder'}>For my parents or an elder</MenuItem>
              </CustomSelect>
              <Label
                textAlign={{ xs: 'left', md: 'left' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                fontWeight={{ xs: '500', md: '500' }}>
                How did you hear about us?
              </Label>
              <CustomSelect
                value={values.how_did_you_hear_from_us}
                onChange={event => setFieldValue('how_did_you_hear_from_us', event.target.value)}
                inputProps={{ 'aria-label': 'Without label' }}
                displayEmpty
                style={{
                  color: values.how_did_you_hear_from_us ? '#1a1a1a' : '#d9d9d9',
                  display: 'flex',
                }}
                renderValue={values.how_did_you_hear_from_us !== '' ? undefined : () => 'How did you hear about us?'}>
                <MenuItem value={'Search Engine(Google, Bing, etc.)'}>Search Engine(Google, Bing, etc.)</MenuItem>
                <MenuItem value={'Social Media (FB, Insta, etc.)'}>Social Media (FB, Insta, etc.)</MenuItem>
                <MenuItem value={'YouTube'}>YouTube</MenuItem>
                <MenuItem value={'Friends or Family'}>Friends or Family</MenuItem>
                <MenuItem value={'Others'}>Others</MenuItem>
              </CustomSelect>
            </>

            <ButtonContainer>
              <CustomButton
                id="ContactFormSubmit"
                type="submit"
                variant="contained"
                color="primary"
                onPress={handleSubmit}>
                Submit
              </CustomButton>
            </ButtonContainer>
            {!showNumber && (
              <Label
                textAlign={{ xs: 'center', md: 'center' }}
                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                cursor="pointer"
                fontWeight={{ xs: '500', md: '500' }}
                onClick={() => setShowNumber(true)}>
                or <LabelUnderline>Call us now</LabelUnderline>
              </Label>
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
                  <a href="tel:1800-203-5135" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
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
            )}
          </Form>
        )}
      </Formik>
    </AboutUsSection>
  );
}

DeleteProfile.propTypes = {
  openModal: PropTypes.bool,
  onPress: PropTypes.func,
  setOpenModal: PropTypes.func,
  showsFrom: PropTypes.string,
  activePlan: PropTypes.string,
  leadsFrom: PropTypes.string,
  customUtm: PropTypes.object,
  leadsObj: PropTypes.object,
  businessPartnerChanges: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  deleteProfile: makeSelectDeleteProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DeleteProfile);
