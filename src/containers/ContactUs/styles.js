/* Styles for ContactUs container module */

import styled from '@emotion/styled';
import Link from 'next/link';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  object-fit: cover;
  height: 30vh;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
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
    margin-top: 4.7rem;
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

const AboutSection = styled.section`
  padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '50px 0 0 0' : '50px 0')};
  @media (max-width: 786px) {
    padding: ${({ disableBottomMargin }) => (disableBottomMargin ? '20px 0 0 0' : '20px 0')};
  }
`;

const BannerImageContainer = styled.div`
  width: 100%;
`;
const SubHeadingText = styled.p`
  padding: 10px 0;
  text-align: ${({ center }) => (center ? 'center' : 'none')};
  font-weight: 600;
  color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
  font-size: max(24px, min(3vw, 48px));
  line-height: max(29px, min(3vw, 58px));
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 37px;
  }
`;

const WhoWeAreDescription = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1a1a;
  margin-right: 30px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.01em;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

const WhoWeArePadding = styled.div`
  position: relative;
  padding-bottom: 15px;
  @media (max-width: 600px) {
    padding-bottom: 0;
  }
`;

const EmohaBornSmall = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1a1a1a;
`;

const EmohaBornBig = styled.h4`
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
  line-height: 48px;
  margin: 30px 0;
  letter-spacing: -0.01em;
  text-align: center;
  color: #cc4746;
`;

const InvertedCommas = styled.h4`
  font-size: 128px;
  font-weight: 400;
  line-height: 155px;
  letter-spacing: -0.01em;
  text-align: center;
  transform: ${({ rotation }) => (rotation ? 'rotate(180deg)' : 'rotate(0)')};
  color: #cc4746;
  @media (max-width: 600px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 70px;
  }
`;

const CommaContainer = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  @media (max-width: 600px) {
    top: -40px;
    left: -10px;
  }
`;

const CommaBottomContainer = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  @media (max-width: 600px) {
    bottom: -30px;
    right: -10px;
  }
`;

const AboutEmohaSection = styled.section`
  padding: 90px 0;
  @media (max-width: 786px) {
    padding: 50px 0 0 0;
  }
`;

export {
  BannerContainer,
  Container,
  TabsContainer,
  TabLabel,
  NormalPara,
  Heading,
  UnorderedList,
  ListItemsUnordered,
  AboutSection,
  BannerImageContainer,
  SubHeadingText,
  WhoWeAreDescription,
  WhoWeArePadding,
  EmohaBornSmall,
  EmohaBornBig,
  InvertedCommas,
  CommaContainer,
  CommaBottomContainer,
  AboutEmohaSection,
};
