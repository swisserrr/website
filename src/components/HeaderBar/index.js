/**
 *
 * HeaderBar
 *
 */

import React, { memo, useCallback, useState, useEffect } from 'react';
import {
  HeaderContainer,
  ImageContainer,
  MobileRightContainer,
  ProfileImageContainer,
  HeaderMaxWidth,
  WhatsappButton,
  NavLinks,
  PopoverItems,
  MobileNavLinks,
  MobilePopOver,
  MobilePopOverContainer,
  MobileMenuButton,
  MobileNavLinksDiv,
  CustomImage,
  BorderButton,
  RedDotContainerImage,
  RedDot,
  RedDotPreferenceContainer,
  PopUpContainer,
  PopUpSubContainer,
  CallUsLinksPopup,
  PhoneNumber,
  PhoneNumberDiv,
  PhoneSvgContainer,
  CloseContainer,
  HeaderMaxWidthEnterprise,
  ImageContainerEnterprise,
  ImageContainerBackground,
  ImageContainerKotak,
} from './styles';
import { useDispatch, useSelector, connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import includes from 'lodash/includes';
import Image from 'utils/CustomImage';
import Cookie from 'js-cookie';
import Popover from '@mui/material/Popover';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { logOut } from 'containers/Login/actions';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { useScrollDirection } from 'utils/scrollDirectionHook';
import split from 'lodash/split';
import { compose } from 'redux';
import { getQues } from 'containers/ChatSurvey/actions';
import { createStructuredSelector } from 'reselect';
import makeSelectChatSurvey from 'containers/ChatSurvey/selectors';
import { axiosInstance } from 'utils/request';
import CustomModal from 'components/CustomModal';
import { Container } from '@mui/material';
import LoginComponent from './LoginComponent';
import { routeDisableHeader } from 'utils/common';
import Modal from '@mui/material/Modal';
import { Box, Typography, Link } from '@mui/material';

const getMediBuddyLoginPath = path => {
  // Extract the base path (enterprise/medibuddy)
  const segments = path.split('/').filter(Boolean);

  // For TCS or any other custom path, we keep only the first two segments
  const basePath = '/' + segments.slice(0, 3).join('/');

  // Append '/login'
  return `${basePath}/login`;
};

function HeaderBar({
  backgroundColor,
  position,
  logoColor,
  textColor,
  disableRem,
  disableScroll,
  changesFromCorporate,
  hideSideButtons,
  getUserQuestions,
  chatSurveyData,
  hideLogo,
  changesFromEnterprise,
  enterpriseImg,
  top,
  setOpenContactFromModal,
  enterpriseEmohaPage,
  phoneNumberClick,
  fromApollo,
  isFromEnquire,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobilePopover, setMobilePopover] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();
  const { user, access_token, campaign_name } = useSelector(state => state.login);
  const matches = useMediaQuery('(max-width:600px)');
  const { scrollDirection, scrollingY } = useScrollDirection();
  const [quesData, setQuesData] = useState([]);
  const [flattenedObj, setFlattenedObj] = useState([]);
  const isPolicyBazaar = router.asPath.includes('Policybazaar');
  const isHeaderDisabled = routeDisableHeader(router.asPath).isDisabled;
  const isKotak = router.asPath.includes('kotak');
  const isFederal = router.asPath.includes('federal');
  const isMediBuddy = router.asPath.includes('medibuddy'); // Add this line
  const isElderConsent = router.asPath.includes('elder-consent');
  const isLogin = router.asPath.includes('login');

  const isKotakLogin = !(
    pathname.startsWith('/enterprise/kotak/login') ||
    pathname.startsWith('/enterprise/federal/login') ||
    pathname.startsWith('/enterprise/kotak/account') ||
    pathname.startsWith('/enterprise/federal/account') ||
    (pathname.includes('medibuddy') && pathname.includes('login'))
  );

  useEffect(() => {
    const func = () => {
      let mainLoopData = chatSurveyData?.questions_answer_tree;
      let data = chatSurveyData?.user_responses;
      let arrayData = [];
      while (!isEmpty(data) && !isEmpty(mainLoopData)) {
        if (
          isEqual(mainLoopData[0]?.question_uuid, data?.question_uuid) ||
          (isEqual(mainLoopData[0]?.is_multiselect, 2) && data)
        ) {
          for (let i = 0; i < mainLoopData?.length; i++) {
            if (mainLoopData[i].is_multiselect === 0 && isEqual(mainLoopData[i].answer_uuid, data.answers_uuid)) {
              arrayData = [...arrayData, mainLoopData[i]];
              if (!isEmpty(mainLoopData[i].children)) {
                mainLoopData = mainLoopData[i].children;
              }
            } else if (
              isEqual(mainLoopData[i].is_multiselect, 1) &&
              includes(split(data.answers_uuid, ','), mainLoopData[i].answer_uuid)
            ) {
              arrayData = [...arrayData, mainLoopData[i]];
              if (!isEmpty(mainLoopData[i].children)) {
                mainLoopData = mainLoopData[i].children;
                break;
              }
            } else if (isEqual(mainLoopData[i].is_multiselect, 2)) {
              arrayData = [...arrayData, mainLoopData[i]];
              mainLoopData = mainLoopData[i].children;
              break;
            }
          }
        }
        if (data) {
          data = get(data, 'children[0]', []);
        }
      }
      setQuesData(arrayData);
      if (isEmpty(chatSurveyData.user_responses)) {
        setQuesData(mainLoopData);
      }
    };
    const flattenObj = () => {
      let data = chatSurveyData.user_responses;
      let flattenArray = [];
      while (!isEmpty(data)) {
        flattenArray.push(data);
        if (data) {
          data = get(data, 'children[0]', []);
        }
      }
      setFlattenedObj(flattenArray);
    };
    func();
    flattenObj();
  }, [chatSurveyData]);

  useEffect(() => {
    if (!isNil(user) && !isNil(access_token) && !isEmpty(access_token)) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${access_token}`;
      getUserQuestions();
    }
  }, [user, access_token]);

  const handleClick = useCallback(event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }, []);

  const logout = useCallback(() => {
    if (isMediBuddy) {
      // First perform synchronous cleanup
      handleClose();
      setMobilePopover(false);

      // Then handle the navigation and state updates
      setTimeout(() => {
        dispatch(logOut());
        Cookie.remove('access_token');
        pushEvent(EVENT_NAME.LOGOUT, {});
        // Clear the auth header from axios instance
        delete axiosInstance.defaults.headers.common.Authorization;
        router.replace(getMediBuddyLoginPath(router?.asPath));
      }, 0);
    } else {
      if (
        isEqual(split(router.asPath, '/')[1], 'profile') ||
        isEqual(split(router.asPath, '/')[1], 'survey') ||
        isEqual(split(router.asPath, '/')[1], 'preferences')
      ) {
        // First perform synchronous cleanup
        handleClose();
        setMobilePopover(false);

        // Then handle the navigation and state updates
        setTimeout(() => {
          dispatch(logOut());
          Cookie.remove('access_token');
          pushEvent(EVENT_NAME.LOGOUT, {});
          // Clear the auth header from axios instance
          delete axiosInstance.defaults.headers.common.Authorization;
          router.replace('/');
        }, 0);
      } else {
        // First perform synchronous cleanup
        handleClose();
        setMobilePopover(false);

        // Then handle the navigation and state updates
        setTimeout(() => {
          dispatch(logOut());
          Cookie.remove('access_token');
          pushEvent(EVENT_NAME.LOGOUT, {});
          // Clear the auth header from axios instance
          delete axiosInstance.defaults.headers.common.Authorization;
          router.replace('/');
        }, 0);
      }
    }
  }, [router, isMediBuddy, dispatch]);

  useEffect(() => {
    if (mobilePopover) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [mobilePopover]);

  const emohaLogo = useCallback(() => {
    if (mobilePopover) {
      return '/static/images/emoha_logo.webp';
    }
    if (isEqual(logoColor, 'red')) {
      return '/static/images/emoha_logo_red.webp';
    }
    if (isEqual(logoColor, 'black')) {
      return '/static/images/emoha_logo_black.webp';
    }
    if (matches) {
      return '/static/images/emoha_logo_mobile.webp';
    }
    return '/static/images/emoha_logo.webp';
  }, [mobilePopover, matches]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    pushEvent(EVENT_NAME.CLICK_WHATSAPP, {
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
    window.open(
      'https://api.whatsapp.com/send/?phone=919953513008&text=Hi%2C+Got+to+know+about+Emoha+via+your+website.+Interested+to+know+more%21&type=phone_number&app_absent=0'
    );
  }, [router]);

  const handleRoute = useCallback(
    pageName => {
      pushEvent(EVENT_NAME.CLICK_PAGE, {
        page_name: pageName,
        source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
      });
      setMobilePopover(false);
    },
    [router]
  );

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

  const sendEvent = useCallback(() => {
    pushEvent(EVENT_NAME.SIGN_IN_UP, {
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
      page_name: '/login',
    });
  }, [router]);

  const handleScrollClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  if (!isNil(changesFromEnterprise)) {
    return (
      <>
        <HeaderContainer
          disableScroll={disableScroll}
          scrollingY={scrollingY}
          scrollDirection={scrollDirection}
          disableRem={disableRem}
          mobilePopOver={mobilePopover}
          position={position}
          backgroundColor={backgroundColor}>
          <HeaderMaxWidthEnterprise display={mobilePopover} disableRem={disableRem}>
            <>
              <ImageContainer href={'/'} disableRem={disableRem} onClick={() => handleRoute('Home')}>
                <Image
                  width={200}
                  height={54}
                  src={emohaLogo()}
                  alt="Login screen image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </ImageContainer>
              {!enterpriseEmohaPage && (
                <>
                  <ImageContainerEnterprise href={'/'} disableRem={disableRem} onClick={() => handleRoute('Home')}>
                    <Image
                      width={200}
                      height={54}
                      src={'/static/images/aditya.jpg'}
                      alt="Login screen image"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 10px' }}
                    />
                  </ImageContainerEnterprise>
                  {enterpriseImg && (
                    <ImageContainerBackground disableRem={disableRem} onClick={() => handleRoute('Home')}>
                      <Image
                        width={200}
                        height={54}
                        src={enterpriseImg}
                        alt="Login screen image"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 10px' }}
                      />
                    </ImageContainerBackground>
                  )}
                </>
              )}
            </>
          </HeaderMaxWidthEnterprise>
          <LoginComponent
            textColor={textColor}
            disableRem={disableRem}
            user={user}
            access_token={access_token}
            sendEvent={sendEvent}
            handleClick={handleClick}
            id={id}
            quesData={quesData}
            flattenedObj={flattenedObj}
            router={router}
            handleClose={handleClose}
            open={open}
            logout={logout}
            anchorEl={anchorEl}
          />
        </HeaderContainer>
      </>
    );
  }

  if (!isNil(changesFromCorporate)) {
    return (
      <>
        <HeaderContainer
          disableScroll={disableScroll}
          scrollingY={scrollingY}
          scrollDirection={scrollDirection}
          disableRem={disableRem}
          mobilePopOver={mobilePopover}
          position={position}
          top={top}
          backgroundColor={backgroundColor}>
          <HeaderMaxWidth display={mobilePopover} disableRem={disableRem}>
            {!hideLogo && (
              <ImageContainer href={'/'} disableRem={disableRem} onClick={() => handleRoute('Home')}>
                <Image
                  width={200}
                  height={54}
                  src={emohaLogo()}
                  alt="Login screen image"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                {fromApollo && (
                  <Image
                    width={400}
                    height={54}
                    src="/static/images/apollo_logo.png"
                    alt="Login screen image"
                    style={{
                      width: '100%',
                      objectFit: 'contain',
                      marginLeft: '20px',
                      marginTop: matches ? '-0.5em' : '-1em',
                    }}
                  />
                )}
                {isPolicyBazaar && (
                  <Image
                    width={400}
                    height={54}
                    src="/static/images/PolicyBazaarLogoWhite.png"
                    alt="Login screen image"
                    style={{
                      width: '100%',
                      objectFit: 'contain',
                      marginLeft: '20px',
                      marginTop: matches ? '-0.5em' : '-1em',
                    }}
                  />
                )}
              </ImageContainer>
            )}
            <MobileRightContainer disableRem={disableRem}>
              <CallUsLinksPopup
                disableRem={disableRem}
                borderColor
                textColor={textColor}
                onClick={() => {
                  if (isFromEnquire) {
                    handleScrollClick();
                  } else {
                    setOpenContactFromModal && setOpenContactFromModal(e => !e);
                    !setOpenContactFromModal && setPopUp(true);
                  }
                }}>
                {!(matches && isFromEnquire) && !isElderConsent && (
                  <BorderButton>{fromApollo ? 'Call us' : isFromEnquire ? 'Enquire now' : 'Join Us'}</BorderButton>
                )}
              </CallUsLinksPopup>
            </MobileRightContainer>
          </HeaderMaxWidth>
        </HeaderContainer>
        <CustomModal
          open={popUp}
          handleClose={() => {
            setPopUp(false);
          }}>
          <Container style={{ display: 'flex', justifyContent: 'flex-end' }} sx={{ outline: 'none' }}>
            <PopUpContainer>
              <PopUpSubContainer>
                <PhoneSvgContainer>
                  <img src="/static/images/contact_phone.svg" />
                </PhoneSvgContainer>
                <CloseContainer
                  onClick={() => {
                    setPopUp(false);
                  }}>
                  <img src="/static/images/close.svg" />
                </CloseContainer>
              </PopUpSubContainer>
              <div>
                <PhoneNumber toggle>
                  Call us <PhoneNumber>for assistance:</PhoneNumber>
                </PhoneNumber>
                <PhoneNumberDiv>
                  <a
                    href={`tel:${changesFromCorporate}`}
                    onClick={phoneNumberClick}
                    style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                    {changesFromCorporate}
                  </a>
                </PhoneNumberDiv>
              </div>
            </PopUpContainer>
          </Container>
        </CustomModal>
      </>
    );
  }

  return (
    <>
      <MobilePopOverContainer disableRem={disableRem} display={mobilePopover ? 'fixed' : 'none'}>
        <MobilePopOver>
          <div
            style={{
              width: '100%',
              padding: '25px',
              height: '95px',
              display: 'flex',
              paddingTop: '25px',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ImageContainer href="/" disableRem={disableRem} onClick={() => handleRoute('Home')}>
                <Image
                  width={200}
                  height={54}
                  src={'/static/images/emoha_logo_mobile.webp'}
                  alt="Login screen logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </ImageContainer>

              {isKotak && (
                <ImageContainerKotak
                  href="/enterprise/kotak/login"
                  disableRem={disableRem}
                  onClick={() => handleRoute('Home')}>
                  <Image
                    width={200}
                    height={70}
                    src={'/static/images/kotakLILogo.jpeg'}
                    alt="Login screen image"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 30px' }}
                  />
                </ImageContainerKotak>
              )}
              {isFederal && (
                <ImageContainerKotak
                  href="/enterprise/federal/login"
                  disableRem={disableRem}
                  onClick={() => handleRoute('Home')}>
                  <Image
                    width={200}
                    height={70}
                    src={'/static/images/federalBanknew.jpg'}
                    alt="Login screen image"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 0.8rem' }}
                  />
                </ImageContainerKotak>
              )}
              {isMediBuddy && (
                <ImageContainerKotak
                  href={getMediBuddyLoginPath(router.asPath)}
                  disableRem={disableRem}
                  onClick={() => handleRoute('Home')}>
                  <Image
                    width={200}
                    height={70}
                    src={'/static/images/MB-Logo-White.png'}
                    alt="MediBuddy logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 0.8rem' }}
                  />
                </ImageContainerKotak>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {!isEqual(campaign_name, 'abhi') && !isHeaderDisabled && (
                <WhatsappButton disableRem={disableRem} onClick={handleWhatsAppClick}>
                  <Image
                    disableRem={disableRem}
                    src="/static/images/Whatsapp.webp"
                    alt="Login screen image"
                    fill
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </WhatsappButton>
              )}

              <MobileMenuButton disableRem={disableRem} onClick={() => setMobilePopover(!mobilePopover)}>
                <Image
                  disableRem={disableRem}
                  src="/static/images/close_mobile.webp"
                  width={50}
                  height={50}
                  alt="Login screen image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </MobileMenuButton>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
            }}>
            {!isHeaderDisabled ? (
              <>
                <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('plans')} href="/plans">
                  Plans
                </MobileNavLinks>
                <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('services')} href="/services">
                  Our services
                </MobileNavLinks>
                <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('mohtv')} href="/mohtv">
                  Moh TV
                </MobileNavLinks>
                <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('blogs')} href="/blogs">
                  Blogs
                </MobileNavLinks>
                <MobileNavLinks
                  disableRem={disableRem}
                  onClick={() => handleRoute('business-partner')}
                  href="/business-partner">
                  Become our Partner
                </MobileNavLinks>
                {!isNil(user) && !isNil(access_token) && !isEmpty(access_token) ? (
                  <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('profile')} href="/profile">
                    Profile
                  </MobileNavLinks>
                ) : null}
                {!isNil(user) && !isNil(access_token) && !isEmpty(access_token) ? (
                  <MobileNavLinks
                    disableRem={disableRem}
                    onClick={() => handleRoute('preferences')}
                    href="/preferences">
                    Preferences
                  </MobileNavLinks>
                ) : null}
                {!isNil(user) && !isNil(access_token) && !isEmpty(access_token) && !isEqual(campaign_name, 'abhi') ? (
                  <MobileNavLinksDiv disableRem={disableRem} onClick={logout}>
                    Logout
                  </MobileNavLinksDiv>
                ) : (
                  !isEqual(campaign_name, 'abhi') && (
                    <MobileNavLinks disableRem={disableRem} onClick={() => handleRoute('login')} href="/login">
                      Sign in / Sign up
                    </MobileNavLinks>
                  )
                )}
              </>
            ) : (
              <>
                {isMediBuddy ? (
                  <>
                    {!isNil(user) &&
                    !isNil(access_token) &&
                    !isEmpty(access_token) &&
                    !isEqual(campaign_name, 'abhi') ? (
                      <MobileNavLinksDiv disableRem={disableRem} onClick={logout}>
                        Logout
                      </MobileNavLinksDiv>
                    ) : (
                      !isEqual(campaign_name, 'abhi') && (
                        <MobileNavLinks
                          disableRem={disableRem}
                          onClick={() => handleRoute('login')}
                          href={isMediBuddy ? getMediBuddyLoginPath(router.asPath) : '/login'}>
                          Sign in / Sign up
                        </MobileNavLinks>
                      )
                    )}
                  </>
                ) : (
                  <>
                    <MobileNavLinks
                      disableRem={disableRem}
                      onClick={() => handleRoute('services')}
                      href={isKotak ? '/enterprise/kotak/services' : '/enterprise/federal/services'}>
                      Services
                    </MobileNavLinks>
                    <MobileNavLinks
                      disableRem={disableRem}
                      onClick={() => handleRoute('plans')}
                      href={isKotak ? '/enterprise/kotak/plans' : '/enterprise/federal/plans'}>
                      Plans
                    </MobileNavLinks>
                  </>
                )}
              </>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '2.8rem',
            }}>
            {isMediBuddy && (
              <div>
                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: '600',
                    color: '#FFF',
                    textAlign: 'center',
                    lineHeight: '2.4rem',
                    marginBottom: '1rem',
                  }}>
                  Contact Us
                </h3>
                <h4
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '400',
                    color: '#FFF',
                    textAlign: 'center',
                    lineHeight: '2.4rem',
                  }}>
                  Email:{' '}
                  <Link href="mailto:partner.medibuddy@emoha.com" color="#FFF" underline="true">
                    partner.medibuddy@emoha.com
                  </Link>
                </h4>
                <h4
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '400',
                    color: '#FFF',
                    textAlign: 'center',
                    lineHeight: '2.4rem',
                  }}>
                  Phone:{' '}
                  <Link href="tel:+918071014142" color="#FFF" underline="true">
                    +91-8071014142
                  </Link>
                </h4>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CustomImage
                src="/static/images/Facebook.webp"
                alt="Emoha facebook"
                height={21}
                width={21}
                onClick={() => onSocialIconClick('Facebook')}
              />

              <CustomImage
                src="/static/images/Insta.webp"
                alt="Emoha Insta"
                height={21}
                width={21}
                style={{ marginLeft: '10px' }}
                onClick={() => onSocialIconClick('Instagram')}
              />
              <CustomImage
                src="/static/images/Youtube.webp"
                alt="Emoha Youtube"
                height={19}
                width={19}
                onClick={() => onSocialIconClick('Youtube')}
                style={{ marginLeft: '10px' }}
              />

              <CustomImage
                src="/static/images/Insta-1.webp"
                alt="Emoha linkedin"
                height={19}
                width={19}
                style={{ marginLeft: '10px' }}
                onClick={() => onSocialIconClick('Linkedin')}
              />
            </div>
          </div>
        </MobilePopOver>
      </MobilePopOverContainer>
      <HeaderContainer
        disableScroll={disableScroll}
        scrollingY={scrollingY}
        scrollDirection={scrollDirection}
        disableRem={disableRem}
        mobilePopOver={mobilePopover}
        position={position}
        backgroundColor={backgroundColor}>
        <HeaderMaxWidth display={mobilePopover} disableRem={disableRem}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
            {!hideLogo && (
              <ImageContainer
                pointerEventsHandler={isHeaderDisabled}
                href={hideSideButtons ? '' : '/'}
                disableRem={disableRem}
                onClick={e => {
                  if (isHeaderDisabled) e.preventDefault();
                  else hideSideButtons ? '' : handleRoute('Home');
                }}>
                <Image
                  width={200}
                  height={54}
                  src={emohaLogo()}
                  alt="Login screen image"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </ImageContainer>
            )}
            {isKotak && (
              <ImageContainerKotak href="/enterprise/kotak/login" disableRem={disableRem}>
                <Image
                  width={200}
                  height={70}
                  src={'/static/images/kotakLILogo.jpeg'}
                  alt="Login screen image"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0 30px' }}
                />
              </ImageContainerKotak>
            )}
            {isFederal && (
              <ImageContainerKotak href="/enterprise/federal/login" disableRem={disableRem}>
                <Image
                  width={200}
                  height={70}
                  src={'/static/images/federalBanknew.jpg'}
                  alt="Login screen image"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px 0.8rem' }}
                />
              </ImageContainerKotak>
            )}
            {isMediBuddy && (
              <ImageContainerKotak href={getMediBuddyLoginPath(router.asPath)} disableRem={disableRem}>
                <Image
                  width={200}
                  height={70}
                  src={'/static/images/MB-Logo.png'}
                  alt="MediBuddy logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0px 0.8rem' }}
                />
              </ImageContainerKotak>
            )}
          </div>
          {!hideSideButtons && (
            <MobileRightContainer disableRem={disableRem}>
              {!isMediBuddy && (
                <>
                  <NavLinks
                    disableRem={disableRem}
                    textColor={textColor}
                    onClick={() => handleRoute('plans')}
                    href="/plans">
                    Plans
                  </NavLinks>
                  <NavLinks
                    disableRem={disableRem}
                    textColor={textColor}
                    onClick={() => handleRoute('services')}
                    href="/services">
                    Our Services
                  </NavLinks>
                  <NavLinks
                    disableRem={disableRem}
                    textColor={textColor}
                    onClick={() => handleRoute('mohtv')}
                    href="/mohtv">
                    Moh TV
                  </NavLinks>
                  <NavLinks
                    disableRem={disableRem}
                    textColor={textColor}
                    onClick={() => handleRoute('blogs')}
                    href="/blogs">
                    Blogs
                  </NavLinks>
                  <NavLinks
                    disableRem={disableRem}
                    textColor={textColor}
                    onClick={() => handleRoute('business-partner')}
                    href="/business-partner">
                    Become our Partner
                  </NavLinks>
                </>
              )}
              {!isMediBuddy ? null : (
                <NavLinks
                  disableRem={disableRem}
                  borderColor
                  textColor={textColor}
                  href="javascript:void(0)"
                  onClick={handleModalOpen}>
                  <BorderButton>Contact Us </BorderButton>
                </NavLinks>
              )}

              {!isEqual(campaign_name, 'abhi') && !isHeaderDisabled && (
                <WhatsappButton
                  disableRem={disableRem}
                  pointerEventsHandler={isHeaderDisabled}
                  onClick={e => {
                    if (isHeaderDisabled) e.preventDefault();
                    else handleWhatsAppClick();
                  }}>
                  <Image
                    src="/static/images/Whatsapp.webp"
                    fill
                    alt="Login screen image"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </WhatsappButton>
              )}
              <div>
                {!isNil(user) && !isNil(access_token) && !isEmpty(access_token) ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <ProfileImageContainer disableRem={disableRem} aria-describedby={id} onClick={handleClick}>
                        <Image
                          src={
                            get(user, 'photoUrl')
                              ? get(user, 'photoUrl')
                              : get(user, 'profile_picture', '/static/images/preview.webp')
                          }
                          alt="Login screen image"
                          fill
                          style={{ objectFit: 'cover', borderRadius: '50%' }}
                        />
                        {quesData &&
                        isEmpty(quesData[quesData?.length - 1]?.children) &&
                        quesData?.length === flattenedObj?.length ? null : (
                          <RedDotContainerImage>
                            <RedDot />
                          </RedDotContainerImage>
                        )}
                      </ProfileImageContainer>

                      <Popover
                        disableRem={disableRem}
                        id={id}
                        open={open}
                        className="popover-style"
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}>
                        {!isMediBuddy && (
                          <>
                            <PopoverItems disableRem={disableRem} onClick={() => router.push('/profile')}>
                              Profile
                            </PopoverItems>
                            <PopoverItems disableRem={disableRem} onClick={() => router.push('/preferences')}>
                              <RedDotPreferenceContainer>
                                Preference
                                {quesData &&
                                isEmpty(quesData[quesData?.length - 1]?.children) &&
                                quesData?.length === flattenedObj?.length ? null : (
                                  <RedDot />
                                )}
                              </RedDotPreferenceContainer>
                            </PopoverItems>
                          </>
                        )}

                        {!isEqual(campaign_name, 'abhi') && (
                          <PopoverItems disableRem={disableRem} onClick={logout}>
                            Logout
                          </PopoverItems>
                        )}
                      </Popover>
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                      <NavLinks
                        disableRem={disableRem}
                        textColor={textColor}
                        aria-describedby={id}
                        href=""
                        onClick={handleClick}>
                        {isEmpty(user?.full_name) ? 'Guest' : user?.full_name}
                      </NavLinks>
                    </div>
                  </div>
                ) : (
                  <>
                    {isLogin ? null : (
                      <NavLinks
                        disableRem={disableRem}
                        borderColor
                        textColor={textColor}
                        href={isMediBuddy ? getMediBuddyLoginPath(router.asPath) : '/login'}
                        onClick={sendEvent}>
                        <BorderButton>Log in </BorderButton>
                      </NavLinks>
                    )}
                  </>
                )}
              </div>

              {/* <MobileMenuButton disableRem={disableRem} onClick={() => setMobilePopover(!mobilePopover)}> */}

              {isKotakLogin && (
                <MobileMenuButton
                  disableRem={disableRem}
                  // pointerEventsHandler={isHeaderDisabled}
                  // onClick={e => {
                  //   if (isHeaderDisabled) e.preventDefault();
                  //   else setMobilePopover(!mobilePopover);
                  // }}
                  onClick={() => setMobilePopover(!mobilePopover)}>
                  <Image
                    src="/static/images/menu_new.webp"
                    width={50}
                    height={50}
                    alt="Login screen image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </MobileMenuButton>
              )}
            </MobileRightContainer>
          )}
        </HeaderMaxWidth>
      </HeaderContainer>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 638,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center', // Center-align all text
            verticalAlign: 'middle',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Close Button */}
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 16,
              cursor: 'pointer',
              fontSize: '3.2rem',
              fontWeight: 'bold',
              color: '#898A8A',
            }}
            onClick={handleModalClose}>
            &times;
          </Box>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}>
            Need any help? Reach out to us at:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '24px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}>
            Email:{' '}
            <Link href="mailto:partner.medibuddy@emoha.com" color="#2447FF" underline="hover">
              partner.medibuddy@emoha.com
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '24px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}>
            Phone:{' '}
            <Link href="tel:+918071014142" color="#2447FF" underline="hover">
              +91-8071014142
            </Link>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

HeaderBar.propTypes = {
  ...HeaderBar,
};

HeaderBar.defaultProps = {
  hideSideButtons: false,
  phoneNumberClick: () => {},
};

const mapStateToProps = createStructuredSelector({
  chatSurveyData: makeSelectChatSurvey(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUserQuestions: () => dispatch(getQues()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HeaderBar);
