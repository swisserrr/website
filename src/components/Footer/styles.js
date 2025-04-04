import styled from '@emotion/styled';
import Button from '../CustomButton';
import Input from '../CustomInput';
import Select from '@mui/material/Select';
import Image from 'utils/CustomImage';
import Grid from '@mui/material/Grid';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  @media (max-width: 767px) {
    padding-top: ${({ hideFormSection }) => (hideFormSection ? '0' : '20px')};
  }
`;

const FooterMaxWidth = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
`;

const MaxWidthAboutUs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.black.third};
  padding: 0 25px;
`;

const MaxWidthSocialIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.black.third};
`;

const AboutUsSection = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  padding: 0 40px 0 10px;
  @media (max-width: 900px) {
    padding: 25px 10px 0 0px;
    margin: 0 0;
  }
  @media (max-width: 400px) {
    width: 70%;
    padding: 25px 5px 10px 5px;
    margin: 0 0;
  }
`;

const AboutUsSectionTerms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  padding: 0 40px 0 10px;
  @media (max-width: 900px) {
    padding: 25px 10px 0 10px;
    margin: 0;
  }
`;

const AboutUsSectionEnd = styled(AboutUsSection)`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 15px 5px 10px 5px;
    justify-content: flex-start;
  }
`;

const ContactFormSection = styled(AboutUsSection)`
  width: 100% !important;
  background-color: #ffffff;
  border-radius: 1.25rem;
  z-index: 1;
  padding: 2.134rem 2.5rem 2.134rem 2.5rem;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  @media (max-width: 899px) {
    margin-top: ${({ disableMargin }) => (disableMargin ? 0 : '-4rem')};
    padding: 2.5rem 3rem 2.5rem 3rem;
    margin-bottom: 1.707rem;
  }
  @media (max-width: 599px) {
    margin-top: ${({ disableMargin }) => (disableMargin ? 0 : '-5rem')};
    padding: 1.884rem 2rem 1.884rem 2rem !important;
    margin-bottom: 1.707rem;
  }
`;

const AboutUsSectionTextBig = styled.div`
  font-style: normal;
  font-weight: 600;
  color: #fff;
  align-self: ${({ align }) => (align ? 'flex-end' : 'flex-start')};
  font-size: 2.8rem;
  line-height: 3.3rem;
  height: 60px;
  @media (max-width: 900px) {
    font-size: 1.7rem;
    line-height: 2.8rem;
    height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

const AboutUsSectionTextSmall = styled.div`
  font-style: normal;
  font-weight: 500;
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 20px;
  cursor: pointer;
`;

const FooterBottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow-x: hidden;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.black.third};
  @media (max-width: 786px) {
    justify-content: space-between;
    gap: 10px;
    padding: 0 30px;
  }
`;

const FooterBottomText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  color: #fff;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0 0 5px 0;
  }
`;

const FooterBottomTextUnderline = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  color: #fff;
  text-decoration: underline;
`;

const ImageContainer = styled.div`
  width: 356.34px;
  height: 70.59px;
  margin: 35px 0;
  @media (max-width: 786px) {
    width: 200px;
    margin: 35px 0 10px 0;
    height: 50px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.938rem;
`;

const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main} !important;
  color: ${({ theme }) => theme.palette.white.main};
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 2.067rem;
  text-transform: none;
  line-height: 1.8rem;
  height: 3rem;
  padding: 2rem 10rem 2rem 10rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.331rem;
    font-weight: 500;
    padding: 2rem 5.3rem 2rem 5.3rem;
  }
`;

const CustomInput = styled(Input)`
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #2447ff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 18px;
  padding: 0;
  margin: 0 0 1.563rem 0;
  @media (max-width: 599px) {
    height: 40px;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;

const CustomSelect = styled(Select)`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #ffffff !important;
  border-width: 0 0 1px 0 !important;
  border-color: ${({ theme, error }) => (error ? theme.palette.primary.main : theme.palette.black.main)};
  border-style: solid;
  border-radius: 0rem !important;
  color: #2447ff;
  font-size: 1.5rem;
  margin-bottom: 1.563rem;
  padding-left: 0 !important;
  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    font-size: 1.3rem;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  &::hover {
    border: 'none';
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.206rem;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const DetailContainerText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  color: ${({ theme }) => theme.palette.secondary.light};
  margin-left: 2.127rem;
  @media (max-width: 600) {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 22.5px;
  }
`;

const EmohaDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px 0 40px;
  @media (max-width: 900px) {
    padding: 10px;
    margin: 0 0;
  }
`;
const CustomImage = styled(Image)`
  cursor: pointer;
`;

const LogoImageContainer = styled.div`
  /* padding-bottom: 2rem; */
`;

const ImageGoogleContainer = styled.div`
  width: 160px;
  height: 45px;
  margin: 0 0 10px 0;
  position: relative;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 63px;
    height: 19px;
  }
