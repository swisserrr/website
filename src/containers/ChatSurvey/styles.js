/* Styles for ChatSurvey container module */
import styled from '@emotion/styled';
import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import Container from '@mui/material/Container';
import HomePageBox from 'components/HomePageBox';

const CustomButtonSingle = styled(CustomButton)`
  border-color: ${({ toggle }) => (toggle ? '#d9d9d9' : 'transparent')};
  border-width: ${({ toggle }) => (toggle ? '1px' : '0')};
  width: ${({ widthToggle, length }) => (length <= 6 ? '100%' : widthToggle ? 'auto' : '100%')};
  font-size: 17px;
  margin: 0 5px 10px 5px;
  background-color: ${({ toggle }) => (toggle ? 'white' : 'black')};
  font-weight: 500;
  text-transform: none;
  border-style: ${({ toggle }) => (toggle ? 'solid' : 'solid')};
  color: ${({ toggle }) => (toggle ? 'black' : 'white')};
  &:hover {
    background-color: ${({ toggle }) => (toggle ? 'white' : 'black')};
  }
  @media (max-width: 600px) {
    width: ${({ widthToggleOnSmall }) => (widthToggleOnSmall ? 'auto' : '100% !important')};
    font-size: 11px;
  }
`;

const ContainerWithPadding = styled(Container)`
  @media (max-height: 800px) and (min-width: 800px) {
    padding: 0 10rem;
  }
`;

const CustomHomePageBox = styled(HomePageBox)`
  @media (max-height: 800px) and (min-width: 800px) {
    padding: 3rem;
    height: 110px;
  }
`;

const Ques = styled.h2`
  font-size: 2.2rem;
  line-height: 2.6rem;
  font-weight: 600;
  margin: 25px 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.7rem;
    margin: 20px 0;
    line-height: 2rem;
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-bottom: 150px;
  @media (max-width: 600px) {
    min-height: 100%;
    padding-bottom: 100px;
  }
`;

const Input = styled(CustomInput)`
  background-color: transparent;
  border-bottom-width: 2px;
  border-style: solid;
  width: auto;
  border-radius: 0;
  border-bottom-color: black;
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.new};
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MultiMultiSelectContainer = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
`;

export {
  CustomButtonSingle,
  Ques,
  MainContainer,
  Input,
  WrapContainer,
  MultiMultiSelectContainer,
  ContainerWithPadding,
  CustomHomePageBox,
};
