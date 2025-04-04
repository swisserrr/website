/* Styles for HomePagePlans container module */
import styled from '@emotion/styled';
import Image from 'utils/CustomImage';

const Content = styled.div`
  text-align: center;

  .text-caps {
    text-transform: capitalize;
  }
`;

const CustomBox = styled.div`
  @media (max-width: 600px) {
    margin: 0 1.313rem 0 1.313rem;
  }
`;
const CardImage = styled(Image)`
  border-radius: ${({ disableRem }) => (disableRem ? '20px' : '1.25rem')};
  height: 100% !important;
`;

export { Content, CustomBox, CardImage };
