/**
 *
 * IndusIndEnterprise
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import HeaderBar from 'components/HeaderBar';
import { createStructuredSelector } from 'reselect';
import Container from '@mui/material/Container';
import Link from 'next/link';
import CustomModal from 'components/CustomModal';
import {
  BannerContainer,
  BannerSubContainer,
  ImageSectionWrapper,
  ImageDescriptionWrapper,
  SubContainer,
  ButtonContainer,
  RenderItemWrapper,
  HalfWidth,
  OnlyDiv,
  InfoImage,
  OnlyServiceDimensionDiv,
  AppPlayStoreImageSectionWrapper,
  DiscountWrapper,
  CardImage,
  DiscountImageInfoWrapper,
  ExclusiveBannerContainer,
  ButtonContainerNew,
  ConnectWithUs,
  ConnectText,
  PopUpContainer,
  PopUpSubContainer,
  PhoneSvgContainer,
  CloseContainer,
  PhoneNumber,
  PhoneNumberDiv,
} from './styles';
import makeSelectIndusIndEnterprise from './selectors';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'utils/CustomImage';
import MuiContainer from '@mui/material/Container';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import { get, isEqual, map } from 'lodash';
import { config_welcome, config_services, config_exclusive_discount } from './dataConfig';
import MobileViewRender from './MobileViewRender';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import faqData from './faqData';

export function IndusIndEnterprise({ IndusIndEnterprise }) {
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });
  const Footer = dynamic(() => import('components/Footer'));
  const Faq = dynamic(() => import('components/Faq'));

  const matchesXSM = useMediaQuery('(max-width:400px)');
  const matchesSM = useMediaQuery('(max-width:600px)');
  const matchesMD = useMediaQuery('(max-width:1000px)');
  const matchesLD = useMediaQuery('(max-width:1200px)');

  const renderItem = ({ data, imageDimensions, index, serviceRender }) => {
    const isEven = (index + 1) % 2 === 0;
    return (
      <RenderItemWrapper
        style={{
          flexDirection: !isEven ? (matchesSM && !serviceRender ? 'column' : 'row') : 'row-reverse',
          padding: serviceRender && '0rem',
          marginBottom: matchesSM && '8rem',
          position: matchesSM && 'relative',
        }}>
        <HalfWidth
          style={{
            width: matchesSM && !serviceRender && '100%',
            paddingLeft: isEven ? '3rem' : 0,
            display: serviceRender ? 'flex' : '',
            justifyContent: serviceRender ? 'center' : '',
            flexDirection: serviceRender ? 'column' : '',
          }}>
          <HomePageText
            variant={'h1'}
            fontSize={{
              xs: `${matchesSM && !serviceRender ? '2.4rem' : serviceRender ? '2.5rem' : '3rem'}`,
              md: `max(3.6rem,min(5vw,${serviceRender ? '3.6rem' : '4.8rem'}))`,
            }}
            padding={{ xs: serviceRender && '0rem', md: serviceRender && '0rem' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            margin={{ xs: serviceRender ? '1rem 0' : '1.5rem 0', md: serviceRender ? '1rem 0' : '1.5rem 0' }}
            fontWeight={{ xs: '600', md: '600' }}
            textAlign={{ xs: matchesSM && !serviceRender ? 'center' : 'left', md: 'left' }}
            width={{
              xs: matchesSM && !serviceRender ? '100%' : !matchesXSM ? '25rem' : matchesXSM ? '18rem' : '32rem',
              md: matchesMD ? '40rem' : '50rem',
            }}
            lineHeight={{ xs: '2.9rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
            {get(data, 'titleLineOne')} {matchesSM && !serviceRender ? null : <br />} {get(data, 'titleLineTwo')}
          </HomePageText>
          <HomePageText
            width={{
              xs: matchesSM && !serviceRender ? '100%' : matchesXSM ? '20rem' : matchesSM ? '22rem' : '26rem',
              md: matchesMD ? '40rem' : '50rem',
            }}
            textTransform={{ xs: 'normal', md: 'normal' }}
            padding={{ xs: serviceRender && '0rem', md: serviceRender && '0rem' }}
            variant={'h2'}
            fontSize={{ xs: '1.5rem', md: serviceRender ? '1.6rem' : '2rem' }}
            letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
            lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
            textAlign={{ xs: matchesSM && !serviceRender ? 'center' : 'left', md: 'left' }}
            margin={{ xs: serviceRender ? '1rem 0' : '1.5rem 0', md: serviceRender ? '1rem 0' : '1.5rem 0' }}
            fontWeight={{ xs: '400', md: '400' }}>
            {get(data, 'description')}
          </HomePageText>

          {get(data, 'button') && (
            <ButtonContainer
              style={{
                position: matchesSM && 'absolute',
                bottom: matchesSM && '-62px',
              }}>
              <HomePageButton
                hover={{ opacity: '1' }}
                boxShadow="none"
                onClick={() => {}}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                lineHeight={{ xs: '0.7rem', md: serviceRender ? '1.9rem' : '2.7rem' }}
                padding={{ xs: '2rem 3rem', md: '1.8rem 4rem' }}
                borderRadius={{ xs: '3.4rem', md: '5rem' }}
                margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                fontWeight={{ xs: 500, md: 500 }}
                onClick={() => {
                  setOpenContactFromModal(true);
                }}>
                Connect with us
              </HomePageButton>
            </ButtonContainer>
          )}
          {get(data, 'showImage') && (
            <AppPlayStoreImageSectionWrapper style={{ marginTop: serviceRender && matchesMD ? '2.0rem' : '5.4rem' }}>
              <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.emoha">
                <Image
                  width={150}
                  height={54}
                  src={'/static/images/google-play-logo.webp'}
                  alt="Login screen image"
                  style={{
                    height: matchesSM ? '2rem' : '5rem',
                    objectFit: 'contain',
                    marginRight: matchesSM ? '10px' : '20px',
                  }}
                />
              </Link>
              <Link target="_blank" href="https://apps.apple.com/in/app/emoha-support-for-seniors/id1485996520">
                <Image
                  width={150}
                  height={54}
                  src={'/static/images/app-store-logo.webp'}
                  alt="Login screen image"
                  style={{
                    height: matchesSM ? '2rem' : '5rem',
                    objectFit: 'contain',
                  }}
                />
              </Link>
            </AppPlayStoreImageSectionWrapper>
          )}
        </HalfWidth>
        <HalfWidth
          style={{
            width: matchesSM && !serviceRender && '100%',
            paddingRight: serviceRender ? (isEven ? '3rem' : '0') : '0px',
            paddingLeft: serviceRender ? (isEven ? '0' : '3rem') : matchesSM && !serviceRender ? '0rem' : '6rem',
          }}>
          <OnlyDiv
            style={{
              display: 'flex',
              justifyContent: matchesSM && !serviceRender ? 'center' : 'flex-end',
            }}>
            {serviceRender ? (
              <OnlyServiceDimensionDiv>
                <InfoImage src={`${get(data, 'image')}`} />
              </OnlyServiceDimensionDiv>
            ) : (
              <OnlyDiv
                style={{
                  height: imageDimensions.height,
                  width: imageDimensions.width,
                }}>
                <InfoImage src={`${get(data, matchesSM ? 'mobileImage' : 'image')}`} />
              </OnlyDiv>
            )}
          </OnlyDiv>
        </HalfWidth>
      </RenderItemWrapper>
    );
  };

  const handleDownloadApp = () => {
    const findDevice = navigator.platform;
    if (isEqual(findDevice, 'iPhone')) {
      window.open('https://apps.apple.com/in/app/emoha-support-for-seniors/id1485996520', '_blank');
    } else if (isEqual(findDevice, 'Linux armv81')) {
      window.open('https://play.google.com/store/apps/details?id=com.emoha', '_blank');
    }
  };

  return (
    <>
      <Head>
        <title>Emoha Enterprise IndusInd</title>
        <meta name="title" content="Exclusive Collaboration with IndusInd Bank for Senior Care" />
        <meta
          name="description"
          content="Discover Emoha's exclusive senior care services in collaboration with IndusInd Bank. Enjoy preventive health monitoring, household support, and engaging activities designed for seniors."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Exclusive Collaboration with IndusInd Bank for Senior Care" />
        <meta
          property="og:description"
          content="Discover Emoha's exclusive senior care services in collaboration with IndusInd Bank. Enjoy preventive health monitoring, household support, and engaging activities designed for seniors."
        />
        <meta property="og:url" content="www.emoha.com/enterprise/IndusInd/info_page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Exclusive Collaboration with IndusInd Bank for Senior Care" />
        <meta
          name="twitter:description"
          content="Discover Emoha's exclusive senior care services in collaboration with IndusInd Bank. Enjoy preventive health monitoring, household support, and engaging activities designed for seniors."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="www.emoha.com/enterprise/IndusInd/info_page" />
      </Head>
      <HeaderBar textColor="white" backgroundColor={'transparent'} />
      <CustomModal
        open={openContactFromModal}
        handleClose={() => {
          setOpenContactFromModal(false);
        }}>
        <Container style={{ display: 'flex', justifyContent: 'flex-end' }} sx={{ outline: 'none' }}>
          <PopUpContainer>
            <PopUpSubContainer>
              <PhoneSvgContainer>
                <img src="/static/images/contact_phone.svg" />
              </PhoneSvgContainer>
              <CloseContainer
                onClick={() => {
                  setOpenContactFromModal(false);
                }}>
                <img src="/static/images/close.svg" />
              </CloseContainer>
            </PopUpSubContainer>
            <div>
              <PhoneNumber toggle>
                Call us <PhoneNumber>for assistance:</PhoneNumber>
              </PhoneNumber>
              <PhoneNumberDiv>
                <a href="tel:918048811647" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                  918048811647
                </a>
              </PhoneNumberDiv>
            </div>
          </PopUpContainer>
        </Container>
      </CustomModal>
      <BannerContainer style={{ position: 'relative' }}>
        <Image
          src={matchesSM ? '/static/images/IndusIndBannerLogoMobile.png' : '/static/images/IndusIndBannerLogo.png'}
          fill
          priority
          quality={100}
          style={{ objectFit: 'cover' }}
        />
        <MuiContainer
          ref={formRef}
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: matchesSM ? 'end' : 'center', md: 'center' },
            padding: { xs: matchesSM ? '0 0 3rem 2rem' : '0' },
            zIndex: { xs: 1 },
          }}>
          <BannerSubContainer>
            <ImageSectionWrapper>
              <Image
                width={200}
                height={54}
                src={'/static/images/emoha_logo.webp'}
                alt="Login screen image"
                style={{
                  width: matchesSM ? '27%' : '30%',
                  height: '20%',
                  objectFit: 'contain',
                  paddingRight: matchesSM ? '10px' : '20px',
                  borderRight: '2px solid white',
                }}
              />
              <Image
                width={200}
                height={54}
                src={'/static/images/IBLogo2.png'}
                alt="Login screen image"
                style={{
                  width: matchesSM ? '27%' : '30%',
                  height: '20%',
                  objectFit: 'contain',
                  marginTop: '5px',
                  paddingLeft: matchesSM ? '10px' : '20px',
                }}
              />
            </ImageSectionWrapper>
            <HomePageText
              variant={'h1'}
              color={{ xs: '#fff', md: '#fff' }}
              fontSize={{ xs: '3rem', md: 'max(3.6rem,min(5vw,4.8rem))' }}
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
              fontWeight={{ xs: '600', md: '600' }}
              textAlign={{ md: 'left' }}
              width={{ xs: matchesSM && !matchesXSM ? '18rem' : matchesXSM ? '18rem' : '32.5rem', md: '50rem' }}
              lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
              Reimagining Senior Care in India
            </HomePageText>
            <HomePageText
              width={{
                xs: matchesSM && !matchesXSM ? '26rem' : matchesXSM ? '25rem' : matchesSM ? '34rem' : '38rem',
                md: '50rem',
              }}
              variant={'h2'}
              textTransform={{ xs: 'normal', md: 'normal' }}
              fontSize={{ xs: '1.5rem', md: '2rem' }}
              letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
              lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
              textAlign={{ md: 'left' }}
              margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
              color={{ xs: '#fff', md: '#fff' }}
              fontWeight={{ xs: '500', md: '500' }}>
              Designed by experts and approved by seniors, Emoha in partnership with IndusInd Bank programme offers a
              host of features and benefits for a holistic elder care experience
            </HomePageText>
            <HomePageText
              width={{ xs: matchesXSM ? '25rem' : matchesSM ? '34rem' : '38rem', md: '50rem' }}
              variant={'h2'}
              fontSize={{ xs: '1.5rem', md: '2rem' }}
              letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
              lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
              padding={{ xs: '0', md: '0' }}
              textAlign={{ md: 'left' }}
              margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
              color={{ xs: '#fff', md: '#fff' }}
              textTransform={{ xs: 'normal', md: 'normal' }}
              fontWeight={{ xs: '500', md: '500' }}>
              Download the App today
            </HomePageText>
            <ImageSectionWrapper>
              <Link
                style={{ width: '28.5%' }}
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.emoha">
                <Image
                  width={150}
                  height={54}
                  src={'/static/images/google-play-logo.webp'}
                  alt="Login screen image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    paddingRight: matchesSM ? '10px' : '20px',
                  }}
                />
              </Link>
              <Link
                style={{ width: '28.5%' }}
                target="_blank"
                href="https://apps.apple.com/in/app/emoha-support-for-seniors/id1485996520">
                <Image
                  width={150}
                  height={54}
                  src={'/static/images/app-store-logo.webp'}
                  alt="Login screen image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    paddingRight: matchesSM ? '10px' : '20px',
                  }}
                />
              </Link>
            </ImageSectionWrapper>
            <HomePageText
              width={{ xs: matchesXSM ? '25rem' : matchesSM ? '34rem' : '38rem', md: '50rem' }}
              variant={'h2'}
              fontSize={{ xs: '1.2rem', md: '1.5rem' }}
              letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
              lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
              padding={{ xs: '0', md: '0' }}
              textAlign={{ md: 'left' }}
              margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
              color={{ xs: '#fff', md: '#fff' }}
              textTransform={{ xs: 'normal', md: 'normal' }}
              fontWeight={{ xs: '500', md: '500' }}>
              *T&Cs Apply
            </HomePageText>
          </BannerSubContainer>
        </MuiContainer>
      </BannerContainer>

      <ImageDescriptionWrapper>
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'center', md: 'center' },
            zIndex: { xs: 1 },
          }}>
          <SubContainer>
            {map(config_welcome, data => {
              return (
                <OnlyDiv key={data.titleLineOne}>
                  {renderItem({
                    data: data,
                    imageDimensions: {
                      width: matchesSM ? '34.5rem' : !matchesSM && matchesMD ? '40rem' : '54.4rem',
                      height: matchesSM ? '37rem' : !matchesSM && matchesMD ? '40rem' : '54.4rem',
                    },
                  })}
                </OnlyDiv>
              );
            })}
          </SubContainer>
        </MuiContainer>

        {matchesSM ? (
          <MobileViewRender />
        ) : (
          <>
            <OnlyDiv
              style={{
                width: '100%',
                backgroundColor: '#F4F1EB',
              }}>
              <MuiContainer
                sx={{
                  height: { xs: '100%' },
                  display: { xs: 'flex' },
                  alignItems: { xs: 'center', md: 'center' },
                  paddingBottom: { xs: 5, sm: 0 },
                  zIndex: { xs: 1 },
                }}>
                <SubContainer>
                  <OnlyDiv style={{ padding: '3rem 0rem' }}>
                    <HomePageText
                      variant={'h1'}
                      fontSize={{ xs: '3rem', md: 'max(3.6rem,min(5vw,4.5rem))' }}
                      letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                      margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      textAlign={{ xs: 'center', md: 'center' }}
                      width={{ xs: '100%', md: '100%' }}
                      lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
                      Care Services Designed Just for You
                    </HomePageText>
                  </OnlyDiv>
                  {map(config_services, (data, index) => {
                    return (
                      <OnlyDiv key={data.titleLineOne} style={{ marginBottom: '3rem' }}>
                        {renderItem({
                          data: data,
                          imageDimensions: {
                            width: '56.2rem',
                            height: '64rem',
                          },
                          index: index,
                          serviceRender: true,
                        })}
                      </OnlyDiv>
                    );
                  })}
                </SubContainer>
              </MuiContainer>
            </OnlyDiv>

            <OnlyDiv
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
              }}>
              <MuiContainer
                sx={{
                  height: { xs: '100%' },
                  display: { xs: 'flex' },
                  alignItems: { xs: 'center', md: 'center' },
                  zIndex: { xs: 1 },
                }}>
                <SubContainer>
                  <DiscountWrapper>
                    <HomePageText
                      variant={'h1'}
                      fontSize={{ xs: '3rem', md: 'max(3.6rem,min(5vw,4.8rem))' }}
                      letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                      margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      textAlign={{ xs: 'center', md: 'center' }}
                      width={{ xs: '100%', md: '100%' }}
                      lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
                      Exclusive Discounts Just for You
                    </HomePageText>
                    <HomePageText
                      width={{
                        xs: '100%',
                        md: '100%',
                      }}
                      variant={'h2'}
                      fontSize={{ xs: '1.5rem', md: '2.2rem' }}
                      letterSpacing={{ xs: '-0.08em', md: '-0.02em' }}
                      textTransform={{ xs: 'normal', md: 'normal' }}
                      lineHeight={{ xs: '1.8rem', md: '2.6rem' }}
                      textAlign={{ xs: 'center', md: 'center' }}
                      margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                      fontWeight={{ xs: '400', md: '400' }}>
                      Use your IndusInd debit card on the Emoha App to get exciting discounts on Emoha memberships,
                      nurses, attendants, care services, and more.
                    </HomePageText>
                    <DiscountImageInfoWrapper>
                      {map(config_exclusive_discount, data => {
                        return (
                          <HalfWidth style={{ width: '47%' }}>
                            <OnlyDiv
                              style={{
                                height: '28rem',
                                width: '100%',
                              }}>
                              <CardImage style={{ borderRadius: '22px' }} src={`${data.image}`} />
                            </OnlyDiv>
                            <OnlyDiv style={{ padding: '0rem 0.5rem' }}>
                              <HomePageText
                                variant={'h1'}
                                fontSize={{ xs: '2rem', md: 'max(1rem,min(5vw,2.5rem))' }}
                                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                                margin={{ xs: '0.5rem 0', md: '1.2rem 0 0 0' }}
                                fontWeight={{ xs: '600', md: '600' }}
                                textAlign={{ xs: 'center', md: 'center' }}
                                width={{ xs: '100%', md: '100%' }}
                                padding={{ xs: '1rem 0 0rem 0rem', md: '1rem 0 0rem 0rem' }}
                                lineHeight={{ xs: '3rem', md: 'max(4rem,min(5vw 2rem))' }}>
                                {get(data, 'title')}
                              </HomePageText>
                              <HomePageText
                                width={{
                                  xs: '100%',
                                  md: '100%',
                                }}
                                variant={'h2'}
                                fontSize={{ xs: '1.5rem', md: '1.6rem' }}
                                textTransform={{ xs: 'normal', md: 'normal' }}
                                letterSpacing={{ xs: '-8rem', md: '-2rem' }}
                                lineHeight={{ xs: '1.8rem', md: '2rem' }}
                                textAlign={{ xs: 'center', md: 'center' }}
                                margin={{ xs: '0.5rem 0', md: '0rem 0' }}
                                fontWeight={{ xs: '400', md: '400' }}>
                                {get(data, 'description')}
                              </HomePageText>
                            </OnlyDiv>
                          </HalfWidth>
                        );
                      })}
                    </DiscountImageInfoWrapper>
                  </DiscountWrapper>
                  <ButtonContainer
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '3rem',
                    }}>
                    <HomePageButton
                      hover={{ opacity: '1' }}
                      boxShadow="none"
                      onClick={() => {}}
                      letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                      lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                      padding={{ xs: '2rem 3rem', md: '1.8rem 4rem' }}
                      borderRadius={{ xs: '3.4rem', md: '5rem' }}
                      margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                      fontWeight={{ xs: 500, md: 500 }}
                      onClick={() => {
                        setOpenContactFromModal(true);
                      }}>
                      Get your discount now
                    </HomePageButton>
                  </ButtonContainer>
                </SubContainer>
              </MuiContainer>
            </OnlyDiv>
          </>
        )}

        <ExclusiveBannerContainer style={{ position: 'relative' }}>
          <Image
            src={
              matchesSM
                ? '/static/images/IndusIndExclusiveOfferBannerMobileImg.png'
                : '/static/images/IndusIndExclusiveOfferBanner.png'
            }
            fill
            priority
            quality={100}
            style={{ objectFit: 'cover' }}
          />
          <MuiContainer
            sx={{
              height: { xs: '100%' },
              display: { xs: 'flex' },
              alignItems: { xs: 'center', md: 'center' },
              textAlign: { xs: 'right', md: 'right' },
              zIndex: { xs: 1 },
            }}>
            <BannerSubContainer style={{ paddingTop: matchesSM ? '5rem' : '0', height: matchesSM ? '100%' : '' }}>
              <OnlyDiv
                style={{
                  backgroundColor: '',
                  flexDirection: 'column',
                  width: '100',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                  height: '100%',
                }}>
                <OnlyDiv
                  style={{
                    backgroundColor: '',
                    width: matchesSM ? '100%' : matchesMD || matchesLD ? '70%' : '50%',
                    height: '100%',
                  }}>
                  <HomePageText
                    variant={'h1'}
                    color={{ xs: '#fff', md: '#fff' }}
                    fontSize={{ xs: '3rem', md: 'max(3.6rem,min(5vw,4.8rem))' }}
                    letterSpacing={{ xs: '-0.04em', md: '-4rem' }}
                    margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                    fontWeight={{ xs: '600', md: '600' }}
                    textAlign={{ xs: 'center', md: 'center' }}
                    width={{ xs: '100%', md: '100%' }}
                    lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
                    Unlock Exclusive Offers 
                  </HomePageText>
                  <HomePageText
                    width={{ xs: '100%', md: '100%' }}
                    variant={'h2'}
                    fontSize={{ xs: '1.5rem', md: '2rem' }}
                    letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
                    textTransform={{ xs: 'normal', md: 'normal' }}
                    lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
                    textAlign={{ xs: 'center', md: 'center' }}
                    margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                    color={{ xs: '#fff', md: '#fff' }}
                    fontWeight={{ xs: '500', md: '500' }}>
                    Download the Emoha app to unlock Emoha's exclusive services, designed especially for you.
                  </HomePageText>
                  {!matchesSM && (
                    <>
                      <HomePageText
                        width={{
                          xs: '100%',
                          md: '100%',
                        }}
                        variant={'h2'}
                        fontSize={{ xs: '1.5rem', md: '2rem' }}
                        letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
                        lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
                        padding={{ xs: '0', md: '0' }}
                        textAlign={{ xs: 'center', md: 'center' }}
                        margin={{ xs: '1.5rem 0', md: '1.5rem 0' }}
                        color={{ xs: '#fff', md: '#fff' }}
                        fontWeight={{ xs: '500', md: '500' }}>
                        Download the App today
                      </HomePageText>
                      <OnlyDiv
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}>
                        <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.emoha">
                          <Image
                            width={150}
                            height={54}
                            src={'/static/images/google-play-logo.webp'}
                            alt="Login screen image"
                            style={{
                              objectFit: 'contain',
                              paddingRight: matchesSM ? '10px' : '20px',
                            }}
                          />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://apps.apple.com/in/app/emoha-support-for-seniors/id1485996520">
                          <Image
                            width={150}
                            height={54}
                            src={'/static/images/app-store-logo.webp'}
                            alt="Login screen image"
                            style={{
                              objectFit: 'contain',
                              paddingRight: matchesSM ? '10px' : '20px',
                            }}
                          />
                        </Link>
                      </OnlyDiv>
                    </>
                  )}
                </OnlyDiv>
              </OnlyDiv>
            </BannerSubContainer>
          </MuiContainer>
        </ExclusiveBannerContainer>
      </ImageDescriptionWrapper>

      <ButtonContainerNew>
        <Container
          maxWidth="lg"
          style={{ backgroundColor: '', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <HomePageText
            fontSize={{ xs: '2.2rem', md: '4rem' }}
            fontWeight={{ xs: '600', md: '600' }}
            textAlign="center"
            variant={'h2'}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}
            lineHeight={{ xs: '2.1rem', md: '4.7rem' }}>
            Got Questions? We Have the Answers!
          </HomePageText>
          <Faq data={faqData} IndusIndEnterprise={IndusIndEnterprise} />
        </Container>
      </ButtonContainerNew>

      <Footer hideFormSection={true} />

      {matchesSM && !formInView && (
        <ConnectWithUs>
          <ConnectText onClick={handleDownloadApp}>Download the App</ConnectText>
        </ConnectWithUs>
      )}
    </>
  );
}

IndusIndEnterprise.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  indusIndEnterprise: makeSelectIndusIndEnterprise(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(IndusIndEnterprise);
