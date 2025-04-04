/* eslint-disable react/prop-types */
/**
 *
 * HomePageMohTvShows
 *
 */

import React, { memo } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import HomePageCarouselCard from 'components/HomePageCarouselCard';
import CarouselContainer from 'components/CarouselContainer';

function HomePageMohTvShows({ dataSet, dots, dotsColor, mohtv, imageToggle }) {
  return (
    <CarouselContainer
      nextArrrow={false}
      prevArrow={false}
      ArrrowInMobile={false}
      dots={dots}
      centerPadding="8%"
      dotsColor={dotsColor}>
      {map(dataSet, (item, key) => (
        <HomePageCarouselCard item={item} key={key} mohtv={mohtv} imageToggle={imageToggle} />
      ))}
    </CarouselContainer>
  );
}

HomePageMohTvShows.propTypes = {
  dataSet: PropTypes.array,
  dots: PropTypes.bool,
  dotsColor: PropTypes.string,
  mohtv: PropTypes.bool,
  imageToggle: PropTypes.bool,
};

export default memo(HomePageMohTvShows);
