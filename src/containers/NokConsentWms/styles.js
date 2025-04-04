/* Styles for NokConsentWms container module */
import styled from '@emotion/styled';
import CustomInput from 'components/CustomInput';
import Select from '@mui/material/Select';
import CustomLoadingButton from 'components/LoadingButton';

export const MainContainer = styled.div`
  padding-top: 7rem;
  @media (max-width: 600px) {
    padding-top: 9.5rem;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 18px;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  display: block;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  // justify-content: center;
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.938rem;
`;

export const CButton = styled(CustomLoadingButton)`
  background-color: ${({ theme, disabled }) =>
    disabled ? `${theme.palette.secondary.main} !important` : theme.palette.primary.main} !important;
  color: ${({ theme, disabled }) => (disabled ? theme.palette.black.main : theme.palette.white.main)} !important;
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 2.067rem;
  text-transform: none;
  line-height: 1.8rem;
  height: 3rem;
  padding: 2rem 10rem 2rem 10rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.331rem;
    font-weight: 500;
    padding: 2rem 5.3rem 2rem 5.3rem;
  }
`;

export const CInput = styled(CustomInput)`
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #cc4746;
  // color: #2447ff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 18px;
  padding: 1.4rem;
  margin: 0 0 1.563rem 0;
  @media (max-width: 599px) {
    height: 40px;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const CustomSelect = styled(Select)`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #cc4746;
  // color: #2447ff;
  font-size: 1.5rem;
  margin-bottom: 1.563rem;
  padding-left: 0 !important;
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  &::hover {
    border: 'none';
  }
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #54b26d;
    border-color: #54b26d;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 4.5px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

export const NameTitle = styled.h3`
  color: #000;
  text-align: center;
  // font-family: 'Inter Tight';
  font-size: 20px;
  // font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
