/* eslint-disable max-len */
/**
 *
 * ConciergeServices
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
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import Image from 'utils/CustomImage';
import ScrollContainer from 'react-indiana-drag-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';

import isAuthenticated from 'utils/isAuthenticated';
import { makeSelectUser } from 'containers/Login/selectors';
import { makeSelectServices } from './selectors';

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
  Button,
  MostBookServicesContainer,
  Relativecard,
  PrevArrow,
  NextArrow,
  ArrowIconContainer,
  ArrowIconImage,
  MostPrevArrow,
  MostNextArrow,
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

const Footer = dynamic(() => import('components/Footer'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));

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
export function ConciergeServices({ data, user, handleSetLoading }) {
  const [activeService, setActiveService] = useState({ activeItem: data?.concierge_services?.[0] });
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const router = useRouter();
  const scrollRef = useRef(null);
  const container1 = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const selectedIndex = useRef(0);

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
    if (isAuthenticated()) {
      handleSetLoading(true);
      router.push(
        {
          pathname: '/select-concierge-date',
          query: {
            from: router.asPath,
            service_Id: item?.id,
            service_name: get(item, 'service', 'N/A'),
            category: get(item, 'category', 'N/A'),
          },
        },
        '/select-concierge-date'
      );
    } else {
      router.push(
        {
          pathname: '/login',
          query: {
            from: router.asPath,
            activeId: activeService?.activeItem?.id,
            category: get(item, 'category', 'N/A'),
          },
        },
        '/login'
      );
    }
    pushEvent(EVENT_NAME.CLICK_REQUEST_SERVICE, {
      Category: get(item, 'category', 'N/A'),
      Sub_Category: get(item, 'service', 'N/A'),
    });
  };

  useEffect(() => {
    router.replace(
      {
        pathname: '/services',
        query: { activeId: activeService?.activeItem?.id },
      },
      '/services',
      { shallow: true }
    );
  }, [activeService]);

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

  return (
    <>
      <HeaderBar />
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
            <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
              <Image
                src={matches ? '/static/images/conciergeMobileBanner.webp' : '/static/images/serviceBannerImage.webp'}
                fill
                alt="Cover Image"
                style={{ objectFit: 'fill', zIndex: 0 }}
              />
            </BannerContainer>
          </Relativecard>
        </Grid>
        <MainContainer>
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
                  <ServiceSubCategoryDetailContainer item lg={9} md={8} sm={12} xs={12}>
                    <SubServiceHeading>{itemVal?.service}</SubServiceHeading>
                    {itemVal?.description &&
                      itemVal?.description.map((item, index1) => (
                        <SubServicePoints key={index1}>{`\u2022 ${item}`}</SubServicePoints>
                      ))}
                  </ServiceSubCategoryDetailContainer>

                  <ServiceCallBackButtonContainer item lg={3} md={4} sm={12} xs={12}>
                    <Button
                      disableRipple
                      disableTouchRipple
                      disableFocusRipple
                      onClick={() => makeConcierge(itemVal)}
                      variant="none">
                      Book service
                    </Button>
                  </ServiceCallBackButtonContainer>
                  {lte(index, activeService?.activeItem?.services.length - 2) && <Divider />}
                </>
              ))}
          </SubServiceContainer>
          <MostBookServicesContainer>
            <ConciergeHeading>Most booked services</ConciergeHeading>
            <CarouselContainer
              nextArrrow={true}
              prevArrow={true}
              dots={false}
              slides={{ xs: 2, sm: 3, md: 5 }}
              scaleCenter={false}
              CustomPrevArrow={MostBookNextArrow}
              CustomNextArrow={MostBookPrevArrow}
              leftArrowMargin={'-4rem'}
              rightArrowMargin={'-4rem'}>
              {data?.recommended_service &&
                map(data?.recommended_service, (itemVal, index) => (
                  <MostBookServiceCard key={index} item={itemVal} user={user} />
                ))}
            </CarouselContainer>
          </MostBookServicesContainer>
        </MainContainer>
        <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} onPress={() => router.push('/')} />
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
        />
      </Container>
      <Footer />
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
