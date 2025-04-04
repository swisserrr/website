/* Styles for BenifitsForYou container module */
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { inter } from 'utils/fonts';
import CustomButton1 from '../../components/CustomButton';

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 6.5rem;
  @media (max-width: 600px) {
    padding-left: 1.813rem;
  }
  background-color: #f8f8f8;
`;

const FadeContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  height: 80px;
  background: ${({ flip }) => `linear-gradient(${flip ? '180' : '360'}deg, rgba(255, 255, 255, 0) 0%, #fff 100%)`};
  @media (max-width: 600px) {
    height: 40px;
  }
`;

const FadeContainer2 = styled.div`
  z-index: -1;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 120px;
  background: ${({ flip }) =>
    `linear-gradient(${flip ? '180' : '360'}deg, rgba(244, 241, 235, 1) 0%, rgba(244, 241, 235, 0) 100%)`};
  @media (max-width: 600px) {
    height: 80px;
  }
`;

const PageContainer = styled.div`
  max-width: 1150px;
  margin: auto;
  @media (max-width: 600px) {
    max-width: 100%;
  }
  background-color: #f8f8f8;
`;

const ViewAllContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-top: 3rem;
  /* padding-left: 7.9rem; */
  padding-right: 7.9rem;

  @media (max-width: 992px) {
    padding-top: 0rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media (max-width: 600px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

const ViewAllText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 32px;
  margin-right: 1rem;
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media (max-width: 992px) {
    font-size: 2.1rem;
  }
  color: ${({ theme }) => theme.palette.black.main};
`;

const Heading = styled.h2`
  font-size: 4.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.8rem;
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
  @media (max-width: 992px) {
    font-size: 4.2rem;
  }
  @media (max-width: 767px) {
    font-size: 3.2rem;
  }
`;

const ServicesCardContainer = styled.div`
  height: 22rem;
  position: relative;
  @media (max-width: 767px) {
    height: 95px;
    margin: 0 0 0 22px;
  }
`;

const ServicesHeading = styled.h3`
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.8rem;
  text-align: center;
  font-family: ${inter.style.fontFamily};
  margin-top: 113px;
  @media (max-width: 767px) {
    font-size: 2.7rem;
    line-height: 3rem;
  }

  @media (max-width: 992px) {
    font-size: 2.7rem;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
    line-height: 21px;
    margin-top: 30px;
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
  width: 470px;
  height: 470px;
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

const CustomButton = styled(Button)`
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 21px;
  padding: 18px 36px;
  /* identical to box height */
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 7rem;
  margin-top: 140px;
  background-color: transparent;
  border-color: '#DA504A';
  border-width: 2px;
  color: '#DA504A';
  bottom: 0;
  text-transform: capitalize;
  @media (max-width: 900px) {
    font-size: 1.5rem;
    line-height: 18px;
    justify-content: center;
    align-items: center;
    padding: 15px 23px;
    margin-top: 60px;
    background-color: transparent;
    border-color: '#DA504A';
    color: '#DA504A';
    border-width: 1px;
    text-align: center;
  }
`;

const ServiceDetailContainer = styled(Grid)`
  display: flex;
  flex: 1;
  @media (max-width: 767px) {
    padding: 15px !important;
    text-align: center;
    align-items: center;
    button {
      margin: 20px auto;
    }
  }

  @media (max-width: 600px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 767px) {
    button {
      padding: 13px;
    }
  }
`;

const CustomButtonComponent = styled(CustomButton1)`
  text-transform: capitalize;
  padding: 0.8rem 0.1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const SlideRightContainer = styled.div`
  position: absolute;
  display: ${({ hide }) => (hide ? 'block' : 'none')};
  right: -55px;
  z-index: 20;
  top: calc(100% - 30px);
  @media (max-width: 1200px) {
    right: -15px;
  }
`;

const SlideRight = styled.button`
  width: 44px;
  height: 44px;
  background-color: #fff;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
`;

const SlideLeftContainer = styled.div`
  position: absolute;
  display: ${({ hide }) => (hide ? 'block' : 'none')};
  left: -55px;
  z-index: 20;
  top: calc(100% - 30px);
  @media (max-width: 600px) {
    left: -30px;
  }
`;

const SlideLeft = styled.button`
  width: 44px;
  height: 44px;
  background-color: #fff;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  -webkit-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.63);
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 40rem;
  width: 40rem;
  @media (max-width: 767px) {
    height: 13.3rem;
    width: 13.3rem;
  }
`;

const LeafContainerLeft = styled.div`
  position: absolute;
  top: -180px;
  right: -350px;
  /* max-width: 350px;
  aspect-ratio: 0.69/1.2; */
  z-index: -1;
  @media (max-width: 600px) {
    top: -80px;
    right: -150px;
    /* top: -180px;
    right: -350px; */
    /* max-width: 110px;
    aspect-ratio: 1/1.5; */
  }
`;

const LeafLeft = styled.div`
  width: 350px;
  aspect-ratio: 0.69/1.2;
  position: relative;
  @media (max-width: 600px) {
    width: 110px;
    aspect-ratio: 1/1.5;
  }
`;
const LeafContainerRight = styled.div`
  transform: rotate(-10deg);
  position: absolute;
  bottom: -340px;
  left: -230px;
  /* width: 350px;
  aspect-ratio: 0.69/1.2; */
  z-index: -1;
  @media (max-width: 600px) {
    bottom: -50px;
    left: -100px;
    /* max-width: 110px;
    aspect-ratio: 1/1.5; */
  }
`;

const LeafRight = styled.div`
  width: 350px;
  aspect-ratio: 0.69/1.2;
  position: relative;
  z-index: 0;
  @media (max-width: 600px) {
    width: 110px;
    aspect-ratio: 1/1.5;
  }
`;

export {
  Heading,
  SectionContainer,
  SectionHeader,
  ViewAllContainer,
  ViewAllText,
  ServicesCardContainer,
  ServicesHeading,
  ServicesDescription,
  ServiceImageContainer,
  CustomButton,
  ServiceDetailContainer,
  CustomButtonComponent,
  PageContainer,
  SlideRightContainer,
  SlideRight,
  SlideLeftContainer,
  SlideLeft,
  ImageContainer,
  FadeContainer,
  LeafLeft,
  LeafContainerLeft,
  LeafContainerRight,
  LeafRight,
  FadeContainer2,
};
