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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  max-width: 1920px;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  object-fit: cover;
  height: 71vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 35vh;
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
  /* margin: 2% 9.5%; */
`;

const SubContainer = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 3%;
`;

const TabPanContainer = styled.div`
  margin-top: 5.779rem;
  /* margin-inline: 10%; */
  display: flex;
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
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
  background-color: ${({ theme }) => theme.palette.cream.light};
  cursor: pointer;
  padding: 30px;
  text-decoration: none;
`;

const CardImage = styled(Image)`
  border-radius: 1.268rem;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 270px;
  width: 'auto';
  @media (max-width: 600px) {
    height: 200px;
  }
`;

const DateForCard = styled.h1`
  margin-top: 27.88px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 16px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.main};
`;

const TopicForCard = styled.h1`
  margin-top: 13.18px;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 22px;
  font-family: ${inter.style.fontFamily};
  color: ${({ theme }) => theme.palette.black.main};
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
};
