/**
 *
 * TextFadingAnimation
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { MultiTextFadeIn, SingleText } from './styles';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import split from 'lodash/split';
import useMediaQuery from '@mui/material/useMediaQuery';

function TextFadingAnimation({ data }) {
  const [active, setActive] = useState(0);
  const matches = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    let interval;
    clearTimeout(interval);
    interval = setTimeout(() => {
      if (active === data?.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, 2500);
    return () => {
      clearTimeout(interval);
    };
  }, [active]);

  if (isEqual(data?.length, 1)) {
    return (
      <div>
        {map(data, val => {
          return <SingleText color={val?.colour_code}>{val?.title}</SingleText>;
        })}
      </div>
    );
  }

  return (
    <div>
      {map(data, (val, index) => {
        let str = split(val?.title, ' ');
        const str1 = str[0];
        str?.shift();
        const str2 = str.join(' ');
        return matches ? (
          <MultiTextFadeIn active={index === active} color={val?.colour_code}>
            {str1} <br /> {str2}
          </MultiTextFadeIn>
        ) : (
          <MultiTextFadeIn active={index === active} color={val?.colour_code}>
            {val?.title}
          </MultiTextFadeIn>
        );
      })}
    </div>
  );
}

TextFadingAnimation.propTypes = { ...TextFadingAnimation };

export default memo(TextFadingAnimation);
