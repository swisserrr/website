/* eslint-disable react/prop-types */
/**
 *
 * CarouselContainer
 *
 */

import React, { memo } from 'react';

import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import isEmpty from 'lodash/isEmpty';
import toString from 'lodash/toString';
import 'slick-carousel/slick/slick-theme.css';
import get from 'lodash/get';

import { CustomSlider, RightArrow, LeftArrow } from './styles';
function CarouselContainer({
  centerMode,
  slides,
  children,
  dots,
  nextArrrow,
  prevArrow,
  scaleCenter,
  paddingLeft,
  leftArrowMargin,
  rightArrowMargin,
  dotsInMobile,
  ArrrowInMobile,
  dotsColor,
  swipeToSlide,
  centerPadding,
  infinite,
  autoPlay,
  centeredVideoAutoPlay,
  CustomPrevArrow,
  CustomNextArrow,
  sliderRef,
  speed,
  pausePreviousVideo,
  // autoplaySpeed,
}) {
  const SamplePrevArrow = props => {
    const { onClick } = props;
    return (
      <LeftArrow leftArrowMargin={leftArrowMargin} onClick={onClick}>
        &#8592;
      </LeftArrow>
    );
  };
  const SampleNextArrow = props => {
    const { onClick } = props;
    return (
      <RightArrow rightArrowMargin={rightArrowMargin} onClick={onClick}>
        &#8594;
      </RightArrow>
    );
  };

  const handleBool = value => {
    if (!isEmpty(toString(value))) {
      return value;
    }

    return false;
  };

  const beforeChange = (currentSlide, nextSlide, index) => {
    const node = document.getElementsByClassName('react-player');
    node[nextSlide + index].getElementsByClassName('react-player__play-icon')[0]?.click();

    for (let i = 0; i < node.length; i++) {
      const isVideoThere = node[i].getElementsByTagName('video');

      if (!isEmpty(isVideoThere)) {
        isVideoThere[0]?.pause();
        isVideoThere[0].currentTime = 0;
      }
    }
    node[nextSlide + index].getElementsByTagName('video')[0]?.play();
  };

  const pausePreviousVideoHandler = () => {
    const node = document.getElementsByClassName('pausePreviousVideo');

    for (let i = 0; i < node.length; i++) {
      const isVideoThere = node[i].getElementsByTagName('video');

      if (!isEmpty(isVideoThere)) {
        isVideoThere[0]?.pause();
      }
    }
  };

  const settings = {
    centerMode: get(centerMode, 'md', false),
    className: 'center',
    dots: handleBool(dots),
    nextArrow: CustomPrevArrow ? <CustomPrevArrow /> : nextArrrow ? <SampleNextArrow /> : null,
    prevArrow: CustomNextArrow ? <CustomNextArrow /> : prevArrow ? <SamplePrevArrow /> : null,
    infinite: get(infinite, 'md', true),
    speed: speed || 500,
    swipeToSlide: swipeToSlide || false,
    autoplay: get(autoPlay, 'md', false),
    slidesToShow: get(slides, 'md', 3),
    slidesToScroll: get(slides, 'md', 3),
    beforeChange: (currentSlide, nextSlide) => {
      if (pausePreviousVideo) {
        pausePreviousVideoHandler();
      }
      if (get(centeredVideoAutoPlay, 'md', false)) {
        beforeChange(currentSlide, nextSlide, 3);
      }
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: get(slides, 'sm', get(slides, 'md', 2)),
          slidesToScroll: get(slides, 'sm', get(slides, 'md', 2)),
          infinite: get(infinite, 'md', true),
          dots: handleBool(dots),
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: get(slides, 'sm', get(slides, 'md', 2)),
          slidesToScroll: get(slides, 'sm', get(slides, 'md', 2)),
          centerMode: true,
          nextArrow: ArrrowInMobile,
          prevArrow: ArrrowInMobile,
          dots: dotsInMobile,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: get(slides, 'xs', 1),
          slidesToScroll: get(slides, 'xs', 1),
          centerMode: get(centerMode, 'xs', true),
          nextArrow: ArrrowInMobile,
          prevArrow: ArrrowInMobile,
          dots: dotsInMobile,
          centerPadding: centerPadding || '5%',
          infinite: get(infinite, 'xs', true),
          beforeChange: (currentSlide, nextSlide) => {
            if (get(centeredVideoAutoPlay, 'md', false)) {
              beforeChange(currentSlide, nextSlide, 2);
            }
          },
        },
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: get(slides, 'xs', 1),
          slidesToScroll: get(slides, 'xs', 1),
          centerMode: false,
          centerPadding: centerPadding || '5%',
          dots: dotsInMobile,
          nextArrow: ArrrowInMobile,
          prevArrow: ArrrowInMobile,
        },
      },
    ],
  };

  return (
    <CustomSlider
      isArrowShown={nextArrrow}
      scaleCenter={scaleCenter}
      paddingLeft={paddingLeft}
      dotsColor={dotsColor}
      ref={sliderRef}
      {...settings}>
      {children}
    </CustomSlider>
  );
}

CarouselContainer.propTypes = {
  centerMode: PropTypes.bool,
  slides: PropTypes.number,
  dataSet: PropTypes.array,
  children: PropTypes.array,
  dots: PropTypes.bool,
  nextArrrow: PropTypes.bool,
  prevArrow: PropTypes.bool,
  scaleCenter: PropTypes.bool,
  paddingLeft: PropTypes.bool,
  arrowMargin: PropTypes.bool,
  leftArrowMargin: PropTypes.string,
  rightArrowMargin: PropTypes.string,
  dotsColor: PropTypes.string,
  swipeToSlide: PropTypes.bool,
  infinite: PropTypes.object,
  autoplay: PropTypes.object,
  centeredVideoAutoPlay: PropTypes.bool,
  sliderRef: PropTypes.object,
  centerPadding: PropTypes.string,
  speed: PropTypes.number,
  autoplaySpeed: PropTypes.number,
};
CarouselContainer.defaultProps = {
  slides: 3,
  swipeToSlide: false,
};

export default memo(CarouselContainer);
