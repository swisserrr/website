import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import HomePageBox from 'components/HomePageBox';
import { css } from '@emotion/react';

const BannerContainer = styled(Grid)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: -1;
  flex-direction: column;
  background-image: url('/static/images/Diabetes.webp');
  background-repeat: no-repeat;
  background-size: cover;
`;

const BannerContainerNew = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  object-fit: cover;
  height: 71vh;
  justify-content: center;
  align-items: center;
  ::after {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f8f8 100%);
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
  }
  @media (max-width: 600px) {
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const Custombox = styled(HomePageBox)(
  () =>
    css`
      color: 'white';
      display: flex;
      justify-content: center;
      ::after {
        font-size: 4.6rem;
        line-height: 5.567rem;
        text-align: left;
        font-weight: 600;
        color: '#ffffff';
        letter-spacing: -4%;
        margin-top: -2rem;
        padding: 0 40% 0 15%;
        content: 'Emergency stories you have never never seen before';
      }
      @media (max-width: 900px) {
        ::after {
          font-size: 2.2rem;
          line-height: 2.663rem;
          text-align: center;
          font-weight: 600;
          letter-spacing: -1%;
          margin-top: 6.75rem;
          color: '#ffffff';
          padding: 0 2.5rem;

          content: 'Emergency stories you have never never seen before';
        }
      }
    `
);

const BannerHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 6.4rem;
  line-height: 77px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
`;

const TopicForCard = styled.h1`
  margin-top: 3.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 21px;
  text-align: center;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.palette.black.main};
  @media (max-width: 900px) {
    font-size: 1.5rem;
    line-height: 1.815rem;
    padding: 0 1rem;
  }
`;

const MaxWidthSlider = styled.div`
  width: 50%;
  height: 82rem;
  @media (max-width: 900px) {
    width: 80%;
    height: 90rem;
  }
`;

const PrevArrow = styled.button`
  cursor: pointer;
  position: absolute;
  top: 32%;
  height: 3rem;
  width: 3rem;
  left: -20%;
  border-radius: 50%;
  @media (max-width: 900px) {
    top: 105%;
    left: 35%;
    height: 30px;
    width: 3rem;
    padding: 0.5rem 0.5rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  }
`;

const NextArrow = styled.button`
  cursor: pointer;
  position: absolute;
  top: 32%;
  height: 3rem;
  width: 3rem;
  right: -20%;
  border-radius: 50%;
  @media (max-width: 900px) {
    top: 105%;
    left: 58%;
    height: 30px;
    width: 3rem;
    padding: 0.5rem 0.5rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  }
`;

export {
  BannerContainer,
  BannerHeading,
  TopicForCard,
  MaxWidthSlider,
  Custombox,
  PrevArrow,
  NextArrow,
  BannerContainerNew,
};
