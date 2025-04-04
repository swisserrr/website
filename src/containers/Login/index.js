/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Login
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import IntlTelInput from 'react-intl-tel-input';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin, { makeLastOTPTimeStamp } from './selectors';
import Image from 'utils/CustomImage';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import startsWith from 'lodash/startsWith';
import OtpInput from 'react-otp-input';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useFormik } from 'formik';
import CustomInput from 'components/CustomInput';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {
  Container,
  LoginImageContainer,
  Heading,
  TermsAndCondition,
  TermsAndConditionUnderlined,
  Otp,
  ButtonContainer,
  Input,
  ButtonWrap,
  GridMainContainer,
  LoginContainer,
  LoginSubContainer,
  NumberContainer,
  OtpContainer,
  TermsContainer,
  CodeContainer,
  ValidationError,
  ReceivedOtpButton,
  InnerOTPContainer,
  CheckboxContainer,
  CheckboxText,
  TermsContainerNoLink,
} from './styles';

import HeaderBar from 'components/HeaderBar';
import theme from 'utils/theme';
import { isValid } from 'utils/phoneUtil';
import { isClientAndClevertapExists, pushEvent, utmDataHandler } from 'utils/cleverTap';
import { PhoneSchema, OTPSchema } from 'utils/validationSchema';
import { EVENT_NAME } from '../../constants/constants';

