/* eslint-disable react/prop-types */
import React, { useCallback, useRef } from 'react';
import {
  AboutSection,
  SubHeadingText,
  CarePlanHeader,
  ExpertContainer,
  PointsText,
  PointsSubText,
  ExpertTextContainer,
  ExpertButtonContainer,
  HeadingContainer,
  ConciergeHeading,
  ArrowIconContainer,
  ServicesContainer,
  PrevArrow,
  NextArrow,
  ReviewContainer,
  StarContainer,
} from './styles';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ArrowIconImage } from 'containers/ConciergeServices/styles';
import ScrollContainer from 'react-indiana-drag-scroll';
import arrow_back from '../../../../public/static/images/arrow_back.png';
import arrow_next from '../../../../public/static/images/arrow_next.png';
import MuiContainer from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import dynamic from 'next/dynamic';
const CarouselContainer = dynamic(() => import('components/CarouselContainer'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));

const ExpertMember = ({ expertData, memberData, openModal }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const scrollRef = useRef(null);
  const container1 = useRef(null);
  const SamplePrevArrow = () => {
    return (
      <PrevArrow id="next_arrow" onClick={handleLeftButton}>
        <ArrowIconImage>
          <HomePageImage src={arrow_back} width="100%" height="100%" />
        </ArrowIconImage>
      </PrevArrow>
    );
  };

  const SampleNextArrow = () => {
    return (
      <NextArrow onClick={handleRightButton}>
        <ArrowIconImage>
          <HomePageImage src={arrow_next} width="100%" height="100%" />
        </ArrowIconImage>
      </NextArrow>
    );
  };

  const handleRightButton = useCallback(() => {
    if (container1.current) {
      container1.current.scrollTo(container1?.current?.scrollLeft + 200, 0);
    }
  }, []);

  const handleLeftButton = useCallback(() => {
    if (container1.current) {
      container1.current.scrollTo(container1?.current?.scrollLeft - 200, 0);
    }
  }, []);

  return (
    <>
      {get(expertData, 'is_visible_on_website') && (
        <MuiContainer sx={{ padding: { xs: 0 } }}>
          <AboutSection id="expert-data">
            <CarePlanHeader>
              <SubHeadingText>{get(expertData, 'title', 'N/A')}</SubHeadingText>
            </CarePlanHeader>
            <CarouselContainer
              nextArrrow={false}
              prevArrow={false}
              dots={false}
              centerPadding="0%"
              infinite={{ md: false, xs: false }}
              slides={{ xs: 1.66, sm: 3, md: 4 }}
              scaleCenter={false}
              leftArrowMargin={'-4rem'}
              rightArrowMargin={'-4rem'}>
              {map(get(expertData, 'points', []), data => {
                return (
                  <ExpertContainer>
                    <Image
                      src={get(data, matches ? 'image_mobile' : 'image_desktop', '/static/images/delete1.png')}
                      width={5000}
                      height={5000}
                      quality={70}
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                    <ExpertTextContainer>
                      <PointsText className="truncate-1">{data?.title}</PointsText>
                      <PointsSubText className="truncate">{data?.description}</PointsSubText>
                    </ExpertTextContainer>
                  </ExpertContainer>
                );
              })}
            </CarouselContainer>
            <ExpertButtonContainer>
              <HomePageButton
                hover={{ opacity: '1' }}
                boxShadow="none"
                onClick={openModal}
                position={{ xs: 'relative', md: 'relative' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.5rem ', md: '2.0rem' }}
                lineHeight={{ xs: '0.7rem', md: '2.4rem' }}
                padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                fontWeight={{ xs: 500, md: 500 }}
                color={{ md: '#fff', xs: '#fff' }}>
                Get 5 mins Consultation call
              </HomePageButton>
            </ExpertButtonContainer>
          </AboutSection>
        </MuiContainer>
      )}

      <MuiContainer sx={{ padding: { xs: 0 } }}>
        <AboutSection id="member-review">
          <HeadingContainer>
            <ConciergeHeading>Member Reviews</ConciergeHeading>
            <ArrowIconContainer>
              <SamplePrevArrow />
              <SampleNextArrow />
            </ArrowIconContainer>
          </HeadingContainer>
          <ServicesContainer container>
            <ScrollContainer
              className="scrollerXs"
              innerRef={container1}
              ref={scrollRef}
              style={{ display: 'flex', paddingLeft: '4.9rem' }}>
              {map(memberData, (itemVal, index) => (
                <Grid style={{ marginBottom: '30px' }} size key={index}>
                  <ReviewContainer>
                    <div>
                      {map(Array.from({ length: itemVal?.rating }), () => {
                        return <StarContainer> &#9733;</StarContainer>;
                      })}
                      {map(Array.from({ length: 5 - itemVal?.rating }), () => {
                        return <StarContainer>&#9734; </StarContainer>;
                      })}
                    </div>
                    <div>
                      <PointsText className="truncate-3">{itemVal?.comment}</PointsText>
                    </div>
                    <div>
                      <PointsText className="truncate-1">{itemVal?.name}</PointsText>
                    </div>
                  </ReviewContainer>
                </Grid>
              ))}
            </ScrollContainer>
          </ServicesContainer>
        </AboutSection>
      </MuiContainer>
    </>
  );
};

ExpertMember.propTypes = {
  expertData: PropTypes.object.isRequired,
  memberData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default ExpertMember;
