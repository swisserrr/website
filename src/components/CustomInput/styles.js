import styled from '@emotion/styled';

const Input = styled.input`
  border-radius: 10rem;
  background-color: ${({ theme, error, backgroundColor }) =>
    error ? theme.palette.pink.main : backgroundColor ? backgroundColor : theme.palette.secondary.main};
  border-width: ${({ disabled, error }) => (error ? '1px' : disabled ? '0' : '0')};
  color: ${({ theme, disabled, error }) =>
    error ? theme.palette.primary.main : disabled ? theme.palette.secondary.dark : theme.palette.black.second};
  width: ${({ width }) => (width ? width : '100px')};
  height: 4.4rem;
  border-style: solid;
  border-color: ${({ theme, disabled, error }) => (error ? theme.palette.primary.main : disabled ? 'none' : 'none')};
  font-size: 1.7rem;
  &:focus {
    outline: none;
  }
  @media (max-width: 599px) {
    font-size: 1.3rem;
    height: 4rem;
  }
  padding: 0 2rem;
  margin: ${({ margin }) => margin};
  &::placeholder {
    color: ${({ theme, disabled, error }) =>
      error ? theme.palette.primary.main : disabled ? theme.palette.secondary.dark : theme.palette.black.second};
  }
`;

export { Input };
