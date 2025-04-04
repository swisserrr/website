import styled from '@emotion/styled';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { css } from '@emotion/react';
import Slider from 'react-slick';

const CustomSlider = styled(Slider)(
  props =>
    css`
      position: relative;
      .slick-list {
        /* padding: ${get(props, 'scaleCenter') && '5rem 5rem 19rem 5rem !important'}; */
        padding-left: ${get(props, 'paddingLeft') && '8.5rem !important'};
      }
      .slick-arrow {
        display: ${isEmpty(get(props, 'isArrowShown')) && 'none !important'};
        left: ${isEmpty(get(props, 'isArrowShown')) && 0};
        right: ${isEmpty(get(props, 'isArrowShown')) && 0};
      }
      /* .slick-center {
        transform: ${get(props, 'scaleCenter') && 'scale(1.4)'};
        .members_info {
          display: flex;
        }
        .react-player__shadow {
          display: block !important;
          display: flex !important;
        }
      } */
      .react-player__shadow {
        /* display: none !important; */
      }
      .slick-dots li button {
        height: 0px;
        width: 0px;
        background-color: ${get(props, 'dotsColor') || '#1A1A1A'};
        ::before {
          font-size: 0px;
        }
      }
      .slick-dots li {
        list-style-type: none;
        padding-top: 1rem;
      }
      .slick-dots .slick-active button {
        background-color: #cc4746;
      }

      @media (max-width: 600px) {
        .slick-track {
          /* padding: ${get(props, 'scaleCenter') && '5rem 5rem 23rem 5rem !important'}; */
          /* transform: translate3d(0, 0, 0) !important; */
        }
      }
    `
);

const RightArrow = styled.div(
  props =>
    `
  cursor: pointer;
  position: absolute;
  top: 30%;
  padding:5px;
  font-size: 25px;
  border-radius: 50%;
  right: ${get(props, 'rightArrowMargin') ? get(props, 'rightArrowMargin') : 0};
`
);
const LeftArrow = styled.div(
  props => `
  cursor: pointer;
  position: absolute;
  top: 30%;
  left: 0;
   padding:5px;
  font-size: 25px;
  z-index: 1;
  border-radius: 50%;
 left: ${get(props, 'leftArrowMargin') ? get(props, 'leftArrowMargin') : 0};
`
);

export { CustomSlider, RightArrow, LeftArrow };
