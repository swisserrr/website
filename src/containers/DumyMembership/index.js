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
import Head from 'next/head';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStructuredSelector } from 'reselect';
import makeSelectMembership, { makeSelectCouple, makeSelectIndividual } from './selectors';
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

const AddOnPlans = ({ matches, onExploreMore, campaignName }) => {
  const [activeTab, setActiveTab] = useState('Tab-1');
  const tabRefs = useRef([]);
  const ref = useRef(true);

  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      ref.current = false;
    });

    Events.scrollEvent.register('end', function(to, element) {
      setTimeout(() => {
        ref.current = true;
      }, 700);
      setActiveTab(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = to => {
    setActiveTab(to);
  };

  const scrollToActiveTab = tabId => {
    if (ref.current) {
      handleSetActive(tabId);
    }
    document.getElementsByName(tabId)[0].scrollIntoView();
  };

  const groupedData = data =>
    data.reduce((acc, item) => {
      if (!acc[item.key]) {
        acc[item.key] = [];
      }
      acc[item.key].push(item);
      return acc;
    }, {});

  return (
    <Container
      maxWidth="lg"
      sx={{
        zIndex: 1,
        padding: { xs: '0rem 2rem' },
        marginTop: '4rem',
      }}>
      <WholeTabWrapper>
        <BasicBenefitsTitle>{'Add - on Plans'}</BasicBenefitsTitle>
        <TabWrapper>
          {map(
            [
              { key: 'Tab-1', value: 'Care Add-ons' },
              { key: 'Tab-2', value: 'Diabetes Management' },
              { key: 'Tab-3', value: 'Dementia Management' },
              { key: 'Tab-4', value: 'Chronic Kidney Disease Management' },
              { key: 'Tab-5', value: 'Stroke Management' },
              { key: 'Tab-6', value: 'Arthritis Management' },
              { key: 'Tab-7', value: 'Heart Disease Management' },
              { key: 'Tab-8', value: 'Cancer Management' },
            ],
            (e, i) => {
              return (
                <div name={e.key}>
                  <Link
                    key={e.key}
                    to={e.key}
                    smooth={true}
                    duration={200}
                    offset={-50}
                    onSetActive={() => scrollToActiveTab(e.key)}
                    spy={true}>
                    <AddOnTabs
                      style={{
                        color: activeTab === e.key ? '#cc4746' : 'black',
                        borderBottom: activeTab === e.key ? '2px solid #cc4746' : 'none',
                      }}>
                      {e.value}
                    </AddOnTabs>
                  </Link>
                </div>
              );
            }
          )}
        </TabWrapper>
        {map(Object.keys(groupedData(get(addOnData, 'plans'))), (item, i) => {
          return (
            <Element name={item}>
              {map(groupedData(get(addOnData, 'plans'))[item], (items, i) => {
                return (
                  <AddOnContent name={i} key={get(item, 'key')} ref={el => (tabRefs.current[i] = el)}>
                    <div style={{ width: `${matches ? '100%' : '68%'}` }}>
                      <AddOnPlansTitle>{get(items, 'name')}</AddOnPlansTitle>
                      {matches && <AddOnPlansPrice>{get(items, 'price')}</AddOnPlansPrice>}
                      {items.description && <AddOnPlansFeature>{get(item, 'description')}</AddOnPlansFeature>}
                      {map(get(items, 'features'), feature => {
                        return (
                          <AddOnPlansWrapper key={feature}>
                            <AddOnPlansDot>&#x2022;</AddOnPlansDot>
                            <AddOnPlansFeature>{feature}</AddOnPlansFeature>
                          </AddOnPlansWrapper>
                        );
                      })}
                    </div>
                    {!matches && (
                      <div style={{ marginLeft: '32px' }}>
                        <AddOnPlansPrice>{get(items, 'price')}</AddOnPlansPrice>
                        <AddOnPlansButton
                          onClick={() => {
                            onExploreMore();
                          }}>
                          {get(items, 'cta')}
                        </AddOnPlansButton>
                      </div>
                    )}
                  </AddOnContent>
                );
              })}
            </Element>
          );
        })}

        <PartnerShipButtonWrapper style={{ margin: `${matches ? '0 0 3rem 0' : '2rem 0rem'}` }}>
          {!isEqual(campaignName, 'abhi') && (
            <a
              onClick={() => pushEvent(EVENT_NAME.BROCHURE_DOWNLOAD, { page_name: '/plans' })}
              href={
                'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/06cfdd8f-2303-4a77-850a-e51c00551ed2_DIGITALBROCHURE.pdf'
              }
              target="_blank"
              rel="noreferrer">
              <PartnerShipButton>Download Brochure</PartnerShipButton>
            </a>
          )}
        </PartnerShipButtonWrapper>
      </WholeTabWrapper>
    </Container>
  );
};
export function Membership({ individual, couple }) {
  const [activePlan, setActivePlan] = useState('Empower Advanced');
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const router = useRouter();
  const sliderRef = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });
  const { campaign_name } = useSelector(state => state.login);

  const handleTabSelect = index => {
    setSelectedTab(index);
  };

  useEffect(() => {
    if (isEqual(activePlan, 'Empower Advanced')) {
      sliderRef.current?.slickGoTo(1);
      setCarouselIndex(1);
    } else if (isEqual(activePlan, 'Empower Basic')) {
      sliderRef.current?.slickGoTo(0);
      setCarouselIndex(0);
    } else {
      sliderRef.current?.slickGoTo(2);
      setCarouselIndex(2);
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

  const onPlanClick = useCallback((planName, index) => {
    setCarouselIndex(index);
    pushEvent(EVENT_NAME.CLICK_PLAN, {
      plan_name: planName,
    });
  }, []);

  const onExploreMore = useCallback(() => {
    setOpenContactFromModal(true);
  }, []);

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
    setCarouselIndex(router.query?.planIndex);
  }, [router]);

  useEffect(() => {
    //Enable it on use case
    if (!isNil(carouselIndex)) {
      sliderRef.current?.slickGoTo(carouselIndex);
    }
    // sliderRef.current?.slickGoTo(carouselIndex);
  }, [carouselIndex, sliderRef]);

  const SampleNextArrow = useCallback(
    props => {
      const { onClick } = props;
      return (
        <PlanSampleNextArrow id="next_arrow" onClick={onClick}>
          <HomePageImage src={left} width="100%" height="100%" />
        </PlanSampleNextArrow>
      );
    },
    [left]
  );

  const SamplePrevArrow = useCallback(
    props => {
      const { onClick } = props;
      return (
        <PlanSamplePrevArrow id="prev_arrow" onClick={onClick}>
          <HomePageImage src={right} width="100%" height="100%" />
        </PlanSamplePrevArrow>
      );
    },
    [right]
  );

  const setPlanBenefitsData = value => {
    switch (value) {
      case 'Empower Basic':
        return EmpowerBasicBenefits;

      case 'Empower Advanced':
        return EmpowerAdvanceBenefits;

      case 'Empower Premium':
        return EmpowerPremiumBenefits;

      default:
        return [];
    }
  };

  const Switch = useCallback(() => {
    const centerScaled = true;
    return (
      <Container maxWidth="xl" sx={{ padding: { xs: '0', md: '0 5rem' } }}>
        <Container
          maxWidth="xl"
          sx={{ padding: { xs: '0', md: '0 3rem' }, margin: { xs: '3.542rem 0 0 0', md: '4.8rem 0 0 0' } }}>
          <PlanCardContainer
            dataSet={plansForSingle}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText="Request callback"
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
          <BasicBenefitsTitle>{activePlan + ' ' + 'Benefits'}</BasicBenefitsTitle>
          <CarouselContainer
            dots={true}
            dotsColor={'#CCCCCC'}
            slides={{ xs: 2.5, sm: 3, md: 4 }}
            nextArrrow={true}
            prevArrow={true}
            centerMode={{ xs: false, md: false }}
            infinite={{ xs: false, md: true }}
            CustomPrevArrow={SamplePrevArrow}
            CustomNextArrow={SampleNextArrow}>
            {map(setPlanBenefitsData(activePlan), (item, key) => (
              <div key={item?.head}>
                <div
                  style={{
                    padding: '0 12px',
                  }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Image
                      src={get(item, 'image')}
                      alt="Expand less"
                      width={matches ? 220 : 306}
                      height={matches ? 102 : 204}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <BasicBenefitsHeading>{get(item, 'head')}</BasicBenefitsHeading>
                  <BasicBenefitsDesc>{get(item, 'description')}</BasicBenefitsDesc>
                </div>
              </div>
            ))}
          </CarouselContainer>
          {!isEqual(campaign_name, 'abhi') && (
            <PlanButtonWrapper style={{ padding: `${matches ? '5rem' : '10rem'} 0 2rem 0` }}>
              <a
                onClick={() => pushEvent(EVENT_NAME.BROCHURE_DOWNLOAD, { page_name: '/plans' })}
                href={
                  'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/06cfdd8f-2303-4a77-850a-e51c00551ed2_DIGITALBROCHURE.pdf'
                }
                target="_blank"
                rel="noreferrer">
                <PlanButton>Download Brochure</PlanButton>
              </a>
            </PlanButtonWrapper>
          )}
        </Container>
      </Container>
    );
  }, [sliderRef, activePlan, router, plansForSingle, couple, individual, selectedTab, matches]);

  return (
    <>
      <HeaderBar position="relative" backgroundColor="#1a1a1a" disableScroll />
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
        <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
          <Image
            src={matches ? '/static/images/planMobileBanner.webp' : '/static/images/planBanner.webp'}
            fill
            priority
            alt="Cover Image"
            style={{ objectFit: 'cover', zIndex: 0 }}
          />
          <MobileBannerHeading>Choose the Care Your Parents Deserve</MobileBannerHeading>
        </BannerContainer>
      </Relativecard>
      <div style={{ backgroundColor: '#F7F7F7' }}>
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
        <Switch />
      </div>

      <div ref={formRef}>
        <div style={{ padding: '1rem 0 0 0', backgroundColor: '#F7F7F7' }}>
          <AddOnPlans matches={matches} onExploreMore={onExploreMore} campaignName={campaign_name} />
          <FooterPadding>
            <Footer />
          </FooterPadding>
        </div>
      </div>

      {matches && formInView && (
        <PlanRequestCall onClick={onExploreMore}>
          <PlanRequestText>Request Callback</PlanRequestText>
        </PlanRequestCall>
        // <DownloadBrochure onClick={() => onExploreMore()}>
        //   <DownloadBrochureText>Request Callback</DownloadBrochureText>
        // </DownloadBrochure>
        // <DownloadBrochure
        //   onClick={() => pushEvent(EVENT_NAME.BROCHURE_DOWNLOAD, { page_name: '/plans' })}
        //   href={
        //     'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/4da2d024-60c3-499e-8052-06f555903bf4_EmohaMembershipPlansBrochure_2024.pdf'
        //   }
        //   target="_blank"
        //   rel="noreferrer">
        //   <DownloadBrochureText> Download brochure</DownloadBrochureText>
        // </DownloadBrochure>
      )}
      <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} />
      <ContactFormModal
        closeModal={closeContactFormModal}
        openModal={openContactFromModal}
        setOpenModal={setOpenThankYouModal}
        showsFrom="Care Plans"
        activePlan={activePlan}
      />
    </>
  );
}

Membership.propTypes = {
  dispatch: PropTypes.func.isRequired,
  individual: PropTypes.object,
  couple: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  membership: makeSelectMembership(),
  individual: makeSelectIndividual(),
  couple: makeSelectCouple(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Membership);
