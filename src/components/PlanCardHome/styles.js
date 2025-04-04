import styled from '@emotion/styled';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import { css } from '@emotion/react';
import HomePageText from 'components/HomePageText';

const Content = styled.div`
  text-align: start;

  .text-caps {
    text-transform: capitalize;
  }
`;

const CustomBox = styled.div(
  props => css`
    :hover {
      button {
        background-color: ${!isEqual(get(props, 'cardFrom'), 'membership') && '#ffffff'};
        color: ${!isEqual(get(props, 'cardFrom'), 'membership') && '#1a1a1a'};
      }
    }
  `
);

const SlashText = styled(HomePageText)`
  position: relative;
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    right: 0;
    border-top: 1px solid;
    border-color: inherit;

    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
`;

const AdditionalGST = styled.span`
  font-size: 1.4rem;
  margin-left: 2rem;
  letter-spacing: 0.02rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-left: 1.5rem;
  }
`;

const PersonCovered = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.6rem;
  line-height: 1.8rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export { Content, CustomBox, SlashText, AdditionalGST, PersonCovered };
