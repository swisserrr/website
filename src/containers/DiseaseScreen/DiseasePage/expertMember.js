/* eslint-disable react/prop-types */
import React, { useCallback, useRef } from 'react';
import {
  AboutSection,
  ExpertContainer,
  PointsText,
  PointsSubText,
  ExpertTextContainer,
  ExpertButtonContainer,
  ArrowIconContainer,
  ServicesContainer,
  PrevArrow,
  NextArrow,
  ReviewContainer,
  StarContainer,
  Separator,
  ScrollContainerMain,
  CommonHeaderText,
  ExpertPointsText,
  ExpertPointsSubText,
  HeadingExpertContainer,
} from './styles';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomePageButton from 'components/HomePageButton';
import HomePageImage from 'components/HomePageImage';
import CarouselContainer from 'components/CarouselContainer';
import { ArrowIconImage } from 'containers/ConciergeServices/styles';
import arrow_back from '../../../../public/static/images/arrow_back.png';
import arrow_next from '../../../../public/static/images/arrow_next.png';
import MuiContainer from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import isNull from 'lodash/isNull';

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
      container1.current.scrollTo(container1?.current?.scrollLeft + 350, 0);
    }
  }, []);

  const handleLeftButton = useCallback(() => {
    if (container1.current) {
      container1.current.scrollTo(container1?.current?.scrollLeft - 350, 0);
    }
  }, []);

  const getImage = useCallback(
    item => {
      const image = matches
        ? get(item, 'image_mobile', '/static/images/delete1.png')
        : get(item, 'image_desktop', '/static/images/delete1.png');
      return isNull(image) ? '/static/images/delete1.png' : image;
    },
    [matches]
  );

  return (
    <AboutSection>
      {get(expertData, 'is_visible_on_website') && (
        <MuiContainer sx={{ padding: { xs: '0 0 20px 15px' } }}>
          {/* <CarePlanHeader disablePadding={true}> */}
          <CommonHeaderText>{get(expertData, 'title', 'N/A')}</CommonHeaderText>
          {/* </CarePlanHeader> */}
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
                    src={getImage(data)}
                    width={5000}
                    height={5000}
                    quality={70}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '1.574rem' }}
                  />
                  <ExpertTextContainer>
                    <ExpertPointsText bold={true}>{data?.title}</ExpertPointsText>
                    <ExpertPointsSubText>{data?.description}</ExpertPointsSubText>
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
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              lineHeight={{ xs: '0.7rem', md: '2.4rem' }}
              margin={{ xs: '1rem 0', md: '2rem 0' }}
              padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
              borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
              fontWeight={{ xs: 500, md: 500 }}
              color={{ md: '#fff', xs: '#fff' }}>
              Get 5 mins Consultation call
            </HomePageButton>
          </ExpertButtonContainer>
        </MuiContainer>
      )}
      <MuiContainer>
        <Separator />
      </MuiContainer>

      <MuiContainer sx={{ padding: { xs: 0 } }}>
        <HeadingExpertContainer>
          <CommonHeaderText>Member Reviews</CommonHeaderText>
          {!matches && (
            <ArrowIconContainer>
              <SamplePrevArrow />
              <SampleNextArrow />
            </ArrowIconContainer>
          )}
        </HeadingExpertContainer>
        <ServicesContainer container>
          <ScrollContainerMain
            className="scrollerXs"
            innerRef={container1}
            ref={scrollRef}
            style={{ display: 'flex', paddingLeft: '4.9rem', paddingRight: '25%' }}>
            {map(memberData, (itemVal, index) => (
              <Grid style={{ margin: '0 0 10px 10px' }} size key={index}>
                <ReviewContainer>
                  <div>
                    {map(Array.from({ length: itemVal?.rating }), () => {
                      return <StarContainer>&#9733;&nbsp;</StarContainer>;
                    })}
                    {map(Array.from({ length: 5 - itemVal?.rating }), () => {
                      return <StarContainer>&#9734;&nbsp;</StarContainer>;
                    })}
                  </div>
                  <div>
                    <PointsText className="truncate-3">{itemVal?.comment}</PointsText>
                  </div>
                  <div>
                    <PointsSubText className="truncate-1">{itemVal?.name}</PointsSubText>
                  </div>
                </ReviewContainer>
              </Grid>
            ))}
          </ScrollContainerMain>
        </ServicesContainer>
      </MuiContainer>
    </AboutSection>
  );
};

ExpertMember.propTypes = {
  expertData: PropTypes.object.isRequired,
  memberData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default ExpertMember;
