import React, { useCallback } from 'react';
import {
  AboutSection,
  SymptomsPointer,
  IconContainerCare,
  CareBannerContainer,
  SubHeadingText,
  BannerSecondContainer,
  PointsCareContainer,
  BannerText,
  CareBannerHeadingText,
  BannerMaxWidthContainer,
  PointsCareHeading,
  BannerDescriptionText,
  PointsSubCareText,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import size from 'lodash/size';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import isNull from 'lodash/isNull';
import HomePageButton from 'components/HomePageButton';

const CareBanner = ({ careData, bannerData, openModal }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const getImage = useCallback(
    item => {
      const image = matches
        ? get(item, 'image_mobile', '/static/images/delete1.png')
        : get(item, 'image_desktop', '/static/images/delete1.png');
      return isNull(image) ? '/static/images/delete1.png' : image;
    },
    [careData, matches]
  );

  return (
    <>
      {get(careData, 'is_visible_on_website') && (
        <AboutSection id="care">
          <CareBannerHeadingText>{get(careData, 'title', 'N/A')}</CareBannerHeadingText>
          <SubHeadingText>{get(careData, 'description', 'N/A')}</SubHeadingText>
          <Grid container columnSpacing={20}>
            {map(get(careData, 'points', []), (data, index) => {
              return (
                <Grid size sm={6} xs={12}>
                  <SymptomsPointer
                    hideBorderMobile={index === size(get(careData, 'points', [])) - 1}
                    hideBorderDesktop={
                      index === size(get(careData, 'points', [])) - 1 || index === size(get(careData, 'points', [])) - 2
                    }>
                    <div>
                      <IconContainerCare>
                        <Image
                          src={getImage(data)}
                          width={5000}
                          height={5000}
                          quality={70}
                          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                        />
                      </IconContainerCare>
                    </div>
                    <PointsCareContainer>
                      <PointsCareHeading className="truncate">{data?.title}</PointsCareHeading>
                      <PointsSubCareText className="truncate">{data?.description}</PointsSubCareText>
                    </PointsCareContainer>
                  </SymptomsPointer>
                </Grid>
              );
            })}
          </Grid>
        </AboutSection>
      )}
      {get(bannerData, 'is_visible_on_website') && (
        <AboutSection id="banner">
          <CareBannerContainer>
            <Image
              src={matches ? '/static/images/banner_disease_mobile.png' : '/static/images/banner_disease_desktop.png'}
              fill
              quality={70}
              style={{ objectFit: 'cover', height: '100%', width: '100%', zIndex: -1 }}
            />
            <BannerSecondContainer>
              <BannerText className="truncate" toggle>
                {get(bannerData, 'title', 'N/A')}
              </BannerText>
              <BannerMaxWidthContainer>
                <BannerDescriptionText textAlign toggle>
                  {get(bannerData, 'description', 'N/A')}
                </BannerDescriptionText>
              </BannerMaxWidthContainer>

              <HomePageButton
                hover={{ opacity: '1' }}
                boxShadow="none"
                onClick={openModal}
                position={{ xs: 'relative', md: 'relative' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.5rem ', md: '2.4rem' }}
                lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                fontWeight={{ xs: 500, md: 500 }}>
                Connect with us
              </HomePageButton>
            </BannerSecondContainer>
          </CareBannerContainer>
        </AboutSection>
      )}
    </>
  );
};

CareBanner.propTypes = {
  careData: PropTypes.object.isRequired,
  bannerData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default CareBanner;
