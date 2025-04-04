import styled from '@emotion/styled';

import { css } from '@emotion/react';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

const CustomReactPlayer = styled(ReactPlayer)(
  () => css`
    width: auto !important;
    height: 100% !important;
    border-radius: 2rem !important;
    .react-player__preview {
      border-radius: 14px;
    }
  `
);

const ImageContainer = styled.div`
  height: 350px;
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const PlayContainer = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { CustomReactPlayer, ImageContainer, PlayContainer };
