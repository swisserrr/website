/* eslint-disable max-len */
/**
 *
 * Membership
 *
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'utils/CustomImage';
import styled from '@emotion/styled';
import s from 'csd';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStructuredSelector } from 'reselect';
import makeSelectMembership from './selectors';
import {
  HeadingContainer,
  SubHeading,
  PlanBenefitContainer,
  Relativecard,
  BannerContainer,
  BannerHeading,
  MobileBannerHeading,
  ImageContainer,
  StyledTabIndicator,
  StyledTab,
  StyledTabs,
  StyledOuterSliders,
  StyledSliders,
  CustomButton,
  PlanContainer,
} from './styles';
import { plansForSingle, plansForCouple } from '../Home/constantValues';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import size from 'lodash/size';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeSelectPlans } from './selectors';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import Container from '@mui/material/Container';

import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const PlanCardContainer = dynamic(() => import('components/PlanCardContainer'));
const PlansContainer = dynamic(() => import('components/PlansContainer'));
const Footer = dynamic(() => import('components/Footer'));
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));

export function Membership({ data }) {
  const [activePlan, setActivePlan] = useState('Empower plan');
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const router = useRouter();
  const sliderRef = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');
  const [focusedIdx, setFocusedIdx] = useState(0);

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

  const onPlanClick = useCallback(planName => {
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
  }, [router]);

  useEffect(() => {
    if (!isNil(router.query?.planIndex)) {
      sliderRef.current?.slickGoTo(router.query?.planIndex);
    } else {
      sliderRef.current?.slickGoTo(1);
    }
  }, [router.query?.planIndex]);

  // const Tab = ({ title, onClick, isFocused, children }) => {
  //   return (
  //     <StyledTab onClick={onClick} isFocused={isFocused}>
  //       <CustomButton isFocused={isFocused} focusedIdx={focusedIdx} duration={300} tabCount={size(children)}>
  //         <HomePageBox
  //           alignItems="center"
  //           justifyContent="center"
  //           fontWeight={{ xs: '400', md: '400' }}
  //           lineHeight={{ xs: '1.573rem', md: '1.815rem' }}
  //           display="flex">
  //           <ImageContainer style={{ width: '15px', height: '15px', position: 'relative' }}>
  //             <Image src={'/static/images/singlePerson.png'} fill style={{ objectFit: 'cover' }} />
  //           </ImageContainer>
  //           <HomePageText
  //             color={{ xs: 'none', md: 'none' }}
  //             fontSize={{ xs: '1.1rem', md: '1.5rem' }}
  //             lineHeight={{ xs: '1.6rem', md: '1.8rem' }}
  //             padding={{ xs: '0rem 0rem 0rem 0.3rem', md: '0rem 0rem 0rem 0.5rem' }}>
  //             {title}
  //           </HomePageText>
  //         </HomePageBox>
  //       </CustomButton>
  //     </StyledTab>
  //   );
  // };

  // const Tabs = ({ focusedIdx, children, onChange, duration }) => {
  //   return (
  //     <StyledTabs>
  //       {React.Children.map(children, (child, i) =>
  //         React.cloneElement(child, {
  //           key: i,
  //           isFocused: focusedIdx === i,
  //           onClick: e => {
  //             onChange(i);
  //           },
  //         })
  //       )}
  //       {/* <StyledTabIndicator duration={duration} tabCount={size(children)} offset={`${100 * focusedIdx}%`} /> */}
  //     </StyledTabs>
  //   );
  // };

  // const Sliders = ({ focusedIdx, children, duration = 300 }) => {
  //   const offset = -100 * focusedIdx;

  //   return (
  //     <StyledOuterSliders>
  //       <StyledSliders offset={offset} duration={duration}>
  //         {children}
  //       </StyledSliders>
  //     </StyledOuterSliders>
  //   );
  // };

  const StyledTabIndicator = styled.div`
    position: absolute;
    width: ${props => 100 / props.tabCount}%;
    top: 100%;
    left: 0;

    transform: translate(${props => props.offset}, -100%);

    transition: transform ${props => props.duration}ms;

    border-top-style: solid;
    border-top-width: 1px;
  `;

  const StyledTab = styled.li`
    flex: 1;
    height: 100%;

    button {
      cursor: pointer;
      transition: color 0.3s;
      color: ${props => (props.isFocused ? '#000' : '#777')};
      border: none;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0);
    }
  `;

  const Tab = ({ title, onClick, isFocused }) => {
    return (
      <StyledTab onClick={onClick} isFocused={isFocused}>
        <CustomButton isFocused={isFocused} focusedIdx={focusedIdx} duration={300}>
          <HomePageBox
            alignItems="center"
            justifyContent="center"
            fontWeight={{ xs: '400', md: '400' }}
            lineHeight={{ xs: '1.573rem', md: '1.815rem' }}
            display="flex">
            <ImageContainer style={{ width: '15px', height: '15px', position: 'relative' }}>
              <Image src={'/static/images/singlePerson.png'} fill style={{ objectFit: 'cover' }} />
            </ImageContainer>
            <HomePageText
              color={{ xs: 'none', md: 'none' }}
              fontSize={{ xs: '1.1rem', md: '1.5rem' }}
              lineHeight={{ xs: '1.6rem', md: '1.8rem' }}
              padding={{
                xs: '0rem 0rem 0rem 0.3rem',
                md: '0rem 0rem 0rem 0.5rem',
              }}>
              {title}
            </HomePageText>
          </HomePageBox>
        </CustomButton>
      </StyledTab>
    );
  };

  const StyledTabs = styled.div`
    position: relative;
    list-style: none;
    height: 30px;
    ${s.row}
  `;

  const Tabs = ({ focusedIdx, children, onChange, duration = 300 }) => {
    return (
      <StyledTabs>
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child, {
            key: i,
            isFocused: focusedIdx === i,
            onClick: e => {
              onChange(i);
            },
          })
        )}
        <StyledTabIndicator duration={duration} tabCount={children.length} offset={`${100 * focusedIdx}%`} />
      </StyledTabs>
    );
  };

  const StyledOuterSliders = styled.div`
    overflow: hidden;
  `;

  const StyledSliders = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 100%;

    transform: translateX(${props => `${props.offset}%`});
    transition: transform ${props => props.duration}ms;

    div {
      flex-shrink: 0;
      width: 100%;
    }
  `;

  const Sliders = ({ focusedIdx, children, duration = 300 }) => {
    const offset = -100 * focusedIdx;

    return (
      <StyledOuterSliders>
        <StyledSliders offset={offset} duration={duration}>
          {children}
        </StyledSliders>
      </StyledOuterSliders>
    );
  };

  const Pane1 = () => {
    return (
      <>
        <Container
          maxWidth="lg"
          sx={{ padding: { xs: '0', md: '0 3rem' }, margin: { xs: '9.5rem 0 0 0', md: '14.1rem 0 0 0' } }}>
          <PlanCardContainer
            dataSet={plansForSingle}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText="Request callback"
            cardFrom="membership"
            planIndex={router.query?.planIndex}
            sliderRef={sliderRef}
            planFor="person"
          />
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            zIndex: 1,
            padding: { xs: '0rem 2rem' },
          }}>
          <PlanBenefitContainer>
            <PlansContainer data={data} activePlan={activePlan} from=" Benefits for Individuals" />
          </PlanBenefitContainer>
        </Container>
      </>
    );
  };

  const Pane2 = () => {
    return (
      <>
        <Container
          maxWidth="lg"
          sx={{ padding: { xs: '0', md: '0 3rem' }, margin: { xs: '9.5rem 0 0 0', md: '14.1rem 0 0 0' } }}>
          <PlanCardContainer
            dataSet={plansForCouple}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText="Request callback"
            cardFrom="membership"
            planIndex={router.query?.planIndex}
            sliderRef={sliderRef}
            planFor="couple"
          />
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            zIndex: 1,
            padding: { xs: '0rem 2rem' },
          }}>
          <PlanBenefitContainer>
            <PlansContainer data={data} activePlan={activePlan} from=" Benefits for Couples" />
          </PlanBenefitContainer>
        </Container>
      </>
    );
  };

  const Switch = () => {
    return (
      <Container>
        <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
          <Tab title="For Individuals" />
          <Tab title="For Couples" />
        </Tabs>
        <Sliders focusedIdx={focusedIdx}>
          <Pane1 />
          <Pane2 />
        </Sliders>
        {/* <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>

        </Tabs>
        <Sliders focusedIdx={focusedIdx}>
          <Pane1 />
          <Pane2 />
        </Sliders> */}
      </Container>
    );
  };

  return (
    <>
      <HeaderBar />
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
        {/* <Container maxWidth="lg" sx={{ padding: { xs: '0', md: '0 3rem' } }}>
          <PlanCardContainer
            dataSet={plans}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText="Request callback"
            cardFrom="membership"
            planIndex={router.query?.planIndex}
            sliderRef={sliderRef}
          />
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            zIndex: 1,
            padding: { xs: '0rem 2rem' },
          }}>
          <PlanBenefitContainer>
            <PlansContainer data={data} activePlan={activePlan} />
          </PlanBenefitContainer>
        </Container> */}
      </div>
      <Footer />
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
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  membership: makeSelectMembership(),
  data: makeSelectPlans(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Membership);
