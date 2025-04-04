/* Styles for TextFadingAnimation container module */

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const StickyDiv = styled.div`
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 90%;
  top: 100px;
`;

const StickyButton = styled.div`
  padding: 10px;
  color: #314d4a;
  font-weight: bold;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  outline: none;
`;
export { StickyDiv, StickyButton };
