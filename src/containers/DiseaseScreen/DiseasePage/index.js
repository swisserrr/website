/**
 *
 * DiseaseScreen
 *
 */

import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
  AboutSection,
  BannerContainer,
  BannerSubContainer,
  ButtonContainer,
  MainBannerContainer,
  SectionContainer,
  Separator,
} from './styles';
import AboutUs from './aboutUs';
import { makeSelectDiseaseDetail } from '../DiseaseListing/selectors';
import Image from 'utils/CustomImage';
import Head from 'next/head';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import split from 'lodash/split';

import useMediaQuery from '@mui/material/useMediaQuery';
import { singleFaqConverter } from './faqHelperUtil';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HeaderBar from 'components/HeaderBar';
import HomePageButton from 'components/HomePageButton';
import HomePageText from 'components/HomePageText';

const Footer = dynamic(() => import('components/Footer'));
const Faq = dynamic(() => import('components/Faq'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
const CareBanner = dynamic(() => import('./careBanner'));
const CausesSymptoms = dynamic(() => import('./causeSyptoms'));
const CarePlan = dynamic(() => import('./carePlans'));
const ExpertMember = dynamic(() => import('./expertMember'));
const Resources = dynamic(() => import('./resources'));
const BlogsMohtv = dynamic(() => import('./blogsMohtv'));

export function DiseaseScreen({ data, isFromAwpo }) {
  const matches = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [leadSubSource, setLeadSubSource] = useState('');

  const connectWithUs = buttonName => {
    setOpenContactFromModal(true);
    setLeadSubSource(buttonName);
  };
  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);
  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const handleConnectWithUsForm = () => {
    if (isFromAwpo) {
      return (
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          businessPartnerChanges
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Website',
            utm_campaign: 'AWPO',
          }}
          leadsFrom={router.asPath}
          leadsObj={{
            lead_source_category: 'Organic',
            lead_source: 'Website',
            lead_sub_source1: leadSubSource,
          }}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
          DID="+91-8044633214"
        />
      );
    }

    return (
      <ContactFormModal
        closeModal={closeContactFormModal}
        openModal={openContactFromModal}
        setOpenModal={setOpenThankYouModal}
        showsFrom="Connect with us"
        customUtm={{
          utm_medium: 'Other',
          utm_source: 'Website',
          utm_campaign: 'Disease Care',
        }}
        leadsFrom={split(router.asPath, '/')[2]}
        leadsObj={{
          lead_source_category: 'Organic',
          lead_source: 'Website',
          lead_sub_source1: leadSubSource,
        }}
      />
    );
  };

  const handleFooterForm = () => {
    if (isFromAwpo) {
      return (
        <Footer
          businessPartnerChanges
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Website',
            utm_campaign: 'AWPO',
          }}
          leadsFrom={router.asPath}
          leadsObj={{
            lead_source_category: 'Organic',
            lead_source: 'Website',
            lead_sub_source1: 'Footer',
          }}
          DID="+91-8044633214"
        />
      );
    }
    return (
      <Footer
        disableMargin
        customUtm={{
          utm_medium: 'Other',
          utm_source: 'Website',
          utm_campaign: 'Disease Care',
        }}
        leadsFrom={split(router.asPath, '/')[2]}
        leadsObj={{
          lead_source_category: 'Organic',
          lead_source: 'Website',
          lead_sub_source1: 'Footer',
        }}
      />
    );
  };
  return (
    <>
      <Head>
        <title>{get(data, 'meta_title', '')}</title>
        <meta name="description" content={get(data, 'meta_description', '')} />
      </Head>
      <HeaderBar textColor="white" backgroundColor="#1a1a1a" />
      <MainBannerContainer>
        <BannerContainer style={{ position: 'relative' }}>
          <Image
            src={matches ? get(data, 'banner_mobile', '') : get(data, 'banner_desktop', '')}
            fill
            priority
            quality={100}
            style={{ objectFit: 'cover' }}
          />
          <MuiContainer
            sx={{
              height: { xs: '100%' },
              display: { xs: 'flex' },
              alignItems: { xs: 'flex-end', md: 'center' },
              justifyContent: { xs: 'flex-start', md: 'flex-start' },
              paddingBottom: { xs: 5, sm: 0 },
            }}>
            <BannerSubContainer>
              <HomePageText
                variant={'h1'}
                color={{ xs: '#fff', md: '#fff' }}
                fontSize={{ xs: '3.6rem', md: 'max(3.6rem,min(5vw,6.4rem))' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                margin={{ xs: '0 0 10px 0', md: '0 0 1rem 0' }}
                fontWeight={{ xs: '600', md: '600' }}
                position={{ xs: 'relative', md: 'relative' }}
                width={{ xs: '30.5rem', md: '55rem' }}
                lineHeight={{ xs: '4rem', md: 'max(4rem,min(5vw,7rem))' }}>
                {get(data, 'title', '')}
              </HomePageText>
              <HomePageText
                width={{ xs: '80%', md: '60%' }}
                variant={'h2'}
                className="truncate-3"
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.7rem', md: '3.2rem' }}
                letterSpacing={{ xs: '-0.8rem', md: '-1.28' }}
                lineHeight={{ xs: 'normal', md: 'normal' }}
                textAlign={{ md: 'left' }}
                margin={{ xs: '0 0 3rem 0', md: '0 0 2rem 0' }}
                position={{ xs: 'relative', md: 'relative' }}
                color={{ xs: '#fff', md: '#fff' }}
                fontWeight={{ xs: '400', md: '400' }}>
                {get(data, 'description', '')}
              </HomePageText>
              <ButtonContainer>
                <HomePageButton
                  hover={{ opacity: '1' }}
                  boxShadow="none"
                  onClick={() => connectWithUs('Connect with us')}
                  letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                  lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                  padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                  borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                  fontWeight={{ xs: 500, md: 500 }}>
                  Connect with us
                </HomePageButton>
              </ButtonContainer>
            </BannerSubContainer>
          </MuiContainer>
        </BannerContainer>

        <div style={{ backgroundColor: '#F8F8F8' }}>
          <MuiContainer>
            <AboutUs data={get(data, 'about')} />
            <Separator />
            <CausesSymptoms causesData={get(data, 'causes')} symptomsData={get(data, 'symptoms')} />
          </MuiContainer>
        </div>

        <div>
          <MuiContainer>
            <CareBanner
              careData={get(data, 'care')}
              bannerData={get(data, 'second_banner')}
              openModal={() => connectWithUs('Second banner')}
            />
          </MuiContainer>
        </div>

        <CarePlan careData={get(data, 'customized_care_plan')} openModal={() => connectWithUs('Request callback')} />

        <div>
          <ExpertMember
            expertData={get(data, 'expert_list')}
            memberData={get(data, 'ratings')}
            openModal={() => connectWithUs('Get 5 min consultation call')}
          />
        </div>

        <SectionContainer>
          <MuiContainer sx={{ padding: { xs: 0 } }}>
            <BlogsMohtv
              blogs={get(data, 'blogs')}
              blogsTileData={get(data, 'blogsFinalData')}
              mohtv={get(data, 'mohtv_shows')}
            />
          </MuiContainer>
        </SectionContainer>

        <section id="faq">
          <AboutSection>
            <MuiContainer maxWidth="lg" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <HomePageText
                fontSize={{ xs: '1.5rem', md: '2.2rem' }}
                fontWeight={{ xs: '400', md: '400' }}
                textAlign="center"
                letterSpacing={{ xs: '0.2em !important', md: '0.2em !important' }}
                lineHeight={{ xs: '3.4rem', md: '2.2rem' }}>
                NEED MORE INFO
              </HomePageText>
              <HomePageText
                fontSize={{ xs: '2.4rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                textAlign="center"
                variant={'h2'}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}
                lineHeight={{ xs: '2.2rem', md: '3.6rem' }}>
                We Got Answers To Your Questions
              </HomePageText>
              <Faq data={singleFaqConverter(get(data, 'faqs'))} singlePanel />
            </MuiContainer>
          </AboutSection>
        </section>

        <SectionContainer>
          <MuiContainer sx={{ padding: { xs: 0 } }}>{<Resources data={get(data, 'resources')} />}</MuiContainer>
        </SectionContainer>
      </MainBannerContainer>
      {handleFooterForm()}

      {openThankYouModal && (
        <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} phoneNumber="+91-8044633214" />
      )}
      {openContactFromModal && handleConnectWithUsForm()}
    </>
  );
}

DiseaseScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.obj,
  isFromAwpo: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectDiseaseDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DiseaseScreen);
