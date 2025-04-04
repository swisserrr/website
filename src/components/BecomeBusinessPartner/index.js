/**
 *
 * BecomeBusinessPartner
 *
 */

import React, { memo, useCallback } from 'react';
import Image from 'utils/CustomImage';
import BecomeBusinessPartnerImage from '../../../public/static/images/BecomeBusinessPartner.jpg';
import BecomeBusinessPartnerMobileImage from '../../../public/static/images/BecomeBusinessPartnerMobile.png';
import HomePageText from '../HomePageText';
import HomePageButton from '../HomePageButton';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';

// import PropTypes from 'prop-types';
// import {} from './styles';

function BecomeBusinessPartner() {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:905px)');
  const matchesMd = useMediaQuery('(max-width:1200px)');

  const handleRoute = useCallback(pageName => {
    router.push(`/${pageName}`);
  }, []);

  return (
    <div style={{ width: '100%', padding: matches ? '3rem 2rem' : '3rem 10.5rem', backgroundColor: '#F8F8F8' }}>
      <div style={{ position: 'relative' }}>
        <Image
          src={matches ? BecomeBusinessPartnerMobileImage : BecomeBusinessPartnerImage}
          alt="Cover Image"
          style={{ width: '100%', objectFit: 'contain', borderRadius: '10px', height: 'auto' }}
        />
        {matches ? (
          <div style={{ marginTop: '24px' }}>
            <HomePageText
              fontSize={{ xs: '2.8rem', md: '3.2rem' }}
              fontWeight={{ xs: '600' }}
              variant={'h2'}
              textAlign="start"
              textTransform={{ xs: 'none !important' }}
              display="flex"
              zIndex={{ xs: '1' }}
              color={{ xs: '#1A1A1A' }}
              lineHeight={{ xs: '4rem' }}
              margin={{ xs: '1.8rem 1rem' }}>
              Partner With India’s Best Senior care Experts
            </HomePageText>
            <HomePageText
              fontSize={{ xs: '1.4rem' }}
              fontWeight={{ xs: '400' }}
              variant={'h2'}
              textAlign="start"
              textTransform={{ xs: 'none !important' }}
              display="flex"
              zIndex={{ xs: '1' }}
              c
              color={{ xs: '#64748B', md: '#fff' }}
              lineHeight={{ xs: '2.6rem' }}
              margin={{ xs: '0 1rem 2.5rem 1rem' }}>
              Join our mission and improve the quality of life for seniors in your community.
            </HomePageText>
            <HomePageButton
              hover={{ opacity: '1' }}
              boxShadow="none"
              onClick={() => {
                handleRoute('business-partner');
              }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontSize={{ xs: '1.5rem ', md: matchesMd ? '2rem' : '2.2rem' }}
              lineHeight={{ xs: '0.7rem', md: '1.8rem' }}
              padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
              borderRadius={{ xs: '6.1rem', md: '3rem' }}
              fontWeight={{ xs: 500, md: 500 }}
              border={{ xs: '1px #CC4746 solid', md: '1px #CC4746 solid' }}
              backgroundColor={{ xs: 'transparent', md: 'transparent' }}
              color={{ xs: '#CC4746', md: '#CC4746' }}>
              Become a Franchise Partner
            </HomePageButton>
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              top: ' 0px',
              width: '100%',
              padding: matchesMd ? '0rem 6rem' : '0rem 10rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
            }}>
            <>
              <HomePageText
                fontSize={{ xs: '2.8rem', md: '3rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                variant={'h2'}
                textAlign="start"
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                display="flex"
                padding={{ xs: '', md: '0 20rem 0 0' }}
                overflow={{ xs: 'hidden', md: 'visible' }}
                zIndex={{ xs: '1', md: '1' }}
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                lineHeight={{ xs: '4rem', md: '3.8rem' }}
                width={{ xs: '40%', md: matchesMd ? '60rem' : '60rem' }}>
                Partner With India’s Best Senior care Experts
              </HomePageText>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <HomePageText
                  fontSize={{ xs: '2rem', md: '2rem' }}
                  fontWeight={{ xs: '400', md: '400' }}
                  variant={'h2'}
                  textAlign="start"
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  display="flex"
                  zIndex={{ xs: '1', md: '1' }}
                  color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                  overflow={{ xs: 'hidden', md: 'visible' }}
                  lineHeight={{ xs: '4.6rem', md: '2.8rem' }}
                  width={{ xs: '40rem', md: matchesMd ? '50rem' : '35rem' }}
                  margin={{ xs: '0rem', md: '1rem 0rem' }}>
                  Join our mission and improve the quality of life for seniors in your community.
                </HomePageText>
                <HomePageButton
                  boxShadow="none"
                  onClick={() => {
                    handleRoute('business-partner');
                  }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem ', md: matchesMd ? '2rem' : '2rem' }}
                  lineHeight={{ xs: '0.7rem', md: '2.4rem' }}
                  padding={{ xs: '1.9rem 1.7rem', md: '2.4rem 4.4rem' }}
                  borderRadius={{ xs: '6.1rem', md: '4.3rem' }}
                  fontWeight={{ xs: 500, md: 500 }}
                  height={{ xs: '', md: '7.2rem' }}
                  alignSelf={{ xs: '', md: 'end' }}
                  overflow={{ xs: 'hidden', md: 'visible' }}
                  backgroundColor={{ xs: '#fff', md: '#fff' }}
                  hover={{ backgroundColor: '#000', color: '#fff', opacity: '1' }}
                  color={{ xs: '#000', md: '#000' }}>
                  Become a Franchise Partner
                </HomePageButton>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

BecomeBusinessPartner.propTypes = {};

export default memo(BecomeBusinessPartner);
