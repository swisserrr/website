/* Styles for TextFadingAnimation container module */

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const FadeIn = keyframes`
 0%{transform:translateY(-100%); opacity:1;}
 10%,90%{transform:translateY(0%);opacity:1;}
 100%{transform:translateY(100%);opacity:0;}
`;

const MultiTextFadeIn = styled.h3`
  font-size: 6.8rem;
  line-height: 1.15;
  opacity: 0;
  display: ${({ active }) => (active ? 'block' : 'none')};
  color: ${({ color }) => color};
  font-weight: 600;
  animation: ${FadeIn} 2.5s linear;
  @media (max-width: 900px) {
    font-size: 4.8rem;
    line-height: 1.15;
  }
`;

const SingleText = styled.h3`
  font-size: 6.8rem;
  line-height: 6rem;
  color: ${({ color }) => color};
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
`;

export { MultiTextFadeIn, SingleText };
