import styled from '@emotion/styled';
import CustomButton from '../../components/CustomButton';
import Link from 'next/link';
import Image from 'utils/CustomImage';

const HeaderContainer = styled.header`
  position: ${({ scrollingY, position, disableScroll }) =>
    disableScroll ? 'relative' : scrollingY ? 'fixed' : position ? position : 'absolute'};
  top: ${({ top, scrollDirection, scrollingY, disableScroll }) =>
    disableScroll ? 0 : scrollDirection !== 'down' || !scrollingY ? 0 : top || '-80px'};
  right: 0;
  display: ${({ mobilePopOver }) => (mobilePopOver ? 'none' : 'flex')};
  height: 70px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 400ms;
  align-items: center;
  justify-content: center;
  background-color: ${({ top, scrollingY, backgroundColor }) => {
    return top
      ? backgroundColor
      : scrollingY
      ? 'rgba(0, 0, 0, 0.5)'
      : backgroundColor
      ? backgroundColor
      : 'transparent';
  }};
  width: 100%;
  padding: 25px;
  z-index: 20;
  @media (max-width: 600px) {
    height: 95px;
    position: ${({ scrollingY, position, disableScroll }) =>
      disableScroll ? 'relative' : scrollingY ? 'fixed' : position ? position : 'absolute'};
    top: ${({ scrollDirection, scrollingY, disableScroll }) =>
      disableScroll ? 0 : scrollDirection !== 'down' || !scrollingY ? 0 : '-95px'};
  }
`;

const HeaderMaxWidth = styled.div`
  align-items: center;
  width: 100%;
  padding: 0 35px;
  max-width: 1200px;
  justify-content: space-between;
  display: ${({ display }) => (display ? 'none' : 'flex')};
  @media (max-width: 600px) {
    padding: 0 0px;
  }
`;

const HeaderMaxWidthEnterprise = styled.div`
  align-items: center;
  width: 100%;
  padding: 0 35px;
  max-width: 1200px;
  justify-content: center;
  display: ${({ display }) => (display ? 'none' : 'flex')};
  @media (min-width: 600px) {
    padding: 0 0px;
  }
`;

const Button = styled(CustomButton)`
  padding: 0 0.5rem;
  font-size: 0.8rem;
  height: 25px;
  @media (min-width: 900px) {
    display: none;
  }
`;

const BorderButton = styled.div`
  border: 1px solid #ffffff;
  height: 45px;
  border-radius: 40px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  /* margin-left: 30px; */
`;

const NavLinks = styled(Link)`
  font-size: ${({ disableRem }) => (disableRem ? '16px' : '1.6rem')};
  font-style: normal;
  text-decoration: none !important;
  font-weight: 500;
  color: ${({ theme, textColor }) => (textColor ? textColor : theme.palette.white.main)};
  @media (max-width: 900px) {
    display: none;
  }
`;

const CallUsLinks = styled(Link)`
  font-size: ${({ disableRem }) => (disableRem ? '16px' : '1.6rem')};
  font-style: normal;
  text-decoration: none !important;
  font-weight: 500;
  color: ${({ theme, textColor }) => (textColor ? textColor : theme.palette.white.main)};
`;

const MobileNavLinks = styled(Link)`
  font-size: ${({ disableRem }) => (disableRem ? '22px' : '2.2rem')};
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-decoration: none;
  color: ${({ theme, textColor }) => (textColor ? theme.palette.secondary.third : theme.palette.white.main)};
  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileNavLinksDiv = styled.div`
  font-size: ${({ disableRem }) => (disableRem ? '22px' : '2.2rem')};
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-decoration: none;
  color: ${({ theme, textColor }) => (textColor ? theme.palette.secondary.third : theme.palette.white.main)};
  @media (min-width: 900px) {
    display: none;
  }
