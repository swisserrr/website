/**
 *
 * ThankYouModal
 *
 */

import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';

import { ModalImage, ModalImageContainer, ModalHeading, ModalDesc, ModalButton } from './styles';
const HomePageText = dynamic(() => import('components/HomePageText'));
const CustomModal = dynamic(() => import('components/CustomModal'));
function ThankYouModal({ closeModal, openModal, hideCallUsButton, greetingToggle, phoneNumber, DID }) {
  const [showNumber, setShowNumber] = React.useState(false);
  const router = useRouter();

  const goToHome = useCallback(() => {
    closeModal();
    if (
      !router.pathname.startsWith('/enterprise/kotak') &&
      !router.pathname.startsWith('/enterprise/federal') &&
      !router.pathname.includes('medibuddy')
    ) {
      router.push('/');
    }
    setShowNumber(false);
  }, []);

  return (
    <CustomModal handleClose={closeModal} open={openModal}>
      <Box className={'custom_modal'}>
        <ModalImageContainer>
          <ModalImage
            src="/static/images/Thank you.webp"
            alt="Show Image"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </ModalImageContainer>
        <ModalHeading>Thank you for {greetingToggle ? 'contacting' : 'submitting'}</ModalHeading>
        <ModalDesc>Our senior care expert will get back to you within 24 working hours.</ModalDesc>
        <ModalButton disableRipple disableTouchRipple disableFocusRipple variant="none" onClick={goToHome}>
          Go to home page
        </ModalButton>
        {!showNumber && (
          <HomePageText
            textAlign={{ xs: 'center', md: 'center' }}
            fontSize={{ xs: '1.5rem', md: '1.7rem' }}
            lineHeight={{ xs: '2rem', md: '3rem' }}
            letterSpacing={{ xs: '-2', md: '-2' }}
            padding={{ xs: '0', md: '0' }}
            margin={{ xs: '10px 0 2.188rem 0', md: '10px 0 2.188rem 0' }}
            cursor="pointer"
            fontWeight={{ xs: '500', md: '500' }}
            onClick={() => (hideCallUsButton ? null : setShowNumber(true))}>
            {hideCallUsButton ? '' : 'or Call us now'}
          </HomePageText>
        )}

        {showNumber &&
          (phoneNumber ? (
            <HomePageText
              textAlign={{ xs: 'center', md: 'center' }}
              fontSize={{ xs: '1.5rem', md: '1.7rem' }}
              lineHeight={{ xs: '2rem', md: '3rem' }}
              letterSpacing={{ xs: '-2', md: '-2' }}
              padding={{ xs: '0', md: '0' }}
              margin={{ xs: '10px 0 2.188rem 0', md: '10px 0 2.188rem 0' }}
              cursor="pointer"
              fontWeight={{ xs: '500', md: '500' }}>
              <a href="tel:1800-203-5135" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                Call us at : {phoneNumber}
              </a>
            </HomePageText>
          ) : (
            <>
              <HomePageText
                textAlign={{ xs: 'center', md: 'center' }}
                fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                lineHeight={{ xs: '2rem', md: '3rem' }}
                letterSpacing={{ xs: '-2', md: '-2' }}
                padding={{ xs: '0', md: '0' }}
                margin={{ xs: '10px 0 0 0', md: '10px 0 0 0' }}
                cursor="pointer"
                fontWeight={{ xs: '500', md: '500' }}>
                <a href="tel:1800-203-5135" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                  India Toll-Free: {isEmpty(DID) ? '1800-203-5135' : DID}
                </a>
              </HomePageText>
              {isEmpty(DID) && (
                <HomePageText
                  textAlign={{ xs: 'center', md: 'center' }}
                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                  lineHeight={{ xs: '2rem', md: '3rem' }}
                  letterSpacing={{ xs: '-2', md: '-2' }}
                  padding={{ xs: '0', md: '0' }}
                  margin={{ xs: '2px 0 2.188rem 0', md: '5px 0 2.188rem 0' }}
                  cursor="pointer"
                  fontWeight={{ xs: '500', md: '500' }}>
                  <a href="tel:+1888-866-0486" style={{ color: '#1A1A1A', textDecoration: 'none' }}>
                    International Toll-Free: +1888-866-0486
                  </a>
                </HomePageText>
              )}
            </>
          ))}
      </Box>
    </CustomModal>
  );
}

ThankYouModal.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.bool,
  onPress: PropTypes.func,
  hideCallUsButton: PropTypes.bool,
  greetingToggle: PropTypes.bool,
  phoneNumber: PropTypes.string,
  DID: PropTypes.string,
};

ThankYouModal.defaultProps = {
  hideCallUsButton: false,
  phoneNumber: null,
};
export default ThankYouModal;
