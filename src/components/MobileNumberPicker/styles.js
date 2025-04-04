/* Styles for MobileNumberPicker container module */
import styled from '@emotion/styled';
import Input from 'components/CustomInput';

const SelectContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: auto;
`;

// const Select = styled.select`
//   width: 70px;
//   background-color: transparent;
//   appearance: none;
//   outline: none;
//   border: none;
//   padding: 0 25px 0 20px;
//   background-color: #f4f4f4 !important;
//   border-radius: 25px !important;
//   font-size: 1.3rem;
//   height: 4.4rem;
//   @media (max-width: 600px) {
//     width: 70px;
//     font-size: 1.2rem;
//   }
// `;

const Select = styled.select`
  width: 55px;
  appearance: none;
  outline: none;
  border: none;
  color: #2447ff;
  padding: 0 25px 0 5px;
  background-color: #ffffff !important;
  border-bottom: 1px solid #1a1a1a;
  font-size: 1.3rem;
  height: 4.4rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CustomInput = styled(Input)`
  width: 100%;
  margin: 0 0 0 10px;
  font-size: 1.5rem;
  padding: 0;
  color: #2447ff;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  background-color: #ffffff !important;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: #d9d9d9;
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    height: auto;
  }
`;

const Option = styled.option`
  background-color: #fff !important;
`;

export { Select, CustomInput, Option, SelectContainer };
