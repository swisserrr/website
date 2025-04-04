/* Styles for BusinessPartner container module */
import styled from '@emotion/styled';
import { inter } from 'utils/fonts';

const MainBannerContainer = styled.div`
  padding-top: 7rem;
  @media (max-width: 600px) {
    padding-top: 9.5rem;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 50vh;
  }
`;

const BannerSubContainer = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
  }
`;
const CustomFormContainer = styled.div`
  z-index: 1;
  @media (max-width: 600px) {
    width: 100% !important;
    display: flex;
  }
  display: flex;
  // height: 100rem;
  // overflow:hidden;
  // margin-right: 5rem;
`;

const TheEmohaStorySectionPadding = styled.section`
  padding: 50px 0;
  @media (max-width: 900px) {
    padding: 0px 0 20px 0;
  }
`;

const ExcitingOpportunitySectionPadding = styled.section`
  padding: 50px 0px 0px 0px;
  @media (max-width: 786px) {
    padding: 30px 0px 0px 0px;
  }
`;

const IconImageDescriptionWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  flex-direction: column;
`;

const IconImageDescriptionInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 5rem;
  @media (max-width: 1100px) {
    padding-left: 0rem;
  }
  @media (max-width: 900px) {
    margin-top: 2.5rem;
  }
`;

const IconImageWrapper = styled.div`
  background-color: #f4ebed;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExcitingOpportunityRightIcon = styled.img`
  margin: 1rem;
  height: 4rem;
  width: 4rem;
  @media (max-width: 900px) {
    margin: 0.8rem;
    height: 3rem;
    width: 3rem;
  }
`;

const ExcitingOpportunityRightDescription = styled.div`
  font-weight: 500;
  font-size: 3rem;
  padding-left: 4rem;
  @media (max-width: 1200px) {
    font-size: 2.4rem;
    padding-left: 3rem;
  }
  @media (max-width: 900px) {
    font-size: 1.8rem;
    padding-left: 2rem;
  }
`;

const BoldText = styled.strong`
  font-weight: 600;
`;

const ServicesHeading = styled.h3`
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4.8rem;
  font-family: ${inter.style.fontFamily};
  @media (max-width: 767px) {
    font-size: 2.4rem;
    line-height: 2.9rem;
  }

  @media (max-width: 992px) {
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  @media (max-width: 600px) {
    text-align: center;

    font-size: 2.4rem;
    line-height: 2.9rem;
  }
`;

const ServicesDescription = styled.ul`
  margin-top: 30px;
  list-style-type: square;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  margin-top: 30px;
  color: ${({ theme }) => theme.palette.black.third};

  @media (max-width: 600px) {
    margin-top: 15px;
    text-align: left;
  }
  @media (max-width: 992px) {
    font-size: 1.7rem;
  }
`;

const ServiceImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 380px;
  position: relative;
  border-radius: 4rem;
  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
  }
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;
const IncredibleGrowthSubheading = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin: 23px 0px 30px 0px;
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 23px 0px 30px 0px;
    text-align: center;
  }
`;
const IncredibleGrowtBoxContainer = styled.div`
  display: flex;
  width: 593px;
  padding: 20px 0px;
  align-items: flex-start;
  gap: 23.104px;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;
const IncredibleGrowtBoxHeader = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 46.208px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 55.449px */
  letter-spacing: -1.848px;
  @media (max-width: 600px) {
    font-size: 26.876px;
  }
`;
const IncredibleGrowtBoxText = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const IncredibleGrowtBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.701px;
  flex: 1 0 0;
  @media (max-width: 600px) {
    align-items: center !important;
  }
`;

const HowItsWorksHeading = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
const HowItsWorksSubHeading = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  letter-spacing: -1.6px;
  margin: 15px 0px 30px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
const TimelineHeading = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.96px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const TimelineSubHeading = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const TheEmohaStoryCard = styled.div`
  background-color: #f4ebed;
  border-radius: 40px;
  display: flex;
  padding: 5rem 3rem;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    border-radius: 20px;
    padding: 2rem;
  }
`;

// const TheEmohaStoryCardContentValue = styled.div`
//   font-size: 8rem;
//   color: #cc4746;
//   margin-bottom: 1.2rem;
//   font-weight: 600;
//   @media (max-width: 900px) {
//     font-size: 3.3rem;
//     text-align: center;
//   }
// `;

