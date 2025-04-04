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
import { makeSelectContactToEmoha, makeSelectHomePageData, makeSelectService } from './selectors';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
import includes from 'lodash/includes';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '@mui/material/useMediaQuery';

import { EVENT_NAME } from 'constants/constants';
import { pushEvent, utmDataHandler } from 'utils/cleverTap';

import {
  ButtonContainer,
  ButtonContainerNew,
  Mainsection,
  // PrevArrow,
  // NextArrow,
  CarouselMainContainer,
  MembersContainer,
  FadeContainer,
  ConnectWithUs,
  ConnectText,
  Relativecard,
  BannerContainer,
  BluredContainer,
  TextImageContainer,
  LeafContainerLeft,
  LeafContainerRight,
  LeafContainerLeftRed,
  LeafContainerRightRed,
  FirstFlowerImage,
} from './styles';
// import { newPlansValues } from './constantValues';
// import arrow_back from '../../../public/static/images/arrow_back.png';
// import arrow_next from '../../../public/static/images/arrow_next.png';
// import HomePageImage from 'components/HomePageImage';
import HeaderBar from 'components/HeaderBar';
// import CustomCard from 'components/CustomCardHome';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import HomePageBox from 'components/HomePageBox';
import { handleUserLoginAction } from 'containers/Enterprise/actions';
import AboutUs from './aboutUs';

