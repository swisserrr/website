import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Heading = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 600;
  margin: 0 16px;
  justify-content: ${({ matches }) => (matches ? 'center' : 'left')};
  font-size: ${({ disableRem }) => (disableRem ? '36px' : '3.6rem')};
  line-height: ${({ disableRem }) => (disableRem ? '48px' : '2.8rem')};
  @media (max-width: 600px) {
    font-size: ${({ disableRem }) => (disableRem ? '22px' : '2.2rem')};
    text-align: center;
  }
`;

const ViewAllContainer = styled.div`
  display: flex;
`;
const ViewAllText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ disableRem }) => (disableRem ? '15px' : '1.5rem')};
  line-height: ${({ disableRem }) => (disableRem ? '20px' : '2rem')};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.black.main};
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin-bottom: ${({ disableRem }) => (disableRem ? '40px' : ' 2.5rem')};
  position: sticky;
  @media (max-width: 900px) {
    margin-bottom: ${({ disableRem }) => (disableRem ? '15px' : ' 0.938rem')};
  }
  @media (max-width: 600px) {
    margin-top: 15px;
    margin-bottom: ${({ disableRem }) => (disableRem ? '25px' : ' 1.563rem')};
  }
`;

export { Container, Heading, ViewAllContainer, ViewAllText, HeadingContainer };
