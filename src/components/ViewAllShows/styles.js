import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-size: 3.6rem;
  line-height: 4.4rem;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin: 3rem 16px 5.625rem 16px;
  position: sticky;
  @media (max-width: 600px) {
    margin: 1.6rem 16px 1rem 16px;
  }
`;
export { Container, Heading, HeadingContainer };
