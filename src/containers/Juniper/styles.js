import styled from '@emotion/styled';

import Box from '@mui/material/Box';

import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import CustomButton from 'components/CustomButton';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ButtonContainer = styled(Box)`
  height: calc(100vh + 125px);
  position: absolute;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 99;
  text-transform: capitalize !important;
  button {
    text-transform: capitalize;
  }
  @media (max-width: 1000px) {
    position: relative;
    height: auto;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

const Text = styled.span`
  @media (max-width: 767px) {
    max-width: 200px;
  }
`;

const ButtonContainerNew = styled(Box)`
  background: #f6f6f6;
  padding: 124px 0;
  @media (max-width: 600px) {
    padding: 44px 0px;
  }
`;

const Mainsection = styled(Box)`
  background: #888888;
  @media (max-width: 900px) {
    background-color: #ffffff;
  }
`;

const CustomReactPlayer = styled(ReactPlayer)(
  () => css`
    video {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      /* background-color: #888888; */
      /* @media (max-width: 600px) {
        height: 250px;
      } */
    }
  `
);

const CustomPlayerContainer = styled.div`
  margin: 20px 0 60px 0;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/9;
  @media (max-width: 600px) {
    aspect-ratio: 4/3;
    margin: 30px 0 30px 0;
  }
`;

const PictureContainerMain = styled.div`
  background-color: #f7f7f7;
`;

const PictureContainer = styled.div`
  padding: 50px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 30px 0 30px 0;
  }
`;

const PictureContainerText = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  line-height: 46px;
  color: #1a1a1a;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  }
`;

const PictureContainerTextRed = styled.span`
  color: #cc4746;
`;

const Button = styled(CustomButton)`
  width: 45px !important;
  min-width: 0 !important;
  height: 45px;
  border-radius: 22.5px;
`;

const CarouselMainContainer = styled.div`
  width: 95%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MembersContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const CircleContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  position: absolute;
  bottom: -125px;
  z-index: 1;
  left: 72px;
  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    bottom: -30px;
    left: 38px;
  }
`;

const PrevArrow = styled.button`
  /* margin-left: 46%; */
  position: absolute;
  right: 50vw;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 1rem;
  bottom: -10rem;
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  padding: 1.3rem 1.5rem;
`;

const NextArrow = styled.button`
  position: absolute;
  bottom: -10rem;
  left: 50vw;
  margin: 0 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  padding: 1.3rem 1.5rem;
`;

const PlansContainer = styled.div`
  background-color: #f8f8f8;
`;

const PlanBenefitContainer = styled.div`
  padding: 60px 0 80px 0;
  background-color: #ffffff;
  display: flex;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const HeadingContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const SubHeading = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.663rem;
  /* identical to box height */
  text-align: center;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  margin-top: 20px;
  z-index: 1;
  color: ${({ theme }) => theme.palette.black.main};
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 18.15px;
    margin-top: 0px;
  }
`;

const BannerHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  line-height: 4.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1%;
  z-index: 1;
  color: ${({ theme }) => theme.palette.black.main};
  margin-top: 5rem;
  @media (max-width: 900px) {
    font-size: 1.7rem;
    line-height: 2.1rem;
    margin-top: 2rem;
  }
`;

const CorporateImageContainer = styled.div`
  width: 240px;
  height: 60px;
  position: relative;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    width: 90px;
    height: 30px;
    margin-bottom: 20px;
  }
`;

export {
  ButtonContainer,
  CustomReactPlayer,
  ButtonContainerNew,
  Mainsection,
  Text,
  Button,
  CarouselMainContainer,
  MembersContainer,
  CircleContainer,
  PrevArrow,
  NextArrow,
  PlansContainer,
  PlanBenefitContainer,
  HeadingContainer,
  SubHeading,
  BannerHeading,
  CustomPlayerContainer,
  PictureContainer,
  PictureContainerText,
  PictureContainerTextRed,
  PictureContainerMain,
  CorporateImageContainer,
};
