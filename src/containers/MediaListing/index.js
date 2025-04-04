/* eslint-disable max-len */
/**
 *
 * MediaListing
 *
 */

import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStructuredSelector } from 'reselect';
import get from 'lodash/get';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import makeSelectMediaListing from './selectors';

import { fetchMediaData } from './actions';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Aos from 'aos';
import CircularProgress from '@mui/material/CircularProgress';
import InfinitScroll from 'react-infinite-scroll-component';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';

import Image from 'utils/CustomImage';
import { useInView } from 'react-intersection-observer';
import { BannerContainer } from 'containers/Blogs/BlogsHomePage/styles';
const ContactFormModal = dynamic(() => import('components/ContactFormModal'), { ssr: false });
const ThankYouModal = dynamic(() => import('components/ThankYouModal'), { ssr: false });

const MediaCard = dynamic(() => import('components/MediaCard'), { ssr: false });
const Footer = dynamic(() => import('components/Footer'));
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const HomePageText = dynamic(() => import('components/HomePageText'));

export function MediaListing({ mediaListing, handleApiCall }) {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');

  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [openThankYouModal, setOpenThankYouModal] = useState(false);

  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);

  const { ref: onScrollSectionRef, inView: scrollSectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const fetchMoreData = () => {
    handleApiCall({
      api:
        get(mediaListing, 'data[0].publishdate') &&
        'admin/website/third-party-media?page_number=:page_number&page_size=10',
      page_number: get(mediaListing, 'pageNo') + 1,
    });
  };

  useEffect(() => {
    Aos.refreshHard();
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>Emoha Media | Stay Connected and Engaged with the Elderly</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Discover Emoha Media, a platform designed to keep you connected and engaged with the elderly. Browse through a wide range of engaging content, including videos, articles, and activities, that foster meaningful interactions and enhance the well-being of seniors."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emoha Media | Stay Connected and Engaged with the Elderly" />
        <meta
          property="og:description"
          content="Discover Emoha Media, a platform designed to keep you connected and engaged with the elderly. Browse through a wide range of engaging content, including videos, articles, and activities, that foster meaningful interactions and enhance the well-being of seniors."
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

      {get(mediaListing, 'data[0].publishdate') ? (
        <HeaderBar
          scrollingY={false}
          position="fixed"
          top="0px"
          textColor="white"
          backgroundColor="#1a1a1a"
          changesFromCorporate={'+91-8048811604'}
          setOpenContactFromModal={setOpenContactFromModal}
        />
      ) : (
        <HeaderBar backgroundColor="transparent" textColor="#FFFFFF" />
      )}

      <BannerContainer>
        <Image
          fill
          src={matches ? '/static/images/mediaMobileBanner.webp' : '/static/images/mediaBanner.webp'}
          style={{ objectFit: 'cover' }}
        />
      </BannerContainer>
      <div ref={onScrollSectionRef} style={{ backgroundColor: '#F7F7F7' }}>
        {scrollSectionInView && (
          <Container
            maxWidth="lg"
            sx={{
              paddingTop: { xs: '1rem', md: '3rem' },
            }}>
            <HomePageText
              textAlign={{ xs: 'center', md: 'center' }}
              fontSize={{ xs: '2.2rem', md: '4.6rem' }}
              lineHeight={{ xs: '4.8rem', md: '5.6rem' }}
              padding={{ xs: '0 0 1.3rem 0', md: '0 0 3.5rem 0' }}
              fontWeight={{ xs: '600', md: '600' }}>
              Media
            </HomePageText>
            <Grid size xs={12} md={12}>
              <InfinitScroll
                style={{ overflowY: 'hidden' }}
                dataLength={get(mediaListing, 'data')?.length}
                next={fetchMoreData}
                hasMore={true}
                scrollThreshold={0}
                loader={
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {get(mediaListing, 'loading') && <CircularProgress />}
                  </div>
                }>
                <Grid container>
                  {map(get(mediaListing, 'data'), (item, key) => {
                    const dateS = get(item, 'publishdate');
                    if (dateS) {
                      const date = new Date(dateS);
                      const day = date.getDate().toString().padStart(2, '0');
                      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
                      const year = date.getFullYear();

                      const formattedDate = `${day}/${month}/${year}`;
                      return <MediaCard date={formattedDate} item={item} key={key} title={get(item, 'title')} />;
                    } else {
                      const firstDigit = get(item, 'title').match(/\d/);
                      const indexed = get(item, 'title').indexOf(firstDigit);
                      const title = get(item, 'title').slice(0, indexed);
                      const date = get(item, 'title').slice(indexed);
                      return <MediaCard date={date} item={item} key={key} title={title} />;
                    }
                  })}
                </Grid>
              </InfinitScroll>
            </Grid>
          </Container>
        )}
      </div>
      {get(mediaListing, 'data[0].publishdate') ? (
        <Footer
          businessPartnerChanges
          customUtm={{
            utm_medium: 'Other',
            utm_source: 'Organic',
            utm_campaign: 'BP',
          }}
          leadsFrom={router.asPath}
          leadsObj={{
            lead_source_category: 'Organic',
            lead_source: 'Website',
            lead_sub_source1: 'Footer',
          }}
          DID="+91 8048811604"
          doYouKnow="Do you have 5 lakhs to invest in a highly rewarding business opportunity?"
          officeSpace="Do you have an office space that is at least 200 square feet in size?"
          bpEmail="business.partner@emoha.com"
        />
      ) : (
        <Footer />
      )}
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
            utm_campaign: 'BP',
          }}
          leadsFrom={router.asPath}
          leadsObj={{
            lead_source_category: 'Organic',
            lead_source: 'Website',
            lead_sub_source1: '',
          }}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
          DID="+91 8048811604"
          isFromBp={true}
        />
      )}
    </>
  );
}

MediaListing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mediaListing: PropTypes.object,
  handleApiCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mediaListing: makeSelectMediaListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleApiCall: evt => dispatch(fetchMediaData(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(MediaListing);
