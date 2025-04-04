import styled from '@emotion/styled';
import Image from 'utils/CustomImage';
const Container = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-right: 3rem;
  @media (max-width: 600px) {
    padding-right: 1rem;
  }
`;

const Avatar = styled(Image)`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  background-color: grey;
  aspect-ratio: 1 / 1;
`;

const Name = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 1rem;
  align-self: center;
  @media (max-width: 599px) {
    font-size: 1.5rem;
  }
`;

export { Avatar, Container, Name };
