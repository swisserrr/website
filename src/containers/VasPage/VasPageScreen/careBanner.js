import React from 'react';
import {
  AboutSection,
  PointsText,
  SymptomsPointer,
  IconContainerCare,
  PointsSubText,
  CareHeading,
  CareBannerTextContainer,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiContainer from '@mui/material/Container';

const CareBanner = ({ careData }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div style={{ backgroundColor: '#F4F1EB' }}>
      <MuiContainer>
        {get(careData, 'is_visible') && (
          <AboutSection id="care">
            <CareHeading>{get(careData, 'title', 'N/A')}</CareHeading>
            <Grid container columnSpacing={20}>
              {map(get(careData, 'data', []), (data, index) => {
                return (
                  <Grid size sm={6} xs={12} key={index}>
                    <SymptomsPointer
                      hideBorderMobile={index === get(careData, 'data', []).length - 1}
                      hideBorderDesktop={
                        index === get(careData, 'data', []).length - 1 || index === get(careData, 'data', []).length - 2
                      }>
                      <div>
                        <IconContainerCare>
                          <Image
                            src={get(
                              data,
                              matches ? 'banner_image_image' : 'banner_image_desktop',
                              '/static/images/delete1.png'
                            )}
                            width={5000}
                            height={5000}
                            quality={70}
                            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                          />
                        </IconContainerCare>
                      </div>
                      <CareBannerTextContainer>
                        <PointsText className="truncate">{data?.title}</PointsText>
                        <PointsSubText className="truncate">{data?.description}</PointsSubText>
                      </CareBannerTextContainer>
                    </SymptomsPointer>
                  </Grid>
                );
              })}
            </Grid>
          </AboutSection>
        )}
      </MuiContainer>
    </div>
  );
};

CareBanner.propTypes = {
  careData: PropTypes.object.isRequired,
};

export default CareBanner;
