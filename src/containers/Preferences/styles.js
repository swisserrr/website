/* Styles for Preferences container module */
import styled from '@emotion/styled';
import { inter } from 'utils/fonts';
import MuiContainer from '@mui/material/Container';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
`;

const PreferencesContainer = styled(MuiContainer)`
  background-color: white;
  border-radius: 40px;
  margin-top: -120px;
  z-index: 10px;
  margin-bottom: 100px;
  position: relative;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 0px 18px 0px rgba(189, 189, 189, 1);
  box-shadow: 0px 0px 18px 0px rgba(189, 189, 189, 1);
  @media (max-width: 900px) {
    margin-top: 0;
    margin-bottom: 50px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

const PreferenceSubContainer = styled.div`
  padding: 40px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const PrefComponentMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

const LeftPrefMainContainer = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 60%;
  }
`;

const ItemHeading = styled.div`
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  display: flex;
  color: ${({ toggle, theme }) => (toggle ? theme.palette.primary.main : theme.palette.black.third)};
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ItemHeadingRed = styled.div`
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  display: flex;
  color: ${({ theme }) => theme.palette.primary.main};
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const EditText = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: none;
  color: #1a1a1a;
  letter-spacing: -1%;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const ItemContainerInnerText = styled.h3`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  display: flex;
  color: #838383;
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ItemAnswerContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #f8f8f8;
  display: flex;
  margin: 10px 0 0 0;
  align-items: center;
  @media (max-width: 600px) {
    padding: 5px 10px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 71vh;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 900px) {
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const BannerHeading = styled.h1`
  font-size: 8.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 10.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;
  z-index: 9999;
`;

const SubContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const SearchContainer = styled.div`
  width: 3%;
`;

const TabPanContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin: 5.625rem 0;
  position: sticky;
`;

const Heading = styled.h2`
  font-style: normal;
  font-family: ${inter.style.fontFamily};
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.6rem;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;

const RedDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const ContainerItemHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export {
  Container,
  BannerContainer,
  BannerHeading,
  TabPanContainer,
  SearchContainer,
  SubContainer,
  HeadingContainer,
  Heading,
  PreferencesContainer,
  ItemHeading,
  ItemAnswerContainer,
  ItemContainerInnerText,
  LeftPrefMainContainer,
  PrefComponentMainContainer,
  PreferenceSubContainer,
  EditText,
  ItemHeadingRed,
  RedDot,
  ContainerItemHeading,
};
