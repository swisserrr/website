import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';

import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import CustomButton from 'components/CustomButton';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const ButtonContainer = styled(Box)`
  height: calc(90vh + 125px);
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
  @media (max-width: 600px) {
    height: calc(35vh + 150px);
    position: absolute;
    display: flex;
    top: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 99;
    text-transform: capitalize !important;
  }
`;

const Text = styled.span`
  @media (max-width: 767px) {
    max-width: 200px;
  }
`;

const ButtonContainerNew = styled(Box)`
  background: #f6f6f6;
  padding: 9rem 0;
  @media (max-width: 600px) {
    padding: 4.4rem 0px;
  }
`;

const Mainsection = styled(Box)`
  /* padding-bottom: 25px; */
  @media (max-width: 900px) {
    background-color: #ffffff;
    /* padding-bottom: 25px; */
  }
`;

const CustomReactPlayer = styled(ReactPlayer)(
  () => css`
    video {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  `
);

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

const VideoTag = styled.video`
  width: 100vw; /* Could also use width: 100%; */
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  @media (max-width: 600px) {
    height: 225px;
  }
`;

const AboutUsText = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: max(28px, min(3vw, 40px));
  line-height: max(41px, min(3vw, 58px));
  margin-right: 155px;
  color: ${({ red }) => (red ? '#DA504A' : '#1A1A1A')};
  @media (max-width: 600px) {
    margin: ${({ toggle }) => (toggle ? '5px 0' : '30px 30px 30px 0px')};
  }
`;

const ReadMore = styled.p`
  text-decoration: underline;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
  color: ${({ theme }) => theme.palette.coldGray.secondary};
  font-size: 2.4rem;
  line-height: 2.9rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    align-self: center;
    line-height: 1.9rem;
  }
`;

const AboutSection = styled.section`
  padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '0 0 0 0' : '0 0')};
  @media (max-width: 786px) {
    padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '0 0 0 0' : '0 0')};
  }
`;

const AboutSectionFlip = styled.section`
  margin: ${({ disableBottomMargin }) => (disableBottomMargin ? '50px 0 0 0' : '50px 0')};
  @media (max-width: 786px) {
    margin: ${({ disableBottomMargin }) => (disableBottomMargin ? '20px 0 0 0' : '20px 0')};
  }
