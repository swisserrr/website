import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) and (min-width: 600px) {
    height: 80vh;
  }
  @media (max-width: 600px) {
    height: 60vh;
  }
  @media only screen and (max-width: 400px) and (min-width: 370px) {
    height: 70vh;
  }
  @media (max-width: 370px) {
    height: 60vh;
  }
`;

const ExclusiveBannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60rem;
  justify-content: center;
  align-items: center;
`;

const BannerSubContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  @media (max-width: 900px) {
    padding: 0rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

const ImageSectionWrapper = styled.div`
  display: flex;
  width: 50rem;
  margin: 1rem 0;
  line-height: max(4rem, min(5vw, 4.8rem));
  @media (max-width: 600px) {
    width: auto;
  }
`;

const AppPlayStoreImageSectionWrapper = styled.div`
  display: flex;
  width: 50rem;
  margin: 1rem 0;
  line-height: max(4rem, min(5vw, 4.8rem));
  @media (max-width: 720px) {
    width: 10rem;
  }
`;

const ImageDescriptionWrapper = styled.div`
  width: 100%;
`;

const SubContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  @media (max-width: 900px) {
    padding: 0rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

const ButtonContainer = styled.div`
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const RenderItemWrapper = styled.div`
  display: flex !important;
  padding: 6rem 0rem;
  @media (max-width: 900px) {
    padding: 4rem 0rem;
    flex-direction: column;
    align-items: start;
  }
  @media (max-width: 600px) {
    padding: 3rem 0rem;
  }
`;

const HalfWidth = styled.div`
  width: 50%;
`;

const OnlyDiv = styled.div``;

const InfoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  @media (max-width: 1100px) {
    object-fit: cover;
    border-radius: 20px;
  }
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const MobileCardWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
`;

const OnlyServiceDimensionDiv = styled.div`
  width: 56.2rem;
  height: 64rem;
  @media (max-width: 1100px) {
    width: 50rem;
    height: 62rem;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 40rem;
  }
`;

const DiscountWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

const DiscountImageInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.5rem 0;
`;

const ButtonContainerNew = styled(Box)`
  background: #f6f6f6;
  padding: 4rem 0;
  @media (max-width: 600px) {
    padding: 4.4rem 0px;
  }
`;

const ConnectWithUs = styled.a`
  width: 100%;
  height: 70px;
  background-color: #dd2b27;
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
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
`;

const PopUpContainer = styled.div`
  width: 320px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin-top: 80px;
  border-radius: 10px;
  padding: 20px;
  border: none !important;
`;

const PopUpSubContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const PhoneSvgContainer = styled.div`
  display: flex;
  width: 54px;
  height: 27px;
  border-radius: 25px;
  background-color: #cc4746;
  align-items: center;
  justify-content: center;
`;

const CloseContainer = styled.div`
  display: flex;
  width: 12;
  height: 12px;
`;

const PhoneNumber = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: ${({ toggle }) => (toggle ? '#1a1a1a' : '#b5b5b5')};
  letter-spacing: -0.02em;
  text-align: left;
`;

const PhoneNumberDiv = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  text-align: left;
`;

export {
  BannerContainer,
  BannerSubContainer,
  ImageSectionWrapper,
  ImageDescriptionWrapper,
  SubContainer,
  ButtonContainer,
  RenderItemWrapper,
  HalfWidth,
  OnlyDiv,
  InfoImage,
  OnlyServiceDimensionDiv,
  AppPlayStoreImageSectionWrapper,
  CardImage,
  MobileCardWrapper,
  DiscountWrapper,
  DiscountImageInfoWrapper,
  ExclusiveBannerContainer,
  ButtonContainerNew,
  ConnectWithUs,
  ConnectText,
  PopUpContainer,
  PopUpSubContainer,
  PhoneSvgContainer,
  CloseContainer,
  PhoneNumber,
  PhoneNumberDiv,
};
