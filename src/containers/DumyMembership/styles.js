import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import CustomButton from 'components/CustomButton';

const HeadingContainer = styled.div`
  margin-bottom: 5.5rem;
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
  color: ${({ theme }) => theme.palette.white.main};
  @media only screen and (max-width: 900px) {
    margin-top: 15px;
    color: ${({ theme }) => theme.palette.black.third};
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 18.15px;
    margin-top: -50px;
  }
`;

const PlanBenefitContainer = styled.div`
  padding-top: 60px;
  background-color: #f7f7f7;
  display: flex;
  @media (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 50px;
  }
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
  height: 71vh;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  z-index: 0;
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

  @media (max-width: 1024px) {
    height: 50vh;
  }
  @media (max-width: 900px) {
    position: relative;
    height: 45vh;
  }
  @media (max-width: 600px) {
    position: relative;
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const BannerHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  line-height: 4.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1%;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  margin-top: 15rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const MobileBannerHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  display: none;
  align-items: center;
  text-align: center;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  @media (max-width: 900px) {
    display: flex;
    font-size: 3.6rem;
    line-height: 4.8rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
  @media (max-width: 600px) {
    display: flex;
    font-size: 2.2rem;
    line-height: 2.663rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
`;

const SwitchButton = styled(Input)`
  margin-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const ImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const BrochureButton = styled(CustomButton)`
  padding: 2.8rem 3.8rem;
  background-color: ${({ theme }) => theme.palette.black.third};
  border-radius: 4.392rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  margin: 0 auto;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  color: ${({ theme }) => theme.palette.white.main};
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2.057rem;
  margin-top: 4.342rem;
  margin-bottom: 4.614rem;
  @media (max-width: 600px) {
    margin-top: 03.594rem;
    margin-bottom: 6.09rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.815rem;
    padding: 1.5rem 2rem;
  }
`;

const DownloadBrochure = styled.a`
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

const DownloadBrochureText = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
`;

const FooterPadding = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 70px;
  }
`;

const BasicBenefitsTitle = styled.p`
  font-family: Inter;
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 4.8rem;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 1.6rem;
  @media (max-width: 600px) {
    font-size: 2.4rem;
    line-height: 2rem;
  }
`;

const BasicBenefitsHeading = styled.p`
  font-family: 'Inter';
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
  text-align: left;
  color: #cc4746;
  margin-top: 16px;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const BasicBenefitsDesc = styled.p`
  font-family: 'Inter';
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-align: left;
  margin-top: 0.8rem;
  margin-bottom: 6rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 0rem;
  }
`;

const AddOnTabs = styled.div`
  cursor: pointer;
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.6rem;
  text-align: center;
  color: #cc4746;
  border-bottom: 2px solid #cc4746;
  padding-bottom: 1.6rem;
  white-space: nowrap;
  pointer-events: all;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.5rem;
    margin-bottom: 0rem;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  /* height: 110px; */
  flex-direction: row;
  gap: 3rem;
  background-color: rgb(247, 247, 247);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: sticky;
  top: 0px;
  @media (max-width: 600px) {
    margin-top: 0rem;
    gap: 2rem;
    height: 50px;
  }
`;

const TabWrapperContent = styled.div`
  height: 50rem;
  overflow-y: scroll;
`;

const AddOnContent = styled.div`
  padding: 6.4rem 3.2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #f4f1eb;
  margin-top: 4.8rem;
  font-size: 6.6rem;
  @media (max-width: 600px) {
    display: block;
    padding: 2.5rem;
    margin-top: 1.5rem;
  }
`;

const PlanSampleNextArrow = styled.button`
  position: absolute;
  left: -50px;
  bottom: 70%;
  border-radius: 4rem;
  padding: 0.5rem;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 0px 15px 0px #0000001a;
`;

const PlanSamplePrevArrow = styled.button`
  position: absolute;
  border-radius: 4rem;
  z-index: 1px;
  right: -50px;
  bottom: 70%;
  padding: 0.5rem;
  box-shadow: 0px 0px 15px 0px #0000001a;
  background-color: white;
`;

const AddOnPlansButton = styled.p`
  cursor: pointer;
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  text-align: center;
  border-radius: 4rem;
  color: #fff;
  width: 20rem;
  padding: 1.6rem 3.2rem;
  background-color: #cc4746;
  margin-top: 2.5rem;
`;

const AddOnPlansFeature = styled.p`
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: -0.01em;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`;

const AddOnPlansWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const AddOnPlansDot = styled.div`
  min-width: 3%;
  font-size: 1.5rem;
  font-weight: 800;
`;

const AddOnPlansPrice = styled.p`
  font-family: Inter;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.3rem;
  text-align: left;
  color: #cc4746;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
    letter-spacing: -0.04em;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

const AddOnPlansTitle = styled.p`
  font-family: Inter;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  letter-spacing: -0.04em;
  text-align: left;
  margin-bottom: 2.4rem;
  @media (max-width: 600px) {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 2.7rem;
    margin-bottom: 1rem;
  }
`;

const WholeTabWrapper = styled.div``;

const PlanButtonWrapper = styled.div`
  padding: 2rem 0rem;
  text-align: center;
`;

const PlanButton = styled.button`
  border: 2px solid #cc4746;
  background-color: #cc4746;
  color: #ffffff;
  border-radius: 3.9rem;
  padding: 15px 28px 15px 28px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  &:hover {
    border: 2px solid #cc4746;
    color: #cc4746;
    background-color: transparent;
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

const PlanRequestCall = styled.a`
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

const PlanRequestText = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
`;

export {
  HeadingContainer,
  SubHeading,
  PlanBenefitContainer,
  Relativecard,
  BannerContainer,
  BannerHeading,
  MobileBannerHeading,
  SwitchButton,
  ImageContainer,
  BrochureButton,
  DownloadBrochure,
  DownloadBrochureText,
  FooterPadding,
  BasicBenefitsTitle,
  BasicBenefitsHeading,
  BasicBenefitsDesc,
  AddOnTabs,
  TabWrapper,
  AddOnContent,
  TabWrapperContent,
  PlanSampleNextArrow,
  PlanSamplePrevArrow,
  AddOnPlansButton,
  AddOnPlansFeature,
  AddOnPlansPrice,
  AddOnPlansTitle,
  WholeTabWrapper,
  PlanButtonWrapper,
  PlanButton,
  AddOnPlansWrapper,
  AddOnPlansDot,
  PlanRequestCall,
  PlanRequestText,
};
