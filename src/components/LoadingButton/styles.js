import styled from '@emotion/styled';
import LoadingButton from '@mui/lab/LoadingButton';

const CustomLoadingButton = styled(LoadingButton)`
  font-style: normal;
  font-weight: 600;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.1rem')};
  padding: ${props => (props.padding ? props.padding : '0.8rem 3rem')};
  border-radius: 3rem;
  color: #fff;
  height: ${props => (props.height ? props.height : '4.4rem')};
  margin: ${props => (props.margin ? props.margin : 0)};
  color: ${({ theme, disabled, error }) =>
    error ? theme.palette.primary.main : disabled ? theme.palette.black.main : theme.palette.white.main};
  width: ${({ width }) => width};
  background-color: ${({ theme, disabled, backgroundColor }) =>
    disabled ? `${theme.palette.secondary.main} !important` : backgroundColor ? backgroundColor : 'none'};
`;

export default CustomLoadingButton;
