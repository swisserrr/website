/* eslint-disable max-len */
/**
 *
 * Footer
 *
 */

import React, { memo, useCallback, useState, useEffect } from 'react';
import {
  FooterBottomContainer,
  FooterBottomText,
  FooterContainer,
  FooterBottomTextUnderline,
  FooterMaxWidth,
  AboutUsSection,
  AboutUsSectionTextBig,
  AboutUsSectionTextSmall,
  MaxWidthAboutUs,
  AboutUsSectionEnd,
  ButtonContainer,
  CustomButton,
  CustomInput,
  CustomSelect,
  DetailContainer,
  DetailContainerText,
  EmohaDetail,
  CustomImage,
  FooterSocialIcons,
  ImageGoogleContainer,
  OfficeDetailContainer,
  ContactFormSection,
  OfficeContactContainer,
  AboutUsSectionTerms,
  GetTheAppTextBig,
  MaxWidthSocialIcons,
  FeedbackTerms,
  SocialSection,
} from './styles';
import Image from 'utils/CustomImage';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import split from 'lodash/split';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Form, Formik } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import { BusinessPartnerSchema, LandingPageSchema, SignupSchema, VasLandingPageSchema } from 'utils/validationSchema';

import useMediaQuery from '@mui/material/useMediaQuery';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { saveContact } from '../../containers/Home/actions';
import isEqual from 'lodash/isEqual';
import { isValid } from 'utils/phoneUtil';
import Link from 'next/link';
import MobileNumberPicker from 'components/MobileNumberPicker';
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const IntlTelInput = dynamic(() => import('react-intl-tel-input'), { ssr: false });
function Footer({
  hideAboutSection,
  disableMargin,
  customUtm,
  leadsObj,
  changeQuesTopConcern,
  leadsFrom,
  hideFormSection,
  changesFromCorporate,
  businessPartnerChanges,
  fromVas,
  DID,
  doYouKnow,
  officeSpace,
  bpEmail,
  fromApollo,
  phoneNumberClick,
  footerData,
}) {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { campaign_name } = useSelector(state => state.login);
  const isPolicyBazaar = router.asPath.includes('Policybazaar');
  const closeModal = () => {
    setOpenModal(false);
  };

  const onSave = useCallback(
    (values, resetForm) => {
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
            timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
            exploring_emoha_for: values.exploring_emoha_for,
            how_did_you_hear_from_us: values.how_did_you_hear_from_us,
            what_is_your_top_concern_for_your_parents: values.what_is_your_top_concern_for_your_parents,
            lead_source_category: isEmpty(leadsObj) ? 'Others' : leadsObj?.lead_source_category,
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
            website_page_name: router.asPath,
            lead_sub_source1: isEmpty(leadsObj)
              ? isEqual(router.pathname, '/')
                ? 'home'
                : split(router.asPath, '/')[1]
              : leadsObj?.lead_sub_source1,
            code: '',
            area_pincode: values.areaPincode,
            ...finalLeads,
          },
          setOpenModal,
        };
        dispatch(saveContact(payload));
        resetForm();

        pushEvent(EVENT_NAME.FORM_FILLED, {
          block_name: 'About Us',
          page_name: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
          source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
        });
      } else {
        toast.error('Please enter a valid number.', {
          autoClose: 10000,
          draggable: false,
        });
      }
    },
    [router, leadsFrom]
  );

  const onGetAppClick = useCallback(osName => {
    if (isEqual(osName, 'android')) {
      window.open('https://play.google.com/store/apps/details?id=com.emoha&hl=en_IN');
    }
    if (isEqual(osName, 'ios')) {
      window.open('https://apps.apple.com/in/app/emoha/id1485996520');
    }
    pushEvent(EVENT_NAME.DOWNLOAD_APP, {
      os_name: osName,
    });
  }, []);

  const onSocialIconClick = useCallback(socialPlatform => {
    switch (socialPlatform) {
      case 'Youtube':
        window.open('https://www.youtube.com/channel/UCS2h4oH--JrrP_gjxvQpYjw');
        break;
      case 'Facebook':
        window.open('https://www.facebook.com/emohaeldercare/');
        break;
      case 'Whatsapp':
        window.open(
          'https://api.whatsapp.com/send/?phone=919953513008&text=Hi%2C+Got+to+know+about+Emoha+via+your+website.+Interested+to+know+more%21&type=phone_number&app_absent=0'
        );
        break;
      case 'Instagram':
        window.open('https://www.instagram.com/emohaeldercare');
        break;
      case 'Linkedin':
        window.open('https://www.linkedin.com/company/emoha-eldercare');
        break;
    }
    pushEvent(EVENT_NAME.CLICK_SOCIAL, {
      platform_name: socialPlatform,
    });
  }, []);

  const handleRoute = useCallback(pageName => {
    router.push(`/${pageName}`);
    pushEvent(EVENT_NAME.CLICK_PAGE, {
      page_name: pageName,
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
  }, []);

  const [isSelectOne, setIsSelectOne] = useState(false);
  const [isSelectTwo, setIsSelectTwo] = useState(false);

  useEffect(() => {
    const handler = () => {
      isSelectOne && setIsSelectOne(false);
      isSelectTwo && setIsSelectTwo(false);
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [isSelectOne, isSelectTwo]);

  return (
    <FooterContainer hideFormSection={hideFormSection}>
      <Grid container display={'flex'} maxWidth={1200} justifyContent={'center'} flexDirection={'row'}>
        {!hideFormSection && (
          <>
            {!fromApollo && !isPolicyBazaar && (
              <OfficeContactContainer item xl={6} lg={6} md={6} sm={12} xs={12} display={'flex'}>
                <ContactFormSection disableMargin={disableMargin}>
                  <HomePageText
                    variant={'h3'}
                    fontSize={{ xs: '1.7rem', md: '2.2rem' }}
                    fontWeight={{ xs: '600', md: '600' }}
                    textAlign={{ xs: 'center', md: 'center' }}
                    color={{ xs: '#CC4746', md: '#CC4746' }}
                    margin={{ xs: '0rem 0 1.577rem 0', md: '0 0 2.2rem 0' }}
                    padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                    textTransform={'none'}
                    lineHeight={{ xs: '2.2rem', md: '2.7rem' }}>
                    {changeQuesTopConcern ? 'Got Any Query?' : capitalize('Connect with us')}
                  </HomePageText>
                  <Formik
                    initialValues={{
                      fullName: '',
                      email: '',
                      phoneNumber: '',
                      exploring_emoha_for: '',
                      how_did_you_hear_from_us: '',
                      what_is_your_top_concern_for_your_parents: '',
                      investment_budget_of_5_lacs_for_business: '',
                      own_an_office_space_of_200_sqft_carpet_area: '',
                      city: '',
                      areaPincode: '',
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={val => {
                      const BusinessSchema =
                        isEmpty(val.fullName) ||
                        isEmpty(val.email) ||
                        isEmpty(val.phoneNumber) ||
                        isEmpty(val.investment_budget_of_5_lacs_for_business) ||
                        isEmpty(val.own_an_office_space_of_200_sqft_carpet_area) ||
                        isEmpty(val.city);
                      const LandingSchema =
                        isEmpty(val.fullName) ||
                        isEmpty(val.email) ||
                        isEmpty(val.phoneNumber) ||
                        isEmpty(val.what_is_your_top_concern_for_your_parents);
                      const LandingVasSchema =
                        isEmpty(val.fullName) ||
                        isEmpty(val.email) ||
                        isEmpty(val.phoneNumber) ||
                        isEmpty(val.areaPincode);
                      const FooterSchema = isEmpty(val.fullName) || isEmpty(val.email) || isEmpty(val.phoneNumber);
                      const condition = businessPartnerChanges
                        ? BusinessSchema
                        : changeQuesTopConcern
                          ? LandingSchema
                          : fromVas
                            ? LandingVasSchema
                            : FooterSchema;
                      if (condition)
                        toast.error('Please fill all the details.', {
                          autoClose: 10000,
                          draggable: false,
                        });
                    }}
                    validationSchema={
                      businessPartnerChanges
                        ? BusinessPartnerSchema
                        : changeQuesTopConcern
                          ? LandingPageSchema
                          : fromVas
                            ? VasLandingPageSchema
                            : SignupSchema
                    }
                    onSubmit={(values, { resetForm, setFieldValue }) => {
                      onSave(values, resetForm, setFieldValue);
                    }}>
                    {({ errors, values, handleChange, handleSubmit, setFieldValue }) => (
                      <Form>
                        <HomePageText
                          variant={'p'}
                          fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                          fontWeight={{ xs: '500', md: '500' }}
                          textAlign={{ xs: 'left', md: 'left' }}
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                          textTransform={'none'}
                          lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                          {capitalize(`Full name${businessPartnerChanges ? '' : !changeQuesTopConcern ? '*' : ''}`)}
                        </HomePageText>
                        <CustomInput
                          variant="standard"
                          name="fullName"
                          width={'100%'}
                          value={values?.fullName}
                          type="text"
                          onChange={handleChange}
                          margin="1rem 0"
                          placeholder="Enter full name"
                          error={errors.fullName}
                        />
                        <HomePageText
                          variant={'p'}
                          fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                          fontWeight={{ xs: '500', md: '500' }}
                          textAlign={{ xs: 'left', md: 'left' }}
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                          lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                          Email
                        </HomePageText>
                        <CustomInput
                          name="email"
                          width={'100%'}
                          value={values?.email}
                          type="text"
                          onChange={handleChange}
                          margin="1rem 0"
                          placeholder="Email address"
                          error={errors.email}
                        />
                        <HomePageText
                          variant={'p'}
                          fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                          fontWeight={{ xs: '500', md: '500' }}
                          textAlign={{ xs: 'left', md: 'left' }}
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                          textTransform={'none'}
                          lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                          {capitalize('Phone number')}
                        </HomePageText>

                        {changeQuesTopConcern || fromVas ? (
                          <div style={{ marginBottom: 15 }}>
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
                          </div>
                        ) : (
                          <IntlTelInput
                            containerClassName="intl-tel-input"
                            inputClassName={`${errors.phoneNumber ? 'error_style_form' : ''} otp_style_home `}
                            preferredCountries={['in']}
                            onPhoneNumberChange={(_, phoneNumber, country) => {
                              if (!isNaN(phoneNumber)) {
                                setFieldValue('country_code', country.dialCode);
                                setFieldValue('code', country.iso2);
                                setFieldValue('phoneNumber', phoneNumber);
                              }
                            }}
                            value={values?.phoneNumber}
                            separateDialCode={true}
                            placeholder="Phone number"
                          />
                        )}

                        <Grid container>
                          <Grid size md={12} sm={12} xs={12}>
                            {businessPartnerChanges ? (
                              <>
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  textTransform={'none'}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  {capitalize(`City`)}
                                </HomePageText>
                                <CustomInput
                                  variant="standard"
                                  name="city"
                                  width={'100%'}
                                  value={values?.city}
                                  type="text"
                                  onChange={handleChange}
                                  margin="1rem 0"
                                  placeholder="City name"
                                  error={errors.city}
                                />
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  textTransform={{ xs: 'none', md: 'none' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  {doYouKnow || 'Do you have investment budget of 5 Lakhs for business opportunity?'}
                                </HomePageText>
                                <CustomSelect
                                  error={errors.investment_budget_of_5_lacs_for_business}
                                  value={values.investment_budget_of_5_lacs_for_business}
                                  className="contact-form"
                                  onChange={event =>
                                    setFieldValue('investment_budget_of_5_lacs_for_business', event.target.value)
                                  }
                                  inputProps={{ 'aria-label': 'With label' }}
                                  displayEmpty
                                  style={{
                                    color: values.investment_budget_of_5_lacs_for_business ? '#2447ff' : '#d9d9d9',
                                    display: 'flex',
                                  }}
                                  sx={{
                                    '& fieldset': { border: 'none' },
                                  }}
                                  renderValue={
                                    values.investment_budget_of_5_lacs_for_business !== '' ? undefined : () => 'Yes/No'
                                  }>
                                  <MenuItem value={'true'}>Yes</MenuItem>
                                  <MenuItem value={'false'}>No</MenuItem>
                                </CustomSelect>
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  textTransform={{ xs: 'none', md: 'none' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  {officeSpace || 'Do you own an office space with a minimum of 200 sqft carpet area?'}
                                </HomePageText>
                                <CustomSelect
                                  error={errors.own_an_office_space_of_200_sqft_carpet_area}
                                  value={values.own_an_office_space_of_200_sqft_carpet_area}
                                  className="contact-form"
                                  onChange={event =>
                                    setFieldValue('own_an_office_space_of_200_sqft_carpet_area', event.target.value)
                                  }
                                  inputProps={{ 'aria-label': 'With label' }}
                                  displayEmpty
                                  style={{
                                    color: values.own_an_office_space_of_200_sqft_carpet_area ? '#2447ff' : '#d9d9d9',
                                    display: 'flex',
                                  }}
                                  sx={{
                                    '& fieldset': { border: 'none' },
                                  }}
                                  renderValue={
                                    values.own_an_office_space_of_200_sqft_carpet_area !== ''
                                      ? undefined
                                      : () => 'Yes/No'
                                  }>
                                  <MenuItem value={'true'}>Yes</MenuItem>
                                  <MenuItem value={'false'}>No</MenuItem>
                                </CustomSelect>
                              </>
                            ) : changeQuesTopConcern ? (
                              <>
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  textTransform={{ xs: 'none', md: 'none' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  What is your top concern for your parents in India?
                                </HomePageText>
                                <CustomSelect
                                  error={errors.what_is_your_top_concern_for_your_parents}
                                  value={values.what_is_your_top_concern_for_your_parents}
                                  className="contact-form"
                                  onChange={event =>
                                    setFieldValue('what_is_your_top_concern_for_your_parents', event.target.value)
                                  }
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
                                  <MenuItem value={'What if there is an emergency'}>
                                    What if there is an emergency
                                  </MenuItem>
                                  <MenuItem value={'Who can provide health support'}>
                                    Who can provide health support
                                  </MenuItem>
                                  <MenuItem value={'How can I get help at home'}>How can I get help at home</MenuItem>
                                  <MenuItem value={"How can I ensure they're engaged"}>
                                    How can I ensure they&apos;re engaged
                                  </MenuItem>
                                </CustomSelect>
                              </>
                            ) : fromVas ? (
                              <>
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  Please Share Your Area Name with Pincode
                                </HomePageText>
                                <CustomInput
                                  name="areaPincode"
                                  width={'100%'}
                                  value={values?.areaPincode}
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
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  textTransform={{ xs: 'none', md: 'none' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  Exploring Emoha for
                                </HomePageText>
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
                                    color: values.exploring_emoha_for ? '#2447ff' : '#d9d9d9',
                                    display: 'flex',
                                  }}
                                  className="contact-form"
                                  value={values?.exploring_emoha_for}
                                  onChange={event => setFieldValue('exploring_emoha_for', event.target.value)}
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  displayEmpty
                                  renderValue={
                                    values.exploring_emoha_for !== '' ? undefined : () => 'Exploring Emoha for?'
                                  }>
                                  <MenuItem value={'Myself or spouse'}>Myself or spouse</MenuItem>
                                  <MenuItem value={'For my parents or an elder'}>For my parents or an elder</MenuItem>
                                </CustomSelect>
                              </>
                            )}
                          </Grid>
                          <Grid size md={12} sm={12} xs={12}>
                            {businessPartnerChanges ? null : changeQuesTopConcern ? null : fromVas ? null : (
                              <>
                                <HomePageText
                                  variant={'p'}
                                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                                  fontWeight={{ xs: '500', md: '500' }}
                                  textAlign={{ xs: 'left', md: 'left' }}
                                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                                  letterSpacing={{ xs: '-0.02em', md: '-0.02em' }}
                                  textTransform={{ xs: 'none', md: 'none' }}
                                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                                  How did you hear about us
                                </HomePageText>
                                <CustomSelect
                                  open={isSelectTwo}
                                  onOpen={() => {
                                    setIsSelectTwo(true);
                                  }}
                                  onClose={() => {
                                    setIsSelectTwo(false);
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
                                  className="contact-form"
                                  sx={{
                                    '& fieldset': { border: 'none' },
                                  }}
                                  style={{
                                    color: values?.how_did_you_hear_from_us ? '#2447ff' : '#d9d9d9',
                                  }}
                                  value={values?.how_did_you_hear_from_us}
                                  onChange={event => setFieldValue('how_did_you_hear_from_us', event.target.value)}
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  displayEmpty
                                  icon={{ color: '#ffffff' }}
                                  renderValue={
                                    values.how_did_you_hear_from_us !== ''
                                      ? undefined
                                      : () => 'How did you hear about us?'
                                  }>
                                  <MenuItem value={'Search Engine(Google, Bing, etc.)'}>
                                    Search Engine(Google, Bing, etc.)
                                  </MenuItem>
                                  <MenuItem value={'Social Media (FB, Insta, etc.)'}>
                                    Social Media (FB, Insta, etc.)
                                  </MenuItem>
                                  <MenuItem value={'YouTube'}>YouTube</MenuItem>
                                  <MenuItem value={'Friends or Family'}>Friends or Family</MenuItem>
                                  <MenuItem value={'Others'}>Others</MenuItem>
                                </CustomSelect>
                              </>
                            )}
                          </Grid>
                        </Grid>
                        <ButtonContainer>
                          <CustomButton
                            id="ContactFormSubmit"
                            type="submit"
                            variant="contained"
                            color="primary"
                            onPress={() => {
                              handleSubmit();
                            }}>
                            {changeQuesTopConcern ? 'Connect with us' : fromVas ? 'Connect with us' : 'Submit'}
                          </CustomButton>
                        </ButtonContainer>
                      </Form>
                    )}
                  </Formik>
                </ContactFormSection>
              </OfficeContactContainer>
            )}
            <OfficeDetailContainer item xl={6} lg={6} md={6} sm={12} xs={12} display={'flex'}>
              <EmohaDetail>
                <DetailContainer>
                  <CustomImage
                    src="/static/images/location_on.webp"
                    alt="Emoha location"
                    height={25.52}
                    width={25.52}
                  />
                  <a
                    href={
                      !get(footerData, 'address') && !get(footerData, 'address_url')
                        ? 'http://maps.google.com/?q=216, Ocus Quantum Plaza, Sector 51, Opposite BPTP Freedom Park, Near Artemis Hospital Gurugram,Haryana 122003'
                        : !get(footerData, 'address_url')
                          ? ''
                          : get(footerData, 'address_url')
                    }
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                    target="_blank"
                    rel="noreferrer">
                    <DetailContainerText>
                      {get(footerData, 'address') ||
                        '216, Ocus Quantum Plaza, Sector 51, Opposite BPTP Freedom Park, Near Artemis Hospital Gurugram, Haryana 122003'}
                    </DetailContainerText>
                  </a>
                </DetailContainer>
                <DetailContainer>
                  <CustomImage
                    src="/static/images/alternate_email.webp"
                    alt="Email icon"
                    height={25.52}
                    width={25.52}
                  />
                  <a
                    href={
                      fromApollo
                        ? 'mailto:seniorsfirst@emoha.com'
                        : get(footerData, 'email')
                          ? 'mailto:' + get(footerData, 'email')
                          : 'mailto:feedback@emoha.com'
                    }
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}>
                    <DetailContainerText>
                      {fromApollo
                        ? 'seniorsfirst@emoha.com'
                        : get(footerData, 'email')
                          ? get(footerData, 'email')
                          : bpEmail || 'eldersfirst@emoha.com'}
                    </DetailContainerText>
                  </a>
                </DetailContainer>
                <DetailContainer>
                  <CustomImage src="/static/images/language.webp" alt="Website location" height={25.52} width={25.52} />
                  <Link href="/" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <DetailContainerText>www.emoha.com</DetailContainerText>
                  </Link>
                </DetailContainer>

                <DetailContainer>
                  <CustomImage src="/static/images/call.webp" alt="Call icon" height={25.52} width={25.52} />
                  {businessPartnerChanges ? (
                    <DetailContainerText>
                      <a
                        href={`tel:${isEmpty(DID) ? '+91 - 8048811604' : DID}`}
                        style={{ color: '#ffffff', textDecoration: 'none' }}>
                        Call us at: {isEmpty(DID) ? '+91-8048811604' : DID}
                      </a>
                    </DetailContainerText>
                  ) : changesFromCorporate ? (
                    <DetailContainerText>
                      <a
                        href={`tel:${changesFromCorporate ? `${changesFromCorporate}` : '1800-203-5135'}`}
                        style={{ color: '#ffffff', textDecoration: 'none' }}>
                        {fromVas ? `Call us at` : changesFromCorporate ? `Call us` : `India Toll-Free`} : &nbsp;
                        {changesFromCorporate ? `${changesFromCorporate}` : '1800-203-5135'}
                      </a>
                    </DetailContainerText>
                  ) : (
                    <DetailContainerText>
                      <a
                        href={`tel:${changesFromCorporate ? `${changesFromCorporate}` : '1800-203-5135'}`}
                        onClick={phoneNumberClick}
                        style={{ color: '#ffffff', textDecoration: 'none' }}>
                        {changesFromCorporate ? `Call us` : `India Toll-Free`} : &nbsp;
                        {changesFromCorporate ? `${changesFromCorporate}` : '1800-203-5135'}
                      </a>
                    </DetailContainerText>
                  )}
                </DetailContainer>
                {changesFromCorporate || businessPartnerChanges ? null : (
                  <DetailContainer>
                    <CustomImage src="/static/images/call.webp" alt="Call icon" height={25.52} width={25.52} />
                    <DetailContainerText>
                      <a href={'tel:+1888-866-0486'} style={{ color: '#ffffff', textDecoration: 'none' }}>
                        International Toll-Free : &nbsp;+1888-866-0486
                      </a>
                    </DetailContainerText>
                  </DetailContainer>
                )}
              </EmohaDetail>
            </OfficeDetailContainer>
          </>
        )}
      </Grid>
      {!hideAboutSection && (
        <MaxWidthAboutUs>
          <Grid container display={'flex'} maxWidth={1200} justifyContent={'center'} flexDirection={'row'}>
            <Grid size xl={8} lg={8} md={8} sm={12} xs={12} display={'flex'} width={'100%'}>
              <AboutUsSection>
                <AboutUsSectionTextBig>About us</AboutUsSectionTextBig>
                <AboutUsSectionTextSmall onClick={() => handleRoute('about-us')}>About Emoha</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('plans')}>Membership</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('mohtv')}>Moh TV</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('blogs')}>Blogs</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('media')}>Media</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('user-stories')}>
                  User stories
                </AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('business-partner')}>
                  Franchise Partnership
                </AboutUsSectionTextSmall>
              </AboutUsSection>
              <AboutUsSection>
                <AboutUsSectionTextBig>Support</AboutUsSectionTextBig>
                <AboutUsSectionTextSmall onClick={() => handleRoute('emergency')}>
                  Emergency support
                </AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('services')}>VAS services</AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('contact-us')}>Contact us</AboutUsSectionTextSmall>
              </AboutUsSection>
              <AboutUsSectionTerms>
                <AboutUsSectionTextBig>Terms & Policies</AboutUsSectionTextBig>
                <AboutUsSectionTextSmall onClick={() => handleRoute('terms-and-conditions')} disappear>
                  Terms and condition
                </AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('privacy-policy')} disappear>
                  Privacy policy
                </AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('cookies-policy')} disappear>
                  Cookies policy
                </AboutUsSectionTextSmall>
                <AboutUsSectionTextSmall onClick={() => handleRoute('disclaimer')} disappear>
                  Disclaimer
                </AboutUsSectionTextSmall>
              </AboutUsSectionTerms>
            </Grid>
            <Grid size xl={4} lg={4} md={4} sm={12} xs={12} display={'flex'} width={'100%'}>
              {!isEqual(campaign_name, 'abhi') && (
                <AboutUsSectionEnd>
                  <GetTheAppTextBig align={!matches}>Get the app</GetTheAppTextBig>
                  <ImageGoogleContainer onClick={() => onGetAppClick('android')}>
                    <CustomImage
                      src="/static/images/google-play-logo.webp"
                      alt="Play store logo"
                      style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                      fill
                    />
                  </ImageGoogleContainer>

                  <ImageGoogleContainer onClick={() => onGetAppClick('ios')}>
                    <CustomImage
                      src="/static/images/app-store-logo.webp"
                      alt="App store logo"
                      style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                      fill
                    />
                  </ImageGoogleContainer>
                </AboutUsSectionEnd>
              )}
            </Grid>
          </Grid>
        </MaxWidthAboutUs>
      )}

      <FooterBottomContainer>
        <FooterMaxWidth>
          <MaxWidthSocialIcons>
            <Grid container display={'flex'} maxWidth={1200} justifyContent={'center'} flexDirection={'row'}>
              <Grid
                item
                xl={8}
                order={{ xs: 2, sm: 1 }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
                display={'flex'}
                width={'100%'}
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <SocialSection>
                  <FooterBottomText>© {new Date().getFullYear()} Emoha.com</FooterBottomText>
                </SocialSection>
                {!isEqual(campaign_name, 'abhi') && (
                  <FeedbackTerms>
                    <a
                      href="mailto:feedback@emoha.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}>
                      <FooterBottomText>
                        For feedback email: <FooterBottomTextUnderline>feedback@emoha.com</FooterBottomTextUnderline>
                      </FooterBottomText>
                    </a>
                  </FeedbackTerms>
                )}
              </Grid>
              <Grid
                item
                order={{ xs: 1, sm: 2 }}
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                display={'flex'}
                width={'100%'}
                sx={{ justifyContent: { xs: 'flex-start', sm: 'flex-end' }, margin: { xs: '10px 0 20px 0', sm: '0' } }}>
                <FooterSocialIcons>
                  <CustomImage
                    src="/static/images/Facebook.webp"
                    alt="Emoha facebook"
                    height={19}
                    width={19}
                    style={{ marginRight: '10px' }}
                    onClick={() => onSocialIconClick('Facebook')}
                  />

                  <CustomImage
                    src="/static/images/Youtube.webp"
                    alt="Emoha Youtube"
                    height={19}
                    width={19}
                    onClick={() => onSocialIconClick('Youtube')}
                    style={{ marginRight: '10px' }}
                  />

                  <CustomImage
                    src="/static/images/Insta.webp"
                    alt="Emoha Insta"
                    height={19}
                    width={19}
                    style={{ marginRight: '10px' }}
                    onClick={() => onSocialIconClick('Instagram')}
                  />

                  <CustomImage
                    src="/static/images/Insta-1.webp"
                    alt="Emoha linkedin"
                    height={19}
                    width={19}
                    style={{ marginRight: '10px' }}
                    onClick={() => onSocialIconClick('Linkedin')}
                  />
                </FooterSocialIcons>
              </Grid>
            </Grid>
          </MaxWidthSocialIcons>
        </FooterMaxWidth>
      </FooterBottomContainer>
      <ThankYouModal
        businessPartnerChanges={businessPartnerChanges}
        DID={DID}
        closeModal={closeModal}
        openModal={openModal}
      />
    </FooterContainer>
  );
}

Footer.propTypes = {
  ...Footer,
};

Footer.defaultProps = {
  phoneNumberClick: () => {},
};

export default memo(Footer);
