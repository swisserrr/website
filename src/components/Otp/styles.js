/* Styles for Otp container module */
import Image from 'utils/CustomImage';

import Box from '@mui/material/Box';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Custombox = styled(Box)(
  () => css`
    position: absolute;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border-radius: 2.5rem;
    width: 30%;
    z-index: 99998;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* Firefox */
    max-height: 95%;
    @media (max-width: 599px) {
      width: 90%;
    }
  `
);

export { Custombox };
