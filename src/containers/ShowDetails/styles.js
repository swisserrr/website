import styled from '@emotion/styled';
import Image from 'utils/CustomImage';
import Chip from '@mui/material/Chip';

import { COLORS } from '../../constants';

const Container = styled.div`
  margin: auto 20px;
`;

const VideoContainer = styled.div`
  position: relative;
`;

const VideoPlayerContainer = styled.div`
  aspect-ratio: 21/9;
  opacity: ${({ isPlaying }) => (isPlaying ? 1 : 0)};
  margin-top: 20px;
  @media (max-width: 600px) {
    aspect-ratio: 4/3;
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

const Banner = styled(Image)`
  object-fit: cover;
  border-radius: 1.25rem;
`;

const PlayButton = styled(Image)`
  display: inline;
  cursor: pointer;
`;

const ChipView = styled(Chip)`
  min-width: 9.49rem;
`;

const HostImageTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding-top: 30px;
  @media (max-width: 600px) {
    padding-top: 13px;
  }
`;

const HostImageContainer = styled.div`
  width: 117.32px;
  height: 117.32px;
`;

const HostDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const HostImage = styled(Image)`
  border-radius: 58.66px;
  width: 100%;
  height: 100%;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5.625rem;
  position: sticky;
`;

const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: max(22px, min(3vw, 46px));
  line-height: 4.625rem;
`;

const ViewAllContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.6rem;
  margin-right: 0.3rem;
`;

const ViewAllText = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: ${COLORS.Bunker};
  text-transform: none;
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

const CategoryText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  color: #000;

  @media (max-width: 786px) {
    font-size: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const CategoryTextNormal = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  color: #000;
  @media (max-width: 786px) {
    font-size: 10px;
  }
`;

const CategoryItemContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  @media (max-width: 786px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const CategoryTile = styled.div`
  background-color: ${({ theme }) => theme.palette.black.main};
  color: #fff;
  display: flex;
  margin-right: 10px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  text-align: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  border-radius: 30px;
  @media (max-width: 786px) {
    padding: 10px;
    font-size: 11px;
  }
`;

const DateText = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  padding: 10px 0;
  @media (max-width: 900px) {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    padding-top: 0;
  }
`;

const HeadingMain = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: max(24px, min(5vw, 56px));
  padding: 10px 0;
  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

const Description = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  padding-top: max(15px, min(2vw, 50px));
  padding-bottom: max(10px, min(2vw, 30px));
`;

const ConductedBy = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
`;

const DescriptionText = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 10px 0;
`;

const PastShowsContainer = styled.div`
  margin-bottom: max(50px, min(2vw, 100px));
`;

export {
  CategoryItemContainer,
  Container,
  VideoContainer,
  Banner,
  VideoPlayerContainer,
  CenterViewContainer,
  PlayButton,
  ButtonContainer,
  ChipView,
  HostImageTextContainer,
  HostImageContainer,
  HostDescriptionContainer,
  HostImage,
  HeadingContainer,
  Heading,
  ViewAllContainer,
  ViewAllText,
  CategoryText,
  CategoryTextNormal,
  CategoryTile,
  DateText,
  HeadingMain,
  Description,
  DescriptionText,
  PastShowsContainer,
  ConductedBy,
};
