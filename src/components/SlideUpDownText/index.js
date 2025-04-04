/**
 *
 * SlideUpDownText
 *
 */

import React, { memo, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Text, TextContainer, TextSlider } from './styles';

function SlideUpDownText({ textArray }) {
  const [slide, setSlide] = useState(0);
  const [toggle, setToggle] = useState(0);
  useEffect(() => {
    const animate = () => {
      setTimeout(() => {
        setToggle(prev => 1 + prev);
      }, 4000);
      setTimeout(() => {
        setSlide(prev => 1 + prev);
      }, 5000);
    };
    if (slide === 4) {
      setSlide(0);
      setToggle(0);
    } else {
      animate();
    }
  }, [slide]);

  return (
    <TextContainer>
      <TextSlider>
        {textArray.map((_, i) => {
          return (
            <Text key={i} active={slide === i} toggle={toggle === i}>
              Helllllloooo{i} this is test
            </Text>
          );
        })}
      </TextSlider>
    </TextContainer>
  );
}

SlideUpDownText.propTypes = {
  textArray: PropTypes.array,
};

export default memo(SlideUpDownText);
