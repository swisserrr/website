import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideUp = keyframes`
    from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
   from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextSlider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  font-weight: 600;
  font-size: 6.4rem;
  position: relative;
  color: #fff;
  text-align: center;
  animation: ${({ toggle }) => (toggle ? slideUp : slideDown)} 1s ease-in-out forwards;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export { Text, TextContainer, TextSlider };
