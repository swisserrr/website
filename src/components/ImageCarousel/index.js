/**
 *
 * ImageCarousel
 *
 */

import React, { memo } from 'react';

import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import dynamic from 'next/dynamic';

const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const CarouselContainer = dynamic(() => import('components/CarouselContainer'));

function ImageCarousel({
  dataSet,
  width,
  height,
  slides,
  centerMode,
  autoPlay,
  swipeToSlide,
  centerPadding,
  padding,
  margin,
}) {
  return (
    <CarouselContainer
      dots={false}
      centerPadding={centerPadding}
      slides={slides || 3}
      speed={3000}
      swipeToSlide={swipeToSlide}
      centerMode={centerMode}
      autoPlay={autoPlay}>
      {map(dataSet, (item, key) => (
        <HomePageBox
          padding={
            padding || {
              xs: '0 0.6rem 0 0',
              md: '0 1.7rem 0 0',
            }
          }
          margin={margin}
          key={key}>
          <HomePageImage key={key} src={get(item, 'image_url')} height={height} width={width} />
        </HomePageBox>
      ))}
    </CarouselContainer>
  );
}

ImageCarousel.propTypes = {
  dataSet: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  slides: PropTypes.number,
  centerMode: PropTypes.object,
  autoPlay: PropTypes.object,
  swipeToSlide: PropTypes.bool,
  centerPadding: PropTypes.string,
  padding: PropTypes.object,
  margin: PropTypes.object,
};

export default memo(ImageCarousel);
