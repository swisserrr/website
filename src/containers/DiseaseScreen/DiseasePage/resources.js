/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { AboutSection, ResourseHeaderPaddingText, ResourcesContainer, CommonHeaderText } from './styles';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import CarouselContainer from 'components/CarouselContainer';
import { ArrowIconImage, MostNextArrow, MostPrevArrow } from 'containers/ConciergeServices/styles';
import HomePageImage from 'components/HomePageImage';

import arrow_back from '../../../../public/static/images/arrow_back.png';
import arrow_next from '../../../../public/static/images/arrow_next.png';
import MuiContainer from '@mui/material/Container';
import Link from 'next/link';

const Resources = ({ data }) => {
  const matches = useMediaQuery('(max-width:600px)');

  const MostBookPrevArrow = props => {
    const { onClick } = props;
    return (
      <MostPrevArrow id="next_arrow" onClick={onClick}>
        <ArrowIconImage>
          <HomePageImage src={arrow_back} width="100%" height="100%" />
        </ArrowIconImage>
      </MostPrevArrow>
    );
  };

  const MostBookNextArrow = props => {
    const { onClick } = props;
    return (
      <MostNextArrow onClick={onClick}>
        <ArrowIconImage>
          <HomePageImage src={arrow_next} width="100%" height="100%" />
        </ArrowIconImage>
      </MostNextArrow>
    );
  };

  const getImage = useCallback(
    item => {
      return matches ? get(item, 'image_mobile', '') : get(item, 'image_desktop', '');
    },
    [data, matches]
  );

  return (
    <>
      {get(data, 'is_visible_on_website') && (
        <MuiContainer sx={{ padding: { xs: '0 0 20px 0px' } }}>
          <AboutSection id="expert-data">
            <ResourseHeaderPaddingText>
              <CommonHeaderText>{get(data, 'title', 'N/A')}</CommonHeaderText>
            </ResourseHeaderPaddingText>

            <CarouselContainer
              autoPlay={{ xs: true, md: true }}
              nextArrrow={false}
              prevArrow={false}
              dots={false}
              speed={500}
              slides={{ xs: 1.66, sm: 3, md: 3 }}
              slidesToScroll={{ xs: 1, sm: 3, md: 2 }}
              CustomPrevArrow={MostBookNextArrow}
              CustomNextArrow={MostBookPrevArrow}
              leftArrowMargin={'-3rem'}
              style={{ padding: '0 0 0 20px' }}
              rightArrowMargin={'-3rem'}>
              {map(get(data, 'data', []), val => {
                return (
                  <Link href={val?.url}>
                    <ResourcesContainer>
                      <Image
                        src={getImage(val)}
                        width={5000}
                        height={5000}
                        quality={70}
                        style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '1rem' }}
                      />
                    </ResourcesContainer>
                  </Link>
                );
              })}
            </CarouselContainer>
          </AboutSection>
        </MuiContainer>
      )}
    </>
  );
};

Resources.propTypes = {
  data: PropTypes.object.isRequired,
  memberData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default Resources;
