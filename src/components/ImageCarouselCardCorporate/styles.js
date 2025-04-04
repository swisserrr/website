import styled from '@emotion/styled';

import { css } from '@emotion/react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const CardBottom = styled.div`
  position: absolute;
  bottom: 8rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  @media (max-width: 767px) {
    padding: 0rem 1rem;
    bottom: 3rem;
  }
`;

const CustomCard = styled.div`
  margin: 0rem 1rem;
  padding: 0px !important;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 30px;
  }
  .react-player__preview {
    border-radius: 30px;
  }
  @media (max-width: 767px) {
    :before {
      border-radius: 20px;
    }
    .react-player__preview {
      border-radius: 20px;
    }
  }
`;

const TextContainer = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ButtonContainer = styled.div``;

const CustomReactPlayer = styled(ReactPlayer)(
  () => css`
    height: 60vh !important;
    video {
      object-fit: cover;
      border-radius: 30px;
    }
    @media (max-width: 767px) {
      height: 30rem !important;
      video {
        border-radius: 20px;
      }
    }
  `
);
const ControlContainer = styled.div(
  () => css`
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 1px;
    right: 0;
    left: 0;
    flex-direction: column;
    z-index: 1;
    height: 6rem;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiLinearProgress-root {
      width: 93%;
      background-color: #ffffff;
    }
    .MuiLinearProgress-bar {
      background: linear-gradient(0deg, rgba(204, 71, 70, 0.5), rgba(204, 71, 70, 0.5)), #ffffff;
    }
    @media (max-width: 767px) {
      height: 2.7rem;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      .MuiLinearProgress-root {
        width: 90%;
      }
    }
  `
);

const OpacityLayer = styled.div`
  background: green;
  position: absolute;
  height: 100%;
`;

export { ControlContainer, CustomCard, CardBottom, TextContainer, ButtonContainer, CustomReactPlayer, OpacityLayer };
