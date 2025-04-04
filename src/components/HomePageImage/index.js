/**
 *
 * HomePageImage
 *
 */

import React, { memo } from 'react';

import PropTypes from 'prop-types';

import Image from 'utils/CustomImage';

function HomePageImage({ width, height, src, borderRadius, objectFit }) {
  return (
    <Image
      style={{
        height: height,
        width: width,
        borderRadius: borderRadius,
        objectFit: objectFit,
      }}
      quality={100}
      src={src}
      alt="__test"
      width={5000}
      height={5000}
    />
  );
}

HomePageImage.propTypes = {
  src: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  objectFit: PropTypes.string,
};

export default memo(HomePageImage);
