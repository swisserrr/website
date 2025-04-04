import styled from '@emotion/styled';
import Button from '../CustomButton';
import Input from '../CustomInput';
import Select from '@mui/material/Select';
import HomePageText from 'components/HomePageText';

const AboutUsSection = styled.div`
  width: 100%;
  display: flex;
  // height: ${props => props.dynamicHeightD}px;
  flex-direction: column;
  max-width: 1200px;
  padding-left: 5rem;
  padding-right: 5rem;
  border: 1px solid #DEDEDE;


border-radius: 1.2rem;
  @media (max-width: 600px) {
    margin: 20px 0;
    padding-left: 3rem;
    padding-right: 3rem;
    background: #ECECEC;
    // height: ${props => props.dynamicHeightM}px;
  }
  @media (max-height: 730px) and (min-width: 730px) {
    margin: 10px 0 0 0;
    padding-left: 2rem;
    padding-right: 2rem;
    background: #ECECEC;
    // height: ${props => props.dynamicHeightM}px;
  }
  // background-color: red;
`;

const CustomText = styled(HomePageText)`
  @media (max-height: 800px) and (min-width: 800px) {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1;
    & > span {
      font-size: 1.5rem;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.3rem;
  background-color: #f4f4f4 !important;
  background-color: #f4f4f4 !important;
  @media (max-width: 599px) {
    height: 40px;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
  margin-top: 0px;
  margin-bottom: 0px;
  height: 4rem !important;
`;

const CustomSelect = styled(Select)`
  width: 100%;
  height: 4rem;
  background-color: #f4f4f4 !important;
  border-radius: 2.062rem !important;
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 1.3rem;
  border-color: ${({ theme, disabled, error }) => (error ? theme.palette.primary.main : disabled ? 'none' : 'none')};
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    font-size: 1.3rem;
  }
  border: none !important;
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (max-width: 599px) {
    margin-top: 10px;
  }
  @media (max-width: 900px) {
    margin-top: 12px;
  }
  @media (max-height: 800px) and (min-width: 800px) {
    margin-top: 10px;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: #991e1e !important;
  color: ${({ theme }) => theme.palette.white.main};
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  text-transform: capitalize;
  margin-top: 1.5rem;
`;

const HeadingExtra = styled.span`
  color: #cc4746;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Label = styled(HomePageText)`
  text-align: center;
  // margin-top: 2rem;
  @media (max-height: 600px) and (min-width: 800px) {
  }
`;
const CustomInfoText = styled(HomePageText)`
  text-align: center;
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: -2px;
  padding: 15px 15px 15px 15px;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white !important;
  border-radius: 1rem;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: none;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Smaller font size for small screens */
    line-height: 1.5rem;
    padding: 10px;
  }
`;

const LabelUnderline = styled.span`
  text-align: center;
  text-decoration: underline;
  @media (max-height: 800px) and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export {
  AboutUsSection,
  CustomInput,
  CustomSelect,
  ButtonContainer,
  CustomButton,
  CustomText,
  HeadingExtra,
  Label,
  LabelUnderline,
  CustomInfoText,
};
