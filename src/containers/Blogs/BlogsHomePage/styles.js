import styled from '@emotion/styled';
import { alpha } from '@mui/material/styles';
import { COLORS } from '../../../constants';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { inter } from '../../../utils/fonts';
import Link from 'next/link';
import Image from 'utils/CustomImage';

const Container = styled.div`
  width: 100%;
  background-color: ${COLORS.webSiteBackgroundColor};
  display: flex;
  flex-direction: column;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  /* max-width: 1200px; */
`;

const MostPopularContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const MostPopular = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ disableRem }) => (disableRem ? '36px' : '3.6rem')};
  line-height: ${({ disableRem }) => (disableRem ? '46px' : '4.625rem')};
  color: ${({ theme }) => theme.palette.black.third};
  padding-bottom: max(10px, min(2vw, 50px));
  @media (max-width: 600px) {
    font-size: ${({ disableRem }) => (disableRem ? '22px' : '1.7rem')};
  }
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  object-fit: cover;
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
  @media (max-width: 600px) {
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const TabLabel = styled(Link)`
  width: auto;
  border-radius: 1.922rem;
  padding: 1.374rem 1.562rem 1.374rem 1.562rem;
  cursor: pointer;
  margin-right: 0.726rem;
  color: ${({ active, theme }) => (active ? COLORS.White : theme.palette.black.third)};
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
  display: flex;
  @media (max-width: 600px) {
    margin-top: 4.7rem;
  }
`;

const SliderContainer = styled.div`
  display: flex;
`;

const SubContainer = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 3%;
`;

const TabPanContainer = styled.div`
  display: flex;
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;
const Containerfluid = styled.div`
  background: #fff;
  padding: 30px 0px 0 0;
`;
const SearchIconComponent = styled(SearchIcon)`
  font-size: 4rem;
  margin-right: 1rem;
  &:focus {
    font-size: 4rem;
    color: ${({ theme }) => theme.palette.black.main};
  }
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    borderColor: '#000',
    fontFamily: inter.style.fontFamily,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '2.25rem',
    lineHeight: '18px',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '0.1rem',
      '&:focus': {
        width: '119.2rem',
        // backgroundColor: theme.palette.white.main,
        borderRadius: '1.25rem',
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
        color: theme.palette.black.main,
      },
    },
  },
}));

const Item = styled(Link)`
  cursor: pointer;
  padding: 10px 10px;
  margin: 10px 0;
  text-decoration: none;
  @media (max-width: 600px) {
    padding: 0 5px;
  }
`;

const CardImage = styled(Image)`
  border-radius: 1.268rem;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 230px;
  width: 'auto';
  @media (max-width: 600px) {
    height: 200px;
  }
`;

const DateForCard = styled.h1`
  margin-top: 27.88px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 18px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 600px) {
    margin-top: 13px;
  }
`;

const TopicForCard = styled.h1`
  margin-top: 13.18px;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 22px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;

export {
  Container,
  BannerContainer,
  TabLabel,
  TabsContainer,
  TabPanContainer,
  SearchContainer,
  SubContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  SearchIconComponent,
  MaxWidthContainer,
  Item,
  CardImage,
  TopicForCard,
  DateForCard,
  ImageContainer,
  SliderContainer,
  MostPopular,
  MostPopularContainer,
  Containerfluid,
};
