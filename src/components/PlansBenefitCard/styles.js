import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'utils/CustomImage';
import CustomButton from 'components/CustomButton';

const ShowsContainer = styled(Grid)`
  background-color: ${({ changesFromCorporate }) => (changesFromCorporate ? '#ffffff' : '#f7f7f7')};
`;

const Item = styled(Paper)`
  padding: 10px;
  height: 362px;
  border-radius: 12px;
  &:hover {
    border-color: rgb(232, 232, 232);
    box-shadow: ${({ disableHover }) => (disableHover ? 'none' : '2px 0px 5px 10px rgba(242, 223, 224, 1)')};
  }
  background-color: ${({ changesFromCorporate }) => (changesFromCorporate ? '#ffffff' : '#f7f7f7')};
  @media (max-width: 600px) {
    height: 170px;
  }
`;

const CardImage = styled(Image)`
  /* border-radius: 2rem; */
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 230px;
  width: 'auto';
  @media (max-width: 600px) {
    margin: 0 auto;
    height: 40px;
    width: 40px;
  }
`;

const Topic = styled.h3`
  margin-top: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: normal;
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 700px) {
    margin-left: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 1.5rem;
    line-height: normal;
  }
`;

const Description = styled.h3`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: normal;
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 700px) {
    margin-left: 0;
    display: flex;
    text-align: center;
    margin-top: 20px;
    font-size: 1.3rem;
    line-height: normal;
  }
`;

const CardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 12px;
  &:hover {
    border-color: rgb(232, 232, 232);
    box-shadow: ${({ disableHover }) => (disableHover ? 'none' : '2px 0px 5px 10px rgba(242, 223, 224, 1)')};
  }
`;

const ReadMoreButton = styled(CustomButton)`
  padding: 2.8rem 3.8rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4.392rem;
  display: flex;
  justify-content: center;
  text-transform: initial;
  margin: 0 auto;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  color: ${({ theme }) => theme.palette.white.main};
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2.057rem;
  margin-top: 4.342rem;
  margin-bottom: 4.614rem;
  @media (max-width: 600px) {
    margin-top: 03.594rem;
    margin-bottom: 6.09rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.815rem;
    padding: 1.5rem 2rem;
  }
`;
const DownArrowImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export {
  ReadMoreButton,
  Item,
  ShowsContainer,
  CardImage,
  ImageContainer,
  Description,
  Topic,
  CardContainer,
  DownArrowImageContainer,
};
