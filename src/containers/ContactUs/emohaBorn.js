import React from 'react';
import PropTypes from 'prop-types';
import {
  AboutEmohaSection,
  CommaBottomContainer,
  CommaContainer,
  EmohaBornBig,
  EmohaBornSmall,
  InvertedCommas,
  WhoWeArePadding,
} from './styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const EmohaBorn = () => {
  return (
    <Container maxWidth="md" sx={{ padding: { xs: '0', sm: '0 24px' } }}>
      <AboutEmohaSection id="causes">
        <Grid container>
          <Grid size sm={12} xs={12} sx={{ padding: { xs: '0 16px' } }}>
            <WhoWeArePadding>
              <CommaContainer>
                <InvertedCommas center>“</InvertedCommas>
              </CommaContainer>

              <EmohaBornSmall center>
                We are a bunch of dreamers who believe seniors are the world s biggest asset. We are also senior care
                experts who have a combined experience of 50+ years globally. More importantly we are sons and daughters
                who know the challenges of taking care of our parents while pursuing professional passions. We wanted to
                give our parents the best life in the comfort of their home but didn{"'"}t know how.
              </EmohaBornSmall>
              <EmohaBornBig center>And so, Emoha was born.</EmohaBornBig>
              <EmohaBornSmall center>
                At Emoha, we help seniors and their families enjoy the many possibilities life has to offer, While we
                take care of the rest..
              </EmohaBornSmall>
              <CommaBottomContainer>
                <InvertedCommas rotation center>
                  “
                </InvertedCommas>
              </CommaBottomContainer>
            </WhoWeArePadding>
          </Grid>
        </Grid>
      </AboutEmohaSection>
    </Container>
  );
};

EmohaBorn.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmohaBorn;
