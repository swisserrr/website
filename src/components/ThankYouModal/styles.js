import styled from '@emotion/styled';

import CustomButton from '../CustomButton';

import Image from 'utils/CustomImage';

const ModalImage = styled(Image)`
  border-radius: 1.268rem;
  width: 100%;
`;

const ModalImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
  margin: 0 1rem;
  margin-top: 60px;
`;

const ModalHeading = styled.h2`
  margin-top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  line-height: 58px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  margin-inline: 10%;
  color: ${({ theme }) => theme.palette.black.main};
  @media (max-width: 600px) {
    font-size: 2.8rem;
    line-height: 33px;
  }
`;

const ModalDesc = styled.h3`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 34px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  margin-inline: 7%;

  color: ${({ theme }) => theme.palette.black.main};
  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 18px;
  }
`;

const ModalButton = styled(CustomButton)`
  padding-block: 20px;
  background-color: ${({ theme }) => theme.palette.black.main};
  color: ${({ theme }) => theme.palette.white.main};
  border-radius: 4.392rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  font-style: normal;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 13px;
  /* identical to box height, or 76% */
  align-items: center;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 45px;
  width: 55%;
  @media (max-width: 600px) {
    width: 70%;
    margin-top: 30px;
  }
`;

export { ModalImage, ModalImageContainer, ModalHeading, ModalDesc, ModalButton };
