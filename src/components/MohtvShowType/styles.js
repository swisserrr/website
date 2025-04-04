import styled from '@emotion/styled';
import { COLORS } from '../../constants';
import Grid from '@mui/material/Grid';
import CustomButton from 'components/CustomButton';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  align-self: center;
  line-height: 4.4rem;
  @media (max-width: 600px) {
    font-size: 1.7rem;
    line-height: 21px;
  }
`;

const ViewAllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 0.3rem;

  @media (max-width: 767px) {
    button h4 {
      font-size: 1.2rem;
    }
  }
`;
const ViewAllText = styled.h4`
  font-style: normal;
  font-weight: 600 !important;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: ${COLORS.Bunker};
  text-transform: none;
  @media (max-width: 900px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 500 !important;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 0.6rem;
  margin-bottom: 3.5rem;
  position: sticky;
  @media (max-width: 600px) {
    padding: 0.6rem 16px 0 16px;
    margin-bottom: 1rem;
  }
`;

const ContainerGrid = styled(Grid)`
    /* &:nth-child(odd) {
      background: ${({ theme }) => theme.palette.secondary.light};
    }

    &:nth-child(even) {
      background: #fff;
    } */
    margin: 3.5rem 0 5rem 0;
    @media (max-width:600px){
      margin: 0.5rem 0 0 0;
    }
`;

const Button = styled(CustomButton)`
  font-style: normal;
  font-weight: 600 !important;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  color: ${COLORS.Bunker};
  text-transform: none;
  @media (max-width: 900px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 500 !important;
  }
  background-color: transparent !important;
  &:hover: {
    background: none !important;
  }
`;

export { Container, Heading, ViewAllContainer, ViewAllText, HeadingContainer, ContainerGrid, Button };
