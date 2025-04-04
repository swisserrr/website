import React from 'react';
import {
  TheEmohaStorySectionPadding,
  ServicesHeading,
  ServicesPartnershipDescription,
  MainTopPartnershipWrapper,
  MainBottomPartnershipWrapper,
  PartnerShipCard,
  IconWrapper,
  PartnerShipCardHeading,
  PartnerShipCardInfo,
  PartnerShipButtonWrapper,
  PartnerShipButton,
} from './styles';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';

const RightPartnershipEmoha = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const { campaign_name } = useSelector(state => state.login);

  return (
    <>
      <TheEmohaStorySectionPadding id="Partnership">
        <MainTopPartnershipWrapper>
          <ServicesHeading>Why partner with us ?</ServicesHeading>
          <ServicesPartnershipDescription>
            When you choose to partner with Emoha, you’re choosing a path of growth and success in the elder care
            industry. Here’s what we offer to our Franchise Partners:
          </ServicesPartnershipDescription>
        </MainTopPartnershipWrapper>
        <MainBottomPartnershipWrapper>
          <Grid container style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Grid size sm={2.4} xs={12}>
              <PartnerShipCard>
                <IconWrapper>
                  <img src={'/static/images/anchor.png'} style={{ height: '3rem', width: '3rem' }} />
                </IconWrapper>
                <PartnerShipCardHeading>Established Brand</PartnerShipCardHeading>
                <PartnerShipCardInfo>
                  With Emoha, you instantly establish a distinguished brand presence. Our reputation holds significant
                  sway in the elder care market, providing you with a competitive edge right from the start.
                </PartnerShipCardInfo>
              </PartnerShipCard>
            </Grid>
            <Grid size sm={2.4} xs={12}>
              <PartnerShipCard>
                <IconWrapper>
                  <img src={'/static/images/account_balance_wallet.png'} style={{ height: '3rem', width: '3rem' }} />
                </IconWrapper>
                <PartnerShipCardHeading>Profits</PartnerShipCardHeading>
                <PartnerShipCardInfo>
                  Our business model is designed for speed. We’ve done the groundwork, so you will see a faster return
                  on your investment. Time is money, and we help you save both.
                </PartnerShipCardInfo>
              </PartnerShipCard>
            </Grid>
            <Grid size sm={2.4} xs={12}>
              <PartnerShipCard>
                <IconWrapper>
                  <img src={'/static/images/workspace_premium.png'} style={{ height: '3rem', width: '3rem' }} />
                </IconWrapper>
                <PartnerShipCardHeading>Expert Training</PartnerShipCardHeading>
                <PartnerShipCardInfo>
                  We provide expert training, established SOPs, and a robust Learning Management System, ensuring you
                  succeed from day one.
                </PartnerShipCardInfo>
              </PartnerShipCard>
            </Grid>
            <Grid size sm={2.4} xs={12}>
              <PartnerShipCard>
                <IconWrapper>
                  <img src={'/static/images/support_agent.png'} style={{ height: '3rem', width: '3rem' }} />
                </IconWrapper>
                <PartnerShipCardHeading>Marketing Support</PartnerShipCardHeading>
                <PartnerShipCardInfo>
                  You'll have our support at every stage. We provide successful marketing strategies to broaden your
                  audience and attract new customers.
                </PartnerShipCardInfo>
              </PartnerShipCard>
            </Grid>
            <Grid size sm={2.4} xs={12}>
              <PartnerShipCard>
                <IconWrapper>
                  <img src={'/static/images/build.png'} style={{ height: '3rem', width: '3rem' }} />
                </IconWrapper>
                <PartnerShipCardHeading>Dedicated Tech Support</PartnerShipCardHeading>
                <PartnerShipCardInfo>
                  Our dedicated tech support team is available to assist you with any technological hurdles you may
                  encounter, ensuring seamless operations.
                </PartnerShipCardInfo>
              </PartnerShipCard>
            </Grid>
          </Grid>
        </MainBottomPartnershipWrapper>
        {!isEqual(campaign_name, 'abhi') && (
          <PartnerShipButtonWrapper>
            <a
              href="https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/236bcf7a-9e57-4e80-b66c-eda1c4517fe6__FPbrochure20thJune_compressed1.pdf"
              target="_blank"
              rel="noreferrer">
              <PartnerShipButton>Download brochure</PartnerShipButton>
            </a>
          </PartnerShipButtonWrapper>
        )}
      </TheEmohaStorySectionPadding>
    </>
  );
};

export default RightPartnershipEmoha;
