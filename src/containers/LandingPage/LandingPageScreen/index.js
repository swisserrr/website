/**
 *
 * LandingScreen
 *
 */

import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { ConnectText, ConnectWithUs, FooterPadding, FormContainer, Mainsection } from './styles';

import { makeSelectLandingDetail } from './selectors';
import HeaderBar from 'components/HeaderBar';
import Head from 'next/head';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import replace from 'lodash/replace';
import split from 'lodash/split';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import HomePageText from 'components/HomePageText';
import useMediaQuery from '@mui/material/useMediaQuery';

import Grid from '@mui/material/Grid';
import theme from 'utils/theme';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import HomePageBox from 'components/HomePageBox';
import TextFadingAnimation from 'components/TextFadingAnimation';
import CustomCard from 'components/CustomCard';
import CustomForm from 'components/ContactForm';

const Footer = dynamic(() => import('components/Footer'));
const Differentiator = dynamic(() => import('./differentiatorSection'));
const WhyChooseUs = dynamic(() => import('./whyChooseUs'));
const Media = dynamic(() => import('./media'));
const HearFromOurMembers = dynamic(() => import('./hearFromOurMembers'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const WhoWeAre = dynamic(() => import('./whoWeAre'));
const CarePlan = dynamic(() => import('./carePlans'));
const CareBanner = dynamic(() => import('./careBanner'));

export function LandingScreen({ data }) {
  const matches = useMediaQuery('(max-width:600px)');
  const matchesMd = useMediaQuery('(max-width:1000px)');
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);
  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const urlResolver = useCallback(url => replace(replace(url, '(', '%28'), ')', '%29'), []);

  const PageOrderingFunction = useCallback(() => {
    return map(get(data, 'page_ordering', []), val => {
      if (isEqual(val?.page_section, 'differentiator_section')) {
        return <Differentiator data={get(data, 'differentiator_section')} />;
      } else if (isEqual(val?.page_section, 'who_we_are')) {
        return <WhoWeAre data={get(data, 'who_we_are')} />;
      } else if (isEqual(val?.page_section, 'real_life_situation')) {
        return <CareBanner careData={get(data, 'real_life_situation')} />;
      } else if (isEqual(val?.page_section, 'our_offering')) {
        return <CarePlan careData={get(data, 'our_offering')} />;
      } else if (isEqual(val?.page_section, 'testimonial')) {
        return <HearFromOurMembers data={get(data, 'testimonial')} />;
      } else if (isEqual(val?.page_section, 'why_choose_us')) {
        return <WhyChooseUs data={get(data, 'why_choose_us')} />;
      } else if (isEqual(val?.page_section, 'media')) {
        return <Media data={get(data, 'media')} />;
      }
    });
  }, [data]);

  return (
    <>
      <Head>
        <title>{get(data, 'meta_title', '')}</title>
        <meta name="description" content={get(data, 'meta_description', '')} />
      </Head>
      <HeaderBar
        textColor="white"
        backgroundColor="#1a1a1a"
        position="relative"
        changesFromCorporate={'1800-203-5135'}
      />

      <Mainsection
        url={!matches ? urlResolver(get(data, 'banner_image_desktop')) : urlResolver(get(data, 'banner_image_image'))}
        ref={formRef}>
        <HomePageBox height={{ xs: 'auto', md: '650px' }} zIndex={{ xs: 1, md: 1 }}>
          <FormContainer>
            <MuiContainer sx={{ padding: { xs: '10px 38px 10px 38px' } }}>
              <Grid
                container
                sx={{
                  paddingTop: matchesMd ? 0 : 4,
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <Grid
                  item
                  xs={12}
                  md={8}
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    padding: 10,
                    flexDirection: 'column',
                  }}>
                  <HomePageText
                    variant={'h1'}
                    color={{ xs: '#fff', md: '#fff' }}
                    fontSize={{ xs: '4.8rem', md: '6.8rem' }}
                    lineHeight={{ xs: '4.8rem', md: '6.0rem' }}
                    width={{ xs: 'auto', md: 'auto' }}
                    padding={{ xs: '1rem 0 0 0', md: '0' }}
                    letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                    fontWeight={{ xs: '600', md: '600' }}>
                    <p>{get(data, 'page_title.title')}</p>
                  </HomePageText>
                  <section id="form" style={{ overflow: 'hidden' }}>
                    <TextFadingAnimation data={get(data, 'page_title.data')} />
                  </section>
                  <HomePageText
                    width={{ xs: '80%', md: '440px' }}
                    variant={'h2'}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    fontSize={{ xs: '2.1rem', md: '3.6rem' }}
                    lineHeight={{ xs: '2.5rem', md: '4.3rem' }}
                    textAlign={{ md: 'left' }}
                    margin={{ xs: '1rem 0 1.5rem 0', md: '2rem 0 0 0' }}
                    color={{ xs: '#fff', md: '#fff' }}
                    fontWeight={{ xs: '400', md: '400' }}>
                    {get(data, 'page_title.description')}
                  </HomePageText>
                </Grid>

                <Grid
                  xs={12}
                  md={4}
                  item
                  sx={{
                    justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
                    alignItems: { xs: 'center', md: 'center' },
                    margin: { xs: '0 0 30px 0', md: '0 0 0px 0' },
                  }}>
                  <CustomForm
                    leadsFrom={split(router.asPath, '/')[2]}
                    closeModal={closeContactFormModal}
                    openModal={openContactFromModal}
                    setOpenModal={setOpenThankYouModal}
                    showsFrom="Connect with us"
                  />
                </Grid>
              </Grid>
            </MuiContainer>
          </FormContainer>
        </HomePageBox>
      </Mainsection>

      {get(data, 'rtb_section.is_visible') && (
        <MuiContainer ref={ref} maxWidth="lg" sx={{ padding: { xs: '0' }, height: { md: 190, xs: 180 } }}>
          <Grid
            backgroundColor={{ xs: theme.palette.cream.second, md: theme.palette.cream.second }}
            sx={{
              borderRadius: { xs: '0', md: '170px' },
              zIndex: 1,
              position: { xs: 'static', md: 'relative' },
              top: -90,
              height: 'auto',
              padding: { xs: '10px 40px' },
            }}
            container>
            {map(get(data, 'rtb_section.data'), (item, index) => (
              <Grid size xs={6} key={index} sm={6} md={3} lg={3} xl={3}>
                <CustomCard
                  inView={inView}
                  titleColor="#CC4746"
                  descColor="#1a1a1a"
                  max={get(item, 'title')}
                  index={index}
                  isAnimation={get(item, 'is_animation')}
                  desc={get(item, 'description')}
                  startingNumber={get(item, 'startingNumber')}
                />
              </Grid>
            ))}
          </Grid>
        </MuiContainer>
      )}

      {PageOrderingFunction()}

      {matches && !formInView && (
        <ConnectWithUs href="#form">
          <ConnectText>Connect with us</ConnectText>
        </ConnectWithUs>
      )}

      <FooterPadding>
        <Footer
          hideAboutSection={true}
          disableMargin={true}
          changeQuesTopConcern={true}
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Google Ads',
            utm_campaign: 'Google campaign',
          }}
          leadsFrom={split(router.asPath, '/')[2]}
          leadsObj={{
            lead_source_category: 'Paid',
            lead_source: 'Google Ads',
            lead_sub_source1: split(router.asPath, '/')[1],
          }}
        />
      </FooterPadding>
      {openThankYouModal && (
        <ThankYouModal greetingToggle closeModal={closeThankYouModal} openModal={openThankYouModal} />
      )}
    </>
  );
}

LandingScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.obj,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectLandingDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LandingScreen);
