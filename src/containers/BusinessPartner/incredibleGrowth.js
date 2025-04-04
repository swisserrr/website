/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import {
  TheEmohaStorySectionPadding,
  ServicesHeading,
  IncredibleGrowthSubheading,
  IncredibleGrowtBoxContainer,
  IncredibleGrowtBoxes,
  IncredibleGrowtBoxHeader,
  IncredibleGrowtBoxText,
} from './styles';

import Grid from '@mui/material/Grid';

import HomePageBox from 'components/HomePageBox';

import HomePageButton from 'components/HomePageButton';
import Crousel from './Crousel';

import left from '../../../public/static/images/left.svg';
import right from '../../../public/static/images/right.svg';
import HomePageImage from 'components/HomePageImage';

import map from 'lodash/map';

import CarouselContainer from 'components/CarouselContainer';
import data from './data';
import useMediaQuery from '@mui/material/useMediaQuery';

// const sliderRef = useRef(null);

// eslint-disable-next-line no-unused-vars
const IncredibleGrowth = ({ setOpenContactFromModal }) => {
  const matches = useMediaQuery('(max-width:600px)');

  const SamplePrevArrow = useCallback(
    props => {
      const { onClick } = props;
      return (
        // eslint-disable-next-line react/button-has-type
        <button
          style={{
            border: '1px solid',
            position: 'relative',
            left: '37%',
            borderRadius: '4rem',
            padding: '0.5rem',
            bottom: '-1.2rem',
          }}
          id="next_arrow"
          onClick={onClick}>
          <HomePageImage src={left} width="100%" height="100%" />
        </button>
      );
    },
    [left]
  );

  const SampleNextArrow = useCallback(
    props => {
      const { onClick } = props;
      return (
        <button
          style={{
            border: '1px solid',
            position: 'absolute',
            borderRadius: '4rem',
            zIndex: '1px',
            bottom: '-11px',
            left: '45%',
            padding: '0.5rem',
          }}
          onClick={onClick}>
          <HomePageImage src={right} width="100%" height="100%" />
        </button>
      );
    },
    [right]
  );

  return (
    <>
      <TheEmohaStorySectionPadding id="story">
        <HomePageBox padding={{ xs: '2.0rem 0rem', md: '2.0rem 0rem' }}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <HomePageBox margin={{ md: '4rem 0px 0px 0px' }}>
                <ServicesHeading>{'Time for incredible growth'}</ServicesHeading>
                <IncredibleGrowthSubheading>
                  {'Our partnership with the partners is a success!  '}
                </IncredibleGrowthSubheading>
                <IncredibleGrowtBoxContainer>
                  <IncredibleGrowtBoxes>
                    <IncredibleGrowtBoxHeader>{'Pan India'}</IncredibleGrowtBoxHeader>
                    <IncredibleGrowtBoxText>{' Operation '}</IncredibleGrowtBoxText>
                  </IncredibleGrowtBoxes>
                  <IncredibleGrowtBoxes>
                    <IncredibleGrowtBoxHeader>{'60K+'}</IncredibleGrowtBoxHeader>
                    <IncredibleGrowtBoxText>{'happy elders'}</IncredibleGrowtBoxText>
                  </IncredibleGrowtBoxes>
                </IncredibleGrowtBoxContainer>
                <IncredibleGrowtBoxContainer>
                  <IncredibleGrowtBoxes>
                    <IncredibleGrowtBoxHeader>{'300%'}</IncredibleGrowtBoxHeader>
                    <IncredibleGrowtBoxText>{'return on investment '}</IncredibleGrowtBoxText>
                  </IncredibleGrowtBoxes>
                  <IncredibleGrowtBoxes>
                    <IncredibleGrowtBoxHeader>{'500+'}</IncredibleGrowtBoxHeader>
                    <IncredibleGrowtBoxText>{'doctors on call '}</IncredibleGrowtBoxText>
                  </IncredibleGrowtBoxes>
                </IncredibleGrowtBoxContainer>
              </HomePageBox>
              <HomePageBox
                display={{ xs: 'flex', md: 'flex' }}
                justifyContent={{ xs: 'center', md: 'left' }}
                margin={{ xs: '0px 0px 2rem 0px', md: '0px 0px 10rem 0px' }}>
                {!matches && (
                  <HomePageButton
                    variant="text"
                    color={{ xs: '#FFF;' }}
                    letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                    margin={{ xs: '0', md: '0 40px 0 0' }}
                    onClick={setOpenContactFromModal}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    backgroundColor={{ xs: '#CC4746', md: '#CC4746;' }}
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    padding={{ xs: '12.829px 25.659px', md: '20px 25px' }}
                    borderRadius={{ xs: '35.637px;', md: '39.252px' }}>
                    Become our partner
                  </HomePageButton>
                )}
              </HomePageBox>
            </Grid>
            <Grid size lg={6} md={6} sm={12} xs={12}>
              <CarouselContainer
                nextArrrow={true}
                pausePreviousVideo={true}
                prevArrow={true}
                CustomNextArrow={SampleNextArrow}
                CustomPrevArrow={SamplePrevArrow}
                dotsInMobile={true}
                slides={{ xs: 1, md: 1 }}>
                {map(data, item => {
                  return <Crousel src={item.url} placeholder={item.placeholder} />;
                })}
              </CarouselContainer>
              {matches && (
                <HomePageBox display={{ xs: 'flex', md: 'flex' }} justifyContent={{ xs: 'center', md: 'center' }}>
                  <HomePageButton
                    variant="text"
                    color={{ xs: '#FFF;' }}
                    letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                    margin={{ xs: '7rem 0px 0px 0px', md: '0 40px 0 0' }}
                    onClick={setOpenContactFromModal}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    backgroundColor={{ xs: '#CC4746', md: '#CC4746;' }}
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    padding={{ xs: '12.829px 25.659px', md: '20px 25px' }}
                    borderRadius={{ xs: '35.637px;', md: '39.252px' }}>
                    Become our partner
                  </HomePageButton>
                </HomePageBox>
              )}
            </Grid>
          </Grid>
        </HomePageBox>
      </TheEmohaStorySectionPadding>
    </>
  );
};

IncredibleGrowth.propTypes = {
  //   data: PropTypes.object.isRequired,
};

export default IncredibleGrowth;
