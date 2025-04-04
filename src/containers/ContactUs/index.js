/**
 *
 * ContactUs
 *
 */

import React, { memo } from 'react';
import HeaderBar from 'components/HeaderBar';
import MuiContainer from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { BannerContainer, Container } from './styles';
import HomePageText from 'components/HomePageText';
import useMediaQuery from '@mui/material/useMediaQuery';
import isEqual from 'lodash/isEqual';
import Footer from 'components/Footer';
import WhoWeAre from './whoWeAre';
import EmohaBorn from './emohaBorn';

export function ContactUs({ index }) {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Container>
        <HeaderBar backgroundColor="#000" />
        <Grid container>
          <BannerContainer>
            <MuiContainer
              sx={{
                height: { xs: '100%' },
                display: { xs: 'flex' },
                alignItems: { xs: 'end', md: 'center' },
                justifyContent: { xs: 'center', sm: 'flex-start' },
              }}>
              <HomePageText
                width={{ xs: '31.6rem', md: '62.2rem' }}
                textAlign={matches ? 'center' : 'left'}
                fontSize={{ xs: '2.2rem', md: '4.6rem' }}
                fontWeight={{ xs: '600', md: '500' }}
                variant={'h2'}
                textTransform={{ xs: 'none', md: 'none' }}
                position={{ xs: 'relative', md: 'relative' }}
                height={{ xs: '8.1rem', md: 'auto' }}
                margin={{ xs: '0 0 5vh 0', md: '0 0 0 0' }}
                display="flex"
                color={{ xs: '#6b4537', md: '#6b4537' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
                {isEqual(index, 0) ? 'Contact us' : 'About us'}
              </HomePageText>
            </MuiContainer>
          </BannerContainer>
        </Grid>
      </Container>
      {isEqual(index, 1) ? (
        <>
          <EmohaBorn />
          <WhoWeAre
            data={{
              is_visible: true,
              title: 'Who We Are',
              description:
                // eslint-disable-next-line max-len
                'Emoha is not just an elder care service; it is a celebration of love, respect, and appreciation for the ones who paved the way for us. We are here to provide your parents with support, companionship, and professional care, so you can rest easy, knowing that they are in loving and capable hands. After all those who made us deserve nothing but the best!',
              banner_image_desktop: '/static/images/who_we_are.webp',
              banner_image_image: '/static/images/who_we_are.webp',
            }}
          />
        </>
      ) : null}
      <Footer />
    </>
  );
}

ContactUs.propTypes = {
  ...ContactUs,
};

export default memo(ContactUs);
