import React from 'react';
import Grid from '@mui/material/Grid';
import { CountUp as Count } from 'use-count-up';
import {
  TheEmohaStoryCard,
  TheEmohaStoryCardContentValue,
  TheEmohaStoryCardContentInfo,
  WhoWeAreMainCardsContainer,
} from './styles';

const WhoWeAre = () => {
  return (
    <>
      <WhoWeAreMainCardsContainer>
        <Grid container style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Grid size sm={3.9} xs={12}>
            <TheEmohaStoryCard>
              <div style={{ width: '100%' }}>
                <TheEmohaStoryCardContentValue>
                  <Count isCounting delay={0} start={0} end={110} duration={4} />+
                </TheEmohaStoryCardContentValue>
                <TheEmohaStoryCardContentInfo>Cities Serving</TheEmohaStoryCardContentInfo>
              </div>
            </TheEmohaStoryCard>
          </Grid>
          <Grid size sm={3.9} xs={12}>
            <TheEmohaStoryCard>
              <div style={{ width: '100%' }}>
                <TheEmohaStoryCardContentValue>
                  <Count isCounting delay={0} start={0} end={60} duration={4} />K +
                </TheEmohaStoryCardContentValue>
                <TheEmohaStoryCardContentInfo>Happy Elders</TheEmohaStoryCardContentInfo>
              </div>
            </TheEmohaStoryCard>
          </Grid>
          <Grid size sm={3.9} xs={12}>
            <TheEmohaStoryCard>
              <div style={{ width: '100%' }}>
                <TheEmohaStoryCardContentValue>
                  <Count isCounting delay={0} start={0} end={500} duration={4} />+
                </TheEmohaStoryCardContentValue>
                <TheEmohaStoryCardContentInfo>Lives Saved</TheEmohaStoryCardContentInfo>
              </div>
            </TheEmohaStoryCard>
          </Grid>
        </Grid>
      </WhoWeAreMainCardsContainer>
    </>
  );
};

export default WhoWeAre;
