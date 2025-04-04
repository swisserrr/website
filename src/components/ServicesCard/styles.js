import styled from '@emotion/styled';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 5.3rem;
  height: 4.4rem;
  width: 4.4rem;
  @media (max-width: 767px) {
    height: 2rem;
    width: 2rem;
    margin-top: 16.65px;
  }
`;

const ServicesName = styled.h3`
  font-size: 1.7rem;
  margin-top: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 39.9px;
  /* Truncate text css */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 3.443rem;
  margin-top: 2rem;

  color: ${({ theme, selected }) => (selected ? theme?.palette?.white?.main : theme?.palette?.black?.third)};
  @media (max-width: 767px) {
    font-size: 1.3rem;
    line-height: 15.73px;
    margin-bottom: 1.041rem;
    margin-top: 1rem;
  }
`;
const ServicesNameH2 = styled.h2`
  font-size: 1.7rem;
  margin-top: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 39.9px;
  /* Truncate text css */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 3.443rem;
  margin-top: 2rem;

  color: ${({ theme, selected }) => (selected ? theme?.palette?.white?.main : theme?.palette?.black?.third)};
  @media (max-width: 767px) {
    font-size: 1.3rem;
    line-height: 15.73px;
    margin-bottom: 1.041rem;
    margin-top: 1rem;
  }
`;

const Container = styled.div`
  cursor: pointer;
  width: 22rem;
  max-width: 22rem;
  min-width: 22rem;
  height: 220px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  border-radius: 2rem;
  margin-right: 2.5rem;
  background-color: ${({ theme, selected }) => (selected ? theme?.palette?.primary?.main : 'rgba(236, 236, 236, 0.8)')};

  margin-top: 1rem;
  @media (max-width: 767px) {
    width: 94.52px;
    max-width: 94.52px;
    min-width: 94.52px;
    height: 94.52px;
    margin-right: 10px;
    margin-top: 4px;
  }
`;

export { Container, ImageContainer, ServicesName, ServicesNameH2 };
