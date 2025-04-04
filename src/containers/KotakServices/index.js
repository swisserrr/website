/* eslint-disable max-len */
/**
 *
 * KotakServices
 *
 */

import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import lte from 'lodash/lte';
import get from 'lodash/get';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'utils/CustomImage';
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import ScrollContainer from 'react-indiana-drag-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';

import isAuthenticated from 'utils/isAuthenticated';
import { makeSelectUser } from 'containers/Login/selectors';
import { makeSelectServices } from './selectors';
import theme from 'utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import {
  Container,
  BannerContainer,
  ConciergeHeading,
  HeadingContainer,
  ServicesContainer,
  MainContainer,
  SubServiceContainer,
  ServiceSubCategoryDetailContainer,
  ServiceCallBackButtonContainer,
  SubServiceHeading,
  SubServicePoints,
  Divider,
  ButtonServ,
  MostBookServicesContainer,
  Relativecard,
  PrevArrow,
  NextArrow,
  ArrowIconContainer,
  ArrowIconImage,
  MostPrevArrow,
  MostNextArrow,
  PageHeading,
  PageParagraph,
} from './styles';

import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import CarouselContainer from 'components/CarouselContainer';
import HomePageImage from 'components/HomePageImage';
import dynamic from 'next/dynamic';
import HeaderBar from 'components/HeaderBar';
import ServicesCard from 'components/ServicesCard';
import arrow_back from '../../../public/static/images/arrow_back.png';
import arrow_next from '../../../public/static/images/arrow_next.png';
import MostBookServiceCard from 'components/MostBookServiceCard';
import { setLoading } from 'containers/Loading/actions';
import { getKotakCoins } from 'containers/KotakPlans/actions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Footer = dynamic(() => import('components/Footer'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
import styled from '@emotion/styled';

// Sticky button styles
const StickyButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6.8rem;
  width: 100%;
  background-color: #e02323;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
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

const MostBookPrevArrow = props => {
  const { onClick } = props;
  return (
    <MostPrevArrow id="next_arrow" onClick={onClick}>
      <ArrowIconImage>
        <HomePageImage src={arrow_back} width="100%" height="100%" />
      </ArrowIconImage>
    </MostPrevArrow>
  );
};

