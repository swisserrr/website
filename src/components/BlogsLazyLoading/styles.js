import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex: 1;
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: max(17px, min(3vw, 36px));
  line-height: 4rem;
  margin: 0 16px 0 16px;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin-bottom: 5.625rem;
  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

const LoadingContainer = styled.div`
  margin-bottom: 40px;
`;

export { Container, Heading, HeadingContainer, LoadingContainer };
