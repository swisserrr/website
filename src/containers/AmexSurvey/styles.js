/* Styles for AmexSurvey container module */
import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import Input from 'components/CustomInput';
import Button from 'components/CustomButton';

export const CustomSelect = styled(Select)`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.3rem !important;
  /* margin-bottom: ${({ marginToggle }) => (marginToggle ? '2rem' : '0')}; */
  border: none !important;
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    /* margin-bottom: ${({ marginToggle }) => (marginToggle ? '1rem' : '0')}; */
    font-size: 1.3rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const CustomInput = styled(Input)`
  font-size: 1.3rem !important;
  margin: 0;
  &::placeholder {
    color: ${({ theme, disabled, error }) =>
      error ? theme.palette.primary.main : disabled ? theme.palette.secondary.dark : '#838383'};
    font-size: 11px;
  }
`;

export const CustomButton = styled(Button)`
  text-transform: capitalize;
  font-size: 1.3rem;
`;

export const LocationContainer = styled.div`
  margin-top: 10px;
`;
