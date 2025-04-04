/**
 *
 * ContactFormModal
 *
 */

import React, { Fragment, useEffect } from 'react';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
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
import CloseIcon from '@mui/icons-material/Close';
import {
  AboutUsSection,
  CustomInput,
  CustomSelect,
  ButtonContainer,
  CustomButton,
  CustomText,
  HeadingExtra,
  Label,
  LabelUnderline,
} from './styles';
import { BusinessPartnerSchema, SignupSchema } from 'utils/validationSchema';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { saveContact } from '../../containers/Home/actions';
import CustomModal from 'components/CustomModal';
import HomePageText from 'components/HomePageText';

import { isValid } from 'utils/phoneUtil';
import Grid from '@mui/material/Grid';
import HomePageImage from 'components/HomePageImage';
import bpPopUp from '../../../public/static/images/bpPopUp.png';
import bpPopUpMoobile from '../../../public/static/images/bpPopUpMoobile.png';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import HomePageBox from 'components/HomePageBox';
import useMediaQuery from '@mui/material/useMediaQuery';

function ContactFormModal({
  closeModal,
  openModal,
  setOpenModal,
  showsFrom,
  activePlan,
  leadsFrom,
  customUtm,
  leadsObj,
  businessPartnerChanges,
  DID,
  isFromBp,
  contactFormLoader,
  isFromEnquire = false,
}) {
  const [showNumber, setShowNumber] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const matches = useMediaQuery('(max-width:600px)');

  const router = useRouter();
  const dispatch = useDispatch();
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
          name: values.fullName,
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
        },
        setOpenModal: () => {
          setLoading(false);
          setOpenModal(true);
          setFieldValue('phoneNumber', '');
          closeModal();
          resetForm();
          setShowNumber(false);
        },
      };
      setLoading(true);
      dispatch(saveContact(payload));

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

  useEffect(() => {
    setLoading(contactFormLoader);
  }, [contactFormLoader]);

  return (
    <CustomModal handleClose={closeModal} open={openModal}>
      <Box
        sx={{
          width: { xs: isFromBp && '100%', md: isFromBp && '65%' },
        }}
        className={'custom_modal'}>
        <IconButton
          onClick={closeModal}
          style={{
            display: 'flex',
            right: '18px',
            position: 'absolute',
            zIndex: '1',
            color: 'white',
          }}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
          <Fragment>
            {isFromBp && (
              <Grid style={{ position: 'relative' }} size xs={isFromBp && 11} lg={isFromBp && 6}>
                <HomePageBox height={{ xs: '100%', md: '100%' }}>
                  <HomePageImage width="100%" height="100%" src={matches ? bpPopUpMoobile : bpPopUp} />
                </HomePageBox>
                <HomePageBox
                  position={{ xs: 'absolute', md: 'absolute' }}
                  bottom={{ xs: '1rem', md: '4rem' }}
                  textAlign={{ xs: 'center', md: 'left' }}
                  left={{ xs: '6rem', md: '4rem' }}>
                  <HomePageText
                    color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                    padding={{ xs: '0', md: '0' }}
                    fontSize={{ xs: '2.0rem', md: '3.2rem' }}
                    fontWeight={{ xs: '700', md: '700' }}>
                    Earn Up To 15 Lakh{' '}
                  </HomePageText>
                  <HomePageText
                    color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                    padding={{ xs: '0', md: '0' }}
                    fontSize={{ xs: '1rem', md: '2rem' }}
                    fontWeight={{ xs: '700', md: '700' }}>
                    With Emoha Eldercare.
                  </HomePageText>
                  <HomePageText
                    padding={{ xs: '1rem 0 0 0 ', md: '3rem 0 0 0' }}
                    color={{ xs: '#CC4746', md: '#CC4746' }}
                    fontSize={{ xs: '1.6rem', md: '2.4rem' }}
                    fontWeight={{ xs: '600', md: '600' }}>
                    Become A Business Partner.
                  </HomePageText>
                </HomePageBox>
              </Grid>
            )}
            <Grid size xs={isFromBp ? 11 : 12} lg={isFromBp ? 6 : 12}>
              <AboutUsSection>
                {!isFromBp && (
                  <>
                    {businessPartnerChanges ? (
                      <CustomText
                        textAlign={{ xs: 'left', md: 'left' }}
                        fontSize={{ xs: '1.7rem', md: '2.2rem' }}
                        lineHeight={{ xs: '2rem', md: '2.6rem' }}
                        letterSpacing={{ xs: '-3', md: '-3' }}
                        margin={{ xs: '0  0 4px 0 ', md: '0 0 8px 0' }}
                        fontWeight={{ xs: '500', md: '500' }}>
                        Earn up to 5 lakh with Emoha Eldercare. Become a Business Partner today.
                      </CustomText>
                    ) : (
                      <CustomText
                        textAlign={{ xs: 'left', md: 'left' }}
                        fontSize={{ xs: '1.7rem', md: '2.2rem' }}
                        lineHeight={{ xs: '2rem', md: '2.6rem' }}
                        letterSpacing={{ xs: '-3', md: '-3' }}
                        margin={{ xs: '0  0 4px 0 ', md: '0 0 8px 0' }}
                        fontWeight={{ xs: '500', md: '500' }}>
                        60,000+ Seniors’ sons & daughters have chosen Emoha.
                        <HeadingExtra>&nbsp;Join us today!</HeadingExtra>
                      </CustomText>
                    )}
                  </>
                )}

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
                    const BusinessSchema =
                      isEmpty(val.fullName) ||
                      isEmpty(val.email) ||
                      isEmpty(val.phoneNumber) ||
                      isEmpty(val.investment_budget_of_5_lacs_for_business) ||
                      isEmpty(val.own_an_office_space_of_200_sqft_carpet_area) ||
                      isEmpty(val.city);
                    const condition = businessPartnerChanges ? BusinessSchema : footerSchema;
                    if (condition)
                      toast.error('Please fill all the details.', {
                        autoClose: 10000,
                        draggable: false,
                      });
                  }}
                  validationSchema={businessPartnerChanges ? BusinessPartnerSchema : SignupSchema}
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
                            setFieldValue('phoneNumber', phoneNumber.replace(/^0+/, ''));
                          }
                        }}
                        value={values?.phoneNumber.replace(/^0+/, '')}
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
                      {businessPartnerChanges ? (
                        <>
                          <Label
                            textAlign={{ xs: 'left', md: 'left' }}
                            fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                            lineHeight={{ xs: '1.5rem', md: '2rem' }}
                            letterSpacing={{ xs: '-2', md: '-2' }}
                            padding={{ xs: '0', md: '0' }}
                            margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                            fontWeight={{ xs: '500', md: '500' }}>
                            City
                          </Label>
                          {/*  */}
                          <CustomInput
                            name="city"
                            width={'100%'}
                            value={values.city}
                            type="text"
                            onChange={handleChange}
                            margin="1rem 0"
                            placeholder="City name"
                            error={errors.city}
                          />
                          <Label
                            textAlign={{ xs: 'left', md: 'left' }}
                            fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                            lineHeight={{ xs: '1.5rem', md: '2rem' }}
                            letterSpacing={{ xs: '-2', md: '-2' }}
                            padding={{ xs: '0', md: '0' }}
                            margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                            fontWeight={{ xs: '500', md: '500' }}>
                            {isFromBp
                              ? 'Do you have 5 lakhs to invest in a highly rewarding business opportunity?'
                              : 'Do you have investment budget of 5 Lakhs for business opportunity?'}
                          </Label>
                          <CustomSelect
                            style={{
                              color: values.investment_budget_of_5_lacs_for_business ? '#1a1a1a' : '#d9d9d9',
                              display: 'flex',
                            }}
                            value={values.investment_budget_of_5_lacs_for_business}
                            onChange={event =>
                              setFieldValue('investment_budget_of_5_lacs_for_business', event.target.value)
                            }
                            inputProps={{ 'aria-label': 'With label' }}
                            displayEmpty
                            error={errors.investment_budget_of_5_lacs_for_business}
                            renderValue={
                              values.investment_budget_of_5_lacs_for_business !== '' ? undefined : () => 'Yes / No'
                            }>
                            <MenuItem value={'true'}>Yes</MenuItem>
                            <MenuItem value={'false'}>No</MenuItem>
                          </CustomSelect>
                          {/*  */}
                          {!isFromEnquire && (
                            <>
                              <Label
                                textAlign={{ xs: 'left', md: 'left' }}
                                fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                                lineHeight={{ xs: '1.5rem', md: '2rem' }}
                                letterSpacing={{ xs: '-2', md: '-2' }}
                                padding={{ xs: '0', md: '0' }}
                                margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                                fontWeight={{ xs: '500', md: '500' }}>
                                {isFromBp
                                  ? 'Do you have an office space that is at least 200 square feet in size?'
                                  : 'Do you own an office space with a minimum of 200 sqft carpet area?'}
                              </Label>
                              <CustomSelect
                                style={{
                                  color: values.own_an_office_space_of_200_sqft_carpet_area ? '#1a1a1a' : '#d9d9d9',
                                  display: 'flex',
                                }}
                                error={errors.own_an_office_space_of_200_sqft_carpet_area}
                                value={values.own_an_office_space_of_200_sqft_carpet_area}
                                onChange={event =>
                                  setFieldValue('own_an_office_space_of_200_sqft_carpet_area', event.target.value)
                                }
                                inputProps={{ 'aria-label': 'With label' }}
                                displayEmpty
                                renderValue={
                                  values.own_an_office_space_of_200_sqft_carpet_area !== ''
                                    ? undefined
                                    : () => 'Yes / No'
                                }>
                                <MenuItem value={'true'}>Yes</MenuItem>
                                <MenuItem value={'false'}>No</MenuItem>
                              </CustomSelect>
                            </>
                          )}
                        </>
                      ) : (
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
                            renderValue={
                              values.how_did_you_hear_from_us !== '' ? undefined : () => 'How did you hear about us?'
                            }>
                            <MenuItem value={'Search Engine(Google, Bing, etc.)'}>
                              Search Engine(Google, Bing, etc.)
                            </MenuItem>
                            <MenuItem value={'Social Media (FB, Insta, etc.)'}>Social Media (FB, Insta, etc.)</MenuItem>
                            <MenuItem value={'YouTube'}>YouTube</MenuItem>
                            <MenuItem value={'Friends or Family'}>Friends or Family</MenuItem>
                            <MenuItem value={'Others'}>Others</MenuItem>
                          </CustomSelect>
                        </>
                      )}
                      {loading ? (
                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            margin: '20px 0',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <CircularProgress />
                        </div>
                      ) : (
                        <ButtonContainer>
                          <CustomButton
                            id="ContactFormSubmit"
                            type="submit"
                            variant="contained"
                            color="primary"
                            onPress={handleSubmit}>
                            {isFromEnquire ? `Enquire now` : `Submit`}
                          </CustomButton>
                        </ButtonContainer>
                      )}

                      {!showNumber && (
                        <>
                          {isFromEnquire ? (
                            <Label
                              textAlign={{ xs: 'center', md: 'center' }}
                              fontSize={{ xs: '1.3rem', md: '1.7rem' }}
                              lineHeight={{ xs: '1.5rem', md: '2rem' }}
                              letterSpacing={{ xs: '-2', md: '-2' }}
                              padding={{ xs: '10px', md: '15px' }} // Added padding for better spacing
                              margin={{ xs: '20px 0', md: '20px 0' }} // Increased margin from top
                              cursor="pointer"
                              fontWeight={{ xs: '500', md: '500' }}
                              backgroundColor="white" // Added white background
                              borderRadius="10px" // Rounded border
                              display="flex" // Used for icon alignment
                              alignItems="center"
                              gap="10px" // Spacing between icon and text
                              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" // Optional: subtle shadow for better appearance
                            >
                              <i className="fas fa-info-circle" style={{ color: '#007bff', fontSize: '1.5rem' }}></i>{' '}
                              {/* Corrected info icon */}
                              This form is not intended for job opportunities. For job-related inquiries, please contact
                              us at
                              <a
                                href="mailto:hr@emoha.com"
                                style={{
                                  color: '#007bff', // Link color
                                  textDecoration: 'none',
                                  marginLeft: '5px',
                                }}>
                                hr@emoha.com
                              </a>
                            </Label>
                          ) : (
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
                        </>
                      )}

                      {showNumber && (
                        <>
                          {businessPartnerChanges ? (
                            <HomePageText
                              textAlign={{ xs: 'center', md: 'center' }}
                              fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                              lineHeight={{ xs: '2rem', md: '3rem' }}
                              letterSpacing={{ xs: '-2', md: '-2' }}
                              padding={{ xs: '0', md: '0' }}
                              margin={{ xs: '10px 0 0 0', md: '10px 0 0 0' }}
                              cursor="pointer"
                              fontWeight={{ xs: '500', md: '500' }}>
                              <a
                                href={`tel:${DID || '+91-8048811604'}`}
                                style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                                Call us at:{DID || +91 - 8048811604}
                              </a>
                            </HomePageText>
                          ) : (
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
                        </>
                      )}
                    </Form>
                  )}
                </Formik>
              </AboutUsSection>
            </Grid>
          </Fragment>
        </Grid>
      </Box>
    </CustomModal>
  );
}

ContactFormModal.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.bool,
  onPress: PropTypes.func,
  setOpenModal: PropTypes.func,
  showsFrom: PropTypes.string,
  activePlan: PropTypes.string,
  leadsFrom: PropTypes.string,
  customUtm: PropTypes.object,
  leadsObj: PropTypes.object,
  businessPartnerChanges: PropTypes.bool,
  DID: PropTypes.string,
  isFromBp: PropTypes.bool,
  contactFormLoader: PropTypes.bool,
};

export default ContactFormModal;
