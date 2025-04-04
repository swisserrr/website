import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Input from 'components/CustomInput';
import Autocomplete from 'react-google-autocomplete';
import NextImage from 'utils/CustomImage';

const CustomInput = styled(Input)`
  width: 100%;
  height: auto;
  background-color: #ffffff !important;
  border-width: 0px !important;
  border-radius: 3rem !important;
  color: #000000;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 3.8rem;
  padding: 1.313rem 1.875rem;
  letter-spacing: -1%;
  margin: 0;
  @media (max-width: 762px) {
    height: auto;
    font-size: 1rem;
    line-height: 1.041rem;
    padding: 0.4rem 0.6rem;
    letter-spacing: -1%;
  }
  &::placeholder {
    color: #aaaaaa;
  }
`;

const CustomAutocomplete = styled(Autocomplete)`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #ffffff !important;
  border-width: 0px !important;
  border-radius: 3rem !important;
  color: #000000;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 3.8rem;
  padding: 1.313rem 1.875rem;
  margin: 0;
  @media (max-width: 762px) {
    font-size: 1.117rem;
    line-height: 1.138rem;
    padding: 0.396rem 0.566rem;
  }
  &::placeholder {
    color: #aaaaaa;
  }
`;

const CityContainer = styled(Grid)`
  margin-right: 4.313rem;
  @media (max-width: 762px) {
    margin-right: 1.302rem;
  }
`;

const MainContainer = styled.div`
  background-color: #f7f7f7;
  padding-top: 12.709rem;
  @media (max-width: 762px) {
    padding-top: 7rem;
  }
`;

const AutoCompleteWrapper = styled.div`
  position: relative;
`;

const AutoCompleteSearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 3.313rem;
  transform: translateY(-50%);
  height: 4rem;
  width: 4rem;
  @media (max-width: 762px) {
    height: 1.2rem;
    width: 1.2rem;
    right: 1rem;
  }
`;

const Image = styled(NextImage)`
  object-fit: cover;
`;

const ButtonIconContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 2rem;
  width: 2rem;
  @media (max-width: 762px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export {
  CustomInput,
  CustomAutocomplete,
  CityContainer,
  MainContainer,
  AutoCompleteWrapper,
  AutoCompleteSearchIcon,
  Image,
  ButtonIconContainer,
};