const ThankYouModal = dynamic(() => import('components/ThankYouModal'), { ssr: false });
const ContactFormModal = dynamic(() => import('components/ContactFormModal'), { ssr: false });
const Footer = dynamic(() => import('components/Footer'));
const HomeServiceSection = dynamic(() => import('components/HomeServiceSection'));
const BenifitsForYou = dynamic(() => import('components/BenifitsForYou'));
const ImageCarousel = dynamic(() => import('components/ImageCarousel'), { ssr: false });
const Faq = dynamic(() => import('components/Faq'));
const HearFromOurMembers = dynamic(() => import('components/HearFromOurMembers'), { ssr: false });
const CarouselContainer = dynamic(() => import('components/CarouselContainer'), { ssr: false });
const BecomeBusinessPartner = dynamic(() => import('components/BecomeBusinessPartner'));
function Home({ homePageData, handleUserLogin, contactToEmoha }) {
  const router = useRouter();
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);

  // const videoPlayerRef = useRef();

  // const { ref: videoRef } = useInView({
  //   onChange: inView => {
  //     if (videoPlayerRef?.current) {
  //       if (inView) {
  //         const res = videoPlayerRef?.current?.play();
  //         res
  //           .then(() => {})
  //           // eslint-disable-next-line no-unused-vars
  //           .catch(_ => {
  //             /Error fired!!!/
  //           });
  //       } else {
  //         videoPlayerRef?.current?.pause();
  //       }
  //     }
  //   },
  // });

  // const { ref: floatingNumbersRef, inView: floatingNumbersInView } = useInView({ threshold: 0, triggerOnce: true });

  const { ref: onScrollSectionRef, inView: scrollSectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: footerSectionRef, inView: footerSectionInView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '1px',
  });

  // const [muted, setMuted] = useState(true);
  const refer = useRef();
  // const sliderRef = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const matchesMd = useMediaQuery('(max-width:1000px)');

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  useEffect(() => {
    if (router?.isReady) {
      const query = window?.location?.search;
      if (!isEmpty(query) && includes(query, 'utm')) {
        handleUserLogin(query, () => router.replace(router?.pathname));
      }
    }
  }, [router?.isReady, router?.query]);

  const handleViewAll = (href, blockName) => {
    pushEvent(EVENT_NAME.VIEW_ALL, {
      block_name: blockName,
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
    router.push(href);
  };

  const connectWithUs = event => {
    event.stopPropagation();

    pushEvent(EVENT_NAME.CONNECT_US, {
      plan_name: 'N/A',
    });
    setOpenContactFromModal(true);
  };

  // const handleExploreMorePlan = (planName, planIndex) => {
  //   pushEvent(EVENT_NAME.CLICK_PLAN, {
  //     plan_name: planName,
  //   });
  //   router.push(
  //     {
  //       pathname: '/plans',
  //       query: { activePlan: planName, planIndex: planIndex },
  //     },
  //     '/plans'
  //   );
  // };

  // const volumeIconHandler = useCallback(() => {
  //   if (matchesMd) {
  //     return muted ? '/static/images/volume_off_black.webp' : '/static/images/volume_up_black.webp';
  //   }
  //   return muted ? '/static/images/volume_off.webp' : '/static/images/volume_up.webp';
  // }, [muted, matchesMd]);

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  // const SamplePrevArrow = useCallback(
  //   props => {
  //     const { onClick } = props;
  //     return (
  //       <PrevArrow id="next_arrow" onClick={onClick}>
  //         <HomePageImage src={arrow_back} width="100%" height="100%" />
  //       </PrevArrow>
  //     );
  //   },
  //   [arrow_back]
  // );

  // const SampleNextArrow = useCallback(
  //   props => {
  //     const { onClick } = props;
  //     return (
  //       <NextArrow onClick={onClick}>
  //         <HomePageImage src={arrow_next} width="100%" height="100%" />
  //       </NextArrow>
  //     );
  //   },
  //   [arrow_next]
  // );

  // const handleToggleMute = useCallback(() => setMuted(current => !current), []);

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

      <HeaderBar textColor="white" backgroundColor={matchesMd ? '#1a1a1a' : 'transparent'} />
      <Mainsection>
        <HomePageBox
          height={{ xs: '35vh', md: '90vh' }}
          padding={{ xs: '95px 0 0 0', sm: '80px 0 0 0', md: '0' }}
          zIndex={{ xs: 1, md: 1 }}>
          <Relativecard>
            <BannerContainer
              size
              lg={12}
              md={12}
              sm={12}
              xs={12}
              display={'flex'}
              justifyContent={'center'}
              sx={{ position: 'relative', height: '100%', width: '100%' }}>
              <Image
                src={matches ? '/static/images/first_fold.png' : '/static/images/first_fold_desktop.png'}
                fill
                priority
                alt="Cover Image"
                style={{ objectFit: 'cover', zIndex: 0 }}
              />
            </BannerContainer>
          </Relativecard>
          <ButtonContainer>
            <Container maxWidth="lg" sx={{ padding: { xs: '10px 38px 10px 38px' } }}>
              <Grid
                container
                sx={{
                  padding: { md: '5vh 0 0rem 0' },
                  // paddingBottom: matchesMd ? 0 : 25,
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                }}>
                <Grid
                  item
                  xs={6}
                  md={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-end">
                  <TextImageContainer>
                    <Image
                      src="/static/images/ab_khulke_jiyo.png"
                      priority
                      fill
                      alt="Cover Image"
                      style={{ objectFit: 'contain' }}
                    />
                  </TextImageContainer>
                  <HomePageText
                    width={{ xs: '150%', md: '440px' }}
                    variant={'h2'}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    lineHeight={{ xs: '1.2', md: '1.4' }}
                    textAlign={{ md: 'left' }}
                    color={{ xs: '#ffffff', md: '#fff' }}
                    fontSize={{ xs: '1.3rem', md: '2.4rem' }}
                    // marginTop={{ xs: '4rem', md: '50rem' }}
                    // marginLeft={{ xs: '0', md: '-8rem' }}
                    fontWeight={{ xs: '400', md: '400' }}>
                    100,000+ seniors have chosen Emoha{' '}
                  </HomePageText>
                  <HomePageButton
                    hover={{ opacity: '1' }}
                    boxShadow="none"
                    width={{ xs: 'auto', md: 'auto' }}
                    onClick={connectWithUs}
                    display={{ xs: 'none', md: 'block' }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    fontSize={{ xs: '1.5rem ', md: '2.864rem' }}
                    lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                    margin={{ xs: '', md: '2.864rem 0 0 0' }}
                    padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                    borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                    // marginLeft={{ xs: '0', md: '-8rem' }}
                    fontWeight={{ xs: 500, md: 500 }}>
                    Connect with us
                  </HomePageButton>
                </Grid>
                <Grid
                  xs={6}
                  md={6}
                  item
                  sx={{
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    alignItems: { xs: 'center', md: 'center' },
                    margin: { xs: '0 0 30px 0', md: '0 0 30px 0' },
                  }}
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    alignItems: 'flex-end',
                  }}></Grid>
              </Grid>
            </Container>
          </ButtonContainer>
        </HomePageBox>
      </Mainsection>
      <div style={{ backgroundColor: 'transparent', position: 'relative', zIndex: 0, overflow: 'clip' }}>
        <LeafContainerRightRed>
          <FirstFlowerImage
            priority
            src={'/static/images/left_flower_color.png'}
            width={500}
            height={500}
            alt="View All"
          />
        </LeafContainerRightRed>

        <div style={{ paddingTop: 40 }}>
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 255)',
              padding: { xs: '0 30px', sm: '0' },
            }}>
            <AboutUs
              data={{
                title: 'What is Emoha?',
                description:
                  'We are India’s most trusted senior care brand offering holistic care and services at home for individuals 55+ years of age.',
                description1:
                  'Our members benefit from expert geriatric care, 24/7 emergency support, regular health monitoring & hospital accompaniment and lively activities.  ',
                button: 'Learn More',
                image: '/static/images/bg_1.png',
                redirect: '/about-us',
              }}
              changePosition={matches}
              red
            />
          </Container>
        </div>

        <LeafContainerLeftRed>
          <Image
            priority
            src={'/static/images/left_flower_color.png'}
            width={250}
            height={250}
            alt="View All"
            style={{ zIndex: -1 }}
          />
        </LeafContainerLeftRed>
      </div>
      {/* <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
        <Grid
          ref={floatingNumbersRef}
          sx={{
            zIndex: 1,
            height: 'auto',
            padding: { xs: '40px 0 0 0' },
          }}
          container>
          {map(newPlansValues, (item, index) => (
            <Grid size xs={6} sx={{ gap: { xs: 20 } }} key={index} sm={6} md={3} lg={3} xl={3}>
              <CustomCard
                inView={floatingNumbersInView}
                max={get(item, 'title')}
                index={index}
                isAnimation={get(item, 'is_animation')}
                desc={get(item, 'description')}
                startingNumber={get(item, 'startingNumber')}
                image={get(item, 'image')}
              />
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <div>
        <div style={{ backgroundColor: '#f3f1eb', position: 'relative', zIndex: 1, overflow: 'clip' }}>
          <LeafContainerLeft>
            <Image
              priority
              src={'/static/images/left_flower.png'}
              width={matches ? 250 : 500}
              height={matches ? 250 : 500}
              alt="View All"
              style={{ zIndex: -1 }}
            />
          </LeafContainerLeft>

          <FadeContainer />

          <div style={{ paddingTop: matches ? 40 : 80 }}>
            <Container maxWidth="lg" sx={{ padding: { xs: '0 30px', md: '0' }, backgroundColor: '#f3f1eb' }}>
              <AboutUs
                data={{
                  title: 'Get expert care, right at home',
                  description:
                    'With age comes an increased risk of falls, chronic conditions and feelings of isolation. But age also brings a desire to enjoy good health and do the things you’ve always wanted to do.',
                  description1:
                    'That’s where we step in. We’ve designed Emoha to ensure both you and your parents receive holistic support to better manage the changes that can come with age.',
                  button: 'Explore Services',
                  image: '/static/images/bg_2.png',
                  redirect: '/services',
                }}
                changePosition={matches}
              />
              <AboutUs
                data={{
                  title: 'How can we help?',
                  description:
                    'Depending on your parents’ level of need, you can choose one of our holistic membership plans to get more comprehensive care and proactive health monitoring. You can also choose to top up with our add-on plans, based on your specific needs.',
                  description1:
                    'Our plans are based on international best practices and leverage our 30+ years of geriatric experience.',
                  button: 'Explore Plans',
                  image: '/static/images/bg_3.png',
                  redirect: '/plans',
                }}
                changePosition
              />
            </Container>
          </div>

          <LeafContainerRight>
            <Image priority src={'/static/images/left_flower.png'} width={500} height={500} alt="View All" />
          </LeafContainerRight>
          <BluredContainer flip></BluredContainer>
        </div>
      </div>

      {/* <HomePageBox padding={{ xs: '0rem 0 3rem 0', md: '0rem 0 18.1rem 0' }}>
        <Container maxWidth="lg">
          <HomePageText
            variant={'h2'}
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
            variant={'h2'}
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
          {map(get(homePageData, 'parents_need'), (item, index) => (
            <ParentsNeedCard sliderRef={sliderRef} item={item} index={index} />
          ))}
        </CarouselContainer>
      </HomePageBox> */}

      {/* <PlansContainer>
        <Container maxWidth="lg">
          <HomePageBox padding={{ xs: '3.0rem 0rem', md: '5.0rem 0rem' }}>
            <HomePageBox
              display="flex"
              alignItems={{ xs: 'left', md: 'center' }}
              justifyContent={{ xs: 'flex-start', md: 'space-between' }}
              margin={{ xs: '0 1.9rem' }}
              flexDirection={{ xs: 'column', md: 'row' }}>
              <HomePageText
                textAlign={{ xs: 'left', md: 'left' }}
                variant={'h2'}
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                lineHeight={{ xs: '2.663rem', md: '4.8rem' }}
                textTransform="none"
                width={{ xs: '100%', md: '70%' }}>
                {capitalize('Get the Care Plan Your Parents Need')}
              </HomePageText>
              <HomePageText
                display="flex"
                variant={'h5'}
                textAlign={{ xs: 'left', md: 'right' }}
                fontSize={{ xs: '1.5rem', md: '1.6rem' }}
                fontWeight={{ xs: '400', md: '400' }}
                textTransform="none"
                margin={{ xs: '0.625rem 0 0 0' }}
                lineHeight={{ xs: '1.815rem', md: '1.936rem' }}>
                {capitalize('We have all their needs covered.')}
              </HomePageText>
            </HomePageBox>
            <HomePageBox padding={{ xs: '3rem 0rem 0rem 0rem', md: '5rem 0rem 0rem 0rem' }}>
              <HomePagePlanContainer
                dataSet={get(homePageData, 'plans')}
                planNameVariant={'h3'}
                onExploreMore={handleExploreMorePlan}
                onPlanClick={handleExploreMorePlan}
                cardFrom="homePage"
              />
            </HomePageBox>
          </HomePageBox>
        </Container>
      </PlansContainer> */}

      <HomeServiceSection homePageData={homePageData} />
      <BenifitsForYou />

      <div ref={onScrollSectionRef}>
        {scrollSectionInView && (
          <>
            {/* <HomePageBox
              position={{ xs: 'relative', md: 'relative' }}
              justifyContent="center"
              alignItems="center"
              display="flex"
              overflow={{ xs: 'visible', md: 'hidden' }}
              height={{ xs: '55rem', md: '55rem' }}
              zIndex={{ xs: '-1', md: '-1' }}>
              <Image
                src={matches ? '/static/images/banner1_mob.webp' : '/static/images/banner1_web.webp'}
                fill
                alt="Cover Image"
                style={{ objectFit: 'cover' }}
              />
              {matches ? (
                <HomePageText
                  fontSize={{ xs: '2.8rem', md: '4.6rem' }}
                  fontWeight={{ xs: '600', md: '600' }}
                  variant={'h2'}
                  textAlign="center"
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  display="flex"
                  zIndex={{ xs: '1', md: '1' }}
                  color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                  lineHeight={{ xs: '4.6rem', md: '7.2rem' }}>
                  What else are <br /> you getting
                </HomePageText>
              ) : (
                <HomePageText
                  fontSize={{ xs: '2.8rem', md: '4.6rem' }}
                  fontWeight={{ xs: '600', md: '600' }}
                  variant={'h2'}
                  textAlign="center"
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  display="flex"
                  zIndex={{ xs: '1', md: '1' }}
                  color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                  lineHeight={{ xs: '4.6rem', md: '7.2rem' }}>
                  Welcome to the world of Emoha, <br /> India’s #1 eldercare brand
                </HomePageText>
              )}
            </HomePageBox> */}

            {/* <HomePageBox backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}>
              <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
                <HomePageBox padding={{ xs: '2.3rem 0rem', md: '5rem 0 12.5rem 0rem' }}>
                  <HomePageBox padding={{ xs: '1.2rem 2rem', md: '0rem 0rem 0rem 2rem' }}>
                    {matches ? (
                      <HomePageText
                        color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                        fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                        fontWeight={{ xs: '400', md: '400' }}
                        variant={'h2'}
                        lineHeight={{ xs: '3.4rem', md: '3.7rem' }}
                        letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}>
                        <Text>
                          {matches
                            ? 'We have all their needs covered.'
                            : 'Discover interactive live shows on our community platform.'}
                        </Text>
                      </HomePageText>
                    ) : (
                      <HomePageText
                        color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                        fontSize={{ xs: '2.8rem', md: '3.6rem' }}
                        fontWeight={{ xs: '600', md: '600' }}
                        variant={'h2'}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        width={{ xs: '70%' }}
                        lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                        <Text>Browse our Moh TV shows </Text>
                      </HomePageText>
                    )}
                    <HomePageBox color={{ xs: '#1A1A1A', md: '#1A1A1A' }} display="flex" justifyContent="space-between">
                      {!matches ? (
                        <HomePageText
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                          fontWeight={{ xs: '400', md: '400' }}
                          variant={'h2'}
                          lineHeight={{ xs: '3.4rem', md: '4.7rem' }}
                          letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                          textTransform={{ xs: 'none !important', md: 'none !important' }}>
                          <Text>
                            {matches
                              ? 'We have all their needs covered.'
                              : 'Discover interactive live shows on our community platform.'}
                          </Text>
                        </HomePageText>
                      ) : (
                        <HomePageText
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          fontSize={{ xs: '1.7rem', md: '1.7rem' }}
                          fontWeight={{ xs: '600', md: '600' }}
                          variant={'h2'}
                          width={{ xs: '70%' }}
                          lineHeight={{ xs: '2.1rem', md: '4.7rem' }}>
                          <Text>
                            {' '}
                            Browse our <br /> Moh TV shows{' '}
                          </Text>
                        </HomePageText>
                      )}
                      <HomePageButton
                        onClick={() => handleViewAll('/mohtv', 'Explore MOH TV shows')}
                        variant="text"
                        color={{ xs: '#1a1a1a', md: '#1a1a1a' }}
                        margin={{ xs: '0', md: '0 24px 0 0' }}
                        letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                        fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                        View all &#8594;
                      </HomePageButton>
                    </HomePageBox>
                  </HomePageBox>
                  <HomePageMohTvShows dots={true} mohtv={true} dataSet={get(homePageData, 'recommended_shows.data')} />
                </HomePageBox>
              </Container>
            </HomePageBox> */}

            {/* <HomePageBox backgroundColor={{ xs: '#F8F8F8', md: '#F8F8F8' }}>
              <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
                <HomePageBox padding={{ xs: '2.3rem 0rem', md: '10.1rem 0 12.5rem 0rem' }}>
                  <HomePageBox padding={{ xs: '1.2rem 1.6rem', md: '0rem 0rem 0rem 2rem' }}>
                    {!matches ? (
                      <HomePageText
                        color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                        fontSize={{ xs: '2.8rem', md: '3.6rem' }}
                        fontWeight={{ xs: '600', md: '600' }}
                        variant={'h2'}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        lineHeight={{ xs: '3.4rem', md: '3.7rem' }}>
                        <Text>Read our latest blogs</Text>
                      </HomePageText>
                    ) : (
                      <HomePageText
                        color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                        fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                        fontWeight={{ xs: '400', md: '400' }}
                        variant={'h2'}
                        lineHeight={{ xs: '3.4rem', md: '4.7rem' }}
                        letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}>
                        <Text>
                          {matches
                            ? 'We have all their needs covered.'
                            : 'Get the latest information on everything your parents need.'}
                        </Text>
                      </HomePageText>
                    )}
                    <HomePageBox display="flex" justifyContent="space-between" alignItems="center">
                      {matches ? (
                        <HomePageText
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                          fontWeight={{ xs: '600', md: '600' }}
                          variant={'h2'}
                          textTransform={{ xs: 'none !important', md: 'none !important' }}
                          lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                          <Text>Our latest blogs</Text>
                        </HomePageText>
                      ) : (
                        <HomePageText
                          color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                          fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                          fontWeight={{ xs: '400', md: '400' }}
                          variant={'h2'}
                          lineHeight={{ xs: '3.4rem', md: '4.7rem' }}
                          letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                          textTransform={{ xs: 'none !important', md: 'none !important' }}>
                          <Text>
                            {matches
                              ? 'We have all their needs covered.'
                              : 'Get the latest information on everything your parents need.'}
                          </Text>
                        </HomePageText>
                      )}
                      <HomePageButton
                        onClick={() => handleViewAll('/blogs', 'View all blogs')}
                        variant="text"
                        color={{ xs: '#1a1a1a !important' }}
                        letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                        margin={{ xs: '0', md: '0 24px 0 0' }}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                        fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                        View all &#8594;
                      </HomePageButton>
                    </HomePageBox>
                  </HomePageBox>
                  <HomePageMohTvShows dots={true} mohtv={false} dataSet={get(homePageData, 'Blogs')} />
                </HomePageBox>
              </Container>
            </HomePageBox> */}

            {/* <HomePageBox
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
                  <br /> What everyone is talking about us
                </HomePageText>
              )}
            </HomePageBox>

            <div style={{ position: 'relative' }}>
              <CircleContainer>
                <Image src="/static/images/red_circle.webp" fill alt="Cover Image" style={{ objectFit: 'cover' }} />
              </CircleContainer>
            </div> */}

            <HomePageBox backgroundColor={{ xs: '#CC4746', md: '#CC4746' }} overflow="hidden">
              <Container
                maxWidth="lg"
                style={{ position: 'relative' }}
                sx={{ padding: { md: '120px 0 100px 0', xs: '10px 0' } }}>
                <HomePageBox padding={{ xs: '2.3rem 0rem', md: '5rem 0rem' }}>
                  <MembersContainer>
                    <HomePageBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      padding={{ xs: '25px 0rem 30px 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                      <HomePageText
                        fontSize={{ xs: '2.8rem', md: '4.6rem' }}
                        fontWeight={{ xs: '600', md: '600' }}
                        variant={'h2'}
                        color={{ xs: '#ffffff', md: '#ffffff' }}
                        lineHeight={{ xs: '3.3rem', md: '5.7rem' }}>
                        Hear From Our Members
                      </HomePageText>
                      <HomePageText
                        fontSize={{ xs: '1.4rem', md: '2.4rem' }}
                        fontWeight={{ xs: '400', md: '400' }}
                        variant={'h2'}
                        margin={{ xs: '9px 0 10px 0', md: '16px 0 36px 0' }}
                        color={{ xs: '#ffffff', md: '#ffffff' }}
                        lineHeight={{ xs: '2.3rem', md: '4.0rem' }}>
                        From around the world!
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
            <BecomeBusinessPartner />

            <HomePageBox backgroundColor={{ xs: '#F8F8F8', md: '#F8f8f8' }} padding={{ xs: '', md: '0 24rem' }}>
              <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
                <HomePageBox padding={{ xs: '2.3rem 0 0 0', md: '3.1rem 0 0 0' }}>
                  <HomePageBox
                    color={{ xs: '#ffffff', md: '#ffffff' }}
                    display="flex"
                    margin={{ xs: '0rem 3.8rem 0rem 3.8rem', md: '0rem 1rem 0rem 1rem' }}
                    justifyContent="space-between"
                    alignItems="center">
                    <HomePageText
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      fontSize={{ xs: '1.9rem', md: '4.8rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      variant={'h2'}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                      lineHeight={{ xs: '2.2rem', md: '5.8rem' }}>
                      Seniors Matter.
                    </HomePageText>
                    <HomePageButton
                      variant="text"
                      alignSelf={{ xs: 'center', md: 'center' }}
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                      letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                      onClick={() => handleViewAll('/media', 'Media coverage')}>
                      View all &#8594;
                    </HomePageButton>
                  </HomePageBox>
                  <HomePageText
                    margin={{ xs: '0rem 3.8rem 1.2rem 3.8rem', md: '0rem 1rem 5rem 1rem' }}
                    color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                    fontSize={{ xs: '1.2rem', md: '2.4rem' }}
                    fontWeight={{ xs: '400', md: '400' }}
                    variant={'h2'}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                    lineHeight={{ xs: '2.4rem', md: '5.8rem' }}>
                    And we’re letting the world know.
                  </HomePageText>
                  <HomePageBox height={{ md: '44rem', xs: '40rem' }} overflow="hidden">
                    <ImageCarousel
                      centerPadding="15%"
                      dataSet={get(homePageData, 'media_coverage')}
                      height={matches ? '40rem' : '44rem'}
                      width="100%"
                      padding={{ md: '0 10px 0 0' }}
                      margin={{ xs: '0 15px', md: '0 0 0 0' }}
                      slides={{ md: 4 }}
                    />
                  </HomePageBox>
                </HomePageBox>
              </Container>
            </HomePageBox>

            <HomePageBox backgroundColor={{ xs: '#F4F1EB', md: '#F4F1EB' }}>
              {matches ? (
                <HomePageBox padding={{ xs: '2.2rem 0 1rem 0', md: '9rem 0 5rem 0' }}>
                  <HomePageBox
                    justifyContent="center"
                    alignItems="center"
                    padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                    <HomePageText
                      fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      variant={'h2'}
                      textAlign="center"
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                      lineHeight={{ xs: '2.1rem', md: '5.6rem' }}>
                      Show you care!
                    </HomePageText>
                    <HomePageText
                      fontSize={{ xs: '1.2rem', md: '3.6rem' }}
                      fontWeight={{ xs: '400', md: '600' }}
                      variant={'h2'}
                      textAlign="center"
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                      padding={{ xs: '0 4rem' }}
                      marginTop={{ xs: '1.2rem' }}
                      lineHeight={{ xs: '2rem', md: '5.6rem' }}>
                      Join hundreds of corporates & offer parent care benefits for your employees.
                    </HomePageText>
                  </HomePageBox>
                  <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
                    <ImageCarousel
                      dataSet={get(homePageData, 'corporate_partners')}
                      height="60%"
                      swipeToSlide
                      width="100%"
                      margin={{
                        xs: '0 1rem 0 0',
                        md: '0 1.7rem 0 0',
                      }}
                      centerMode={{ xs: 'false', md: 'false' }}
                      slides={{ xs: 3, md: 8 }}
                      autoPlay={{ xs: true, md: true }}
                    />
                  </Container>
                </HomePageBox>
              ) : (
                <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
                  <HomePageBox
                    padding={{ xs: '2.2rem 0 1rem 0', md: '9rem 0rem 5rem 0rem' }}
                    display="flex"
                    justifyContent="space-between">
                    <HomePageBox
                      justifyContent="center"
                      alignItems="left"
                      width={{ xs: '', md: '100%' }}
                      padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 0rem 0rem' }}>
                      <HomePageText
                        fontSize={{ xs: '1.7rem', md: '3.2rem' }}
                        fontWeight={{ xs: '600', md: '600' }}
                        variant={'h2'}
                        width={{ xs: '', md: '40rem' }}
                        textAlign="left"
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                        lineHeight={{ xs: '2.1rem', md: '3.2rem' }}>
                        Show you care!
                      </HomePageText>
                      <HomePageText
                        fontSize={{ xs: '1.2rem', md: '1.6rem' }}
                        fontWeight={{ xs: '400', md: '400' }}
                        variant={'h2'}
                        textAlign="left"
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                        padding={{ xs: '0 4rem' }}
                        marginTop={{ xs: '1.2rem' }}
                        lineHeight={{ xs: '2rem', md: '2.4rem' }}>
                        Join hundreds of corporates & offer parent care benefits for your employees.
                      </HomePageText>
                    </HomePageBox>
                    <Container
                      maxWidth="lg"
                      sx={{
                        padding: { xs: '0' },
                        width: { xs: 0, md: '75rem' },
                        margin: { xs: 0, md: '0  0 0 10rem' },
                        alignSelf: 'center',
                      }}>
                      <ImageCarousel
                        dataSet={get(homePageData, 'corporate_partners')}
                        height="60%"
                        swipeToSlide
                        width="100%"
                        margin={{
                          xs: '0 1rem 0 0',
                          md: '0 1.7rem 0 0',
                        }}
                        centerMode={{ xs: 'false', md: 'false' }}
                        slides={{ xs: 3, md: 4 }}
                        autoPlay={{ xs: true, md: true }}
                      />
                    </Container>
                  </HomePageBox>
                </Container>
              )}
            </HomePageBox>
          </>
        )}
      </div>

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
            variant={'h2'}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}
            lineHeight={{ xs: '2.1rem', md: '4.7rem' }}>
            We got answers to your questions
          </HomePageText>
          <Faq data={groupBy(get(homePageData, 'FAQs'), 'faq_category')} />
        </Container>
      </ButtonContainerNew>

      <div ref={footerSectionRef}>{footerSectionInView && <Footer />}</div>

      {matches && (
        <ConnectWithUs onClick={connectWithUs}>
          <ConnectText>Connect with us</ConnectText>
        </ConnectWithUs>
      )}

      {openThankYouModal && <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} />}
      {openContactFromModal && (
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
          contactFormLoader={get(contactToEmoha, 'loading')}
        />
      )}
    </>
  );
}

Home.propTypes = {
  homePageData: PropTypes.object,
  user: PropTypes.object,
  onClick: PropTypes.func,
  handleUserLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  contactToEmoha: makeSelectContactToEmoha(),
  homePageData: makeSelectHomePageData(),
  services: makeSelectService(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleUserLogin: (payload, callback) => dispatch(handleUserLoginAction(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
