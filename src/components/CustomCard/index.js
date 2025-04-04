/**

*

* CustomCard

*

*/

import React, { memo } from 'react';
import { CustomDiv } from './styles';
import PropTypes from 'prop-types';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import { CountUp as Count } from 'use-count-up';
function CustomCard({ max, desc, startingNumber, isAnimation, titleColor, descColor }) {
  function hasAlphabets(inputString) {
    return /[a-zA-Z]/.test(inputString);
  }
  return (
    <HomePageBox borderRadius={{ xs: '2.0rem', md: '20.rem' }} height={{ md: 250, xs: 80 }}>
      <CustomDiv>
        <HomePageText
          textAlign="center"
          color={{ xs: titleColor ? titleColor : '#ffffff', md: titleColor ? titleColor : '#ffffff' }}
          letterSpacing={{ xs: ' -0.4px;', md: ' -1px;' }}
          fontSize={{ xs: '2.2rem', md: '3.6rem' }}
          lineHeight={{ xs: '1', md: '1' }}
          fontWeight={{ xs: '700', md: '700' }}
          margin={{ xs: '2px 0px 10px 0px', md: '2px 0px 5px 0px' }}>
          {hasAlphabets(max) ? (
            max
          ) : isAnimation ? (
            <Count isCounting delay={0} start={startingNumber || 0} end={parseInt(max)} duration={4} />
          ) : (
            max
          )}
          {hasAlphabets(max) ? '' : '+'}
        </HomePageText>

        <HomePageText
          color={{ xs: descColor ? descColor : '#ffffff', md: descColor ? descColor : '#ffffff' }}
          textAlign="center"
          fontSize={{ xs: '1.7rem', md: '2.2rem' }}
          fontWeight={{ xs: '400', md: '400' }}
          height={{ xs: '3.4rem', md: '4.4rem' }}
          lineHeight={{ xs: '1.6rem', md: '2.7rem' }}
          padding={{ xs: '0rem 0 2rem 0', md: '0rem 0 5rem 0' }}
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
};

export default memo(CustomCard);
