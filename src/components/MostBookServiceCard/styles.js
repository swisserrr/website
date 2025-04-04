import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'utils/CustomImage';
import CustomButton from 'components/CustomButton';

const CardContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1rem;

  @media (max-width: 767px) {
    .xsMobile {
      justify-content: flex-start !important;
      /* display: block !important; */
    }
  }
`;

const Item = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white.main};
`;

const CardImage = styled(Image)`
  border-radius: 22.1533px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 25rem;
  @media (max-width: 900px) {
    height: 180px !important;
    width: 100% !important;
  }
`;

const TopicForCard = styled.h3`
  margin-top: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 21px;
  /* identical to box height */
  text-align: center !important;
  min-width: 200px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 900px) {
    margin-top: 0.9rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const Button = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4.392rem;
  font-size: 1.7rem;
  line-height: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  margin-top: 2rem;
  color: ${({ theme }) => theme.palette.white.main};
  text-transform: none;
  letter-spacing: -0.01em;
  @media (max-width: 1450px) {
    font-size: 1.3rem;
    line-height: 1.331rem;
    margin-top: 0.9rem;
    justify-content: center;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.331rem;
    margin-top: 0.9rem;
    justify-content: center;
    height: 3.2rem;
  }
`;

export { Item, CardContainer, CardImage, ImageContainer, TopicForCard, Button };
