/* Styles for DiseaseScreen container module */
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';

const MainBannerContainer = styled.div`
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 95px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 71vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 50vh;
  }
`;

const BannerSubContainer = styled.div`
  width: 100%;
`;

const SectionContainer = styled.div`
  background-color: #f8f8f8;
`;

const ButtonContainer = styled.div`
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutUsText = styled.h2`
  font-style: normal;
  font-weight: 600;
  padding-bottom: 15px;
  font-size: max(36px, min(3vw, 64px));
`;

const CommonHeaderText = styled.h3`
  font-style: normal;
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#1a1a1a')};
  font-size: 3.6rem;
  margin-bottom: 30px;
  line-height: normal;
  @media (max-width: 599px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

const ReadMore = styled.p`
  text-decoration: underline;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  margin: ${({ disableMargin }) => (disableMargin ? '0' : '15px 0 ')};
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
  padding: 50px 0;
  @media (max-width: 786px) {
    padding: 20px 0;
  }
`;

const AboutSectionNew = styled.section`
  padding: 0 0 50px 0;
  @media (max-width: 786px) {
    padding: 0 0 20px 0;
  }
`;

const HtmlContainer = styled.div`
  margin: 20px 20px 20px 0;
  @media (max-width: 600px) {
    margin: 0 0 20px 0;
  }
`;

const PointsContainer = styled.div`
  display: flex;
  margin: 10px 5px;
  align-items: center;
  border-bottom: ${({ hideBorderDesktop, theme }) =>
    hideBorderDesktop ? '0px' : `1px solid ${theme.palette.secondary.new}`};
  @media (max-width: 600px) {
    border-bottom: ${({ hideBorderMobile, theme }) =>
      hideBorderMobile ? '0px' : `1px solid ${theme.palette.secondary.new}`};
  }
`;

const SymptomsPointer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: ${({ hideBorderDesktop, theme }) =>
    hideBorderDesktop ? '0px' : `1px solid ${theme.palette.secondary.new}`};
  @media (max-width: 600px) {
    border-bottom: ${({ hideBorderMobile, theme }) =>
      hideBorderMobile ? '0px' : `1px solid ${theme.palette.secondary.new}`};
  }
`;

const SymptomsImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 50px;
  @media (max-width: 600px) {
    padding: 0 0 40px 0;
  }
`;

const PointsText = styled.p`
  margin: 0 10px 7px 0px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? 'center' : 'none')};
  font-size: 1.7rem;
  line-height: 2.9rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 2.4rem;
  }
`;

const PointsSubText = styled.p`
  margin: 0 10px 10px 0px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.7rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`;

const ExpertPointsText = styled.p`
  margin: 0 10px 7px 0px;

  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? 'center' : 'none')};
  font-size: 2.4rem;
  line-height: 2.9rem;
  @media (max-width: 600px) {
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
`;

const ExpertPointsSubText = styled.p`
  margin: 0 10px 10px 0px;
  font-weight: 400;
  font-size: 2rem;
  color: #9a9a9a;
  line-height: 1.7rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`;

const IconContainerSymptoms = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  padding: 10px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const IconContainerCare = styled.div`
  width: 114px;
  height: 114px;
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 77px;
    height: 77px;
    position: relative;
    border-radius: 10px;
  }
`;

const CareBannerContainer = styled.div`
  position: relative;
  height: 450px;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    height: 300px;
    padding: 2rem 0.8rem 2rem 0.8rem;
  }
`;

const SubHeadingText = styled.p`
  padding: 10px 0;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ toggle }) => (toggle ? '#fff' : '#1a1a1a')};
  font-size: 2.4rem;
  line-height: normal;
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 1.7rem;
  }
`;

const ResourseHeaderPaddingText = styled.div`
  padding: 0 0 0 0px;

  @media (max-width: 600px) {
    padding: 0 0 0 15px;
  }
`;

const BannerSecondContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 12;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 40px 0;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const CarePlanHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ disablePadding }) => (disablePadding ? '0' : '40px')};
  @media (max-width: 600px) {
    padding-bottom: ${({ disablePadding }) => (disablePadding ? '0' : '20px')};
  }
