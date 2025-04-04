/**

*

* CustomCard

*

*/

import React, { memo, useEffect, useRef, useState } from 'react';
import { CustomDiv, ImageContainer, NextImage } from './styles';
import PropTypes from 'prop-types';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import { CountUp as Count } from 'use-count-up';
import Image from 'utils/CustomImage';
function CustomCard({ max, desc, startingNumber, isAnimation, titleColor, descColor, image }) {
  function hasAlphabets(inputString) {
    return /[a-zA-Z]/.test(inputString);
  }

  const [isInView, setIsInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing after the element comes into view
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (observer && countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <HomePageBox borderRadius={{ xs: '2.0rem', md: '20.rem' }} backgroundColor={{ lg: 'red' }}>
      <CustomDiv ref={countRef}>
        <ImageContainer>
          <NextImage toggle={desc === 'Lives Saved'} src={image} fill />
        </ImageContainer>
        <HomePageText
          textAlign="center"
          color={{ xs: titleColor ? titleColor : '#101828', md: titleColor ? titleColor : '#101828' }}
          letterSpacing={{ xs: ' -0.4px;', md: ' -1px;' }}
          fontSize={{ xs: '1.3rem', md: '2.4rem' }}
          lineHeight={{ xs: '1', md: '1' }}
          fontWeight={{ xs: '600', md: '600' }}
          margin={{ xs: '2px 0px 10px 0px', md: '2px 0px 5px 0px' }}>
          {hasAlphabets(max)
            ? max
            : isAnimation
            ? isInView && <Count isCounting delay={0} start={startingNumber || 0} end={parseInt(max)} duration={4} />
            : max}
          {hasAlphabets(max) ? '' : '+'}
        </HomePageText>

        <HomePageText
          color={{ xs: descColor ? descColor : '#101828', md: descColor ? descColor : '#101828' }}
          textAlign="center"
          fontSize={{ xs: '1.3rem', md: '2.4rem' }}
          fontWeight={{ xs: '600', md: '600' }}
          height={{ xs: '3.4rem', md: '4.4rem' }}
          lineHeight={{ xs: '1', md: '1' }}
          padding={{ xs: '0rem 0 2rem 0', md: '0rem 0 4rem 0' }}
          className="desc">
          {desc}
        </HomePageText>
      </CustomDiv>
    </HomePageBox>
  );
}

CustomCard.propTypes = {
  max: PropTypes.number,
  desc: PropTypes.string,
  icon: PropTypes.object,
  index: PropTypes.number,
  inView: PropTypes.bool,
  startingNumber: PropTypes.number,
  isAnimation: PropTypes.bool,
  titleColor: PropTypes.string,
  descColor: PropTypes.string,
  image: PropTypes.string,
};

export default memo(CustomCard);
