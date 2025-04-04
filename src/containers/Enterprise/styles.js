/* Styles for Preferences container module */
import styled from '@emotion/styled';
import { inter } from 'utils/fonts';
import MuiContainer from '@mui/material/Container';
import Button from 'components/CustomButton';
import Input from 'components/CustomInput';
import Select from '@mui/material/Select';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
`;

const PreferencesContainer = styled(MuiContainer)`
  background-color: white;
  border-radius: 40px;
  margin-top: -300px;
  z-index: 10px;
  margin-bottom: 100px;
  background-color: #f4f1eb;
  position: relative;
  @media (max-width: 900px) {
    width: 95%;
    border-radius: 10px;
    margin-top: -70px;
    margin-bottom: 50px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

const PreferenceSubContainer = styled.div`
  padding: 20px;
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
  height: 470px;
  background-color: #da504a;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 300px;
  }
`;

const BannerHeadingTextContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

const WelcomeHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  line-height: 29px;
  letter-spacing: -0.04em;
  text-align: center;
  color: #fff;
  margin: 20px 0;
  @media (max-width: 900px) {
  }
`;

const WelcomeSubHeading = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  width: 70%;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const CustomSelect = styled(Select)`
  width: 100% !important;
  height: 4rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.5rem !important;
  margin-bottom: ${({ marginToggle }) => (marginToggle ? '2rem' : '0')};
  border: none !important;
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    margin-bottom: ${({ marginToggle }) => (marginToggle ? '1rem' : '0')};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const CustomInput = styled(Input)`
  font-size: 1.5rem !important;
  margin: 0;
  margin-bottom: 0;
  &::placeholder {
    color: ${({ theme, disabled, error }) =>
      error ? theme.palette.primary.main : disabled ? theme.palette.secondary.dark : '#838383'};
    font-size: 15px;
  }
  color: ${({ disabled }) => (disabled ? 'black' : 'none')};
`;

const CustomButton = styled(Button)`
  text-transform: capitalize;
  font-size: 1.3rem;
`;

const CustomButtonHomepage = styled(Button)`
  text-transform: capitalize;
  font-size: 1.3rem;
  border-color: black;
  border-width: 2px;
  color: #000;
`;

const LocationContainer = styled.div`
  margin-top: 10px;
`;

const FormHeading = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #cc4746;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  margin: 20px 0;
  @media (max-width: 900px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: -0.04em;
    text-align: left;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const DetailBoxContainer = styled.div`
  width: ${({ widthToggle }) => (widthToggle ? '50%' : '25%')};
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const CombineTextComponentBox = styled.div`
  margin: 0 10px 5px 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px 0;
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    margin: 15px 0 15px 0;
  }
`;

const CheckboxText = styled.h4`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 20px;
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 1.5;
    padding-left: 5px;
  }
`;

const RadioText = styled.h4`
  font-size: 15px;
  font-weight: 400;
  margin-left: 20px;
  line-height: 13px;
  letter-spacing: -0.04em;
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 13px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonSubContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 80px);
  @media (max-width: 900px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1.5fr;
  }
`;

const LoginImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoginContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const LoginSubContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: max(10px, min(5vw, 140px));
`;

const BannerHeaderText = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 5px !important;
  color: ${({ toggle }) => (toggle ? '#8fb64b' : '#B31A1A')};
  @media (max-width: 900px) {
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
  }
`;

const BannerHeaderSubText = styled.p`
  font-size: 76px;
  font-weight: 500;
  line-height: 91px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #1a1a1a;
  margin: 30px 0;
  @media (max-width: 600px) {
    font-size: 35px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: -0.04em;
    text-align: left;
    margin: 10px 0;
  }
`;

const BannerHeaderDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.04em;
  text-align: left;
  margin: 30px 0;
  @media (max-width: 600px) {
    font-size: 11px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.04em;
    text-align: left;
    margin: 10px 0;
  }
`;

const ButtonContainerForPopUp = styled.div`
  display: flex;
  gap: 20px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  margin-block: 20px;
`;

export {
  Divider,
  ButtonContainerForPopUp,
  BannerHeaderDescription,
  BannerHeaderSubText,
  BannerHeaderText,
  LoginContainer,
  LoginSubContainer,
  LoginImageContainer,
  GridMainContainer,
  ButtonContainer,
  ButtonSubContainer,
  RadioText,
  CheckboxContainer,
  CheckboxText,
  DetailBoxContainer,
  CombineTextComponentBox,
  DetailBox,
  FormHeading,
  CustomSelect,
  CustomInput,
  CustomButton,
  LocationContainer,
  Container,
  BannerContainer,
  BannerHeading,
  TabPanContainer,
  SearchContainer,
  SubContainer,
  CustomButtonHomepage,
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
  WelcomeHeading,
  ContainerItemHeading,
  BannerHeadingTextContainer,
  WelcomeSubHeading,
};
