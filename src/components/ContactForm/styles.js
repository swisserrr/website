import styled from '@emotion/styled';
import Button from '../CustomButton';
import Input from '../CustomInput';
import Select from '@mui/material/Select';

const AboutUsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 10px 0;
  padding: 10px 18px;
  border-radius: 20px;

  overflow: auto;
  @media (max-width: 600px) {
    margin: 20px 0;
    padding: 1rem 3rem;
  }
`;

const CustomInput = styled(Input)`
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #2447ff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 18px;
  padding: 0;
  margin: 0 0 1.563rem 0;
  @media (max-width: 599px) {
    height: 40px;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;

const CustomSelect = styled(Select)`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #2447ff;
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  @media (max-width: 599px) {
    margin: 15px 0;
  }
  @media (max-width: 900px) {
    margin: 20px 0;
  }
`;

const CustomButton = styled(Button)`
  width: 80%;
  /* background-color: ${({ theme }) => theme.palette.black.main} !important; */
  color: ${({ theme }) => theme.palette.white.main};
  font-weight: 500;
  font-size: 1.7rem;
  border-radius: 2.067rem;
  text-transform: none !important;
  @media(max-width:600px){
    font-size:1.4rem;
  }
`;

export { AboutUsSection, CustomInput, CustomSelect, ButtonContainer, CustomButton };
