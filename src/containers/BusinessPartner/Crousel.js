/* eslint-disable react/prop-types */
import React from 'react';

import HomePageBox from 'components/HomePageBox';

import { CustomReactPlayer } from '../Home/styles';
import { browserConfigHandler } from 'utils/common';

const IncredibleGrowthCrousel = ({ src, placeholder }) => {
  return (
    <HomePageBox
      className="pausePreviousVideo"
      height={{ xs: '38.3rem', md: '66.9rem' }}
      width={{ xs: '100%', md: '100%' }}>
      <CustomReactPlayer
        playing={true}
        width="100%"
        height="100%"
        controls
        url={src}
        config={browserConfigHandler()}
        light={placeholder}
      />
    </HomePageBox>
  );
};

export default IncredibleGrowthCrousel;
