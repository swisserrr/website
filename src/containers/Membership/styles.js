import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import s from 'csd';

const HeadingContainer = styled.div`
  margin-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const SubHeading = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.663rem;
  /* identical to box height */
  text-align: center;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  margin-top: 20px;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  @media only screen and (max-width: 900px) {
    margin-top: 15px;
    color: ${({ theme }) => theme.palette.black.third};
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 18.15px;
    margin-top: 0px;
  }
`;

const PlanBenefitContainer = styled.div`
  padding-top: 60px;
  background-color: #f7f7f7;
  display: flex;
  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

const Relativecard = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const BannerContainer = styled(Grid)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  max-width: 100%;
  height: 71vh;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  z-index: 0;
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

  @media (max-width: 1024px) {
    height: 50vh;
  }
  @media (max-width: 900px) {
    position: relative;
    height: 45vh;
  }
  @media (max-width: 600px) {
    position: relative;
    height: 35vh;
    ::after {
      background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #f8f8f8 100%);
      height: 50px;
    }
  }
`;

const BannerHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  line-height: 4.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1%;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  margin-top: 15rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const MobileBannerHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  display: none;
  align-items: center;
  text-align: center;
  z-index: 1;
  color: ${({ theme }) => theme.palette.white.main};
  @media (max-width: 900px) {
    display: flex;
    font-size: 3.6rem;
    line-height: 4.8rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
  @media (max-width: 600px) {
    display: flex;
    font-size: 2.2rem;
    line-height: 2.663rem;
    letter-spacing: -1%;
    padding: 0px 4.5rem;
    margin-top: 8rem;
  }
`;

const ImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const StyledTabIndicator = styled.div`
  position: absolute;
  width: ${props => 100 / props.tabCount}%;
  top: 100%;
  left: 0;
  transform: translate(${props => props.offset}, -100%);
  transition: transform ${props => props.duration}ms;
  border-top-style: solid;
  border-top-width: 1px;
`;

const CustomButton = styled.button`
  cursor: pointer;
  transition: color 0.3s;
  background-color: ${props => (props.isFocused ? '#fff' : '#E1DEDE')};
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  transform: translate(${props => props.offset}, -100%);
  transition: transform ${props => props.duration}ms;
`;

const StyledTab = styled.li`
  flex: 1;
  height: 100%;
  border-radius: 3rem;
  width: 1.1rem;
`;

const StyledTabs = styled.div`
  position: relative;
  list-style: none;
  ${s.row}
  background-color: #E1DEDE;
  border-radius: 3rem;
  width: 45rem;
  height: 5.4rem;
  padding: 0.3rem 0.35rem 0.3rem 0.35rem;
  margin: 0 auto;
`;

const StyledOuterSliders = styled.div`
  overflow: hidden;
`;

const StyledSliders = styled.div`
  flex-wrap: no-wrap;
  width: 100%;
  transform: translateX(${props => `${props.offset}%`});
  transition: transform ${props => props.duration}ms;
`;

const PlanContainer = styled.div`
  display: flex;
`;

export {
  HeadingContainer,
  SubHeading,
  PlanBenefitContainer,
  Relativecard,
  BannerContainer,
  BannerHeading,
  MobileBannerHeading,
  ImageContainer,
  StyledTabIndicator,
  StyledTab,
  StyledTabs,
  StyledOuterSliders,
  StyledSliders,
  CustomButton,
  PlanContainer,
};
