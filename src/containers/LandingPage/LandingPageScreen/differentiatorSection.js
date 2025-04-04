import React from 'react';
import {
  AboutSection,
  DiffMaxWidth,
  DifferentiatorCard,
  DifferentiatorCardHeadingText,
  DifferentiatorHeaderContainer,
  DifferentiatorIcon,
  DifferentiatorSubText,
  SubHeadingText,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiContainer from '@mui/material/Container';

const Differentiator = ({ data }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <MuiContainer>
      {get(data, 'is_visible') && (
        <AboutSection id="differentiator-section">
          <DifferentiatorHeaderContainer>
            <DiffMaxWidth>
              <SubHeadingText center>{get(data, 'title', 'N/A')}</SubHeadingText>
            </DiffMaxWidth>
          </DifferentiatorHeaderContainer>
          <Grid container sx={{ padding: { xs: 0, sm: '0 120px' } }} spacing={{ xs: 2, sm: 4 }}>
            {map(get(data, 'data', []), (val, index) => {
              return (
                <Grid size sm={4} xs={6} key={index}>
                  <DifferentiatorCard>
                    <DifferentiatorIcon>
                      <Image
                        src={get(
                          val,
                          matches ? 'banner_image_image' : 'banner_image_desktop',
                          '/static/images/expand_more_black.webp'
                        )}
                        width={1000}
                        height={1000}
                        quality={70}
                        style={{ objectFit: 'cover', height: '70%', width: '70%' }}
                      />
                    </DifferentiatorIcon>
                    <DifferentiatorCardHeadingText toggle>{get(val, 'title', 'N/A')}</DifferentiatorCardHeadingText>
                    <DifferentiatorSubText toggle>{get(val, 'description', 'N/A')}</DifferentiatorSubText>
                  </DifferentiatorCard>
                </Grid>
              );
            })}
          </Grid>
        </AboutSection>
      )}
    </MuiContainer>
  );
};

Differentiator.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Differentiator;
