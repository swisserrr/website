import React from 'react';
import PropTypes from 'prop-types';
import {
  ExcitingOpportunitySectionPadding,
  ServicesDescription,
  BoldText,
  IconImageDescriptionWrapper,
  IconImageDescriptionInnerWrapper,
  IconImageWrapper,
  ExcitingOpportunityRightIcon,
  ExcitingOpportunityRightDescription,
} from './styles';
import Grid from '@mui/material/Grid';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';

const ExcitingOpportunity = () => {
  return (
    <>
      <ExcitingOpportunitySectionPadding id="exciting_opportunity">
        <HomePageBox
          padding={{ xs: '2.0rem 0rem', md: '2.0rem 0rem' }}
          display={{ xs: 'flex', md: 'flex' }}
          justifyContent={{ xs: 'center', md: 'center' }}>
          <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid order={{ xs: 1, md: 1 }} size lg={5} md={5} sm={12} xs={12}>
              <HomePageText
                variant={'h1'}
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontSize={{ xs: '2.8rem', md: 'max(3.6rem,min(5vw,4rem))' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                margin={{ xs: '0 0 10px 0', md: '0 0 1rem 0' }}
                fontWeight={{ xs: '600', md: '600' }}
                position={{ xs: 'relative', md: 'relative' }}
                lineHeight={{ xs: '3.8rem', md: 'max(4rem,min(5vw,4.8rem))' }}>
                An Exciting Opportunity for Franchise Partners
              </HomePageText>
              <ServicesDescription>
                India’s urban elder population is flourishing. Currently, there are about{' '}
                <BoldText>1.4 crore urban elders</BoldText>, and this number is expected to triple by 2050. The elder
                care market is valued at an impressive <BoldText>Rs 1,42,800 crores</BoldText>, with elders spending
                around <BoldText>Rs 8,500 each month</BoldText> on health and daily needs. These are real people who
                will need comprehensive elder care support. And partnering with Emoha means you’ll be directly involved
                in providing them with these services.
              </ServicesDescription>
              <ServicesDescription>
                This is a significant opportunity for Franchise Partners to make a meaningful impact in the elder care
                space and contribute to a rapidly growing sector of the economy.
              </ServicesDescription>
            </Grid>
            <Grid size lg={5} md={5} sm={12} xs={12} order={{ xs: 2, md: 2 }}>
              <IconImageDescriptionWrapper>
                <IconImageDescriptionInnerWrapper>
                  <IconImageWrapper>
                    <ExcitingOpportunityRightIcon src={'/static/images/health.png'}></ExcitingOpportunityRightIcon>
                  </IconImageWrapper>
                  <ExcitingOpportunityRightDescription>Health</ExcitingOpportunityRightDescription>
                </IconImageDescriptionInnerWrapper>
                <IconImageDescriptionInnerWrapper>
                  <IconImageWrapper>
                    <ExcitingOpportunityRightIcon src={'/static/images/ambulance.png'}></ExcitingOpportunityRightIcon>
                  </IconImageWrapper>
                  <ExcitingOpportunityRightDescription>Emergency Services</ExcitingOpportunityRightDescription>
                </IconImageDescriptionInnerWrapper>
                <IconImageDescriptionInnerWrapper>
                  <IconImageWrapper>
                    <ExcitingOpportunityRightIcon src={'/static/images/engagement.png'}></ExcitingOpportunityRightIcon>
                  </IconImageWrapper>
                  <ExcitingOpportunityRightDescription>Engagement</ExcitingOpportunityRightDescription>
                </IconImageDescriptionInnerWrapper>
                <IconImageDescriptionInnerWrapper>
                  <IconImageWrapper>
                    <ExcitingOpportunityRightIcon src={'/static/images/cards.png'}></ExcitingOpportunityRightIcon>
                  </IconImageWrapper>
                  <ExcitingOpportunityRightDescription>Convenience</ExcitingOpportunityRightDescription>
                </IconImageDescriptionInnerWrapper>
              </IconImageDescriptionWrapper>
            </Grid>
          </Grid>
        </HomePageBox>
      </ExcitingOpportunitySectionPadding>
    </>
  );
};

ExcitingOpportunity.propTypes = {};

export default ExcitingOpportunity;
