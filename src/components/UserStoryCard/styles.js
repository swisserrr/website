import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';
import Paper from '@mui/material/Paper';
import { COLORS } from '../../constants';

const ShowsContainer = styled(Grid)`
  margin-bottom: 6.842rem;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Item = styled(Paper)`
  width: 330px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 33px;
  background-color: ${COLORS.webSiteBackgroundColor};
  @media (max-width: 600px) {
    width: 299px;
    margin-bottom: 30px;
  }
`;

const CardImage = styled(Image)`
  border-radius: 1.268rem;
  height: 100% !important;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 23rem;
  width: 100%;
`;

const TopicForCard = styled.h2`
  margin-top: 1.313rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.palette.black.third};
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.967rem;
  }
`;

export { Item, ShowsContainer, CardImage, ImageContainer, TopicForCard };
