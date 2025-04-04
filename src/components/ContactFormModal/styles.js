import styled from '@emotion/styled';
import Button from '../CustomButton';
import Input from '../CustomInput';
import Select from '@mui/material/Select';
import HomePageText from 'components/HomePageText';

const AboutUsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px 0;
  padding: 0 10px;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (max-width: 600px) {
    margin: 20px 0;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-height: 800px) and (min-width: 800px) {
    margin: 10px 0 0 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const CustomText = styled(HomePageText)`
  @media (max-height: 800px) and (min-width: 800px) {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1;
    & > span {
      font-size: 1.5rem;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  @media (max-width: 599px) {
    height: 40px;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
  margin-top: 0;
  margin-bottom: 0;
`;

const CustomSelect = styled(Select)`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.3rem;
  border-style: solid;
  border-width: 0px !important;
  border-color: ${({ theme, disabled, error }) => (error ? theme.palette.primary.main : disabled ? 'none' : 'none')};
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (max-width: 599px) {
    margin-top: 10px;
  }
  @media (max-width: 900px) {
    margin-top: 12px;
  }
  @media (max-height: 800px) and (min-width: 800px) {
    margin-top: 10px;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.black.main} !important;
  color: ${({ theme }) => theme.palette.white.main};
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 2.067rem;
  text-transform: capitalize;
`;

const HeadingExtra = styled.span`
  color: #cc4746;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Label = styled(HomePageText)`
  text-align: center;
  @media (max-height: 800px) and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const LabelUnderline = styled.span`
  text-align: center;
  text-decoration: underline;
  @media (max-height: 800px) and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export {
  AboutUsSection,
  CustomInput,
  CustomSelect,
  ButtonContainer,
  CustomButton,
  CustomText,
  HeadingExtra,
  Label,
  LabelUnderline,
};