`;

const CardItemContainer = styled.div`
  height: 100%;
  padding: ${({ toggle }) => (toggle ? '3rem' : '4rem')};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: ${({ toggle }) => (toggle ? '1rem' : '4rem')};
  }
`;

const CardItemBackText = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 19px;
  font-weight: 400;
  color: #fff;
`;

const CardItemFrontText = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #000;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const CareIconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
`;

const CareBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
  @media (max-width: 600px) {
    margin: 20px 10px 0 10px;
  }
`;

const QuestionsMore = styled.a`
  text-decoration: underline;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0;
  color: ${({ theme }) => theme.palette.blue.dark};
  font-size: 2rem;
  line-height: 2.9rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    align-self: center;
    line-height: 1.9rem;
  }
`;
const ExpertContainerLink = styled(Link)`
  @media (max-width: 600px) {
    border-radius: 1rem;
  }
`;

const ExpertContainer = styled.div`
  padding: 20px;
  aspect-ratio: 1;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const ResourcesContainer = styled.div`
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const ExpertTextContainer = styled.div`
  padding: 10px 0;
`;

const ExpertButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 0 4rem 0;
  @media (max-width: 600px) {
    margin: 0 0 1rem 0;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5.5rem 20px 20px 0;
  padding: 0 10px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 2.5rem 0 0 0;
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
  }
`;

const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ServicesContainer = styled(Grid)`
  display: flex;
  width: 130%;
  margin-top: 2px !important;
  .scrollerXs {
    flex-wrap: nowrap !important;
    overflow: auto !important;
    padding-left: 0rem !important;
  }
  @media (max-width: 900px) {
    width: 100%;
    .scrollerXs {
      padding-right: 0rem !important;
    }
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

const ArrowIconImage = styled.div`
  height: 1.107rem;
  width: 0.719rem;
  @media (max-width: 600px) {
    height: 1rem;
    width: 0.6rem;
  }
`;

const ReviewContainer = styled.div`
  width: 350px;
  height: 30rem;
  display: flex;
  gap: 40px;
  flex-direction: column;
  border-radius: 20px;
  margin: 10px 10px 0 0;
  padding: 40px 20px;
  box-shadow: 0px 0px 5px 2.5px rgba(0, 0, 0, 0.08);
  @media (max-width: 600px) {
    width: 250px;
    height: 240px;
    padding: 30px 20px 10px 20px;
    margin: 10px;
    border-radius: 10px;
  }
`;

const ButtonContainerNew = styled(Box)`
  background: #f8f8f8;
  padding: 50px 0;
  @media (max-width: 600px) {
    padding: 30px 0px;
  }
`;

const StarContainer = styled.span`
  color: #ff8a00;
  font-size: 29px;
  padding-right: 5px;
  @media (max-width: 600px) {
    font-size: 19px;
    padding-right: 2px;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dcdcdc;
`;

const PointsCareContainer = styled.div`
  margin-left: 15px;
`;

const PointsCareHeading = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.04em;
  text-align: left;
  margin: 0 10px 7px 0px;
  @media (max-width: 600px) {
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.04em;
    text-align: left;
  }
`;

const BannerText = styled.h3`
  font-style: normal;
  font-weight: 600;
  max-width: 60%;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: 3.6rem;
  text-align: center;
  line-height: normal;
  @media (max-width: 599px) {
    font-size: 1.7rem;
    max-width: 100%;
  }
`;

const HtmlCausesContainer = styled.div`
  max-width: 80%;
  margin: 0px 20px 20px 0;
  @media (max-width: 600px) {
    max-width: 100%;
    margin: 0 0 20px 0;
  }
`;

const MemberText = styled.p`
  padding: 10px 0;
  font-weight: 600;
  margin: 0 20px 20px 20px;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: 4.8rem;
  line-height: normal;
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 2.4rem;
  }
`;

const AboutImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 600px) {
    border-radius: 20px;
  }
`;

const SymptomsImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`;

const CareBannerHeadingText = styled.h3`
  font-style: normal;
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#1a1a1a')};
  font-size: 3.6rem;
  margin-bottom: 30px;
  line-height: normal;
  @media (max-width: 599px) {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }
