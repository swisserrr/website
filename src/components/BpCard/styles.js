import styled from '@emotion/styled';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { css } from '@emotion/react';
import Slider from 'react-slick';

const Li = styled.li(
  props => `
   list-style-type: circle;
`
);

export { Li };
