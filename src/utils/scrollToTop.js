import React from 'react';
import Zoom from '@mui/material/Zoom';
import styled from '@emotion/styled';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'utils/CustomImage';

const ScrollToTopStyled = styled.div`
  z-index: 1;
  position: fixed;
  right: 17rem;
  bottom: 8rem;
  @media (max-width: 900px) {
    right: 20px;
    bottom: 80px;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #d9d9d9;
`;

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true,
  });

  const handleClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled onClick={handleClick} role="presentation">
        <ScrollContainer>
          <Image src="/static/images/expand_less.webp" alt="Expand less" width={23} height={14} />
        </ScrollContainer>
      </ScrollToTopStyled>
    </Zoom>
  );
};

export default ScrollToTop;
