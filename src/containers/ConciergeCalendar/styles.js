/* Styles for ConciergeCalendar container module */
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import NextImage from 'utils/CustomImage';
import isEqual from 'lodash/isEqual';
import ScrollContainer from 'react-indiana-drag-scroll';
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 4.4rem;
  width: 4.4rem;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    height: 2rem;
    width: 2rem;
    margin-bottom: 0.9rem;
  }
`;

const BlueImageContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 2.4rem;
  width: 2.4rem;
  @media (max-width: 767px) {
    height: 1.8rem;
    width: 1.8rem;
  }
`;
const BlueImageContainer1 = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 2.4rem;
  width: 2.4rem;
  @media (max-width: 767px) {
    height: 1.8rem;
    width: 3rem;
  }
`;

const AddImageContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 2.4rem;
  width: 2.4rem;
  @media (max-width: 767px) {
    height: 1rem;
    width: 1rem;
  }
`;

const TextArea = styled(TextField)`
  display: flex;
  height: 15.813rem;
  width: 100%;
  color: #000000;
  padding: '2.656rem 2.361rem';
  background-color: #ffffff;
  border-radius: 2.5rem;
  &::hover {
    border: 'none';
  }
  &::placeholder {
    border: 'none';
  }
  @media (max-width: 767px) {
    height: 8.813rem;
    width: 100%;
    padding: '0.798rem 0.709rem';
    background-color: #ffffff;
    border-radius: 0.751rem;
    margin-top: 1.573rem;
  }
`;

const BpIcon = styled.span`
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  background-color: #d9d9d9;
  @media (max-width: 767px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const BpCheckedIcon = styled(BpIcon)`
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  background-color: #ffffff;
  border: 0.8rem solid #cc4746;
  @media (max-width: 767px) {
    width: 1.5rem;
    height: 1.5rem;
    border: 0.4rem solid #cc4746;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: '100%' mpo !important;
  padding: 3.028rem 1.872rem 3.028rem 1.872rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2.5rem;
  cursor: pointer;
  background-color: ${({ timeValue, data }) =>
    isEqual(data?.isDisabled, true) ? '#D9D9D9' : isEqual(timeValue, data?.id) ? '#CC4746' : '#ffffff'};
  @media (max-width: 767px) {
    border-radius: 0.751rem;
    padding: 1.009rem 1.1rem 1.009rem 1.1rem;
  }
`;
const Image = styled(NextImage)`
  object-fit: cover;
`;
const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 3.125rem;
  @media (max-width: 762px) {
    margin-bottom: 1.689rem;
  }
`;

const ScrollContainerDiv = styled(ScrollContainer)`
  @media (max-width: 762px) {
  }
`;

export {
  ImageContainer,
  BlueImageContainer,
  TextArea,
  BpCheckedIcon,
  BpIcon,
  CardContainer,
  Image,
  AddressContainer,
  AddImageContainer,
  ScrollContainerDiv,
  BlueImageContainer1,
};
