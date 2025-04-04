/**
 *
 * BusinessPartner
 *
 */

import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import HeaderBar from 'components/HeaderBar';
import { createStructuredSelector } from 'reselect';
import makeSelectBusinessPartner from './selectors';
import {
  MainBannerContainer,
  BannerContainer,
  BannerSubContainer,
  ButtonContainer,
  CustomFormContainer,
} from './styles';
import { ButtonContainerNew } from '../Home/styles';
import Image from 'utils/CustomImage';
import MuiContainer from '@mui/material/Container';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import { useInView } from 'react-intersection-observer';

import TheEmohaStory from './theEmohaStory';
import ExcitingOpportunity from './excitingOpportunity';
import WhoWeAre from './whoWeAre';
import MediaCoverage from './mediaCoverage';
import { BannerImage, TheEmohaStoryReactangge } from './images';
import BannerImageMobile from '../../../public/static/images/BannerImageMobile.png';
const ContactFormModal = dynamic(() => import('components/ContactFormModal'), { ssr: false });
const ThankYouModal = dynamic(() => import('components/ThankYouModal'), { ssr: false });

import IncredibleGrowth from './incredibleGrowth';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import HowItsWorks from './howItsWorks';
import useMediaQuery from '@mui/material/useMediaQuery';

import faqData from './faqData';

import RightPartnershipEmoha from './rightPartnershipEmoha';
import { useRouter } from 'next/router';
import { ourBusinessPartner, media_coverage } from './constantData';
import map from 'lodash/map';
import left from '../../../public/static/images/left.svg';
import right from '../../../public/static/images/right.svg';
import HomePageImage from 'components/HomePageImage';
import Grid from '@mui/material/Grid';
import StepsToStartElderCare from 'components/StepsToStartElderCare';
import HomePageBox from 'components/HomePageBox';

import { ConnectWithUs, ConnectText } from 'containers/LandingPage/LandingPageScreen/styles';
import { makeSelectContactToEmoha } from 'containers/Home/selectors';

const Faq = dynamic(() => import('components/Faq'));
const Footer = dynamic(() => import('./Footer'));
const CarouselContainer = dynamic(() => import('components/CarouselContainer'), { ssr: false });
const HearFromOurMembers = dynamic(() => import('components/HearFromOurMembers'), { ssr: false });
const CustomContactForm = dynamic(() => import('components/CustomContactForm'), { ssr: false });

