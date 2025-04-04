import styled from '@emotion/styled';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import Link from 'next/link';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Input = styled(CustomInput)`
  width: 1.4rem;
  padding: 0px;
  background-color: transparent;
  font-size: 1.3rem;
  color: ${({ isDisabled, theme, firstTimeDisabled }) =>
    firstTimeDisabled ? 'black' : isDisabled ? theme.palette.secondary.dark : theme.palette.secondary.dark} !important;
  height: auto;
  @media (min-width: 300px) and (max-width: 900px) {
    font-size: 1.1rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

const ButtonWrap = styled(CustomButton)`
  @media (min-width: 300px) and (max-width: 900px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }
`;

const ReceivedOtpButton = styled(CustomButton)`
  color: ${({ disabled, theme, firstTimeDisabled }) =>
    firstTimeDisabled ? 'black' : disabled ? theme.palette.secondary.dark : theme.palette.secondary.dark} !important;
  @media (min-width: 300px) and (max-width: 900px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }
`;

const LoginContainer = styled.div`
  width: 100%;
`;

const LoginImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const LoginSubContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: max(10px, min(5vw, 140px));
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TermsContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
`;
const TermsContainerNoLink = styled.span`
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black.third};
  line-height: 77px;
  align-self: start;
  @media (max-width: 600px) {
    line-height: 50px;
  }
`;

const SubHeadingProfile = styled.h2`
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  padding-bottom: 50px;
`;

const Otp = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  padding: 2rem 0;
`;

const TermsAndCondition = styled.span`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
  color: ${({ theme }) => theme.palette.black.third};
  margin: 2.5rem 0;
`;

const TermsAndConditionUnderlined = styled(TermsAndCondition)`
  text-decoration: underline;
  cursor: pointer;
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

const CodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ValidationError = styled.span`
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 1.5rem 0;
`;

const InnerOTPContainer = styled.span`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  @media (max-width: 600px) {
    display: ${({ hide }) => (hide ? 'block' : 'none')};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  padding-top: 1.5vw;
`;
const CheckboxText = styled.h4`
  font-size: 15px;
  font-weight: 500;
  line-height: 13px;
  padding-left: 20px;
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 13px;
    padding-left: 5px;
  }
`;

export {
  Container,
  LoginImageContainer,
  Heading,
  TermsAndCondition,
  TermsAndConditionUnderlined,
  Otp,
  ButtonContainer,
  ErrorContainer,
  SubHeadingProfile,
  Input,
  ButtonWrap,
  GridMainContainer,
  LoginContainer,
  LoginSubContainer,
  NumberContainer,
  OtpContainer,
  TermsContainer,
  CodeContainer,
  ValidationError,
  ReceivedOtpButton,
  InnerOTPContainer,
  CheckboxContainer,
  CheckboxText,
  TermsContainerNoLink,
};
