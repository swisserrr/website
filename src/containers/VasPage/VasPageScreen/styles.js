/* Styles for DiseaseScreen container module */
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const MainBannerContainer = styled.div`
  /* padding-top: 80px; */
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
  font-size: max(36px, min(3vw, 64px));
`;

const CommonHeaderText = styled.h3`
  font-style: normal;
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: max(28px, min(3vw, 64px));
  margin-bottom: 30px;
  @media (max-width: 599px) {
    margin-bottom: 20px;
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
  padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '50px 0 0 0' : '50px 0')};
  @media (max-width: 786px) {
    padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '20px 0 0 0' : '20px 0')};
  }
`;

const HtmlContainer = styled.div`
  margin: 20px 0;
`;

const PointsContainer = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.new};
`;

const SymptomsPointer = styled.div`
  display: flex;
  margin: 5px;
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
  padding-right: 50px;
  @media (max-width: 600px) {
    padding-right: 0px;
  }
`;

const PointsText = styled.p`
  margin: 0 10px 7px 10px;
  font-weight: 400;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  text-align: ${({ textAlign }) => (textAlign ? 'center' : 'none')};
  font-size: 2.4rem;
  line-height: 2.9rem;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const PointsSubText = styled.p`
  margin: 0 10px 10px 10px;
  font-weight: 400;
  font-size: 2rem;
  color: #737373;
  line-height: 2.4rem;
  @media (max-width: 600px) {
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const IconContainerSymptoms = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
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
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    height: 300px;
    border-radius: 20px;
  }
`;

const SubHeadingText = styled.p`
  padding: 10px 0;
  text-align: ${({ center }) => (center ? 'center' : 'none')};
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: max(24px, min(3vw, 48px));
  line-height: max(29px, min(3vw, 58px));
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 37px;
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
  padding: 6% 0;
`;

const CarePlanHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  @media (max-width: 600px) {
    padding-bottom: 20px;
  }
`;

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ color }) => color};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  display: flex;
  padding: 2rem;
  flex-direction: column;
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
`;

const CareIconContainer = styled.div`
  position: relative;
  padding: 2rem;
  width: 62px;
  height: 62px;
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
`;

const CareBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0 0 0;
  @media (max-width: 600px) {
    margin: 20px 10px 30px 10px;
  }
`;

const QuestionsMore = styled.a`
  text-decoration: underline;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0;
  color: ${({ theme }) => theme.palette.blue.dark};
  font-size: 2.4rem;
  line-height: 2.9rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    align-self: center;
    line-height: 1.9rem;
  }
`;

const ExpertContainer = styled.div`
  padding: 20px;
`;

const ExpertTextContainer = styled.div`
  padding: 10px 0;
`;

const ExpertButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 0 20px 0;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
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
  height: 350px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.08);
  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
    padding: 10px;
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
`;

// -=-=-=-=-=-=-=-=-=-=-=-=
const Mainsection = styled(Box)`
  position: relative;
  background: #888888;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ url }) => url});
  @media (max-width: 900px) {
    background-color: #ffffff;
  }
`;

const FormContainer = styled(Box)`
  /* height: calc(100vh + 125px); */
  position: absolute;
  display: flex;
  top: 0;
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

const FooterPadding = styled.div`
  @media (max-width: 600px) {
    padding-bottom: ${({ isPadding }) => (isPadding ? '70px' : null)};
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

const CarouselMainContainer = styled.div`
  width: 95%;
  @media (max-width: 900px) {
    width: 100%;
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
  box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    bottom: -30px;
    left: 38px;
  }
`;

const CareHeading = styled.h4`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  margin: 40px 10px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #1a1a1a;
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 47px;
    margin: 0 10px;
  }
`;

const BannerImageContainer = styled.div`
  width: 130%;
  height: auto;
  @media (max-width: 1300px) {
    width: 110%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const WhoWeAreDescription = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1a1a1a;
  margin-right: 30px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

const DifferentiatorCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  padding: 20px;
  height: 270px;
  @media (max-width: 600px) {
    height: 170px;
  }
`;

const DifferentiatorIcon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  width: 44px;
  height: 44px;
  min-height: 44px;
  @media (max-width: 600px) {
    border-radius: 7px;
    width: 28px;
    height: 28px;
    min-height: 28px;
  }
`;

const DifferentiatorSubText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 16px;
  }
`;
const WhyChooseUsCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
`;

const WhyChooseUsIcon = styled.div`
  background-color: #f4f1eb;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
  }
`;

const WhyChooseUsHeadingText = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.04em;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ color }) => (color ? color : '#000')};
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

const WhyChooseUsSubText = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

const OfferText = styled.h4`
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: ${({ marginDown }) => marginDown};
  color: #fff;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const OfferSubText = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: #fff;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
  }
`;

const CardFrontText = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const CareBannerTextContainer = styled.div`
  padding-left: 20px;
  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;

const DifferentiatorHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  align-self: center;
  padding: 0 150px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 20px;
  }
`;

const PlansSubHeadingMaxWidth = styled.div`
  display: flex;
  align-self: center;
  max-width: 60%;
  margin: 20px 0;
  @media (max-width: 600px) {
    max-width: 100%;
    margin: 10px 0;
  }
`;

const DiffMaxWidth = styled.div`
  max-width: 90%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const OfferSubSubText = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

const WhoWeArePadding = styled.div`
  padding-bottom: 15px;
  @media (max-width: 600px) {
    padding-bottom: 0;
  }
`;

const BackgroundBlur = styled.div`
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
  }
`;

const DifferentiatorCardHeadingText = styled.p`
  padding: 15px 0 10px 0;
  text-align: ${({ center }) => (center ? 'center' : 'none')};
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: max(24px, min(3vw, 40px));
  line-height: max(29px, min(3vw, 50px));
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 37px;
  }
`;
const RedBoxes = styled.span`
  // background: white;
  // border-radius: 5px;
  // padding: 5px;
  color: #cc4746;
  line-height: 4px;
`;

const RightSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
`;

const PlanTitle = styled.h4`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.04em;
  text-align: center;
  color: #cc4746;
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 47px;
    margin: 0 10px;
  }
`;

const PlanDescription = styled.h4`
  font-size: 22px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #cc4746;
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

export {
  CareBottomContainer,
  BannerContainer,
  BannerImageContainer,
  HtmlContainer,
  AboutSection,
  ButtonContainer,
  AboutUsContainer,
  IconContainerCare,
  AboutUsText,
  ExpertContainer,
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
  //-=-==-=-=-
  Mainsection,
  FormContainer,
  ConnectWithUs,
  ConnectText,
  FooterPadding,
  MembersContainer,
  CarouselMainContainer,
  CircleContainer,
  CareHeading,
  WhoWeAreDescription,
  DifferentiatorCard,
  DifferentiatorIcon,
  DifferentiatorSubText,
  WhyChooseUsCard,
  WhyChooseUsIcon,
  WhyChooseUsHeadingText,
  WhyChooseUsSubText,
  OfferText,
  OfferSubText,
  CardFrontText,
  CareBannerTextContainer,
  DifferentiatorHeaderContainer,
  PlansSubHeadingMaxWidth,
  DiffMaxWidth,
  OfferSubSubText,
  WhoWeArePadding,
  BackgroundBlur,
  DifferentiatorCardHeadingText,
  RedBoxes,
  RightSection,
  PlanTitle,
  PlanDescription,
};
