/* Styles for EditProfile container module */

import styled from '@emotion/styled';
import { Select } from '@mui/material';
import CustomInput from 'components/CustomInput';
import Image from 'utils/CustomImage';
import { inter } from 'utils/fonts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const HeadingContainer = styled.div`
  margin: 0 0 40px 0;
  @media (max-width: 800px) {
    margin: 0 0 20px 0;
  }
`;

const Heading = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: max(22px, min(2vw, 46px));
`;

const Input = styled(CustomInput)`
  background-color: #fff;
`;

const ImageContainer = styled.button`
  display: flex;
  aspect-ratio: 1;
  width: 20%;
  overflow: auto;
  align-self: center;
  position: relative;
  margin: max(30px, min(2vw, 90px)) 0;
  @media (max-width: 800px) {
    width: 30%;
  }
`;

const CameraContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #000;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
`;

const CameraIconContainer = styled.div`
  position: absolute;
  bottom: 25px;
  right: 10px;
  @media (max-width: 800px) {
    bottom: 10px;
  }
  @media (max-width: 600px) {
    bottom: 0px;
  }
`;

const CustomImage = styled(Image)`
  object-fit: cover;
  padding: 12px;
  @media (max-width: 800px) {
    padding: 8px;
  }
`;

const CustomImageProfilePhoto = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: center;
`;

const ReceiveText = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 31px;
`;

const InformationContainer = styled.div`
  margin: 0 0 40px 0;
  @media (max-width: 800px) {
    margin: 0 0 30px 0;
  }
`;

const CustomSelect = styled(Select)`
  display: flex;
  width: 100%;
  height: 4rem;
  margin: 10px 0;
  background-color: #ffffff !important;
  border-radius: 2rem !important;
  color: #000;
  font-size: 1.7rem;
  font-family: ${inter.style.fontFamily} !important;
  margin-bottom: 1.563rem;
  padding-left: 10px !important;
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

export {
  Container,
  Heading,
  HeadingContainer,
  CustomInput,
  ImageContainer,
  CheckBoxContainer,
  ReceiveText,
  CameraContainer,
  CameraIconContainer,
  Input,
  InformationContainer,
  CustomImage,
  CustomSelect,
  CustomImageProfilePhoto,
};