// const TheEmohaStoryCardContentInfo = styled.div`
//   font-size: 2rem;
//   font-weight: 500;
//   line-height: 2.4rem;
//   color: #1a1a1a;
//   @media (max-width: 900px) {
//     font-size: 1.4rem;
//     text-align: center;
//   }
// `;

// const WhoWeAreMainCardsContainer = styled.div`
//   margin: 0rem 2rem;
//   @media (max-width: 600px) {
//     margin: 0rem 4rem;
//   }
// `;

// const TheEmohaStoryCard = styled.div`
//   background-color: #f4ebed;
//   border-radius: 40px;
//   display: flex;
//   padding: 5rem 3rem;
//   margin-bottom: 10px;
//   @media (max-width: 600px) {
//     border-radius: 20px;
//     padding: 2rem;
//   }
// `;

const TheEmohaStoryCardContentValue = styled.div`
  font-size: 6rem;
  color: #cc4746;
  margin-bottom: 1.2rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 3.3rem;
    text-align: center;
  }
`;

const TheEmohaStoryCardContentInfo = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: #1a1a1a;
  @media (max-width: 900px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const WhoWeAreMainCardsContainer = styled.div`
  margin: 0rem 2rem;
  padding-bottom: 4rem;
  @media (max-width: 600px) {
    margin: 0rem 2rem;
  }
`;

const ServicesPartnershipDescription = styled.p`
  text-align: center;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.6rem;
  font-family: ${inter.style.fontFamily};
  padding-top: 2rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const MainTopPartnershipWrapper = styled.div`
  margin: 0rem 7.4rem;
  text-align: center;
  padding: 2rem 0rem;
  @media (max-width: 600px) {
    margin: 0rem;
  }
  @media (max-width: 992px) {
    margin: 0rem;
  }
`;

const MainBottomPartnershipWrapper = styled.div`
  text-align: center;
  padding: 2rem 0rem;
`;

const PartnerShipCard = styled.div`
  margin-bottom: 10px;
  text-align: start;
  padding: 0rem 1.5rem;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  padding: 1rem 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const PartnerShipCardHeading = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-top: 1rem;
  line-height: 3.3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
  @media (max-width: 992px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const PartnerShipCardInfo = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.01em;
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 992px) {
    line-height: 1.8rem;
  }
`;

const PartnerShipButtonWrapper = styled.div`
  padding: 2rem 0rem;
  text-align: center;
`;

const PartnerShipButton = styled.button`
  border: 2px solid #cc4746;
  color: #cc4746;
  border-radius: 3.9rem;
  padding: 15px 28px 15px 28px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  &:hover {
    background-color: #cc4746;
    color: #ffffff;
    transition: 0.5s;
  }
  @media (max-width: 600px) {
    border-radius: 3.4rem;
    border: 1px solid #cc4746;
    padding: 12px 25px 12px 25px;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  @media (max-width: 992px) {
    border-radius: 3.4rem;
    border: 1px solid #cc4746;
    padding: 12px 25px 12px 25px;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

export {
  MainBannerContainer,
  BannerContainer,
  BannerSubContainer,
  ButtonContainer,
  TheEmohaStorySectionPadding,
  ServicesHeading,
  ServicesDescription,
  ServiceImageContainer,
  TheEmohaStoryCard,
  TheEmohaStoryCardContentValue,
  TheEmohaStoryCardContentInfo,
  WhoWeAreMainCardsContainer,
  IncredibleGrowthSubheading,
  IncredibleGrowtBoxContainer,
  IncredibleGrowtBoxes,
  IncredibleGrowtBoxHeader,
  IncredibleGrowtBoxText,
  HowItsWorksHeading,
  HowItsWorksSubHeading,
  TimelineHeading,
  TimelineSubHeading,
  ServicesPartnershipDescription,
  MainTopPartnershipWrapper,
  MainBottomPartnershipWrapper,
  PartnerShipCard,
  IconWrapper,
  PartnerShipCardHeading,
  PartnerShipCardInfo,
  PartnerShipButtonWrapper,
  PartnerShipButton,
  ExcitingOpportunitySectionPadding,
  IconImageDescriptionWrapper,
  IconImageDescriptionInnerWrapper,
  IconImageWrapper,
  ExcitingOpportunityRightIcon,
  ExcitingOpportunityRightDescription,
  BoldText,
  CustomFormContainer,
};