import { saveTimeStamp, sendOTP, verifyOTP, logOut, resetSendOtpFailStatus } from './actions';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
export function Login({
  handleSendOTP,
  lastOTPTimeStamp,
  handleSaveTimeStamp,
  handleVerifyOTP,
  handleLogout,
  login,
  subcat,
  resetFailStatus,
}) {
  const [isSendOTPPanelDisabled, setSendOTPPanelDisabled] = useState(false);
  const router = useRouter();
  const [isVerifyOTPPanelDisabled, setVerifyOTPPanelDisabled] = useState(true);
  const [isResendOTPBtnDisabled, setResendOTPBtnDisabled] = useState(true);
  const [isFirstTimeOtpSent, setIsFirstTimeOtpSent] = useState(false);
  const [promotional, setPromotional] = useState(true);
  const [loader, setLoader] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    if (!isNil(login?.access_token) && isNil(Cookies.get('access_token'))) {
      handleLogout();
    }
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoader(true);
    };

    const handleRouteChangeComplete = () => {
      setLoader(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    if (login?.sendotp_fail_status === 460) {
      setModalOpen(true); // Open modal if sendotp_fail_status is 460
    }
  }, [login?.sendotp_fail_status]);

  const handleCloseModal = () => {
    setModalOpen(false);
    resetFailStatus();
  };

  const counterRef = useRef(null);
  const intervalRef = useRef(null);

  const phoneFormik = useFormik({
    initialValues: {
      mobile_number: '',
      country_code: '',
      code: '',
    },
    validationSchema: PhoneSchema,
    validateOnBlur: false,
    onSubmit: values => {
      otpFormik?.resetForm();
      setResendOTPBtnDisabled(true);
      setIsFirstTimeOtpSent(false);
      //console.log('router.query', router.query);
      handleSendOTP(values, sendOTPVal => {
        setSendOTPPanelDisabled(sendOTPVal);
      });
    },
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: OTPSchema,
    validateOnBlur: false,
    onSubmit: values => {
      handleVerifyOTP(
        {
          ...phoneFormik?.values,
          otp: values?.otp,
          timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
        },
        user => {
          if (
            router.asPath.startsWith('/enterprise/kotak') ||
            router.asPath.startsWith('/enterprise/federal') ||
            router.asPath.startsWith('/enterprise/medibuddy')
          ) {
            let basePath = router.asPath.match(/^\/[^/]+\/[^/]+/)[0];
            if (!isNil(user)) {
              if (isEqual(user?.is_new, false)) {
                if (router.asPath.startsWith('/enterprise/medibuddy')) {
                  router.replace(`${basePath}/${subcat}` + '/services');
                } else {
                  router.replace(`${basePath}` + '/plans');
                }
              } else {
                if (router.asPath.startsWith('/enterprise/medibuddy')) {
                  router.replace(`${basePath}/${subcat}` + '/account');
                } else {
                  router.replace(`${basePath}` + '/account');
                }
              }
            } else {
              if (router.asPath.startsWith('/enterprise/medibuddy')) {
                router.replace(`${basePath}/${subcat}` + '/account');
              } else {
                router.replace(`${basePath}` + '/account');
              }
            }
          } else {
            if (!isNil(user)) {
              if (isEqual(user?.enable_edit_profile, true)) {
                if (!isEmpty(get(router, 'query.from'))) {
                  router.replace(
                    {
                      pathname: '/account',
                      query: {
                        from: get(router, 'query.from'),
                      },
                    },
                    '/account'
                  );
                } else {
                  router.replace('/account');
                }
              } else {
                let path = '/';
                if (!isEmpty(get(router, 'query.from'))) {
                  if (isEqual(get(router, 'query.from'), 'home')) {
                    router.replace(path);
                  } else {
                    if (startsWith(`${get(router, 'query.from')}`, '/')) {
                      path = `${get(router, 'query.from')}`;
                    } else {
                      path = `/${get(router, 'query.from')}`;
                    }

                    let query = {};

                    if (!isNil(get(router, 'query.activeId'))) {
                      query = {
                        ...router?.query,
                      };
                    }

                    router.push(
                      {
                        pathname: path,
                        query,
                      },
                      `/${path}`
                    );
                  }
                } else {
                  router.replace(path);
                }
              }
              if (isClientAndClevertapExists()) {
                window?.clevertap?.profile?.push({
                  Site: { promotional: promotional },
                });
              }
            }
            otpFormik?.setFieldError('otp', '');
          }
        },
        () => {
          otpFormik?.setFieldError('otp', 'invalid_otp');
        },
        promotional
      );
    },
  });

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  useEffect(() => {
    if (!isNil(lastOTPTimeStamp)) {
      let remainingSeconds = 8 - dayjs().diff(dayjs(lastOTPTimeStamp), 'seconds');

      setVerifyOTPPanelDisabled(false);

      if (remainingSeconds > 0) {
        setSendOTPPanelDisabled(true);
        intervalRef.current = setInterval(() => {
          if (remainingSeconds === 0) {
            clearInterval(intervalRef.current);
            setSendOTPPanelDisabled(false);
            setResendOTPBtnDisabled(false);
            handleSaveTimeStamp(null);
            setIsFirstTimeOtpSent(true);
          }

          if (counterRef.current) {
            counterRef.current.value = remainingSeconds + 's';
          }
          remainingSeconds--;
        }, 1000);
      }
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [lastOTPTimeStamp]);

  return (
    <>
      {loader && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
          }}>
          <CircularProgress />
        </Box>
      )}

      {/* Modal Component */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%', // Responsive width
            maxWidth: 400, // Max width for larger screens
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center', // Center text and image horizontally
          }}>
          {/* Centered Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Horizontally center the image
              mb: 2, // Add margin-bottom for spacing
            }}>
            <Image
              src="/static/images/DocumentNotFound.png"
              alt="MediBuddy Logo"
              width={125} // Let the width adjust dynamically
              height={100} // Set a fixed height
            />
          </Box>
          <Typography id="modal-title" variant="h4" component="h2" sx={{ mb: 2 }}>
            Thank you for reaching out! If you have registered, your program will be activated within 48 business hours.
            Please try logging in after the activation period.
          </Typography>
          <Typography id="modal-title" variant="h4" component="h2" sx={{ mb: 2 }}>
            If you have not yet registered and wish to enroll, please follow{' '}
            <a
              href="https://healthverse.medibuddy.in/category?categoryid=106"
              target="_blank"
              rel="noopener noreferrer">
              HealthVerse
            </a>
          </Typography>
          <Typography id="modal-description" variant="h5" component="h2" sx={{ mb: 3 }}>
            For any queries regarding the program, feel free to write to{' '}
            <a href="mailto:eldercare@medibuddy.in">eldercare@medibuddy.in</a>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            sx={{
              width: '100%',
              maxWidth: 200,
              mx: 'auto',
              fontSize: '1rem', // Increase the font size
              fontWeight: 'bold', // Optional: Make the text bold
              padding: '0.8rem 1.2rem', // Optional: Adjust padding for a larger button
            }}>
            Close
          </Button>
        </Box>
      </Modal>

      <Container>
        <Head>
          <title>Emoha | Login</title>
          <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
        </Head>
        <HeaderBar position="relative" disableScroll={true} backgroundColor={theme.palette.black.third} />
        <GridMainContainer>
          <div>
            <LoginImageContainer>
              <Image
                src="/static/images/login_cover.jpg"
                alt="Login screen image"
                fill
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </LoginImageContainer>
          </div>
          <LoginContainer>
            <LoginSubContainer>
              <div>
                <NumberContainer>
                  <Heading>Enter your number</Heading>
                  <IntlTelInput
                    containerClassName="intl-tel-input-contact intl-tel-input-login"
                    inputClassName={
                      phoneFormik?.errors?.mobile_number ? 'otp_style_contact error_style' : 'otp_style_contact'
                    }
                    preferredCountries={['in']}
                    onPhoneNumberChange={(status, phoneNumber, country) => {
                      if (!isNaN(phoneNumber)) {
                        setVerifyOTPPanelDisabled(true);
                        otpFormik?.resetForm();
                        phoneFormik.setValues({
                          mobile_number: phoneNumber,
                          country_code: country.dialCode,
                          code: country.iso2,
                          ...(router.asPath.startsWith('/enterprise/kotak') ||
                          router.asPath.startsWith('/enterprise/federal')
                            ? {
                                enterprise_name: router.asPath.startsWith('/enterprise/kotak') ? 'kotak' : 'federal',
                                guid: router.asPath.startsWith('/enterprise/kotak')
                                  ? encodeURIComponent(get(router, 'query.guid'))
                                      .replace(/%20/g, '+')
                                      .replace(/%3D/g, '=')
                                      .replace(/%2F/g, '/')
                                      .replace(/%3A/g, ':')
                                      .replace(/%3F/g, '?')
                                      .replace(/%40/g, '@')
                                      .replace(/%26/g, '&')
                                      .replace(/%23/g, '#')
                                      .replace(/%25/g, '%')
                                      .replace(/%2B/g, '+')
                                      .replace(/%3B/g, ';')
                                      .replace(/%2C/g, ',')
                                      .replace(/%24/g, '$')
                                      .replace(/%3C/g, '<')
                                      .replace(/%3E/g, '>')
                                      .replace(/%5B/g, '[')
                                      .replace(/%5D/g, ']')
                                      .replace(/%7B/g, '{')
                                      .replace(/%7D/g, '}')
                                      .replace(/%7C/g, '|')
                                      .replace(/%5C/g, '\\')
                                      .replace(/%5E/g, '^')
                                      .replace(/%60/g, '`')
                                      .replace(/%7E/g, '~')
                                  : null,
                              }
                            : {}),
                          ...(router.asPath.startsWith('/enterprise/medibuddy')
                            ? {
                                enterprise_name: `medibuddy_${subcat}`,
                              }
                            : {}),
                        });
                      }
                    }}
                    disabled={isSendOTPPanelDisabled}
                    value={phoneFormik?.values?.mobile_number}
                    separateDialCode={true}
                    placeholder="Phone number"
                  />
                  {phoneFormik?.errors?.mobile_number && (
                    <ValidationError>{phoneFormik?.errors?.mobile_number}</ValidationError>
                  )}
                  <ButtonContainer>
                    <ButtonWrap
                      variant="contained"
                      id="send_otp"
                      color="primary"
                      margin="1rem 0"
                      disabled={isSendOTPPanelDisabled}
                      onClick={() => {
                        phoneFormik
                          .validateForm(phoneFormik?.values)
                          .then(res => {
                            if (isEmpty(res)) {
                              const isValidRes = isValid(
                                get(phoneFormik, 'values.mobile_number'),
                                get(phoneFormik, 'values.code')
                              );

                              if (isValidRes) {
                                phoneFormik.submitForm();
                              } else {
                                phoneFormik.setFieldError('mobile_number', 'Please enter a valid number');
                              }
                            }
                          })
                          .catch(err => {
                            toast.error(err?.message ?? 'Something went wrong!!!', {
                              autoClose: 10000,
                              draggable: false,
                            });
                          });
                      }}>
                      Send OTP
                    </ButtonWrap>
                  </ButtonContainer>
                </NumberContainer>
              </div>
              <OtpContainer>
                <Otp>Enter the 4-digit code sent to the above phone number</Otp>
                <div>
                  <InnerOTPContainer hide>
                    <CustomInput
                      disabled={isVerifyOTPPanelDisabled}
                      variant="standard"
                      width={'50%'}
                      value={otpFormik?.values?.otp}
                      type="text"
                      onChange={e => otpFormik?.setFieldValue('otp', e.target.value)}
                      margin="1rem 0"
                      placeholder="OTP"
                    />
                  </InnerOTPContainer>

                  <InnerOTPContainer>
                    <OtpInput
                      inputStyle={otpFormik?.errors?.otp ? 'otp_style error_style' : 'otp_style'}
                      containerStyle="otp_container_style"
                      value={otpFormik?.values?.otp}
                      onChange={e => otpFormik?.setFieldValue('otp', e)}
                      numInputs={4}
                      renderInput={props => <input {...props} disabled={isVerifyOTPPanelDisabled} />}
                    />
                  </InnerOTPContainer>

                  {otpFormik?.errors?.otp && !isEqual(otpFormik?.errors?.otp, 'invalid_otp') && (
                    <ValidationError>{otpFormik?.errors?.otp}</ValidationError>
                  )}
                  <CodeContainer>
                    <ReceivedOtpButton
                      variant="contained"
                      color="secondary"
                      disabled={isResendOTPBtnDisabled}
                      firstTimeDisabled={isFirstTimeOtpSent}
                      disableRipple
                      disableElevation
                      disableFocusRipple
                      disableTouchRipple
                      onClick={() => {
                        phoneFormik.submitForm();
                      }}>
                      I haven't received a code &nbsp;{' '}
                      <Input
                        ref={counterRef}
                        defaultValue="0s"
                        disabled
                        firstTimeDisabled={isFirstTimeOtpSent}
                        isDisabled={isResendOTPBtnDisabled}
                      />
                    </ReceivedOtpButton>
                    <ButtonWrap
                      variant="contained"
                      color="primary"
                      id="verify_otp"
                      disabled={isVerifyOTPPanelDisabled}
                      onClick={() => {
                        otpFormik?.submitForm();
                      }}>
                      Next
                    </ButtonWrap>
                  </CodeContainer>
                </div>
              </OtpContainer>
              <CheckboxContainer>
                <Checkbox
                  color="green"
                  style={{ padding: 0 }}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 21, padding: 0 } }}
                  checked={promotional}
                  onChange={e => {
                    setPromotional(e.target.checked);
                  }}
                  type="checkbox"
                />
                <CheckboxText>I accept to receive promotional updates</CheckboxText>
              </CheckboxContainer>
              {router.asPath.startsWith('/enterprise/kotak') || router.asPath.startsWith('/enterprise/federal') ? (
                <TermsContainerNoLink>
                  <TermsAndCondition>
                    By continuing, you agree to our{' '}
                    <TermsAndConditionUnderlined>Terms & Conditions</TermsAndConditionUnderlined>
                  </TermsAndCondition>
                </TermsContainerNoLink>
              ) : (
                <TermsContainer href="/terms-and-conditions">
                  <TermsAndCondition>
                    By continuing, you agree to our{' '}
                    <TermsAndConditionUnderlined>Terms & Conditions</TermsAndConditionUnderlined>
                  </TermsAndCondition>
                </TermsContainer>
              )}
            </LoginSubContainer>
          </LoginContainer>
        </GridMainContainer>
      </Container>
    </>
  );
}

Login.propTypes = {
  ...Login,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  lastOTPTimeStamp: makeLastOTPTimeStamp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSendOTP: (payload, successCallback, errorCallback) =>
      dispatch(sendOTP(payload, successCallback, errorCallback)),
    handleVerifyOTP: (payload, successCallback, errorCallback, promotional) =>
      dispatch(verifyOTP(payload, successCallback, errorCallback, promotional)),
    handleSaveTimeStamp: payload => dispatch(saveTimeStamp(payload)),
    handleLogout: () => dispatch(logOut()),
    resetFailStatus: () => dispatch(resetSendOtpFailStatus()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Login);
