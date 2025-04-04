import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import CustomButton from 'components/CustomButton';
import { inter } from 'utils/fonts';

const Container = styled.div`
  /* max-width: 1920px; */
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
  display: flex;
  max-width: 100%;
  height: 71vh;
  justify-content: center;
  align-items: center;
  z-index: -1;
  flex-direction: column;

  @media (max-width: 1024px) {
    height: 75vh;
  }
  @media (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
`;

const ConciergeHeading = styled.h1`
  font-style: normal;
  font-size: 3.6rem;
  line-height: 4.4rem;
  /* identical to box height, or 126% */
  color: ${({ theme }) => theme.palette.black.third};
  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
  margin-bottom: 2.694rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 1.373rem !important;
    padding: 0 2.364rem !important;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 5.3rem;
  height: 4.4rem;
  width: 4.4rem;
`;

const ServicesContainer = styled(Grid)`
  display: flex;
  padding-left: 16.5%;
  margin-top: 2px !important;
  .scrollerXs {
    flex-wrap: nowrap !important;
    overflow: auto !important;
    padding-left: 0rem !important;
  }
  @media (max-width: 900px) {
    .scrollerXs {
      padding-right: 0rem !important;
      padding-left: 7%;
    }
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 14%;
  @media (max-width: 900px) {
    margin-left: 0%;
  }
`;

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding-top: 40px;
  @media (max-width: 900px) {
    padding-top: 30px;
  }
`;

const SubServiceContainer = styled(Grid)`
  display: flex;
  padding-inline: 14%;
  margin-top: 58px;
  padding-bottom: 83px;
  @media (max-width: 900px) {
    padding-inline: 7% !important;
    margin-top: 28px;
  }
`;
const ServiceSubCategoryDetailContainer = styled(Grid)``;

const ServiceCallBackButtonContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const SubServiceHeading = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.7rem;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const SubServicePoints = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  margin-top: 10px;
  @media (max-width: 900px) {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.573rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  margin-block: 30px;
`;

const Button = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4.392rem;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2rem;
  font-style: normal;
  font-family: ${inter.style.fontFamily};
  text-transform: none;
  letter-spacing: -0.01em;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}!important;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
    justify-content: center;
    font-size: 1.3rem;
    line-height: 1rem;
  }
`;

const MostBookServicesContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main};
  padding-top: 100px;
  padding-bottom: 122px;
  padding-inline: 14%;
  @media (max-width: 900px) {
    padding-top: 50px !important;
    padding-bottom: 82px !important;
    padding-inline: 0% !important;
  }
`;

const PrevArrow = styled.button`
  bottom: 15.25rem;
  margin-right: 2rem;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 2.75rem;
  width: 2.75rem;
  @media (max-width: 600px) {
    height: 2.25rem;
    width: 2.25rem;
    margin-right: 1rem;
  }
`;

const NextArrow = styled.button`
  bottom: 15.25rem;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 2.75rem;
  width: 2.75rem;
  @media (max-width: 600px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 19.2rem;
  @media (max-width: 900px) {
    margin-right: 10rem;
  }
  @media (max-width: 600px) {
    margin-right: 3rem;
  }
`;

const ArrowIconImage = styled.div`
  height: 1.107rem;
  width: 0.719rem;
  @media (max-width: 600px) {
    height: 1rem;
    width: 0.6rem;
  }
`;

const MostPrevArrow = styled.button`
  position: absolute;
  right: 4.813rem;
  top: -6rem;
  border-radius: 3rem;
  display: flex !important;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 2.75rem;
  width: 2.75rem;
  z-index: 1;
  @media (max-width: 900px) {
    height: 2.25rem;
    width: 2.25rem;
  }
  @media (max-width: 600px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

const MostNextArrow = styled.button`
  position: absolute;
  right: 0;
  top: -6rem;
  border-radius: 3rem;
  display: flex !important;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 2.75rem;
  width: 2.75rem;
  z-index: 1;
  @media (max-width: 900px) {
    height: 2.25rem;
    width: 2.25rem;
  }
  @media (max-width: 600px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

export {
  Container,
  BannerContainer,
  ConciergeHeading,
  HeadingContainer,
  ImageContainer,
  ServicesContainer,
  MainContainer,
  SubServiceContainer,
  ServiceSubCategoryDetailContainer,
  ServiceCallBackButtonContainer,
  SubServiceHeading,
  SubServicePoints,
  Divider,
  Button,
  MostBookServicesContainer,
  Relativecard,
  PrevArrow,
  NextArrow,
  ArrowIconContainer,
  ArrowIconImage,
  MostPrevArrow,
  MostNextArrow,
};
