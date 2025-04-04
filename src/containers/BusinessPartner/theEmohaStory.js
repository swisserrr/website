import React from 'react';
import PropTypes from 'prop-types';
import { TheEmohaStorySectionPadding, ServicesDescription, ServiceImageContainer } from './styles';
import Grid from '@mui/material/Grid';
import HomePageBox from 'components/HomePageBox';
import Image from 'utils/CustomImage';
import HomePageText from 'components/HomePageText';
import { useMediaQuery } from '@mui/material';

const TheEmohaStory = () => {
  const matches = useMediaQuery('(max-width:900px)');

  return (
    <>
      <TheEmohaStorySectionPadding id="story">
        <HomePageBox
          padding={{ xs: '2.0rem 0rem', md: '2.0rem 0rem' }}
          display={{ xs: 'flex', md: 'flex' }}
          justifyContent={{ xs: 'center', md: 'center' }}>
          <Grid
            container
            style={{
              padding: matches ? '0rem' : '0rem 3rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Grid order={{ xs: 2, md: 1 }} size lg={5} md={5} sm={12} xs={12}>
              <ServiceImageContainer>
                <Image
                  src={'/static/images/theEmohaStory.png'}
                  fill
                  alt="Show Image"
                  style={{ objectFit: 'cover', borderRadius: '20px' }}
                />
              </ServiceImageContainer>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              order={{ xs: 1, md: 2 }}
              style={{ display: 'flex', flexDirection: 'column' }}
              sx={{
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: { xs: 'flex-start', md: 'start' },
              }}>
              <HomePageText
                variant={'h1'}
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontSize={{ xs: '2.8rem', md: 'max(3.6rem,min(5vw,4.5rem))' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                margin={{ xs: '0 0 10px 0', md: '0 0 1rem 0' }}
                fontWeight={{ xs: '600', md: '600' }}
                position={{ xs: 'relative', md: 'relative' }}
                lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
                Emoha’s Story - India’s Leading Eldercare Brand
              </HomePageText>
              <ServicesDescription>
                As elder care experts, we struggled with caring for our parents back home because of the broken care
                ecosystem in India. Our struggles fuelled a desire to transform the way elders are cared for...a desire
                that led to our life paths converging and the birth of Emoha.
              </ServicesDescription>
              <ServicesDescription style={{ marginBottom: matches ? '4rem' : '0rem' }}>
                Each of us at Emoha is driven by our love to help elders spend their old years like they are their
                golden years.
              </ServicesDescription>
            </Grid>
          </Grid>
        </HomePageBox>
      </TheEmohaStorySectionPadding>
    </>
  );
};

TheEmohaStory.propTypes = {
  imageSource: PropTypes.object.isRequired,
};

export default TheEmohaStory;
