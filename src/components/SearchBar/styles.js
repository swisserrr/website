import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Close } from '@mui/icons-material';

const Container = styled.div`
  position: absolute;
  width: ${props => (props.isSearching ? '100%' : '44px')};
  right: 0;
  top: 0;
  background: ${({ theme, isSearching }) => (isSearching ? theme.palette.white.main : theme.palette.secondary.light)};
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: ${({ isSearching }) => (isSearching ? '0px 0px 11.1446px rgba(0, 0, 0, 0.25)' : 'none')};
  border-radius: ${({ isSearching, isSuggestion }) => (isSearching || isSuggestion ? 15.9208 : 0)}px;
`;
const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 44px;
  background: ${({ theme, isSuggestion, isSearching }) =>
    isSuggestion || isSearching ? theme.palette.white.main : theme.palette.secondary.light};
  border-radius: 15.9208px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInputContainer = styled.div`
  width: 100%;
  border-radius: 0%;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding-left: 35px;
  border: none;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white.main};
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid black;
  &:focus {
    display: flex;
  }
`;

const IconButton = styled.button`
  position: relative;
  height: 44px;
  width: 44px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;
  &:hover {
    color: red;
    &::after {
      opacity: 0.4;
      transform: scale(1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
  }
`;

const SearchIconComponent = styled(SearchIcon)(({ theme }) => ({
  height: '24px',
  width: '24px',
  '&:focus': {
    color: theme.palette.black.main,
  },
}));

const CloseIconComponent = styled(Close)(({ theme }) => ({
  height: '24px',
  width: '24px',
  '&:focus': {
    color: theme.palette.black.main,
  },
}));
export const Ul = styled.ul`
  width: 100%;
  display: contents;
`;

export const Li = styled.ul`
  width: 100%;
  padding: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 14px;
  align-self: center;
  background: ${({ theme }) => theme.palette.white.main};
  display: block;
  border-bottom: 1px solid white;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

export const SuggestContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 100%;
  margin-top: 44px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  border-radius: 15.9208px;
  margin-bottom: 10px;
`;
export const SuggestionItem = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  justify-content: center;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export {
  Container,
  SearchIconComponent,
  SearchInput,
  IconButton,
  CloseIconComponent,
  SearchContainer,
  SearchInputContainer,
};
