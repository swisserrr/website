/* Styles for TermsConditions container module */

import styled from '@emotion/styled';
import Link from 'next/link';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  object-fit: cover;
  height: 60vh;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 95px;
    height: 25vh;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f4f1eb;
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  @media (max-width: 600px) {
    margin-top: 2rem 0;
  }
`;

const TabLabel = styled(Link)`
  width: 160px;
  border-radius: 1.922rem;
  padding: 1.374rem 1.562rem 1.374rem 1.562rem;
  cursor: pointer;
  margin-right: 0.726rem;
  color: ${({ active, theme }) => (active ? '#fff' : theme.palette.primary.main)};
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
  line-height: 1.063rem;
  background-color: ${({ active, theme }) => (active ? theme.palette.primary.main : '#fff')};
  align-items: center;
  border: ${({ active, theme }) => (active ? 'transparent' : theme.palette.primary.main)} solid 1px;
  white-space: nowrap;
  text-decoration: none;
  @media (max-width: 786px) {
    width: 150px;
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 1rem 2rem;
    border-radius: 2rem;
  }
`;

const NormalPara = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: -0.04em;
  text-align: left;
  text-transform: uppercase;
`;

const UnorderedList = styled.ul`
  list-style-type: disc;
  /* display: list-item; */
  margin-left: 20px;
`;

const ListItemsUnordered = styled.li`
  list-style: disc;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 20px;
`;

export { BannerContainer, Container, TabsContainer, TabLabel, NormalPara, Heading, UnorderedList, ListItemsUnordered };
