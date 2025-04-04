/**
 *
 * StackImages
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { AnimateImage } from './styles';
function StackImages({ width, height, src }) {
  return (
    <>
      <AnimateImage
        className="img_r"
        alt="__animate"
        width={width || 100}
        height={height || 100}
        src={src}
        style={{
          width: '90%',
          height: '100%',
        }}
      />
    </>
  );
}

StackImages.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export default memo(StackImages);
