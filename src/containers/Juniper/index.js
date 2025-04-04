/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Home
 *
 */

import React, { memo, useEffect, useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import Image from 'utils/CustomImage';
import { createStructuredSelector } from 'reselect';
import { makeSelectHomePageData } from './selectors';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import dynamic from 'next/dynamic';
import concat from 'lodash/concat';

import {
  CustomReactPlayer,
  ButtonContainer,
  ButtonContainerNew,
  Mainsection,
  CarouselMainContainer,
  MembersContainer,
  CircleContainer,
  PlanBenefitContainer,
  HeadingContainer,
  SubHeading,
  BannerHeading,
  CustomPlayerContainer,
  PictureContainer,
  PictureContainerText,
  PictureContainerTextRed,
  PictureContainerMain,
  CorporateImageContainer,
} from './styles';

import { PrevArrow, NextArrow } from '../Home/styles';

import arrow_back from '../../../public/static/images/arrow_back.png';
import arrow_next from '../../../public/static/images/arrow_next.png';
import { constantValues } from './constantValues';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import { useInView } from 'react-intersection-observer';
import { browserConfigHandler } from 'utils/common';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'utils/theme';
import { AssurePlanObj, staticCarouselData } from 'utils/static';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const Footer = dynamic(() => import('components/Footer'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const CustomCard = dynamic(() => import('components/CustomCard'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
const HearFromOurMembers = dynamic(() => import('components/HearFromOurMembers'));
const Faq = dynamic(() => import('components/Faq'));
const CarouselContainer = dynamic(() => import('components/CarouselContainer'));
const PlanCardContainer = dynamic(() => import('components/PlanCardContainer'));
const ImageCarouselCardCorporate = dynamic(() => import('components/ImageCarouselCardCorporate'));
const ParentsNeedCard = dynamic(() => import('components/ParentsNeedCard'));
const PlansContainer = dynamic(() => import('components/PlansContainer'));
const CustomForm = dynamic(() => import('components/ContactForm'));
function Home({ homePageData, data }) {
  const router = useRouter();
  const [activePlan, setActivePlan] = useState('Empower plan');
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const sliderRef = useRef();
  const planRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const { ref: videoRef, inView: videoInView } = useInView();
  const { ref: hearFromOurMembersRef, inView: hearFromOurMembersInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [muted, setMuted] = useState(true);
  const refer = useRef();
  const matches = useMediaQuery('(max-width:600px)');
  const matchesMd = useMediaQuery('(max-width:1000px)');

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  useEffect(() => {
    get(data, 'visibility.plans') && planRef?.current?.slickGoTo(1);
  }, []);

  const connectWithUs = () => {
    pushEvent(EVENT_NAME.CONNECT_US, {
      plan_name: 'N/A',
    });
    setOpenContactFromModal(true);
  };

  const SamplePrevArrow = props => {
    const { onClick } = props;
    return (
      <PrevArrow id="next_arrow" onClick={onClick}>
        <HomePageImage src={arrow_back} width="100%" height="100%" />
      </PrevArrow>
    );
  };
  const SampleNextArrow = props => {
    const { onClick } = props;
    return (
      <NextArrow onClick={onClick}>
        <HomePageImage src={arrow_next} width="100%" height="100%" />
      </NextArrow>
    );
  };

  const volumeIconHandler = useCallback(() => {
    if (matchesMd) {
      return muted ? '/static/images/volume_off_black.webp' : '/static/images/volume_up_black.webp';
    }
    return muted ? '/static/images/volume_off.webp' : '/static/images/volume_up.webp';
  }, [muted, matchesMd]);

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  const handleToggleMute = useCallback(() => setMuted(current => !current), []);

  return (
    <>
      <Head>
        <title>In Home Elder Care Services | Senior Citizen's Care India |</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Emoha offers personalized elder care services at home to ensure the well-being and comfort of seniors. Get the best senior care in India from expert caregivers, nurses, and doctors. "
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="In Home Elder Care Services | Senior Citizen's Care India |" />
        <meta
          property="og:description"
          content="Emoha offers personalized elder care services at home to ensure the well-being and comfort of seniors. Get the best senior care in India from expert caregivers, nurses, and doctors."
        />
        <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
        <meta property="og:url" content="https://www.emoha.com/" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Emoha" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="An Elder Care Community  " />
        <meta
          name="twitter:description"
          content="Emoha is a connected community of elders, bringing together world-class expertise in a range of health, emergency, online activities at home for elders."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="Emoha" />
      </Head>
      <HeaderBar
        changesFromCorporate={get(data, 'call')}
        textColor="white"
        backgroundColor={matchesMd ? '#1a1a1a' : 'transparent'}
      />
      <Mainsection>
        <HomePageBox
          height={{ xs: 'auto', md: '100vh' }}
          padding={{ xs: '95px 0 0 0', sm: '80px 0 0 0', md: '0' }}
          zIndex={{ xs: 1, md: 1 }}>
          <div ref={videoRef} style={{ height: '100%' }}>
            {get(data, 'visibility.specialCase') ? (
              <Image
                src="/static/images/banner_corporate.png"
                width={5000}
                quality={100}
                height={5000}
                style={{ width: '100%', height: !matches ? '100%' : '225px', objectFit: 'cover' }}
              />
            ) : (
              <CustomReactPlayer
                width="100%"
                height={!matches ? '100%' : '225px'}
                playing={videoInView}
                muted={muted}
                volume={1}
                loop={true}
                playsinline
                url={get(homePageData, 'header_video_mobile')}
                config={browserConfigHandler()}
              />
            )}
          </div>
          <ButtonContainer>
            <Container sx={{ padding: { xs: '10px 38px 10px 38px' } }}>
              <Grid
                container
                sx={{
                  paddingBottom: matchesMd ? 0 : 25,
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <Grid
                  item
                  xs={12}
                  md={7}
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: get(data, 'visibility.specialCase') ? 'flex-end' : 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  {(isEqual(get(data, 'company'), 'HDFC Bank') || isEqual(get(data, 'company'), 'ICICI Bank')) && (
                    <CorporateImageContainer>
                      <Image
                        fill
                        src={
                          isEqual(get(data, 'company'), 'HDFC Bank')
                            ? '/static/images/hdfc.webp'
                            : '/static/images/icici.webp'
                        }
                        style={{ objectFit: 'contain' }}
                      />
                    </CorporateImageContainer>
                  )}
                  <HomePageText
                    variant={'h1'}
                    color={{ xs: '#1a1a1a', md: '#fff' }}
                    fontSize={{ xs: '3.6rem', md: '6.8rem' }}
                    width={{ xs: '70%', md: 'auto' }}
                    letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                    margin={{ xs: '0 0 2rem 0', md: '0 0 3rem 0' }}
                    fontWeight={{ xs: '600', md: '600' }}
                    lineHeight={{ xs: '4.0rem', md: '6.8rem' }}>
                    <p>{get(data, 'headerTop')}</p>
                  </HomePageText>
                  {!get(data, 'visibility.specialCase') ? (
                    <HomePageText
                      width={{ xs: '80%', md: '440px' }}
                      variant={'h2'}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      lineHeight={{ xs: '1.2', md: '1.4' }}
                      textAlign={{ md: 'left' }}
                      color={{ xs: '#1a1a1a', md: '#fff' }}
                      fontSize={{ xs: '1.3rem', md: '2.4rem' }}
                      fontWeight={{ xs: '400', md: '400' }}>
                      {get(data, 'headerSub')}
                    </HomePageText>
                  ) : null}
                </Grid>
                <Grid
                  xs={12}
                  md={5}
                  item
                  sx={{
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    alignItems: { xs: 'center', md: 'center' },
                    margin: { xs: '0 0 30px 0', md: '0 0 0px 0' },
                  }}
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  {get(data, 'visibility.specialCase') ? (
                    <CustomForm
                      leadsFrom={data?.company}
                      closeModal={closeContactFormModal}
                      openModal={openContactFromModal}
                      setOpenModal={setOpenThankYouModal}
                      showsFrom="Connect with us"
                    />
                  ) : (
                    <>
                      <HomePageButton
                        variant="outlined"
                        boxShadow="none"
                        width={{ xs: '45px !important', md: '60px !important' }}
                        height={{ xs: '45px !important', md: '60px !important' }}
                        minWidth={{ xs: '0 !important', md: '0 !important' }}
                        padding={{ xs: '10px 10px', md: '1.6rem 1.6rem' }}
                        backgroundColor={{ xs: 'transparent !important' }}
                        fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                        margin={{ xs: '40px 1rem 0 0' }}
                        lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                        borderColor={{ xs: '#000 !important', md: '#fff !important' }}
                        onClick={handleToggleMute}
                        borderRadius={{ xs: '6.1rem', md: '3.5rem' }}>
                        <Image src={volumeIconHandler()} alt="Play store logo" width={20} height={20} />
                      </HomePageButton>
                      <HomePageButton
                        hover={{ opacity: '1' }}
                        boxShadow="none"
                        onClick={connectWithUs}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                        lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                        padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                        borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                        fontWeight={{ xs: 500, md: 500 }}>
                        Connect with us
                      </HomePageButton>
                    </>
                  )}
                </Grid>
              </Grid>
            </Container>
          </ButtonContainer>
        </HomePageBox>
      </Mainsection>
      <Container maxWidth="lg" sx={{ padding: { xs: '0' }, height: { md: 190, xs: 180 } }}>
        <Grid
          ref={ref}
          backgroundColor={{ xs: theme.palette.primary.main, md: theme.palette.primary.main }}
          sx={{
            borderRadius: { xs: '0', md: '170px' },
            zIndex: 1,
            position: { xs: 'static', md: 'relative' },
            top: -125,
            height: 'auto',
            padding: { xs: '10px 50px' },
          }}
          container>
          {map(constantValues, (item, index) => (
            <Grid size xs={6} key={index} sm={6} md={3} lg={3} xl={3}>
              <CustomCard
                inView={inView}
                max={get(item, 'max')}
                icon={get(item, 'icon')}
                index={index}
                desc={get(item, 'desc')}
                startingNumber={get(item, 'startingNumber')}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {isEqual(get(data, 'company'), 'Emoha App') ? (
        <>
          <PictureContainerMain>
            <Container>
              <PictureContainer>
                <PictureContainerText>
                  One app for all your <PictureContainerTextRed>senior care needs</PictureContainerTextRed>{' '}
                </PictureContainerText>
                <Image
                  src={'/static/images/juniper.webp'}
                  alt="Cover Image"
                  width={5000}
                  height={5000}
                  style={{ objectFit: 'cover', width: '90%', height: '90%' }}
                />
              </PictureContainer>
            </Container>
          </PictureContainerMain>
          <HomePageBox padding={{ xs: '0rem 0 3rem 0', md: '0rem 0 18.1rem 0' }}>
            <Container maxWidth="lg">
              <HomePageText
                display={{ xs: 'block', md: 'none' }}
                letterSpacing={{ xs: '-0.02em', md: '-0.02em' }}
                textAlign="center"
                textTransform={{ xs: 'none', md: 'none !important' }}
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                padding={{ xs: '3rem 0 2rem 0', md: '0rem 0 7.6rem 0' }}>
                Help your parents age magnificently <br />
                with India's most trusted senior care
                <br /> Brand
              </HomePageText>
              <HomePageText
                textTransform={{ xs: 'none', md: 'none' }}
                display={{ xs: 'none', md: 'block' }}
                letterSpacing={{ xs: '-0.02em', md: '-0.02em' }}
                textAlign="center"
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                padding={{ xs: '0rem 0 2rem 0', md: '0rem 0 7.6rem 0' }}>
                Help your parents age magnificently with <br /> India's most trusted senior care brand
              </HomePageText>
            </Container>

            <CarouselContainer
              centeredVideoAutoPlay={{ md: true }}
              slides={{ xs: 1, md: 1.66 }}
              centerMode={{ xs: true, md: true }}
              sliderRef={sliderRef}
              CustomPrevArrow={SampleNextArrow}
              CustomNextArrow={SamplePrevArrow}
              speed={300}
              infinite={{ xs: true, md: true }}>
              {map(get(homePageData, 'carousel'), (item, index) => (
                <ParentsNeedCard changesFromCorporate sliderRef={sliderRef} item={item} index={index} />
              ))}
            </CarouselContainer>
          </HomePageBox>
        </>
      ) : (
        get(data, 'visibility.video') &&
        (get(data, 'visibility.bannerType') ? (
          <HomePageBox padding={{ xs: '0rem 0 3rem 0', md: '0rem 0 18.1rem 0' }}>
            <Container maxWidth="lg">
              <HomePageText
                display={{ xs: 'block', md: 'none' }}
                letterSpacing={{ xs: '-0.02em', md: '-0.02em' }}
                textAlign="center"
                textTransform={{ xs: 'none', md: 'none !important' }}
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                padding={{ xs: '3rem 0 2rem 0', md: '0rem 0 7.6rem 0' }}>
                Help your parents age magnificently <br />
                with India's most trusted senior care
                <br /> Brand
              </HomePageText>
              <HomePageText
                textTransform={{ xs: 'none', md: 'none' }}
                display={{ xs: 'none', md: 'block' }}
                letterSpacing={{ xs: '-0.02em', md: '-0.02em' }}
                textAlign="center"
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                padding={{ xs: '0rem 0 2rem 0', md: '0rem 0 7.6rem 0' }}>
                Help your parents age magnificently with <br /> India's most trusted senior care brand
              </HomePageText>
            </Container>

            <CarouselContainer
              centeredVideoAutoPlay={{ md: true }}
              slides={{ xs: 1, md: 1.66 }}
              centerMode={{ xs: true, md: true }}
              sliderRef={sliderRef}
              autoPlay={{ xs: get(data, 'visibility.specialCase'), md: get(data, 'visibility.specialCase') }}
              CustomPrevArrow={SampleNextArrow}
              CustomNextArrow={SamplePrevArrow}
              speed={300}
              infinite={{ xs: true, md: true }}>
              {get(data, 'visibility.specialCase')
                ? map(staticCarouselData, (item, index) => <ImageCarouselCardCorporate item={item} index={index} />)
                : map(get(homePageData, 'carousel'), (item, index) => (
                    <ParentsNeedCard changesFromCorporate sliderRef={sliderRef} item={item} index={index} />
                  ))}
            </CarouselContainer>
          </HomePageBox>
        ) : (
          <Container>
            <CustomPlayerContainer>
              <CustomReactPlayer
                width="100%"
                height={'100%'}
                playing={true}
                muted={true}
                volume={1}
                controls
                loop={true}
                playsinline
                url={get(homePageData, 'header_video_corporate')}
                config={browserConfigHandler()}
              />
            </CustomPlayerContainer>
          </Container>
        ))
      )}

      {get(data, 'visibility.banner') && (
        <PictureContainerMain>
          <Container>
            <PictureContainer>
              <PictureContainerText>
                One app for all your <PictureContainerTextRed>senior care needs</PictureContainerTextRed>{' '}
              </PictureContainerText>
              <Image
                src={'/static/images/juniper.webp'}
                alt="Cover Image"
                width={5000}
                height={5000}
                style={{ objectFit: 'cover', width: '90%', height: '90%' }}
              />
            </PictureContainer>
          </Container>
        </PictureContainerMain>
      )}
      {get(data, 'visibility.plans') && (
        <div style={{ backgroundColor: '#ffffff' }}>
          <Container
            maxWidth="lg"
            sx={{
              zIndex: 1,
              padding: { xs: '1.698rem 4rem 0 4rem' },
            }}>
            <HeadingContainer>
              <BannerHeading>Choose the Care Your Parents Deserve</BannerHeading>
              <SubHeading>We have all their needs covered.</SubHeading>
            </HeadingContainer>
          </Container>
          <Container
            maxWidth={
              isEqual(get(data, 'plansStaticData').length, 1)
                ? 'sm'
                : isEqual(get(data, 'plansStaticData').length, 2)
                  ? 'md'
                  : 'lg'
            }
            sx={{ padding: { xs: '0', md: '0 7rem' } }}>
            <PlanCardContainer
              dataSet={get(data, 'plansStaticData')}
              setActivePlan={setActivePlan}
              activePlan={activePlan}
              onExploreMore={setOpenContactFromModal}
              onPlanClick={() => {}}
              planIndex={1}
              sliderRef={planRef}
              buttonText="Request callback"
              cardFrom="membership"
              changesFromCorporate={get(data, 'plansStaticData')}
            />
          </Container>
          <Container
            maxWidth="lg"
            sx={{
              zIndex: 1,
              padding: { xs: '0rem 2rem' },
            }}>
            <PlanBenefitContainer>
              <PlansContainer
                data={concat(get(homePageData, 'plans'), AssurePlanObj)}
                activePlan={activePlan}
                changesFromCorporate
              />
            </PlanBenefitContainer>
          </Container>
        </div>
      )}
      {get(data, 'visibility.members') && (
        <>
          <HomePageBox
            position={{ xs: 'relative', md: 'relative' }}
            justifyContent="center"
            alignItems="center"
            display="flex"
            overflow={{ xs: 'visible', md: 'hidden' }}
            height={{ xs: '55rem', md: '55rem' }}
            zIndex={{ xs: '-1', md: '-1' }}>
            <Image
              src={matches ? '/static/images/banner2_mob.webp' : '/static/images/banner2_web.webp'}
              fill
              alt="Cover Image"
              style={{ objectFit: 'cover' }}
            />
            {matches ? (
              <HomePageText
                textAlign="center"
                fontSize={{ xs: '2.8rem', md: '4.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                variant={'h2'}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                display="flex"
                zIndex={{ xs: '1', md: '1' }}
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                lineHeight={{ xs: '4.6rem', md: '7.2rem' }}>
                Good news travels fast
              </HomePageText>
            ) : (
              <HomePageText
                textAlign="center"
                fontSize={{ xs: '2.8rem', md: '4.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                variant={'h2'}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                display="flex"
                zIndex={{ xs: '1', md: '1' }}
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                lineHeight={{ xs: '4.6rem', md: '7.2rem' }}>
                Good news travels fast:
                <br /> what everyone is talking about us
              </HomePageText>
            )}
          </HomePageBox>

          <div style={{ position: 'relative' }}>
            <CircleContainer>
              <Image src="/static/images/red_circle.webp" fill alt="Cover Image" style={{ objectFit: 'cover' }} />
            </CircleContainer>
          </div>

          <div ref={hearFromOurMembersRef}>
            {hearFromOurMembersInView && (
              <HomePageBox backgroundColor={{ xs: '#CC4746', md: '#CC4746' }} overflow="hidden">
                <Container
                  maxWidth="lg"
                  style={{ position: 'relative' }}
                  sx={{ padding: { md: '120px 0 100px 0', xs: '10px 0' } }}>
                  <HomePageBox padding={{ xs: '2.3rem 0rem', md: '5rem 0rem' }}>
                    <MembersContainer>
                      <HomePageBox
                        display="flex"
                        justifyContent="center"
                        padding={{ xs: '25px 0rem 30px 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                        <HomePageText
                          fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                          fontWeight={{ xs: '600', md: '600' }}
                          variant={'h2'}
                          color={{ xs: '#ffffff', md: '#ffffff' }}
                          lineHeight={{ xs: '2.7rem', md: '4.7rem' }}>
                          Hear From Our Members
                        </HomePageText>
                      </HomePageBox>
                    </MembersContainer>
                    <HomePageBox display="flex" flexDirection="row">
                      <HomePageBox
                        display={{ xs: 'none', md: 'flex' }}
                        width={{ xs: 'auto', md: '30vw !important' }}
                        margin={{ md: '0 70px 0 0' }}>
                        <HomePageBox
                          display="flex"
                          flexDirection="column"
                          height={{ xs: '100%', md: '100%' }}
                          justifyContent={{ xs: 'space-around', md: 'space-around' }}
                          padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                          <HomePageText
                            fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                            fontWeight={{ xs: '600', md: '600' }}
                            variant={'h2'}
                            width={{ md: '15vw' }}
                            textTransform={{ xs: 'none !important', md: 'none !important' }}
                            letterSpacing={{ xs: '-1.95px', md: '-1.95px' }}
                            color={{ xs: '#ffffff', md: '#ffffff' }}
                            lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                            Hear from our members
                          </HomePageText>
                          <HomePageBox display="flex" flexDirection="row">
                            <div
                              style={{ width: 50, height: 50, position: 'relative', margin: '0 30px 0 0' }}
                              onClick={() => refer.current.slickPrev()}>
                              <Image
                                src="/static/images/arrow_circle_left.webp"
                                fill
                                alt="Cover Image"
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                            <div
                              style={{ width: 50, height: 50, position: 'relative' }}
                              onClick={() => refer.current.slickNext()}>
                              <Image
                                src="/static/images/arrow_circle_right.webp"
                                fill
                                alt="Cover Image"
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </HomePageBox>
                        </HomePageBox>
                      </HomePageBox>
                      <CarouselMainContainer>
                        <CarouselContainer
                          sliderRef={refer}
                          nextArrrow={false}
                          dotsInMobile={false}
                          centerPadding="8%"
                          ArrrowInMobile={false}
                          prevArrow={false}>
                          {map(get(homePageData, 'hear_from_members'), (item, key) => (
                            <HearFromOurMembers data={item} key={key} />
                          ))}
                        </CarouselContainer>
                      </CarouselMainContainer>
                    </HomePageBox>
                  </HomePageBox>
                </Container>
              </HomePageBox>
            )}
          </div>
        </>
      )}
      {get(data, 'visibility.faq') && (
        <ButtonContainerNew>
          <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <HomePageText
              fontSize={{ xs: '1.5rem', md: '2.2rem' }}
              fontWeight={{ xs: '400', md: '400' }}
              textAlign="center"
              letterSpacing={{ xs: '0.01em', md: '0.01em' }}
              lineHeight={{ xs: '3.4rem', md: '2.2rem' }}>
              NEED MORE INFO
            </HomePageText>
            <HomePageText
              fontSize={{ xs: '1.7rem', md: '3.6rem' }}
              fontWeight={{ xs: '600', md: '600' }}
              textAlign="center"
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}
              lineHeight={{ xs: '2.1rem', md: '4.7rem' }}>
              We got answers to your questions
            </HomePageText>
            <Faq data={groupBy(get(homePageData, 'FAQs'), 'faq_category')} />
          </Container>
        </ButtonContainerNew>
      )}
      <Footer leadsFrom={data?.company} changesFromCorporate={get(data, 'call')} />
      {openThankYouModal && <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} />}
      {openContactFromModal && (
        <ContactFormModal
          leadsFrom={data?.company}
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
        />
      )}
    </>
  );
}

Home.propTypes = {
  homePageData: PropTypes.object,
  user: PropTypes.object,
  onClick: PropTypes.func,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePageData: makeSelectHomePageData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