`;

const ImageContainer = styled(Link)`
  width: 180px;
  height: 32px;
  display: flex;
  pointer-events: ${({ pointerEventsHandler }) => (pointerEventsHandler ? 'none' : 'auto')};
  flexdirection: row;
  @media (max-width: 600px) {
    width: 100px;
    height: 50px;
  }
`;

const ImageContainerBackground = styled.div`
  width: 120px;
  height: 70px;
  background-color: white;
  @media (max-width: 600px) {
    width: 100px;
    height: 50px;
  }
`;

const ImageContainerEnterprise = styled(Link)`
  width: 150px;
  height: 70px;
  margin: 0 20px;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  border-right-color: #fff;
  border-left-color: #fff;
  border-top-color: transparent;
  border-bottom-color: transparent;
  @media (max-width: 600px) {
    width: 100px;
    height: 50px;
  }
`;

const ImageContainerKotak = styled(Link)`
  width: 150px;
  height: 70px;
  margin: 0 0;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  border-right-color: transparent;
  border-left-color: #fff;
  border-top-color: transparent;
  border-bottom-color: transparent;
  @media (max-width: 600px) {
    width: 150px;
    height: 70px;
  }
`;

const ProfileImageContainer = styled.nav`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

const RedDot = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const RedDotContainerImage = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
`;

const RedDotPreferenceContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 10px;
`;

const WhatsappButton = styled(CustomButton)`
  width: 50px;
  height: 50px;
  min-width: 0 !important;
  pointer-events: ${({ pointerEventsHandler }) => (pointerEventsHandler ? 'none' : 'auto')};
  border-radius: 25px;
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 30px;
  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;

const CloseButton = styled.nav`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const MobileMenuButton = styled.nav`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  pointer-events: ${({ pointerEventsHandler }) => (pointerEventsHandler ? 'none' : 'auto')};
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0px 0px 0px 10px;
  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileRightContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 900px) {
    gap: 0;
  }
  @media (max-width: 767px) {
    justify-content: right;
  }
`;

const PopoverItems = styled.div`
  width: 175px;
  padding: 25px 0;
  margin-bottom: 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({ disabled, theme }) => (disabled ? theme?.palette.secondary.light : theme.palette.black.main)};
  font-style: normal;
  font-weight: 500;
  font-size: ${({ disableRem }) => (disableRem ? '17px' : '1.7rem')};
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.palette.black.main};
  &:last-child {
    border-bottom-width: 0px;
  }
  background-color: ${({ disabled, theme }) => (disabled ? theme?.palette.secondary.dark : 'transparent')};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;
const PopoverDisable = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobilePopOverContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  z-index: 1000;
  display: ${({ display }) => (display ? display : 'none')};
  overflow: hidden;
`;

const MobilePopOver = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
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

const CallUsLinksPopup = styled.div`
  font-size: ${({ disableRem }) => (disableRem ? '16px' : '1.6rem')};
  font-style: normal;
  text-decoration: none !important;
  font-weight: 500;
  color: ${({ theme, textColor }) => (textColor ? textColor : theme.palette.white.main)};
  cursor: pointer;
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

export {
  HeaderContainer,
  ImageContainer,
  MobileRightContainer,
  ProfileImageContainer,
  HeaderMaxWidth,
  Button,
  NavLinks,
  WhatsappButton,
  PopoverItems,
  PopoverDisable,
  MobileNavLinks,
  MobilePopOverContainer,
  MobilePopOver,
  MobileMenuButton,
  CloseButton,
  MobileNavLinksDiv,
  CustomImage,
  BorderButton,
  CallUsLinks,
  RedDot,
  RedDotContainerImage,
  RedDotPreferenceContainer,
  PopUpContainer,
  PopUpSubContainer,
  CallUsLinksPopup,
  PhoneNumber,
  PhoneNumberDiv,
  PhoneSvgContainer,
  CloseContainer,
  HeaderMaxWidthEnterprise,
  ImageContainerEnterprise,
  ImageContainerBackground,
  ImageContainerKotak,
};
