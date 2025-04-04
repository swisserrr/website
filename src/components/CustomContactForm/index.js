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
import {
  AboutUsSection,
  CustomInput,
  CustomSelect,
  ButtonContainer,
  CustomButton,
  Label,
  CustomInfoText,
} from './styles';
import { BusinessPartnerSchema, SignupSchema } from 'utils/validationSchema';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { saveContact } from '../../containers/Home/actions';

import { isValid, isValidEmail } from 'utils/phoneUtil';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'utils/CustomImage';
import InfoIconBlack from '../../../public/static/images/info-icon-black.png';

function ContactFormModal(props) {
  const {
    showsFrom,
    activePlan,
    leadsFrom,
    customUtm,
    leadsObj,
    businessPartnerChanges,
    contactFormLoader,
    setOpenModal,
  } = props;
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById('label-to-show')?.scrollIntoView();
  }, []);
  const onSave = (values, resetForm, setFieldValue) => {
    const isValidRes = isValid(get(values, 'phoneNumber'), get(values, 'code'));
    const isValidEmailRes = isValidEmail(get(values, 'email'));

    const leadsToSend = customUtm || {
      utm_medium: 'Other',
      utm_source: 'Alliance and Corporate',
      utm_campaign: leadsFrom,
    };

    const { utm_medium, utm_source, utm_campaign } = router.query;
    const utm_final = utm_medium || utm_source || utm_campaign;

    const finalLeads = isNil(leadsFrom) ? {} : isEmpty(utm_final) ? leadsToSend : router.query;

    if (!isValidEmailRes) {
      toast.error('Please enter a valid email.', {
        autoClose: 10000,
        draggable: false,
      });
      return;
    }

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
        },
      };
      setLoading(true);
      dispatch(saveContact(payload, resetForm));

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
    if (isEqual(contactFormLoader?.loading, false)) {
      setLoading(contactFormLoader?.loading);
    }
  }, [contactFormLoader]);

  const smallDevice = useMediaQuery('(max-width:600px)');

  return (
    <Box className={'custom-form-blurred-box-franchise-phone'}>
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        <Fragment>
          <Grid size xs={12} lg={12}>
            {/* <div
                style={{ marginLeft: '20px' }}>
                <HomePageText
                  variant={'h3'}
                  fontSize={{ xs: '1.7rem', md: '2rem' }}
                  fontWeight={{ xs: '600', md: '600' }}
                  textAlign={{ xs: 'left', md: 'left' }}
                  margin={{ xs: '10px  0 10px 0 ', md: '5px 0 10px 0' }}
                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                  textTransform={'none'}
                  lineHeight={{ xs: '2.2rem', md: '2.7rem' }}>
                  {('Become a Franchise Partner')}
                </HomePageText>
              </div> */}

            <AboutUsSection dynamicHeightM={window.innerHeight * 0.83} dynamicHeightD={window.innerHeight * 0.755}>
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  phoneNumber: '',
                  exploring_emoha_for: '',
                  how_did_you_hear_from_us: '',
                  code: '',
                  investment_budget_of_5_lacs_for_business: '',
                  city: '',
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validate={val => {
                  const BusinessSchema =
                    isEmpty(val.fullName) ||
                    isEmpty(val.email) ||
                    isEmpty(val.phoneNumber) ||
                    isEqual(val.investment_budget_of_5_lacs_for_business, '') ||
                    isEmpty(val.city);
                  const condition = BusinessSchema;
                  if (condition)
                    toast.error('Please fill all the details.', {
                      autoClose: 10000,
                      draggable: false,
                    });
                }}
                validationSchema={BusinessPartnerSchema}
                onSubmit={(values, { resetForm, setFieldValue }) => {
                  onSave(values, resetForm, setFieldValue);
                }}>
                {({ errors, values, handleChange, handleSubmit, setFieldValue }) => (
                  <Form id="form">
                    <Label
                      textAlign={{ xs: 'left', md: 'left' }}
                      fontSize={{ xs: '1.5rem', md: '1.7rem' }}
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
                      fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                      lineHeight={{ xs: '1.5rem', md: '2rem' }}
                      letterSpacing={{ xs: '-2', md: '-2' }}
                      padding={{ xs: '0', md: '0' }}
                      margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                      fontWeight={{ xs: '500', md: '500' }}>
                      Mobile Number
                    </Label>
                    <IntlTelInput
                      containerClassName="intl-tel-input-contact unique-instance"
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
                      style={{ borderRadius: '0.5rem' }}
                    />
                    <Label
                      textAlign={{ xs: 'left', md: 'left' }}
                      fontSize={{ xs: '1.5rem', md: '1.7rem' }}
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
                        fontSize={{ xs: '1.5rem', md: '1.7rem' }}
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
                        fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                        lineHeight={{ xs: '1.5rem', md: '2rem' }}
                        letterSpacing={{ xs: '-2', md: '-2' }}
                        padding={{ xs: '0', md: '0' }}
                        margin={{ xs: '10px  0 10px 0 ', md: '10px 0 10px 0' }}
                        fontWeight={{ xs: '500', md: '500' }}>
                        {'Would you like to invest 5 lakhs in a purposeful business opportunity?'}
                      </Label>
                      <CustomSelect
                        style={{
                          color: values.investment_budget_of_5_lacs_for_business ? '#1a1a1a' : '#d9d9d9',
                          display: 'flex',
                          border: 'none!important',
                          outline: 'none', // Removes focus outlines, if necessary
                          boxShadow: 'none',
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none !important', // Specifically targets the outlined variant
                          },
                        }}
                        sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                            // Change the border width
                            border: 'none',
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 500, // Set a max height to the dropdown
                              overflowY: 'auto', // Enable vertical scrolling
                              zIndex: 1302, // Set the z-index
                            },
                          },
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null, // Disable default anchor positioning
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
                    </>

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
                          {`Enquire now`}
                        </CustomButton>
                      </ButtonContainer>
                    )}
                  </Form>
                )}
              </Formik>
              <div>
                <CustomInfoText>
                  {/* Info Icon */}
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={InfoIconBlack}
                      style={{
                        height: smallDevice ? '1.8rem' : '2rem',
                        width: smallDevice ? '5rem' : '3.2rem',
                        marginLeft: smallDevice ? '0px' : '1rem',
                        marginRight: '1rem',
                      }}
                      alt="Info Icon"
                    />
                  </span>

                  {/* Text and Link */}
                  <span style={{ textAlign: 'left' }}>
                    {` This form is not intended for job opportunities. For job-related inquiries, please contact us at`}
                    <a
                      href="mailto:hr@emoha.com"
                      style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        marginLeft: '5px',
                      }}>
                      hr@emoha.com
                    </a>
                    .
                  </span>
                </CustomInfoText>
              </div>
            </AboutUsSection>
          </Grid>
        </Fragment>
      </Grid>
    </Box>
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
  contactFormLoader: PropTypes.bool,
};

export default ContactFormModal;
