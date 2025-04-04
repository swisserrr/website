import styled from '@emotion/styled';
import Image from 'utils/CustomImage';

const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const IconDiv = styled.div`
  width: 50%;
  padding: '3rem 0 0rem 0';
`;

const ImageContainer = styled.div`
  width: 88px;
  height: 88px;
  background-color: rgba(218, 80, 74);
  display: flex;
  position: relative;
  outline: 8px solid rgba(218, 80, 74, 0.1);
  border-radius: 44px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0;
  }
`;
const NextImage = styled(Image)`
  padding: ${({ toggle }) => (toggle ? '30px 32px 30px 32px' : 'max(12px, min(2vw, 30px))')};
  @media (max-width: 600px) {
    padding: ${({ toggle }) => (toggle ? '12px 13px 12px 13px' : 'max(12px, min(2vw, 30px))')};
  }
`;

export { CustomDiv, IconDiv, ImageContainer, NextImage };
