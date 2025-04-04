/* Styles for DiseaseListing container module */
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { COLORS } from '../../../constants';

const PageContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.webSiteBackgroundColor};
`;

const BannerContainer = styled(Grid)`
  display: flex;
  max-width: 100%;
  height: 71vh;
  justify-content: center;
  align-items: center;
  z-index: -1;
  flex-direction: column;

  @media (max-width: 1024px) {
    height: 75vh;
  }
  @media (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.832rem 0;
  @media (max-width: 600px) {
    padding: 1.374rem 0;
  }
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1%;
  color: ${({ theme }) => theme.palette.black.third};
  @media only screen and (max-width: 600px) {
    font-size: 2.2rem;
    letter-spacing: -4%;
  }
`;

const Relativecard = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export { BannerContainer, HeadingContainer, Heading, Relativecard, PageContainer };
