/**
 *
 * VasScreen
 *
 */

import React, { memo, useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  ConnectText,
  ConnectWithUs,
  FooterPadding,
  FormContainer,
  Mainsection,
  RedBoxes,
  RightSection,
  PlanTitle,
  PlanDescription,
} from './styles';
import Container from '@mui/material/Container';
import { makeSelectVasDetail } from './selectors';
import HeaderBar from 'components/HeaderBar';
import Head from 'next/head';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import replace from 'lodash/replace';
import includes from 'lodash/includes';
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
import { createApolloLeadAction } from './actions';
import { isEmpty, isNil } from 'lodash';
import PlanCardContainer from 'components/PlanCardContainer';
import { ApolloPlans } from './constantValues';
import { pushEvent, utmDataHandler } from '../../../utils/cleverTap';
import { EVENT_NAME } from '../../../constants/constants';

const Footer = dynamic(() => import('components/Footer'));
const Differentiator = dynamic(() => import('./differentiatorSection'));
const WhyChooseUs = dynamic(() => import('./whyChooseUs'));
const Media = dynamic(() => import('./media'));
const HearFromOurMembers = dynamic(() => import('./hearFromOurMembers'));
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const WhoWeAre = dynamic(() => import('./whoWeAre'));
const CarePlan = dynamic(() => import('./carePlans'));
const CareBanner = dynamic(() => import('./careBanner'));
export function VasScreen({ data, createApolloLead }) {
  const matches = useMediaQuery('(max-width:600px)');
  const matchesMd = useMediaQuery('(max-width:1000px)');
  const router = useRouter();
  const sliderRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0 });
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [leadPhoneNumber, setLeadPhoneNumber] = useState('');
  const [leadfullName, setLeadfullName] = useState('');
  const [activePlan, setActivePlan] = useState('Apollo Individual Plan');
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  useEffect(() => {
    if (includes(router.asPath, 'Apollo-Onboarding')) {
      const utm_campaign = get(router, 'query.utm_campaign', '');
      const userData = utm_campaign.split('_');
      const utm_campaign_name = userData.shift();
      const leadPhoneNumberNew = userData.pop();
      const setLeadfullNameNew = userData.join(' ');

      const leadOb = {
        name: setLeadfullNameNew,
        phoneNumber: leadPhoneNumberNew,
        utm_campaign_name,
      };

      if (!isEmpty(utm_campaign)) {
        createApolloLead(leadOb);
      }
      setLeadPhoneNumber(leadPhoneNumberNew);

      setLeadfullName(setLeadfullNameNew);
    }
  }, []);

  useEffect(() => {
    if (!isNil(carouselIndex)) {
      sliderRef.current?.slickGoTo(carouselIndex);
    } else {
      sliderRef.current?.slickGoTo(1);
    }
  }, [carouselIndex, sliderRef]);

  useEffect(() => {
    if (router?.query?.activePlan) {
      setActivePlan(router?.query?.activePlan);
    }

    if (includes(router?.asPath, 'Apollo-Onboarding')) {
      pushEvent(EVENT_NAME.PAGE_VIEWED, {
        ...{ source_url: isEqual(router?.asPath, '/') ? '/Home' : router?.asPath },
        ...utmDataHandler(router?.query),
      });

      // const utm_campaign = get(router, 'query.utm_campaign', '');

      // if (!isEmpty(utm_campaign)) {
      //   const userData = utm_campaign.split('_');
      //   // const utm_campaign_name = userData.shift();
      //   // const leadPhoneNumberNew = userData.pop();
      //   // const setLeadfullNameNew = userData.join(' ');

      //   const leadObj = {
      //     Name: `${userData[1]} ${userData[2]}`,
      //     Phone: userData[3],
      //     utm_campaign_name: userData[0],
      //   };
      //   console.log('++++++CT++++', window.clevertap.getCleverTapID());
      //   if (!isNil(userData[3])) {
      //     console.log('+++++++++++++++++++++++++++++++++', userData[3]);

      //     onUserLoginHandler(leadObj);
      //   }
      // }
    }
  }, [router]);

  const onPlanClick = useCallback((planName, index) => {
    setCarouselIndex(index);
    pushEvent(EVENT_NAME.CLICK_PLAN, {
      plan_name: planName,
    });
  }, []);

  const buyPlan = useCallback(buyPlanUr => {
    window.open(buyPlanUr, '_blank');
  }, []);

  const phoneNumberClick = useCallback(() => {
    if (!includes(router?.asPath, 'Apollo-Onboarding')) {
      return;
    }

    pushEvent(EVENT_NAME.CLICK_CALL_US, {
      'Campaign name': 'Apollo',
      'Phone no': '+91-8048811645',
    });
  }, [router]);

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
        phoneNumberClick={phoneNumberClick}
        changesFromCorporate={get(data, 'phone_number', '1800-203-5135')}
        fromApollo={includes(router.asPath, 'Apollo-Onboarding')}
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
                  {!includes(router.asPath, 'Policybazaar') &&
                    (!includes(router.asPath, 'Apollo-Onboarding') ? (
                      <CustomForm
                        leadsFrom={split(router.asPath, '/')[2]}
                        closeModal={closeContactFormModal}
                        openModal={openContactFromModal}
                        setOpenModal={setOpenThankYouModal}
                        showsFrom="Connect with us"
                        fromVas={true}
                      />
                    ) : (
                      <RightSection>
                        <HomePageText
                          variant={'h2'}
                          textTransform={{ xs: 'none !important', md: 'none !important' }}
                          fontSize={{ xs: '1.5rem', md: '2rem' }}
                          lineHeight={{ xs: '2rem', md: '3rem' }}
                          textAlign={{ md: 'left' }}
                          margin={{ xs: '1rem 0 1.5rem 0', md: '2rem 0 0 0' }}
                          color={{ xs: 'black', md: 'black' }}
                          fontWeight={{ xs: '400', md: '400' }}>
                          Hi <RedBoxes>{leadfullName}, </RedBoxes>
                          <br />
                          You have successfully registered with <RedBoxes>Emoha</RedBoxes>. <br />A WhatsApp message
                          containing your membership activation link will be sent shortly to your number{' '}
                          <RedBoxes>{leadPhoneNumber}.</RedBoxes>
                          <br />
                          If you need any assistance or have questions, don't hesitate to reach out to us on{' '}
                          <a style={{ color: 'black' }} href="tel:918048811645" onClick={phoneNumberClick}>
                            918048811645
                          </a>{' '}
                          .
                        </HomePageText>
                      </RightSection>
                    ))}
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

      {includes(router.asPath, 'Apollo-Onboarding') && (
        <div style={{ backgroundColor: '#F4F1EB', margin: '5rem 0 0 0', padding: '5rem 0' }}>
          <MuiContainer>
            <PlanTitle>Choose the Care Your Parents Deserve</PlanTitle>
            <PlanDescription>We have all their needs covered.</PlanDescription>
          </MuiContainer>
          <Container className="aa" sx={{ padding: { xs: '0' } }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Container
              maxWidth="md"
              sx={{
                padding: { xs: '0', md: '0 3rem' },
                margin: { xs: '3.542rem 0 0 0', md: '4.8rem 0 0 0' },
              }}>
              <PlanCardContainer
                dataSet={ApolloPlans}
                setActivePlan={setActivePlan}
                activePlan={activePlan}
                onExploreMore={buyPlan}
                onPlanClick={onPlanClick}
                buttonText="Buy Now"
                cardFrom="membership"
                planIndex={router.query?.planIndex ? router.query?.planIndex : 1}
                sliderRef={sliderRef}
                planFor="person"
                withOutCarousel={includes(router.asPath, 'Apollo-Onboarding') && matches}
                fromApollo={includes(router.asPath, 'Apollo-Onboarding')}
                changesFromCorporate={ApolloPlans}
              />
            </Container>
          </Container>
        </div>
      )}

      {PageOrderingFunction()}

      {!includes(router.asPath, 'Apollo-Onboarding') &&
        !includes(router.asPath, 'Policybazaar') &&
        matches &&
        !formInView && (
          <ConnectWithUs href="#form">
            <ConnectText>Connect with us</ConnectText>
          </ConnectWithUs>
        )}
      <FooterPadding
        isPadding={!includes(router.asPath, 'Apollo-Onboarding') && !includes(router.asPath, 'Policybazaar')}>
        <Footer
          hideAboutSection={true}
          disableMargin={true}
          fromVas={true}
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Google Ads',
            utm_campaign: 'Business_Partner_SHC_Lead_Gen_Kolkata',
          }}
          leadsFrom={split(router.asPath, '/')[2]}
          leadsObj={{
            lead_source_category: 'Paid',
            lead_source: 'Google Ads',
            lead_sub_source1: split(router.asPath, '/')[1],
          }}
          changesFromCorporate={get(data, 'phone_number', '1800-203-5135')}
          fromApollo={includes(router.asPath, 'Apollo-Onboarding')}
          phoneNumberClick={phoneNumberClick}
          footerData={get(data, 'footer')}
        />
      </FooterPadding>
      {openThankYouModal && (
        <ThankYouModal
          greetingToggle
          closeModal={closeThankYouModal}
          openModal={openThankYouModal}
          phoneNumber={get(data, 'phone_number', '1800-203-5135')}
        />
      )}
    </>
  );
}

VasScreen.propTypes = {
  data: PropTypes.obj,
  createApolloLead: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectVasDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    createApolloLead: payload => dispatch(createApolloLeadAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(VasScreen);
