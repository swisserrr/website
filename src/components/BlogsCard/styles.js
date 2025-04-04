import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { inter } from 'utils/fonts';

const ShowsContainer = styled(Grid)`
  margin-bottom: 4rem;
`;

const Item = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.cream.light};
  cursor: pointer;
  text-decoration: none;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: ${({ disableRem }) => (disableRem ? '12px' : '1.268rem')};
  height: 100% !important;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 230px;
  width: 100%;
`;

const DateForCard = styled.div`
  font-style: normal;
  font-weight: 400;
  margin: 20px 0 10px 0 !important;
  font-size: ${({ disableRem }) => (disableRem ? '15px !important' : '1.5rem')};
  line-height: 18px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 600px) {
    font-size: ${({ disableRem }) => (disableRem ? '13px !important' : '1.3rem')};
    line-height: 16px;
  }
`;

const TopicForCard = styled.div`
  font-style: normal;
  font-weight: 600 !important;
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
    box-shadow: ${({ disableHover }) => (disableHover ? 'none' : '2px 0px 5px 10px rgba(242, 223, 224, 1)')};
  }
`;

export { Item, ShowsContainer, CardImage, ImageContainer, DateForCard, TopicForCard, CardContainer };
