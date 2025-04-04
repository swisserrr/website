import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

import dynamic from 'next/dynamic';
const ImageCarousel = dynamic(() => import('components/ImageCarousel'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
import get from 'lodash/get';

const Media = ({ data }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      {get(data, 'is_visible') && (
        <HomePageBox backgroundColor={{ xs: '#F8F8F8', md: '#F8f8f8' }}>
          <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
            <HomePageBox padding={{ xs: '2.3rem 0 0 0', md: '2.1rem 0 0 0' }}>
              <HomePageBox
                padding={{ xs: '0rem 3.8rem 1.2rem 2rem', md: '0rem 1rem 5.0rem 1rem' }}
                color={{ xs: '#ffffff', md: '#ffffff' }}
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <HomePageText
                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  fontWeight={{ xs: '600', md: '600' }}
                  variant={'h2'}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  lineHeight={{ xs: '4.6rem', md: '5.8rem' }}>
                  Media Coverage
                </HomePageText>
              </HomePageBox>
              <HomePageBox height={{ md: '44rem', xs: '40rem' }} overflow="hidden">
                <ImageCarousel
                  centerPadding="15%"
                  dataSet={get(data, 'data')}
                  height={matches ? '40rem' : '44rem'}
                  width="100%"
                  padding={{ md: '0 10px 0 0' }}
                  margin={{ xs: '0 15px', md: '0 0 0 0' }}
                  slides={{ md: 4 }}
                />
              </HomePageBox>
            </HomePageBox>
          </Container>
        </HomePageBox>
      )}
    </>
  );
};

Media.propTypes = {
  data: PropTypes.obj,
};

export default Media;
