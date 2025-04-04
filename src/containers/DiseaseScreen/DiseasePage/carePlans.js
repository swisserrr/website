import React, { useCallback } from 'react';
import {
  CarePlanHeader,
  CardItemContainer,
  CardItemBackText,
  CardItemFrontText,
  CareIconContainer,
  CareBottomContainer,
  QuestionsMore,
  AboutSection,
  SectionContainer,
  CommonHeaderText,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiContainer from '@mui/material/Container';
import { useInView } from 'react-intersection-observer';
import isEqual from 'lodash/isEqual';
import isNull from 'lodash/isNull';
import HomePageButton from 'components/HomePageButton';

const CarePlan = ({ careData, openModal }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const getImage = useCallback(
    data => {
      const image = matches
        ? get(data, 'image_mobile', '/static/images/delete1.png')
        : get(data, 'image_desktop', '/static/images/delete1.png');
      return isNull(image) ? '/static/images/delete1.png' : image;
    },
    [careData, matches]
  );
  return (
    <>
      {get(careData, 'is_visible_on_website') ? (
        <SectionContainer ref={ref}>
          <MuiContainer>
            <AboutSection id="care">
              <CarePlanHeader>
                <CommonHeaderText>{get(careData, 'title', 'N/A')}</CommonHeaderText>
              </CarePlanHeader>
              <Grid container sx={{ padding: { xs: 0, sm: '0 120px' } }} spacing={{ xs: 2, sm: 5 }}>
                {map(get(careData, 'points', []), (data, key) => {
                  if (matches && isEqual(key, 8)) {
                    return null;
                  }
                  return (
                    <Grid size sm={4} xs={6} height={{ height: { xs: 0, sm: '27rem' } }}>
                      <div className="card">
                        <div className={`card-side front ${inView && matches ? 'rotate' : ''}`}>
                          <CardItemContainer>
                            <CareIconContainer>
                              <Image
                                src={getImage(data)}
                                width={5000}
                                height={5000}
                                quality={70}
                                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                              />
                            </CareIconContainer>
                            <CardItemFrontText>{get(data, 'title', 'N/A')}</CardItemFrontText>
                          </CardItemContainer>
                        </div>
                        <div className={`card-side back ${inView && matches ? 'rotate-b' : ''}`}>
                          <CardItemContainer toggle>
                            <CardItemBackText>{get(data, 'description', 'N/A')}</CardItemBackText>
                          </CardItemContainer>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
              <CareBottomContainer>
                <HomePageButton
                  hover={{ opacity: '1' }}
                  boxShadow="none"
                  onClick={openModal}
                  position={{ xs: 'relative', md: 'relative' }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem ', md: '2.0rem' }}
                  lineHeight={{ xs: '0.7rem', md: '2.4rem' }}
                  letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                  padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                  borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                  margin={{ xs: '2rem 0 0 0 !important', md: '2rem 0 !important' }}
                  fontWeight={{ xs: 500, md: 500 }}>
                  Request callback
                </HomePageButton>
                <QuestionsMore
                  onClick={() => {
                    const element = document.getElementById('faq');
                    element.scrollIntoView();
                  }}>
                  Have more questions?
                </QuestionsMore>
              </CareBottomContainer>
            </AboutSection>
          </MuiContainer>
        </SectionContainer>
      ) : null}
    </>
  );
};

CarePlan.propTypes = {
  careData: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default CarePlan;
