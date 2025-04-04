import styled from '@emotion/styled';
import { COLORS } from '../../constants';
import CustomButton from 'components/CustomButton';
import Grid from '@mui/material/Grid';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Heading = styled.h3`
  font-weight: 600;
  font-size: ${({ disableRem }) => (disableRem ? '36px' : '3.6rem')};
  line-height: ${({ disableRem }) => (disableRem ? '44px' : '4.4rem')};
  @media (max-width: 600px) {
    font-size: ${({ disableRem }) => (disableRem ? '17px' : '1.7rem')};
    line-height: ${({ disableRem }) => (disableRem ? '21px' : '2.1rem')};
  }
`;

const ViewAllContainer = styled.div`
  display: flex;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  margin-bottom: ${({ disableRem }) => (disableRem ? '40px' : '4rem')};
  position: sticky;
  @media (max-width: 900px) {
    margin-bottom: 2rem;
    padding: 0 16px 0 16px;
  }
`;

const Button = styled(CustomButton)`
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
  font-size: ${({ disableRem }) => (disableRem ? '15px' : '1.5rem')} !important;
  line-height: ${({ disableRem }) => (disableRem ? '18px' : '1.8rem')};
  display: flex;
  align-items: center;
  color: ${COLORS.Bunker};
  padding: 0;
  background-color: transparent !important;
  &:hover: {
    background: none !important;
  }
  @media (max-width: 900px) {
    font-weight: 500;
    font-size: ${({ disableRem }) => (disableRem ? '13px' : '1.3rem')} !important;
    line-height: ${({ disableRem }) => (disableRem ? '16px' : '1.6rem')};
  }
`;

const ContainerGrid = styled(Grid)`
  /* &:nth-child(odd) {
    background: ${({ theme }) => theme.palette.secondary.light};
  }

  &:nth-child(even) {
    background: #fff;
  } */
`;

export { Container, Heading, ViewAllContainer, HeadingContainer, Button, ContainerGrid };