`;

const AboutUsHeaderContainer = styled.div`
  margin: 0 20px 0 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`;
const AboutUsDescriptionContainer = styled.div`
  margin: 0 40px 0 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`;
const PointerSpacing = styled.div`
  margin: 0 0 0 20px;
  @media (max-width: 600px) {
    margin: 0 0 0 10px;
  }
`;

const HtmlSymptomContainer = styled.div`
  margin: 0px 0px 20px 0;
  @media (max-width: 600px) {
    margin: 0 0 20px 0;
  }
`;

const BannerMaxWidthContainer = styled.div`
  max-width: 70%;
  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

const ExpertHeadingText = styled.p`
  padding: 10px 0;
  font-weight: 600;
  text-align: 'centerl';
  margin-bottom: 20px;
  color: ${({ toggle }) => (toggle ? '#fff' : '#1a1a1a')};
  font-size: 4.8rem;
  line-height: normal;
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 2.4rem;
  }
`;

const ScrollContainerMain = styled(ScrollContainer)`
  display: flex;
  padding-left: 4.9rem;
  padding-right: 25%;
  @media (max-width: 600px) {
    padding-right: 0;
  }
`;

const AboutSectionPadding = styled.section`
  padding: 50px 0;
  @media (max-width: 786px) {
    padding: 40px 0 20px 0;
  }
`;

const SymptomsPadding = styled.section`
  padding: 50px 0 90px 0;
  @media (max-width: 786px) {
    padding: 40px 0 20px 0;
  }
`;

const BannerDescriptionText = styled.p`
  margin: 0 10px 7px 0px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? 'center' : 'none')};
  font-size: 2.4rem;
  line-height: 2.9rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 2.4rem;
  }
`;

const PointsSymptomsText = styled.p`
  margin: 0 10px 7px 0px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? 'center' : 'none')};
  font-size: 2rem;
  line-height: 2.9rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 2.4rem;
  }
`;

const PointsSubCareText = styled.p`
  margin: 0 10px 10px 0px;
  font-weight: 400;
  font-size: 2rem;
  color: #737373;
  line-height: 2.4rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`;

const HeadingExpertContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5.5rem 20px 0px 0;
  padding: 0 10px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 2rem 2rem 0 2rem;
  }
`;

export {
  HeadingExpertContainer,
  ExpertPointsText,
  ExpertPointsSubText,
  PointsSubCareText,
  CareBottomContainer,
  Separator,
  BannerContainer,
  HtmlContainer,
  AboutSection,
  ButtonContainer,
  AboutUsContainer,
  IconContainerCare,
  AboutUsText,
  PointsCareContainer,
  ExpertContainer,
  HtmlCausesContainer,
  BannerSecondContainer,
  ReadMore,
  CommonHeaderText,
  PointsContainer,
  PointsText,
  SymptomsPointer,
  SymptomsImageContainer,
  IconContainerSymptoms,
  PointsSubText,
  CareBannerContainer,
  SubHeadingText,
  CarePlanHeader,
  PointsSymptomsText,
  CardItemContainer,
  CardItemBackText,
  CardItemFrontText,
  CareIconContainer,
  QuestionsMore,
  ExpertTextContainer,
  ExpertButtonContainer,
  HeadingContainer,
  ConciergeHeading,
  ArrowIconContainer,
  ServicesContainer,
  PrevArrow,
  NextArrow,
  ArrowIconImage,
  ReviewContainer,
  ButtonContainerNew,
  MainBannerContainer,
  BannerSubContainer,
  SectionContainer,
  StarContainer,
  AboutSectionNew,
  ExpertContainerLink,
  BannerText,
  MemberText,
  AboutImage,
  SymptomsImage,
  HtmlSymptomContainer,
  ResourcesContainer,
  CareBannerHeadingText,
  AboutUsHeaderContainer,
  AboutUsDescriptionContainer,
  PointerSpacing,
  BannerMaxWidthContainer,
  ExpertHeadingText,
  ScrollContainerMain,
  ResourseHeaderPaddingText,
  AboutSectionPadding,
  SymptomsPadding,
  PointsCareHeading,
  BannerDescriptionText,
};
