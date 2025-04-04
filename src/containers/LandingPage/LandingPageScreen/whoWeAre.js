import React from 'react';
import PropTypes from 'prop-types';
import { AboutSection, BannerImageContainer, SubHeadingText, WhoWeAreDescription, WhoWeArePadding } from './styles';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

const WhoWeAre = ({ data }) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      {get(data, 'is_visible') && (
        <Container maxWidth="lg" sx={{ padding: { xs: '0', sm: '0 24px' } }}>
          <AboutSection disableBottomMargin={true} id="causes">
            <Grid container>
              <Grid size sm={6} xs={12} sx={{ padding: { xs: '0 16px' } }}>
                <WhoWeArePadding>
                  <SubHeadingText center>{get(data, 'title', 'N/A')}</SubHeadingText>
                </WhoWeArePadding>
                <WhoWeAreDescription>{get(data, 'description', 'N/A')}</WhoWeAreDescription>
              </Grid>
              <Grid position="relative" size sm={6} xs={12}>
                <BannerImageContainer>
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
                </BannerImageContainer>
              </Grid>
            </Grid>
          </AboutSection>
        </Container>
      )}
    </>
  );
};

WhoWeAre.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhoWeAre;
