import React, { useCallback } from 'react';
import {
  AboutSection,
  CommonHeaderText,
  PointsContainer,
  PointsText,
  SymptomsPointer,
  SymptomsImageContainer,
  IconContainerSymptoms,
  HtmlCausesContainer,
  SymptomsImage,
  HtmlSymptomContainer,
  PointerSpacing,
  SymptomsPadding,
  PointsSymptomsText,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import map from 'lodash/map';
import isNull from 'lodash/isNull';
import size from 'lodash/size';
import Image from 'utils/CustomImage';
import ReactHtmlParser from 'react-html-parser';
import useMediaQuery from '@mui/material/useMediaQuery';

const CausesSymptoms = ({ causesData, symptomsData }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const getImage = useCallback(
    item => {
      const image = matches ? get(item, 'image_mobile', '') : get(item, 'image_desktop', '');
      return isNull(image) ? '/static/images/delete1.png' : image;
    },
    [matches]
  );
  return (
    <>
      {get(causesData, 'is_visible_on_website') && (
        <AboutSection id="causes">
          <CommonHeaderText>{get(causesData, 'title', 'N/A')}</CommonHeaderText>
          <Grid container>
            <Grid size sm={5} xs={12}>
              <HtmlCausesContainer>{ReactHtmlParser(get(causesData, 'description'))}</HtmlCausesContainer>
            </Grid>
            <Grid position="relative" size sm={7} xs={12}>
              <Grid container>
                {map(get(causesData, 'points', []), (data, index) => {
                  return (
                    <Grid size sm={6} xs={12}>
                      <PointsContainer
                        hideBorderMobile={index === size(get(causesData, 'points', [])) - 1}
                        keys={index}>
                        <div>
                          <svg
                            className="svg"
                            fill="currentColor"
                            preserveAspectRatio="xMidYMid meet"
                            height="50"
                            width="50"
                            viewBox="0 0 50 50">
                            <circle
                              className="radioOutline"
                              // half of 50 to get its centre
                              cx="20"
                              cy="20"
                              // adjust lower if 25 overflows the bound
                              r="10"
                              fill="none"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <circle
                              className="radioDot"
                              // same thing as above
                              cx="20"
                              cy="20"
                              // adjust for the size of the inner dot
                              r="6"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <PointerSpacing>
                          <PointsText className="truncate-1">{data?.title}</PointsText>
                        </PointerSpacing>
                      </PointsContainer>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </AboutSection>
      )}
      {get(symptomsData, 'is_visible_on_website') && (
        <SymptomsPadding id="symptoms">
          <Grid container>
            <Grid size sm={5} xs={0}></Grid>
            <Grid size sm={7} xs={12}>
              <CommonHeaderText>{get(symptomsData, 'title', 'N/A')}</CommonHeaderText>
            </Grid>
          </Grid>

          <Grid container>
            <Grid size sm={5} xs={12} display={'flex'} alignItems={'flex-end'}>
              <SymptomsImageContainer>
                <SymptomsImage
                  src={getImage(symptomsData)}
                  width={5000}
                  height={5000}
                  quality={70}
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
              </SymptomsImageContainer>
            </Grid>
            <Grid position="relative" size sm={7} xs={12}>
              <HtmlSymptomContainer>{ReactHtmlParser(get(symptomsData, 'description'))}</HtmlSymptomContainer>
              <Grid container>
                {map(get(symptomsData, 'points', []), (data, index) => {
                  return (
                    <Grid size sm={12} xs={12}>
                      <SymptomsPointer
                        hideBorderMobile={index === size(get(symptomsData, 'points', [])) - 1}
                        hideBorderDesktop={index === size(get(symptomsData, 'points', [])) - 1}>
                        <div>
                          <IconContainerSymptoms>
                            <Image
                              src={getImage(data)}
                              width={5000}
                              height={5000}
                              quality={70}
                              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                            />
                          </IconContainerSymptoms>
                        </div>
                        <PointsSymptomsText>{data?.title}</PointsSymptomsText>
                      </SymptomsPointer>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </SymptomsPadding>
      )}
    </>
  );
};

CausesSymptoms.propTypes = {
  causesData: PropTypes.object.isRequired,
  symptomsData: PropTypes.object.isRequired,
};

export default CausesSymptoms;
