import styled from '@emotion/styled';
import HomePageBox from 'components/HomePageBox';

const CustomDiv = styled.div`
  position: relative;
  border-radius: 10rem;
`;

const Contents = styled.span`
  button {
    text-transform: capitalize;
    font-size: 17px;
  }
`;

const Textforxs = styled.span`
  height: 66px;
  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 21px;
    height: 42px;
    font-weight: 500;
  }
`;

const LinkTag = styled(HomePageBox)`
  cursor: pointer;
  @media (max-width: 599px) {
    background-color: transparent;
  }
`;

const ContainerMobileStyle = styled.div`
  padding: 11px 15px;
  margin: 10px;
  border-radius: 2rem;
  @media (max-width: 599px) {
    margin: 12px;
    padding: 11px 15px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(242, 222, 223, 1);
  }
  &:hover {
    background-color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(242, 222, 223, 1);
  }
`;

export { CustomDiv, Textforxs, Contents, LinkTag, ContainerMobileStyle };
