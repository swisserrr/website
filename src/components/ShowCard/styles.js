import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'utils/CustomImage';
import { inter } from 'utils/fonts';

const ShowsContainer = styled(Grid)`
  /* margin-bottom: 6.842rem; */
`;

const Item = styled(Paper)`
  background-color: transparent;
  cursor: pointer;
`;

const CardImage = styled(Image)`
  border-radius: 1.268rem;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 230px;
  width: '100%';
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateForCard = styled.h4`
  margin: 20px 0 10px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 18px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.main};
  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 16px;
  }
`;

const TopicForCard = styled.h3`
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  height: 44px;
  font-size: 1.7rem;
  line-height: 22px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.main};
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 20px;
    height: 40px;
    margin-bottom: 0px;
  }
`;

const CardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 12px;
  &:hover {
    border-color: rgb(232, 232, 232);
    box-shadow: 2px 0px 5px 10px rgba(242, 223, 224, 1);
  }
`;

export { Item, ShowsContainer, CardImage, ImageContainer, DateForCard, TopicForCard, CardContainer };
