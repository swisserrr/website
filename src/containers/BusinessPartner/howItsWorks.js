import React from 'react';
import PropTypes from 'prop-types';
import { TheEmohaStorySectionPadding, HowItsWorksHeading, HowItsWorksSubHeading } from './styles';
import Grid from '@mui/material/Grid';
import HomePageBox from 'components/HomePageBox';
import HomePageButton from 'components/HomePageButton';
import BasicTimeline from './timeline.js';
import useMediaQuery from '@mui/material/useMediaQuery';

const HowItsWorks = ({ setOpenContactFromModal }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      <TheEmohaStorySectionPadding id="story">
        <HomePageBox textAlign={{ xs: 'center', md: 'left' }}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              order={{ xs: 1, md: 1 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: { xs: '2.0rem' },
                justifyContent: { xs: 'center', md: 'start' },
                alignItems: { xs: 'center', md: 'start' },
              }}>
              <HowItsWorksHeading>{'How it works'}</HowItsWorksHeading>
              <HowItsWorksSubHeading>
                {'Onboarding and Induction '}
                <br />
                {'journey for our Business Partners'}
              </HowItsWorksSubHeading>

              {!matches && (
                <HomePageButton
                  variant="text"
                  onClick={setOpenContactFromModal}
                  color={{ xs: '#FFF;' }}
                  letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                  // margin={{ xs: '0 40px 0 0', md: '-40vw 40px 0 0' }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  backgroundColor={{ xs: '#CC4746', md: '#CC4746;' }}
                  fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                  padding={{ xs: '12.829px 25.659px', md: '20px 30px' }}
                  borderRadius={{ xs: '35.637px;', md: '39.252px' }}>
                  Become our partner
                </HomePageButton>
              )}
            </Grid>
            <Grid order={{ xs: 2, md: 2 }} size lg={6} md={6} sm={12} xs={12} style={{ display: 'flex' }}>
              <BasicTimeline />
            </Grid>
          </Grid>
          {matches && (
            <HomePageButton
              variant="text"
              onClick={setOpenContactFromModal}
              color={{ xs: '#FFF;' }}
              letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
              // margin={{ xs: '0 40px 0 0', md: '-40vw 40px 0 0' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              backgroundColor={{ xs: '#CC4746', md: '#CC4746;' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              padding={{ xs: '12.829px 25.659px', md: '20px 30px' }}
              borderRadius={{ xs: '35.637px;', md: '39.252px' }}>
              Become our partner
            </HomePageButton>
          )}
        </HomePageBox>
      </TheEmohaStorySectionPadding>
    </>
  );
};

HowItsWorks.propTypes = {
  setOpenContactFromModal: PropTypes.func.isRequired,
};

export default HowItsWorks;
