/* eslint-disable max-len */
/**
 *
 * Membership
 *
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStructuredSelector } from 'reselect';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getActivePlan, getKotakCoins } from './actions';
import makeSelectMembership, {
  makeSelectCouple,
  makeSelectIndividual,
  makeSelectCoins,
  makeSelectActivePlan,
} from './selectors';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {
  PlanSampleNextArrow,
  PlanSamplePrevArrow,
  AddOnContent,
  AddOnPlansButton,
  AddOnPlansFeature,
  AddOnPlansPrice,
  AddOnPlansTitle,
  AddOnTabs,
  BannerContainer,
  BannerHeading,
  BasicBenefitsDesc,
  BasicBenefitsHeading,
  BasicBenefitsTitle,
  FooterPadding,
  HeadingContainer,
  MobileBannerHeading,
  PlanBenefitContainer,
  Relativecard,
  SubHeading,
  TabWrapper,
  WholeTabWrapper,
  PlanButtonWrapper,
  PlanButton,
  AddOnPlansWrapper,
  AddOnPlansDot,
  PlanRequestCall,
  PlanRequestText,
  PlanHeading,
  PageHeading,
  PageParagraph,
} from './styles';
import { plansForSingle } from '../Home/constantValues';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.module.css';
import 'react-tabs/style/react-tabs.css';
import { useInView } from 'react-intersection-observer';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import Container from '@mui/material/Container';
import { EmpowerPremiumBenefits, EmpowerAdvanceBenefits, EmpowerBasicBenefits, addOnData } from './constantValues';
import dynamic from 'next/dynamic';
// const PlanCardContainer = dynamic(() => import('components/PlanCardContainer'));
import PlanCardContainer from 'components/PlanCardHomeContainer';
import PlansContainer from 'components/PlansContainer';
import map from 'lodash/map';
import CarouselContainer from '../../components/CarouselContainer';
import HomePageImage from '../../components/HomePageImage';
import left from '../../../public/static/images/left.svg';
import right from '../../../public/static/images/right.svg';
import { Link, Element, Events, scrollSpy, scroller } from 'react-scroll';
import { get } from 'lodash';
import { PartnerShipButtonWrapper, PartnerShipButton } from 'containers/BusinessPartner/styles';
import HeaderBar from 'components/HeaderBar';
const Footer = dynamic(() => import('components/Footer'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
import { useSelector } from 'react-redux';
import theme from 'utils/theme';
import makeSelectKotakPlans from './selectors';
import round from 'lodash/round';

import styled from '@emotion/styled';
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  display: flex;
  width: 333px;
  height: 266px;
  padding: 21px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 9.111px;
  background: #f4f1eb;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  font-size: 1.5rem;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 2.4rem;
`;

const RedButton = styled.button`
  display: flex;
  width: 171px;
  height: 32px;
  padding: 11.038px;
  justify-content: center;
  align-items: center;
  gap: 10.302px;
  flex-shrink: 0;
  border-radius: 17.247px;
  background: #cc4746;
  color: #f8f8f8;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 9.486px;
  margin-top: 3.496rem;
`;

const PlanButtonWrapperModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalHeading = styled.h1`
  color: #1c1b1f;
  margin-top: 1.942rem;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const ModalParagraph = styled.p`
  color: #1a1a1a;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
  letter-spacing: -0.16px;
  transform: rotate(0.007deg);
  margin-top: 2.041rem;
`;

const BenefitsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const ServiceName = styled.h3`
  color: #1d1d1d;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px; /* 138.651% */
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: #383838;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 140% */
`;

const CoinDiv = styled.div`
  min-width: 8.3rem;
  height: 2.9rem;
  flex-shrink: 0;
  border-radius: 10.111px;
  background: #f2f2f2;
  box-shadow: 0px 3.37px 10.111px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-size: 11.796px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.118px;
  // background: url(/static/images/kotakCoin.png) lightgray 50% / contain no-repeat;
`;

const CoinImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px; /* Adjust as needed */
  width: 19.38px;
  height: 20.222px;
  flex-shrink: 0;
  margin-right: 4px;
`;

