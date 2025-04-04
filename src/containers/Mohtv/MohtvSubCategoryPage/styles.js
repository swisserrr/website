import styled from '@emotion/styled';
import { COLORS } from '../../../constants';

const Container = styled.div`
  display: flex;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 71vh;
  justify-content: center;
  align-items: center;
  ::after {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f8f8 100%);
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
  }

  @media (max-width: 786px) {
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const BannerHeading = styled.h1`
  font-size: 8.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 10.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;
`;

const TabLabel = styled.li`
  width: auto;
  border-radius: 1.922rem;
  padding: 1.374rem 1.562rem 1.374rem 1.562rem;
  cursor: pointer;
  margin-right: 0.726rem;
  color: ${({ active, theme }) => (active ? COLORS.White : theme.palette.black.third)};
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.063rem;
  background-color: ${({ active, theme }) => (active ? theme.palette.black.third : COLORS.White)};
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  @media (max-width: 786px) {
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 1rem 2rem;
    border-radius: 2rem;
  }
`;

const TabsContainer = styled.div`
  margin-top: 1.4rem;
  position: relative;
  /* background-color: ${({ theme }) => theme.palette.secondary.light}; */
  @media (max-width: 600px) {
    margin-top: 4.7rem;
  /* background-color: ${({ theme }) => theme.palette.secondary.main}; */
`;

const SubContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  /* background-color: ${({ theme }) => theme.palette.secondary.main}; */
`;

const SearchContainer = styled.div`
  width: 3%;
`;

const TabPanContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 0.6rem;
  margin-bottom: 3.5rem;
  position: sticky;
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export {
  Container,
  BannerContainer,
  BannerHeading,
  TabLabel,
  TabsContainer,
  TabPanContainer,
  SearchContainer,
  SubContainer,
};
