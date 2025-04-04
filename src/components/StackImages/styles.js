import styled from '@emotion/styled';
import { css } from '@emotion/react';

const AnimateImage = styled.img(
  () => css`
    padding: 2rem 2rem;
    position: absolute;
    width: inherit;
    transition: 0.5s;
    height: 100%;
  `
);
export { AnimateImage };