export function BusinessPartner({ contactFormLoader }) {
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [leadSubSource, setLeadSubSource] = useState('');
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });

  const connectWithUs = buttonName => {
    setOpenContactFromModal(true);
    setLeadSubSource(buttonName);
  };

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  const { ref: footerSectionRef, inView: footerSectionInView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '1px',
  });

  const SamplePrevArrow = useCallback(props => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: 'absolute',
          left: ' -5rem',
          top: '43%',
        }}
        id="next_arrow"
        onClick={onClick}>
        <HomePageImage src={left} width="100%" height="100%" />
      </button>
    );
  }, []);

  const SampleNextArrow = useCallback(props => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: 'absolute',
          right: '-42px',
          top: '45%',
          width: '29px',
        }}
        onClick={onClick}>
        <HomePageImage src={right} width="100%" height="100%" />
      </button>
    );
  }, []);

  const handleClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Emoha Franchise Partnership: Join Our Franchise Network</title>
        <meta
          name="description"
          content={`Explore Emoha's franchise Partnership opportunities. Join our franchise network
          and contribute to redefining senior care with innovative and compassionate services`}
        />
        <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
      </Head>
      <HeaderBar
        scrollingY={false}
        position="fixed"
        top="0px"
        textColor="white"
        backgroundColor="#1a1a1a"
        changesFromCorporate={'+91-8048811604'}
        setOpenContactFromModal={setOpenContactFromModal}
        isFromEnquire={true}
      />
      <MainBannerContainer>
        <BannerContainer style={{ position: 'relative' }}>
          <Image
            src={matches ? BannerImageMobile : BannerImage}
            fill
            priority
            quality={100}
            style={{ objectFit: 'cover' }}
          />
          <MuiContainer
            ref={formRef}
            sx={{
              height: { xs: '100%' },
              display: { xs: 'flex', md: 'flex' },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: { xs: 'flex-start', md: 'center' },
              paddingBottom: { xs: 5, sm: 0 },
            }}>
            <BannerSubContainer>
              <HomePageText
                variant={'h1'}
                color={{ xs: '#fff', md: '#fff' }}
                fontSize={{ xs: '3.2rem', md: 'max(3.6rem,min(5vw,4.8rem))' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                margin={{ xs: '0 0 0 0', md: '0 0 1rem 0' }}
                fontWeight={{ xs: '600', md: '600' }}
                position={{ xs: 'relative', md: 'relative' }}
                width={{ xs: '30.5rem', md: '55rem' }}
                lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}
                alignItems={{ xs: 'center', md: 'center' }}>
                Make a difference - Become a Franchise Partner with Emoha
                <HomePageText
                  width={{ xs: '27.5rem', md: '55rem' }}
                  variant={'h2'}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem', md: '2rem' }}
                  letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
                  lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
                  textAlign={{ md: 'left' }}
                  margin={{ xs: '0 0 0rem 0', md: '0 0 2rem 0' }}
                  position={{ xs: 'relative', md: 'relative' }}
                  color={{ xs: '#fff', md: '#fff' }}
                  fontWeight={{ xs: '400', md: '400' }}>
                  Join India’s most trusted elder care brand with a minimum investment and make an impact on the lives
                  of millions.
                </HomePageText>
              </HomePageText>
            </BannerSubContainer>
            {!matches && (
              <CustomFormContainer>
                <CustomContactForm
                  setOpenModal={setOpenThankYouModal}
                  showsFrom="Connect with us"
                  contactFormLoader={contactFormLoader}
                  isFromEnquire={true}
                  customUtm={{
                    utm_medium: 'Other',
                    utm_source: 'Organic',
                    utm_campaign: 'Franchise_Partner_Lead_Gen',
                  }}
                  leadsFrom={router.asPath}
                  leadsObj={{
                    lead_source_category: 'Organic',
                    lead_source: 'Website',
                    lead_sub_source1: 'Banner',
                  }}
                  DID="+91 8048811604"
                />
              </CustomFormContainer>
            )}
          </MuiContainer>
        </BannerContainer>
        {matches && (
          <CustomFormContainer>
            <CustomContactForm
              setOpenModal={setOpenThankYouModal}
              showsFrom="Connect with us"
              contactFormLoader={contactFormLoader}
              isFromEnquire={true}
              customUtm={{
                utm_medium: 'Other',
                utm_source: 'Organic',
                utm_campaign: 'Franchise_Partner_Lead_Gen',
              }}
              leadsFrom={router.asPath}
              leadsObj={{
                lead_source_category: 'Organic',
                lead_source: 'Website',
                lead_sub_source1: 'Banner',
              }}
              DID="+91 8048811604"
            />
          </CustomFormContainer>
        )}
        <div style={{ backgroundColor: '#F8F8F8' }}>
          <MuiContainer>
            <ExcitingOpportunity />
            <TheEmohaStory imageSource={TheEmohaStoryReactangge} />
            <WhoWeAre />
          </MuiContainer>
        </div>

        <div style={{ backgroundColor: 'white' }}>
          <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid size xs={11} lg={11}>
              <RightPartnershipEmoha />
            </Grid>
          </Grid>
        </div>
      </MainBannerContainer>
      <StepsToStartElderCare />

      <Grid
        container
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        sx={{
          padding: { xs: '5rem 0rem', md: '2rem 0rem' },
        }}>
        <HomePageBox padding={{ sm: '4rem 0rem', md: '4rem 0rem' }}>
          <HomePageText
            textAlign="center"
            padding={{ xs: '0 0 3rem 0rem', sm: '0 0 3rem 0rem', md: '0 0 3rem 0rem' }}
            fontSize={{ xs: '2.4rem', sm: '2.4rem', md: '4.0rem' }}
            fontWeight={{ xs: '600', sm: '600', md: '600' }}>
            What Our Franchise Partners Say About Us
          </HomePageText>
        </HomePageBox>
        <Grid size sm={8} xs={8}>
          <CarouselContainer
            // sliderRef={refer}
            dotsInMobile={true}
            centerPadding="8%"
            ArrrowInMobile={false}
            slides={{ xs: 1, sm: 1, md: 2 }}
            CustomNextArrow={SamplePrevArrow}
            CustomPrevArrow={SampleNextArrow}>
            {map(ourBusinessPartner, (item, key) => (
              <HearFromOurMembers isFromBP={true} data={item} key={key} />
            ))}
          </CarouselContainer>
        </Grid>
      </Grid>
      <MediaCoverage media_coverage={media_coverage} />
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
          <Faq data={faqData} />
        </Container>
      </ButtonContainerNew>
      <div
        style={{
          marginTop: matches ? '4rem' : '0rem',
        }}
        ref={footerSectionRef}>
        {footerSectionInView && (
          <Footer
            businessPartnerChanges
            customUtm={{
              utm_medium: 'Other',
              utm_source: 'Organic',
              utm_campaign: 'Franchise_Partner_Lead_Gen',
            }}
            leadsFrom={router.asPath}
            leadsObj={{
              lead_source_category: 'Organic',
              lead_source: 'Website',
              lead_sub_source1: 'Footer',
            }}
            DID="+91 8048811604"
            doYouKnow="Would you like to invest 5 lakhs in a purposeful business opportunity?"
            officeSpace="Do you have an office space that is at least 200 square feet in size?"
            bpEmail="franchise.partnerships@emoha.in"
            isFromEnquire={true}
          />
        )}
      </div>

      {openThankYouModal && (
        <ThankYouModal DID="+91 8048811604" closeModal={closeThankYouModal} openModal={openThankYouModal} />
      )}
      {openContactFromModal && (
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          businessPartnerChanges
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Organic',
            utm_campaign: 'Franchise_Partner_Lead_Gen',
          }}
          leadsFrom={router.asPath}
          leadsObj={{
            lead_source_category: 'Organic',
            lead_source: 'Website',
            lead_sub_source1: leadSubSource,
          }}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
          DID="+91 8048811604"
          isFromBp={true}
          contactFormLoader={contactFormLoader}
          isFromEnquire={true}
        />
      )}

      {matches && !formInView && (
        <ConnectWithUs onClick={handleClick}>
          <ConnectText>Enquire Now</ConnectText>
        </ConnectWithUs>
      )}
    </>
  );
}

BusinessPartner.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contactFormLoader: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  businessPartner: makeSelectBusinessPartner(),
  contactFormLoader: makeSelectContactToEmoha(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(BusinessPartner);
