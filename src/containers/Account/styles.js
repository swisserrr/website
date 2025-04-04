import styled from '@emotion/styled';
import { libre } from 'utils/fonts';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  @media (max-width: 900px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1.5fr;
  }
`;

const Input = styled(CustomInput)`
  width: 3.125rem;
  padding: 0px;
  background-color: transparent;
  font-size: 1.3rem;
  color: ${({ isDisabled }) => (isDisabled ? 'rgba(0,0,0,0.26)' : 'black')};
`;

const Button = styled(CustomButton)`
  color: black;
`;

const LoginImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoginContainer = styled.div`
  width: 100%;
`;

const LoginSubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: max(10px, min(5vw, 140px));
`;

const RecentLoginContainer = styled(LoginContainer)`
  max-width: 100%;
  height: 100% !important;
  background-color: ${({ theme, background }) =>
    background ? theme.palette.secondary.light : theme.palette.white.main};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ErrorContainer = styled.div`
  padding: 1rem 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.7rem;
  line-height: 13px;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 77px;
  color: ${({ theme }) => theme.palette.black.third};
  align-self: start;
  @media (max-width: 600px) {
    line-height: 50px;
  }
`;

const SubHeadingProfile = styled.h1`
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  font-family: ${libre.style.fontFamily};
  padding-bottom: 50px;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Otp = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  padding: 1rem;
`;

const TermsAndCondition = styled.span`
  font-size: 1.3rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
  padding: 2.5rem 0;
`;

const TermsAndConditionUnderlined = styled(TermsAndCondition)`
  text-decoration: underline;
  cursor: pointer;
`;

export {
  Container,
  LoginImageContainer,
  LoginContainer,
  Heading,
  TermsAndCondition,
  TermsAndConditionUnderlined,
  Otp,
  RecentLoginContainer,
  ButtonContainer,
  ErrorContainer,
  SubHeadingProfile,
  Input,
  Button,
  GridMainContainer,
  LoginSubContainer,
};