export function Membership({ individual, couple, plans, coins, activeplan }) {
  //console.log('ActivePlan', activeplan?.data);
  // console.log('ActivePlan', activeplan?.data?.["user_plans.name"]);
  const [activePlan, setActivePlan] = useState('Empower - Advanced');
  const [loading, setLoading] = useState(false);

  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [data, setData] = useState(null);
  const [openSimpleModal, setOpenSimpleModal] = useState(false); // State for the simple modal
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const sliderRef = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const [carouselIndex, setCarouselIndex] = useState(2);
  const [selectedTab, setSelectedTab] = useState(1);
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });
  const { campaign_name } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      dispatch(getKotakCoins());
    }
    dispatch(getActivePlan());
  }, [dispatch]);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem('user_data'));
  //   localStorage.setItem('allPlans', JSON.stringify(plans.plans));
  //   if (typeof window !== 'undefined') {
  //     setData(userData);
  //     const activeUserPlan = get(userData, 'active_user_plan');

  //     // Check sessionStorage to see if the modal has been shown
  //     const modalShown = sessionStorage.getItem('modalShown');

  //     if (activeUserPlan !== null && activeUserPlan !== undefined && !modalShown) {
  //       setOpenSimpleModal(true);
  //       sessionStorage.setItem('modalShown', 'true');
  //     } else {
  //       setOpenSimpleModal(false);
  //     }
  //   }
  // }, [plans.plans]);

  const userPlan = () => {
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('user_data'));
      return get(userData, 'active_user_plan', null) ? true : false;
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    localStorage.setItem('allPlans', JSON.stringify(plans.plans));
    if (typeof window !== 'undefined') {
      setData(userData);
      const activeUserPlan = get(userData, 'active_user_plan');

      if (activeUserPlan !== null && activeUserPlan !== undefined) {
        setActivePlan(get(activeUserPlan, 'plan.name'));
        setOpenSimpleModal(true);
      }
    }
  }, []);
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
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
    const checkCookies = () => {
      const cookies = document.cookie;
      if (!cookies) {
        if (router.asPath.startsWith('/enterprise/kotak')) {
          router.push('/enterprise/kotak/login');
        } else {
          router.push('/enterprise/federal/login');
        }
      }
    };

    checkCookies();

    const interval = setInterval(checkCookies, 500);

    return () => clearInterval(interval);
  }, [router]);

  useEffect(() => {
    if (isEqual(activePlan, 'Empower - Advanced')) {
      sliderRef.current?.slickGoTo(2);
      setCarouselIndex(2);
    } else if (isEqual(activePlan, 'Empower - Basic')) {
      sliderRef.current?.slickGoTo(0);
      setCarouselIndex(0);
    } else {
      sliderRef.current?.slickGoTo(1);
      setCarouselIndex(1);
    }
  }, [matches, activePlan]);

  useEffect(() => {
    AOS.init({ once: true, duration: 300, disable: 'mobile' });
  }, [router]);

  useEffect(() => {
    if (router.query?.activePlan) {
      setActivePlan(router?.query?.activePlan);
    }
  }, []);

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  const onPlanClick = useCallback(
    (planName, index) => {
      // if (userPlan()) {
      //   setOpenSimpleModal(true)
      //   return
      // }
      setCarouselIndex(index);
      pushEvent(EVENT_NAME.CLICK_PLAN, {
        plan_name: planName,
      });
    },
    [userPlan]
  );

  const onExploreMore = useCallback(() => {
    // setOpenSimpleModal(false);

    if (router.asPath.startsWith('/enterprise/kotak')) {
      router.push('/enterprise/kotak/kotakflow');
    } else {
      router.push('/enterprise/federal/federalflow');
    }
    // if (router.pathname.startsWith('enterprise/federal'))
    // if (userPlan()) {
    //   setOpenSimpleModal(true)
    // } else {

    // }
  }, [userPlan, router]);

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
    if (router.query?.planIndex) {
      setCarouselIndex(router.query?.planIndex);
    }
  }, [router]);

  useEffect(() => {
    //Enable it on use case
    if (carouselIndex) {
      sliderRef.current?.slickGoTo(carouselIndex);
    }
    // sliderRef.current?.slickGoTo(carouselIndex);
  }, [carouselIndex, sliderRef]);

  const mapPlans = plansObject => {
    const plansArray = plansObject.plans.plans;

    return plansArray?.map((plan, index) => ({
      id: plan.id,
      new_id: index + 1,
      category: plan.name,

      plan: [
        {
          name2: plan.name,
          name: plan.name,
          description: plan.description,
          plan_prices: [
            {
              price: round(plan.plan_prices[0].price / 12),
              id: plan.plan_prices[0].id,
              duration: plan.plan_prices[0].duration,
              currency: plan.plan_prices[0].currency,
              symbol: plan.plan_prices[0].symbol,
              price_type: plan.plan_prices[0].price_type,
              node_item_uuid: plan.plan_prices[0].node_item_uuid,
            },
          ],
          plan_services_all: plan.plan_services,
          plan_services: plan.plan_services.slice(0, 7),

          pos_node_id: get(plan, 'pos_node_id'),
        },
      ],
    }));
  };
  const newPlans = mapPlans(plans);

  const findPlanByName = (plans, name) => {
    return plans?.find(plan => plan.category === name);
  };

  const Switch = useCallback(() => {
    const centerScaled = true;
    return (
      <Container maxWidth="xl" sx={{ padding: { xs: '0', md: '0 5rem' } }}>
        <PageHeading>Let us help your parents while you’re away</PageHeading>
        <PageParagraph>
          Be it for work or other commitments, your parents' well-being should never be a concern. With Emoha Eldercare,
          rest assured that they are in expert hands, receiving personalized, comprehensive support. As India’s most
          trusted senior care brand, Emoha offers holistic care & services-ensuring that elders age magnificently at
          home while you feel reassured.
        </PageParagraph>
        <Container
          maxWidth="xl"
          sx={{ padding: { xs: '0', md: '0 3rem' }, margin: { xs: '3.542rem 0 0 0', md: '4.8rem 0 0 0' } }}>
          <PlanHeading>Care plans for your parents</PlanHeading>

          <PlanCardContainer
            dataSet={newPlans}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText="Proceed"
            cardFrom="membership"
            planIndex={router.query?.planIndex ? router.query?.planIndex : 1}
            sliderRef={sliderRef}
            planFor="person"
            centerScaled={centerScaled}
          />
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            zIndex: 1,
            padding: { xs: '0rem 2rem' },
          }}>
          <PlanBenefitContainer>
            <PlansContainer data={individual} activePlan={activePlan} from=" Benefits for Individual" />
          </PlanBenefitContainer>
        </Container>
        <Container id="plan_benefits" maxWidth="lg" sx={{ padding: { xs: 0 } }}>
          <BasicBenefitsTitle>{'Benefits Include'}</BasicBenefitsTitle>

          <BenefitsList>
            {/* <div style={{display:'flex', flexDirection:'column'}}> */}
            <div style={{ width: '100%' }}>
              {findPlanByName(newPlans, activePlan)?.plan[0]?.plan_services?.map((service, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '0.9rem',
                    marginRight: '1.07rem',
                    paddingTop: '1.6rem',
                    paddingBottom: '1.6rem',
                    borderBottom: '1px solid #E6E6E6',
                  }}>
                  <img
                    style={{
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      marginRight: '2rem',
                      marginLeft: '1rem',
                    }}
                    src="/static/images/serviceIcon.png"
                    alt="Close"
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2.1rem' }}>
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDescription>{service.description}</ServiceDescription>
                  </div>
                </div>
              ))}
            </div>
            {/* </div> */}
          </BenefitsList>
        </Container>
      </Container>
    );
  }, [sliderRef, activePlan, router, plansForSingle, couple, individual, selectedTab, matches]);

  return (
    <>
      {loading && (
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
      <HeaderBar position="relative" backgroundColor={theme.palette.black.third} disableScroll />
      <Head>
        <title>Choose the Best Elder Care Plan | Emoha</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Emoha offers a range of elder care plans to help you take care of your loved ones. Choose from our different packages to get the right care for your elderly parents or relatives."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Choose the Best Elder Care Plan | Emoha" />
        <meta
          property="og:description"
          content="Emoha offers a range of elder care plans to help you take care of your loved ones. Choose from our different packages to get the right care for your elderly parents or relatives."
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
      <Relativecard>
        {/* <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}> */}
        <div style={{ position: 'relative' }}>
          <img src="/static/images/KotakHead.jpg" alt="Cover Image" style={{ objectFit: 'cover', width: '100%' }} />
          {router.pathname.startsWith('/enterprise/kotak') && (
            <CoinDiv
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'white',
                padding: '5px',
                zIndex: 1,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}>
              <CoinImage src="/static/images/kotakCoin.png" alt="Kotak Coin" />
              {coins?.total_redeemable_amount}
              <IconButton
                style={{ padding: '0', marginLeft: '1.5rem', marginBottom: '0.3rem' }}
                onClick={handleClickOpen}>
                <InfoIcon style={{ color: '#CB4747', width: '1.0111rem', height: '1.0111rem' }} />
              </IconButton>
            </CoinDiv>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            BackdropProps={{
              onClick: handleClose,
            }}>
            <DialogTitle>Disclaimer</DialogTitle>
            <DialogContent>
              <p>
                You are now in Emoha’s environment. Your HappyYou points have now been converted into Emoha’s
                coins/wallet and point conversions differs from that of Kotak Life
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Relativecard>
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Switch />
      </div>
      {matches && formInView && (
        <PlanRequestCall onClick={onExploreMore}>
          <PlanRequestText>Request Callback</PlanRequestText>
        </PlanRequestCall>
      )}
      <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} />
      <ContactFormModal
        closeModal={closeContactFormModal}
        openModal={openContactFromModal}
        setOpenModal={setOpenThankYouModal}
        showsFrom="Care Plans"
        activePlan={activePlan}
      />
      {openSimpleModal && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={() => setOpenSimpleModal(false)}>
              <img src="/static/images/closeBlack.png" alt="Close" />
            </CloseButton>
            <ModalHeading>Congratulations 🎉</ModalHeading>
            <ModalParagraph>
              You are enrolled with {data?.active_user_plan?.plan?.name}. Let’s get you started
            </ModalParagraph>
            <PlanButtonWrapperModal>
              <RedButton
                onClick={() => {
                  if (router.asPath.startsWith('/enterprise/kotak')) {
                    router.push('/enterprise/kotak/services');
                  } else {
                    router.push('/enterprise/federal/services');
                  }
                }}>
                Let's Start
              </RedButton>
            </PlanButtonWrapperModal>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

Membership.propTypes = {
  dispatch: PropTypes.func.isRequired,
  individual: PropTypes.object,
  couple: PropTypes.object,
  plans: PropTypes.array,
  coins: PropTypes.array,
  activeplan: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectKotakPlans(),
  individual: makeSelectIndividual(),
  couple: makeSelectCouple(),
  coins: makeSelectCoins(),
  activeplan: makeSelectActivePlan(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Membership);
