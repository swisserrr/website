import React from 'react';
import {
  SubHeadingText,
  CarePlanHeader,
  CardItemContainer,
  CareBottomContainer,
  AboutSection,
  OfferText,
  OfferSubText,
  CardFrontText,
  PlansSubHeadingMaxWidth,
  OfferSubSubText,
  BackgroundBlur,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomePageButton from 'components/HomePageButton';
import MuiContainer from '@mui/material/Container';
import { useInView } from 'react-intersection-observer';
import Image from 'utils/CustomImage';

const CarePlan = ({ careData }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <>
      {get(careData, 'is_visible') ? (
        <MuiContainer ref={ref}>
          <AboutSection id="care">
            <CarePlanHeader>
              <SubHeadingText center>{get(careData, 'title', 'N/A')}</SubHeadingText>
              <PlansSubHeadingMaxWidth>
                <OfferSubSubText>{get(careData, 'description', 'N/A')}</OfferSubSubText>
              </PlansSubHeadingMaxWidth>
            </CarePlanHeader>
            <Grid container sx={{ padding: { xs: 0, sm: '0 100px' } }} spacing={{ xs: 2, sm: 2 }}>
              {map(get(careData, 'data', []), data => {
                return (
                  <Grid size sm={4} xs={6}>
                    <div className="card">
                      <div className={`card-side front ${inView && matches ? 'rotate' : ''}`}>
                        <BackgroundBlur>
                          <Image
                            width={1000}
                            height={1000}
                            src={get(
                              data,
                              matches ? 'banner_image_image' : 'banner_image_desktop',
                              '/static/images/delete1.png'
                            )}
                            quality={70}
                            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                          />
                          <CardItemContainer>
                            <CardFrontText>
                              <OfferText>{get(data, 'title')}</OfferText>
                            </CardFrontText>
                          </CardItemContainer>
                        </BackgroundBlur>
                      </div>
                      <div className={`card-side back ${inView && matches ? 'rotate-b' : ''}`}>
                        <CardItemContainer color={get(data, 'colour_code')}>
                          <OfferText marginDown={'20px'}>{get(data, 'title')}</OfferText>
                          <OfferSubText>{get(data, 'description')}</OfferSubText>
                        </CardItemContainer>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
            <CareBottomContainer>
              <a
                href={get(careData, 'download_url')}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', display: 'flex', margin: '0 auto' }}>
                <HomePageButton
                  hover={{ opacity: '1' }}
                  boxShadow="none"
                  letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                  position={{ xs: 'relative', md: 'relative' }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem ', md: '2.0rem' }}
                  lineHeight={{ xs: '0.7rem', md: '2.4rem' }}
                  padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                  borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                  margin={{ xs: '2rem 0 0 0 !important', md: '2rem 0 !important' }}
                  fontWeight={{ xs: 500, md: 500 }}>
                  {get(careData, 'download_title')}
                </HomePageButton>
              </a>
            </CareBottomContainer>
          </AboutSection>
        </MuiContainer>
      ) : null}
    </>
  );
};

CarePlan.propTypes = {
  careData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default CarePlan;
