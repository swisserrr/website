/**
 *
 * ImageCarouselCardCorporate
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CustomCard, CardBottom, TextContainer, ButtonContainer } from './styles';
import get from 'lodash/get';
import Image from 'utils/CustomImage';
import dynamic from 'next/dynamic';

const HomePageText = dynamic(() => import('components/HomePageText'));
function ImageCarouselCardCorporate({ item }) {
  // const matches = useMediaQuery('(max-width:600px)');
  return (
    <CustomCard className="react-player">
      <div>
        <Image
          src={item.desktop_image}
          width={5000}
          quality={100}
          height={3000}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
        />
      </div>

      <CardBottom>
        <TextContainer>
          <HomePageText
            variant={'h3'}
            padding={{ xs: '0rem 0 0.5rem 0', md: '0rem 0 1rem 0' }}
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            fontSize={{ xs: '1.6rem', md: '3rem' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontWeight={{ xs: '700', md: '700' }}
            lineHeight={{ xs: '2rem', md: '4.4rem' }}
            letterSpacing={{ xs: '-0.335895px', md: '-0.335895px' }}>
            {get(item, 'text_heading')}
          </HomePageText>
          <HomePageText
            padding={{ xs: '0rem 0 2.1rem 0', md: '0rem 0 0rem 0' }}
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            fontSize={{ xs: '1.4rem', md: '2.2rem' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontWeight={{ xs: '400', md: '400' }}
            lineHeight={{ xs: '1.8rem', md: '2.7rem' }}>
            {get(item, 'text_normal')}
          </HomePageText>
        </TextContainer>
        <ButtonContainer></ButtonContainer>
      </CardBottom>
    </CustomCard>
  );
}

ImageCarouselCardCorporate.propTypes = {
  index: PropTypes.number,
  sliderRef: PropTypes.object,
  item: PropTypes.object,
  changesFromCorporate: PropTypes.bool,
  imageOnly: PropTypes.bool,
};

export default memo(ImageCarouselCardCorporate);
