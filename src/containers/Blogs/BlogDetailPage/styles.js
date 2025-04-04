import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';
import Link from 'next/link';
import { libre } from 'utils/fonts';

const Container = styled.div`
  width: 100%;
  background-color: '#F7F7F7';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
`;

const MaxContainer = styled.div`
  max-width: 100%;
  background: #f6f6f6;
  padding: 40px 0px !important;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 400 !important;
  font-size: 46px;
  font-family: ${libre.style.fontFamily};
  margin-top: 54px;
  margin-bottom: 24px;
  @media (max-width: 786px) {
    font-size: 22px;
  }
`;

const CategoryText = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 786px) {
    font-size: 10px;
  }
`;

const DateText = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin: 30px 0 10px 0;
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 786px) {
    font-size: 11px;
  }
`;

const CategoryTextNormal = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  strong {
    font-weight: 400 !important;
  }
  @media (max-width: 786px) {
    font-size: 10px;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  position: relative;
  margin: 0 0 50px 0;

  img {
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    aspect-ratio: 4/3;
    margin: 0 0 20px 0;
  }
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CategoryTile = styled.div`
  background-color: ${({ theme }) => theme.palette.black.main};
  width: auto;
  text-align: center;
  padding: 8px 25px;
  margin-bottom: 20px;
  border-radius: 30px;
  @media (max-width: 600px) {
    width: fit-content;
  }
`;

const CategoryTileSpan = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border-radius: 30px;
  width: auto;
  @media (max-width: 786px) {
    padding: 10px;
    font-size: 11px;
  }
`;

const CategoryTextContainer = styled.div`
  margin-top: 40px;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const ListHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

const ListContainer = styled.ul`
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 11px;
    font-weight: 500;
  }
`;

const ListItem = styled.li`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  border-radius: 30px;
  margin-bottom: 10px;
  &:last-child {
    padding: 0 0;
    margin-bottom: 0;
    @media (max-width: 786px) {
      margin-bottom: 0px;
    }
  }
  @media (max-width: 786px) {
    padding: 10px 0;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 0px;
    font-weight: 600;
  }
`;

const TagsGrid = styled(Grid)`
  padding: 10px 30px 0 0;
`;
const TabPanContainer = styled.div`
  display: flex;
  width: 100%;
`;

export {
  Container,
  MaxWidthContainer,
  Heading,
  CategoryText,
  CategoryTextNormal,
  ImageContainer,
  CategoryTile,
  CategoryTileSpan,
  ListContainer,
  ListItem,
  ListHeader,
  CustomImage,
  TagsGrid,
  MaxContainer,
  TabPanContainer,
  CategoryTextContainer,
  DateText,
};
