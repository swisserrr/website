/* Styles for UserStoryDetails container module */
import styled from '@emotion/styled';
import Image from 'utils/CustomImage';
import Container from '@mui/material/Container';
import { inter, libre } from '../../../utils/fonts';

const CustomContainer = styled(Container)`
  margin-bottom: 33px;
`;
const TopImageContainer = styled.div`
  position: relative;
  height: 636px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    height: 196px;
    margin-bottom: 20px;
  }
`;
const TopImage = styled(Image)`
  border-radius: 20px;
  @media (max-width: 600px) {
    border-radius: 6.089px;
  }
`;
const VideoContainer = styled.div`
  position: relative;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  height: 636px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    height: 139px;
    margin-bottom: 20px;
  }
`;

const VideoPlayerContainer = styled.div`
  /* height: 636px; */
  @media (max-width: 600px) {
    /* height: 139px; */
  }
`;

const CenterViewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  text-align: center;
  align-items: center;
`;

const HomePageButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 75px;
  bottom: 75px;
  @media (max-width: 600px) {
    left: 21px;
    bottom: 21px;
  }
`;

const PlayButton = styled(Image)`
  display: inline;
  cursor: pointer;
`;

const ParagraphText = styled.p`
  color: #1a1a1a;
  font-style: normal;
  font-family: ${inter.style.fontFamily};
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 1.3rem;
    line-height: normal;
  }
`;
const QuoteText = styled.p`
  font-family: ${libre.style.fontFamily};
  color: #f48462;
  font-size: 3.6rem;
  font-style: italic;
  font-weight: 400;
  line-height: 52px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 1.5rem;
    line-height: normal;
  }
`;
const TopHeading = styled.h1`
  color: #1a1a1a;
  font-family: ${libre.style.fontFamily};
  font-size: 4.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 2.2rem;
    line-height: normal;
  }
`;

const ContentHeading = styled.h2`
  color: #1a1a1a;
  font-family: ${libre.style.fontFamily};
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  margin-bottom: 33px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 1.7rem;
    line-height: 15.831px;
  }
`;

export {
  CustomContainer,
  TopImage,
  VideoContainer,
  VideoPlayerContainer,
  ButtonContainer,
  PlayButton,
  CenterViewContainer,
  ParagraphText,
  TopHeading,
  ContentHeading,
  QuoteText,
  ImageContainer,
  TopImageContainer,
  HomePageButtonContainer,
};
