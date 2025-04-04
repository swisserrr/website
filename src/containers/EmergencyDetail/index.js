/**
 *
 * EmergencyDetail
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { createStructuredSelector } from 'reselect';

import get from 'lodash/get';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import makeSelectEmergencyDetail from './selectors';
import { TopicForCard, MaxWidthSlider, PrevArrow, NextArrow, BannerContainerNew } from './styles';
import MuiContainer from '@mui/material/Container';
import { emergencies } from './constantValues';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import Image from 'utils/CustomImage';

import dynamic from 'next/dynamic';
import HeaderBar from 'components/HeaderBar';
const Footer = dynamic(() => import('components/Footer'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));

const SamplePrevArrow = props => {
  const { onClick } = props;
  return (
    <PrevArrow id="next_arrow" onClick={onClick}>
      <HomePageImage src="/static/images/arrow_back_stick.webp" width="100%" height="100%" />
    </PrevArrow>
  );
};

const SampleNextArrow = props => {
  const { onClick } = props;
  return (
    <NextArrow onClick={onClick}>
      <HomePageImage src="/static/images/arrow_forword_stick.webp" width="100%" height="100%" />
    </NextArrow>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,

  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
      },
    },
  ],
};

export function EmergencyDetail() {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  return (
    <>
      <HeaderBar textColor="#FFFFFF" />
      <BannerContainerNew>
        <Image
          fill
          src={matches ? '/static/images/emergancyMobileBanner.webp' : '/static/images/emergancyBanner.webp'}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'end', md: 'center' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}>
          <div style={{ display: 'block', position: 'relative' }}>
            <HomePageText
              width={{ xs: '31.6rem', md: '62.2rem' }}
              textAlign={matches ? 'center' : 'left'}
              fontSize={{ xs: '2.2rem', md: '4.6rem' }}
              fontWeight={{ xs: '600', md: '500' }}
              variant={'h2'}
              position={{ xs: 'relative', md: 'relative' }}
              padding={{ xs: '0 0 9rem 0', md: '0 0 10px 0' }}
              display="flex"
              color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
              Emergency stories you have never never seen before
            </HomePageText>
            <HomePageText
              color={{ xs: '#ffffff', md: '#ffffff' }}
              width={{ xs: '31.6rem', md: '62.2rem' }}
              display={{ xs: 'none', md: 'flex' }}
              fontSize={{ md: '2.2rem' }}
              position={{ xs: 'relative', md: 'relative' }}
              textAlign={matches ? 'center' : 'left'}
              lineHeight={{ md: '2.663rem' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontWeight={{ xs: '400', md: '400' }}>
              In times of stress, we neglect self-care. Taking 10 mindful minutes feels pointless, unnecessary, or even
              scary.
            </HomePageText>
          </div>
        </MuiContainer>
      </BannerContainerNew>
      {/* <HomePageBox position={{ xs: 'relative', md: 'relative' }} height={{ xs: '35vh', md: '70rem' }} container>
        <HomePageImage
          src={matches ? '/static/images/emergancyMobileBanner.webp' : '/static/images/emergancyBanner.webp'}
          height="100%"
          width="100%"
          objectFit="cover"
        />

        <HomePageBox
          position={{ xs: 'absolute', md: 'absolute' }}
          display="flex"
          justifyContent="center"
          top={{ xs: '25%', md: '41%' }}>
          <div
            style={{
              width: '95%',
            }}>
            <Custombox color={{ xs: '#ffffff', md: '#ffffff' }}></Custombox>
            <HomePageText
              color={{ xs: '#ffffff', md: '#ffffff' }}
              display={{ xs: 'none', md: 'flex' }}
              fontSize={{ md: '2.2rem' }}
              lineHeight={{ md: '2.663rem' }}
              textAlign={{ md: 'left' }}
              padding={{ md: ' 0 40% 0 15%' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontWeight={{ xs: '400', md: '400' }}>
              In times of stress, we neglect self-care. Taking 10 mindful minutes feels pointless, unnecessary, or even
              scary.
            </HomePageText>
          </div>
        </HomePageBox>
      </HomePageBox> */}

      <div style={{ backgroundColor: 'rgb(248,248,248)' }}>
        <HomePageBox
          padding={{ xs: '0rem 0rem 0rem 0', md: '0rem 0rem 0rem 0' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="center">
          <MaxWidthSlider>
            <HomePageText
              paddingTop={{ xs: '1.5rem', md: '4.3rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              display={{ md: 'none' }}
              fontSize={{ xs: '1.5rem', md: '1.7rem' }}
              lineHeight={{ xs: '1.8rem', md: '2.1rem' }}
              textAlign={{ xs: 'center', md: 'center' }}
              margin={{ xs: '1.698rem 0' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontWeight={{ xs: '400', md: '400' }}>
              In times of stress, we neglect self-care. Taking 10 mindful minutes feels pointless, unnecessary, or even
              scary.
            </HomePageText>
            <Slider {...settings}>
              {map(emergencies, val => {
                return (
                  <HomePageBox margin={{ xs: '0rem 1rem' }}>
                    <HomePageText
                      padding={{ xs: '0rem 0 0.5rem 00', md: '4rem 0 3.5rem 0' }}
                      fontSize={{ xs: '1.7rem', md: '2.8rem' }}
                      lineHeight={{ xs: '4.8rem', md: '5.8rem' }}
                      textAlign={{ xs: 'center', md: 'center' }}
                      fontWeight={{ xs: '600', md: '600' }}>
                      {get(val, 'elder_name')}
                    </HomePageText>
                    <HomePageImage src={get(val, `image`)} height="100%" width="100%" />

                    <TopicForCard>{get(val, 'description')}</TopicForCard>
                  </HomePageBox>
                );
              })}
            </Slider>
          </MaxWidthSlider>
        </HomePageBox>
      </div>
      <Footer />
    </>
  );
}

EmergencyDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  emergencyDetail: makeSelectEmergencyDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EmergencyDetail);