`;

const GetTheAppHeading = styled.div`
  width: 190px;
  height: 55px;
  position: relative;
  @media (max-width: 600px) {
    width: 100px;
    height: auto;
  }
`;

const GetTheAppText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 30px;
  margin-right: 3.2rem;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  justify-content: space-between;
  flex-direction: row;
`;

const ExtraSupport = styled.div`
  @media (min-width: 786px) {
    display: none;
  }
`;

const OfficeDetailContainer = styled(Grid)`
  padding: 0 10rem 0 2rem;
  @media (max-width: 1024px) {
    padding: 0 7rem 0 2rem;
  }
  @media (max-width: 899px) {
    padding: 0 6rem 0 6rem;
  }
  @media (max-width: 599px) {
    padding: 0 3rem 0 3rem;
  }
`;

const OfficeContactContainer = styled(Grid)`
  padding: 0 2rem 0 10rem;
  @media (max-width: 1024px) {
    padding: 0 2rem 0 7rem;
  }
  @media (max-width: 899px) {
    padding: 0 6rem 0 6rem;
  }
  @media (max-width: 599px) {
    padding: 0 4rem 0 4rem;
  }
`;

const BottomFooterMobileUI = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const BottomFooterDesktopUI = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
`;
const FooterBottomTextForMobile = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #fff;
  display: flex;
  align-items: flex-start;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  padding: 0 40px 0 10px;
  @media (max-width: 900px) {
    padding: 25px 10px 0 10px;
    margin: 0 0;
  }
`;

const GetTheAppTextBig = styled.div`
  font-style: normal;
  font-weight: 600;
  color: #fff;
  align-self: ${({ align }) => (align ? 'flex-end' : 'flex-start')};
  font-size: 2.8rem;
  line-height: 3.3rem;
  height: 60px;
  @media (max-width: 900px) {
    font-size: 1.7rem;
    line-height: 2.8rem;
  }
  @media (max-width: 600px) {
    height: auto;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

const FeedbackTerms = styled.div`
  width: 175%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  padding: 0 40px 0 0px;
  @media (max-width: 900px) {
    padding: 10px 10px 40px 0px;
    margin: 0;
  }
`;

const SocialSection = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px 0;
  padding: 0 40px 0 10px;
  @media (max-width: 900px) {
    padding: 10px 10px 0 0px;
    margin: 0 0;
  }
  @media (max-width: 400px) {
    width: 100%;
    padding: 10px 5px 0 0px;
    margin: 0 0;
  }
`;

export {
  SocialSection,
  FeedbackTerms,
  FooterContainer,
  ImageContainer,
  FooterBottomContainer,
  FooterBottomText,
  FooterBottomTextUnderline,
  FooterMaxWidth,
  AboutUsSection,
  AboutUsSectionTextBig,
  AboutUsSectionTextSmall,
  MaxWidthAboutUs,
  AboutUsSectionEnd,
  ButtonContainer,
  CustomButton,
  CustomInput,
  CustomSelect,
  DetailContainer,
  DetailContainerText,
  EmohaDetail,
  CustomImage,
  LogoImageContainer,
  GetTheAppText,
  FooterSocialIcons,
  ImageGoogleContainer,
  ExtraSupport,
  OfficeDetailContainer,
  ContactFormSection,
  BottomFooterMobileUI,
  FooterBottomTextForMobile,
  BottomFooterDesktopUI,
  GetTheAppHeading,
  OfficeContactContainer,
  AboutUsSectionTerms,
  FormSection,
  GetTheAppTextBig,
  MaxWidthSocialIcons,
};