`;

const HtmlContainer = styled.p`
  color: #64748b;
  margin: 20px 14px 20px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  @media (max-width: 786px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const LeftContainer = styled.div`
  margin: ${({ changePosition }) => (changePosition ? '0 30px 0 0px' : '0 0 0 30px')};
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const RightContainer = styled.div`
  margin: ${({ changePosition }) => (changePosition ? '0 50px 0 0px' : '0 0 0 50px')};
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const TextAbout = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  margin: 20px 0;
  @media (max-width: 600px) {
    margin: 10px 0;
    font-size: 16px;
    line-height: 28px;
  }
`;

const ConnectWithUs = styled.a`
  width: 100%;
  height: 70px;
  background-color: #cc4746;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  text-decoration: none;
`;

const ConnectText = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
`;
const Relativecard = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const BannerContainer = styled(Grid)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  max-width: 100%;
  height: 90vh;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  z-index: 0;

  @media (max-width: 1024px) {
    height: 50vh;
  }
  @media (max-width: 900px) {
    position: relative;
    height: 35vh;
  }
  @media (max-width: 600px) {
    position: absolute;
    height: 26vh;
  }
`;

const MobileBannerHeading = styled.h1`
  font-style: normal;
  width: 100%;
  font-weight: 400;
  display: none;
  align-items: left;
  text-align: left;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    font-size: 3.6rem;
    line-height: 4.8rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    font-size: 2.2rem;
    line-height: 2.663rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
`;

const BluredContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background: ${({ flip }) => `linear-gradient(${flip ? '180' : '360'}deg, rgba(255, 255, 255, 0) 0%, #fff 100%)`};
  @media (max-width: 600px) {
    height: 50px;
  }
`;

const FadeContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  height: 80px;
  background: ${({ flip }) => `linear-gradient(${flip ? '180' : '360'}deg, rgba(255, 255, 255, 0) 0%, #fff 100%)`};
  @media (max-width: 600px) {
    height: 50px;
  }
`;

const TextImageContainer = styled.div`
  min-width: 529px;
  height: auto;
  aspect-ratio: 2;
  display: flex;
  align-items: flex-start;
  position: relative;
  @media (max-width: 600px) {
    max-width: 200px;
    min-width: 200px;
    height: auto;
  }
`;

const LeafContainerLeft = styled.div`
  position: absolute;
  right: -200px;
  top: -200px;
  transform: rotate(133deg);
  /* top: -200px; */
  /* top: 0;
  right: 0; */
  /* background-color: lightgreen; */
  /* max-width: 350px;
  aspect-ratio: 0.69/1.2; */
  z-index: -1;
  @media (max-width: 600px) {
    position: absolute;
    top: 0px;
    right: -100px;
    /* background-color: lightgreen; */
    /* max-width: 300px;
    aspect-ratio: 1/2; */
    z-index: 0;
  }
`;

const LeafLeft = styled.div`
  width: 350px;
  aspect-ratio: 0.69/1.2;
  position: relative;
  @media (max-width: 600px) {
    width: 300px;
    aspect-ratio: 1;
  }
`;
const LeafContainerRight = styled.div`
  transform: rotate(90deg);
  position: absolute;
  bottom: 0px;
  left: -220px;
  /* width: 350px;
  aspect-ratio: 0.69/1.2; */
  z-index: -1;
  @media (max-width: 600px) {
    display: none;
    /* bottom: -90px;
    left: -90px; */
    /* max-width: 300px;
    aspect-ratio: 1; */
    /* z-index: 0; */
  }
`;

const LeafRight = styled.div`
  width: 350px;
  aspect-ratio: 0.69/1.2;
  position: relative;
  z-index: 0;
  @media (max-width: 600px) {
    width: 300px;
    aspect-ratio: 1;
  }
`;

const LeafContainerLeftRed = styled.div`
  position: absolute;
  /* position: absolute;
  top: -200px;
  right: 0;
  max-width: 350px;
  aspect-ratio: 0.69/1.2;
  z-index: -1; */
  display: none;
  @media (max-width: 600px) {
    display: block;
    top: -80px;
    right: -125px;
    /* max-width: 160px; */
    /* aspect-ratio: 1/2; */
    z-index: 0;
  }
`;

const LeafLeftRed = styled.div`
  width: 350px;
  aspect-ratio: 0.69/1.2;
  position: relative;
  @media (max-width: 600px) {
    width: 160px;
    aspect-ratio: 1/2;
  }
`;
const LeafContainerRightRed = styled.div`
  position: absolute;
  top: -180px;
  left: -130px;
  /* width: 500px;
  height: 500px; */
  /* aspect-ratio: 1/1.2; */
  z-index: -1;
  @media (max-width: 600px) {
    display: none;
    /* bottom: -90px;
    left: 0px;
    max-width: 300px;
    aspect-ratio: 1;
    z-index: 0; */
  }
`;

const FirstFlowerImage = styled(Image)`
  transform: rotate(-133deg);
`;

const LeafRightRed = styled.div`
  width: 400px;
  aspect-ratio: 0.8/1.2;
  position: relative;
  z-index: 0;
  @media (max-width: 600px) {
    width: 300px;
    aspect-ratio: 1;
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
  VideoTag,
  AboutUsText,
  ReadMore,
  AboutSection,
  HtmlContainer,
  LeftContainer,
  RightContainer,
  TextAbout,
  ConnectWithUs,
  ConnectText,
  Relativecard,
  BannerContainer,
  MobileBannerHeading,
  BluredContainer,
  FadeContainer,
  TextImageContainer,
  LeafContainerLeft,
  LeafLeft,
  LeafContainerRight,
  LeafRight,
  AboutSectionFlip,
  LeafContainerLeftRed,
  LeafLeftRed,
  LeafContainerRightRed,
  LeafRightRed,
  FirstFlowerImage,
};