const MostBookNextArrow = props => {
  const { onClick } = props;
  return (
    <MostNextArrow onClick={onClick}>
      <ArrowIconImage>
        <HomePageImage src={arrow_next} width="100%" height="100%" />
      </ArrowIconImage>
    </MostNextArrow>
  );
};
export function ConciergeServices({ data, user, handleSetLoading, subcat }) {
  const [activeService, setActiveService] = useState({ activeItem: data?.concierge_services?.[0] });
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const router = useRouter();
  const scrollRef = useRef(null);
  const container1 = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const selectedIndex = useRef(0);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEmergencyModal, setOpenEmergencyModal] = useState(false);

  const kotakCoins = useSelector(state => state.kotakPlans.coins);

  const handleClickOpen = () => {
    //console.log('open');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEmergencyModal = () => {
    setOpenEmergencyModal(true);
  };

  const handleCloseEmergencyModal = () => {
    setOpenEmergencyModal(false);
  };

  useEffect(() => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      dispatch(getKotakCoins());
    }
  }, [dispatch]);

  useEffect(() => {
    if (router?.query?.activeId) {
      const findRes = find(data?.concierge_services, (obj, index) => {
        if (isEqual(obj.id, router.query?.activeId)) {
          selectedIndex.current = index;
          return true;
        }
      });

      if (findRes) {
        if (scrollRef.current) {
          const containerNode = scrollRef.current.container;
          const itemNode = containerNode?.current?.childNodes[selectedIndex.current];

          if (itemNode) {
            const scrollLeft = itemNode.offsetLeft - containerNode?.current?.offsetLeft;
            container1.current.scrollTo(scrollLeft, 0);
          }
        }

        setActiveService({ activeItem: findRes });
      }
    }

    if (router?.query?.fromServiceCreated) {
      setOpenThankYouModal(true);
    }
  }, [data?.concierge_services, router?.query?.activeId, router?.query?.fromServiceCreated]);

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
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  const makeConcierge = item => {
    // Add debugging

    if (isAuthenticated()) {
      handleSetLoading(true);
      if (router.asPath.startsWith('/enterprise/kotak')) {
        router.push(
          {
            pathname: '/select-concierge-date?enterprise=kotak',
            query: {
              from: router.asPath,
              service_Id: item?.id,
              service_name: get(item, 'service', 'N/A'),
              category: get(item, 'category', 'N/A'),
            },
          },
          '/select-concierge-date?enterprise=kotak'
        );
      } else if (router.asPath.startsWith('/enterprise/medibuddy')) {
        router.push(
          {
            pathname: '/select-concierge-date?enterprise=medibuddy',
            query: {
              from: router.asPath,
              service_Id: item?.id,
              service_name: get(item, 'service', 'N/A'),
              category: get(item, 'category', 'N/A'),
            },
          },
          '/select-concierge-date?enterprise=medibuddy'
        );
      } else {
        router.push(
          {
            pathname: '/select-concierge-date?enterprise=federal',
            query: {
              from: router.asPath,
              service_Id: item?.id,
              service_name: get(item, 'service', 'N/A'),
              category: get(item, 'category', 'N/A'),
            },
          },
          '/select-concierge-date?enterprise=federal'
        );
      }
    } else {
      if (router.asPath.startsWith('/enterprise/kotak')) {
        router.push(
          {
            pathname: '/enterprise/kotak/login',
            query: {
              from: router.asPath,
              activeId: activeService?.activeItem?.id,
              category: get(item, 'category', 'N/A'),
            },
          },
          '/enterprise/kotak/login'
        );
      } else {
        if (router.asPath.startsWith('/enterprise/medibuddy')) {
          router.push(
            {
              pathname: `/enterprise/medibuddy/${subcat}/login`,
              query: {
                from: router.asPath,
                activeId: activeService?.activeItem?.id,
                category: get(item, 'category', 'N/A'),
              },
            },
            `/enterprise/medibuddy/${subcat}/login`
          );
        } else {
          router.push(
            {
              pathname: '/enterprise/federal/login',
              query: {
                from: router.asPath,
                activeId: activeService?.activeItem?.id,
                category: get(item, 'category', 'N/A'),
              },
            },
            '/enterprise/federal/login'
          );
        }
      }
    }

    pushEvent(EVENT_NAME.CLICK_REQUEST_SERVICE, {
      Category: get(item, 'category', 'N/A'),
      Sub_Category: get(item, 'service', 'N/A'),
    });
  };

  const handleRightButton = useCallback(() => {
    if (container1.current) {
      container1.current.scrollTo(container1?.current?.scrollLeft + 200, 0);
    }
  }, []);

  const handleLeftButton = useCallback(() => {
    if (container1.current) {
      container1.current.scrollTo(container1?.current?.scrollLeft - 200, 0);
    }
  }, []);

  const SamplePrevArrow = () => {
    return (
      <PrevArrow id="next_arrow" onClick={handleLeftButton}>
        <ArrowIconImage>
          <HomePageImage src={arrow_back} width="100%" height="100%" />
        </ArrowIconImage>
      </PrevArrow>
    );
  };

  const SampleNextArrow = () => {
    return (
      <NextArrow onClick={handleRightButton}>
        <ArrowIconImage>
          <HomePageImage src={arrow_next} width="100%" height="100%" />
        </ArrowIconImage>
      </NextArrow>
    );
  };

  // Check if the screen width is less than 1024px (non-desktop view)
  const isMobileView = useMediaQuery('(max-width:1024px)');

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
      {!isMobileView ? (
        <HeaderBar />
      ) : (
        <HeaderBar position="relative" disableScroll={true} backgroundColor={theme.palette.black.third} />
      )}

      <Head>
        <title>Personalized Senior Care at Your Doorstep</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Emoha provides personalized senior care services including health care, emotional support, and daily assistance to elders at the comfort of their home."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Personalized Senior Care at Your Doorstep" />
        <meta
          property="og:description"
          content="Emoha provides personalized senior care services including health care, emotional support, and daily assistance to elders at the comfort of their home."
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
      <Container>
        <Grid container>
          <Relativecard>
            {router.asPath.includes('medibuddy') && !isMobileView ? (
              <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
                <Image
                  src={matches ? '/static/images/conciergeMobileBanner.webp' : '/static/images/serviceBannerImage.webp'}
                  fill
                  alt="Cover Image"
                  style={{ objectFit: 'fill', zIndex: 0 }}
                />
              </BannerContainer>
            ) : (
              <div style={{ position: 'relative' }}>
                <img
                  src="/static/images/KotakHead.jpg"
                  fill
                  priority
                  alt="Cover Image"
                  style={{ width: '100%', objectFit: 'cover', zIndex: 0 }}
                />
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
                    {kotakCoins?.total_redeemable_amount}
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
            )}
            {/* <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}> */}

            {/* </BannerContainer> */}
          </Relativecard>
        </Grid>
        <MainContainer>
          {router.asPath.includes('medibuddy') && (
            <>
              <PageHeading>Description</PageHeading>
              <PageParagraph>
                Welcome to Emoha, your trusted elder care partner, in collaboration with MediBuddy. Access personalized
                services, 24/7 emergency support, and expert assistance tailored for seniors. Place service requests
                easily and ensure your loved ones live a safe, healthy, and fulfilling life.
              </PageParagraph>
              {!isMobileView && (
                <>
                  <PageHeading>Are you in emergency?</PageHeading>
                  <PageParagraph>
                    In case of emergency , Please reach out to us at&nbsp;
                    <a href="tel:1800123445555" style={{ color: '#477ad3', whiteSpace: 'nowrap', fontWeight: '600' }}>
                      1800 123 445555
                    </a>
                  </PageParagraph>
                </>
              )}
            </>
          )}
          <HeadingContainer>
            <ConciergeHeading>How we help</ConciergeHeading>
            <ArrowIconContainer>
              <SamplePrevArrow />
              <SampleNextArrow />
            </ArrowIconContainer>
          </HeadingContainer>

          <ServicesContainer container spacing={{ xs: 3, sm: 3, md: 6, lg: 6 }}>
            <ScrollContainer
              className="scrollerXs"
              innerRef={container1}
              ref={scrollRef}
              style={{ display: 'flex', paddingLeft: '4.9rem' }}>
              {!isEmpty(data?.concierge_services) &&
                map(data?.concierge_services, (itemVal, index) => (
                  <Grid style={{ marginBottom: '30px' }} size lg={4} md={5} sm={6} xs={12} key={index}>
                    <ServicesCard
                      item={itemVal}
                      activeService={activeService?.activeItem}
                      width="100%"
                      isPlansPage
                      name="Test"
                      key={index}
                      setActiveService={setActiveService}
                    />
                  </Grid>
                ))}
            </ScrollContainer>
          </ServicesContainer>
          <SubServiceContainer container>
            {activeService?.activeItem?.services &&
              activeService?.activeItem?.services.map((itemVal, index) => (
                <>
                  <ServiceSubCategoryDetailContainer item lg={12} md={12} sm={12} xs={12}>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      {/* Left-aligned heading */}
                      <SubServiceHeading>{itemVal?.service}</SubServiceHeading>

                      {/* Right-aligned button */}
                      <ServiceCallBackButtonContainer>
                        <ButtonServ
                          disableRipple
                          disableTouchRipple
                          disableFocusRipple
                          onClick={() => makeConcierge(itemVal)}
                          variant="none">
                          Book Request
                        </ButtonServ>
                      </ServiceCallBackButtonContainer>
                    </div>
                    {itemVal?.description &&
                      itemVal?.description.map((item, index1) => (
                        <SubServicePoints key={index1}>{`\u2022 ${item}`}</SubServicePoints>
                      ))}
                  </ServiceSubCategoryDetailContainer>

                  {lte(index, activeService?.activeItem?.services.length - 2) && <Divider />}
                </>
              ))}
          </SubServiceContainer>
        </MainContainer>
        <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} onPress={closeThankYouModal} />
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
        />
      </Container>
      {isMobileView && router.asPath.includes('medibuddy') && (
        <StickyButton onClick={handleOpenEmergencyModal}>Emergency SOS</StickyButton>
      )}

      <Dialog
        open={openEmergencyModal}
        onClose={handleCloseEmergencyModal}
        aria-labelledby="emergency-modal-title"
        aria-describedby="emergency-modal-description">
        {/* <DialogTitle id="emergency-modal-title">Emergency Services</DialogTitle> */}
        <DialogContent>
          <p style={{ fontSize: '1.3rem', textAlign: 'center', lineHeight: '2.4rem', fontWeight: '400' }}>
            In case of an emergency,
            <br />
            please reach out to us at:&nbsp;
            <a href="tel:1800123445555" style={{ color: '#477ad3', whiteSpace: 'nowrap', fontWeight: '600' }}>
              1800 123 445555
            </a>
          </p>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleCloseEmergencyModal} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

ConciergeServices.propTypes = {
  ...ConciergeServices,
};

MostBookPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

MostBookNextArrow.propTypes = {
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectServices(),
  // data: makeSelectServices(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSetLoading: payload => dispatch(setLoading(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ConciergeServices);
