import React from 'react';
import {
  AboutSection,
  CarePlanHeader,
  SubHeadingText,
  WhyChooseUsCard,
  WhyChooseUsHeadingText,
  WhyChooseUsIcon,
  WhyChooseUsSubText,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiContainer from '@mui/material/Container';

const WhyChooseUs = ({ data }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <MuiContainer>
        {get(data, 'is_visible') && (
          <AboutSection id="why-us">
            <CarePlanHeader>
              <SubHeadingText center>{get(data, 'title', 'N/A')}</SubHeadingText>
            </CarePlanHeader>
            <Grid container columnSpacing={{ xs: 0, sm: 4 }}>
              {map(get(data, 'data', []), (val, index) => {
                return (
                  <Grid size sm={3} xs={6} key={index}>
                    <WhyChooseUsCard>
                      <WhyChooseUsIcon>
                        <Image
                          src={get(
                            val,
                            matches ? 'banner_image_image' : 'banner_image_desktop',
                            '/static/images/expand_more_black.webp'
                          )}
                          width={1000}
                          height={1000}
                          quality={70}
                          style={{ objectFit: 'contain', height: '35%', width: '35%' }}
                        />
                      </WhyChooseUsIcon>
                      <WhyChooseUsHeadingText color={val.colour_code}>
                        {get(val, 'title', 'N/A')}
                      </WhyChooseUsHeadingText>
                      <WhyChooseUsSubText toggle>{get(val, 'description', 'N/A')}</WhyChooseUsSubText>
                    </WhyChooseUsCard>
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

WhyChooseUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhyChooseUs;
