import React, { useCallback, useState } from 'react';
import {
  ReadMore,
  HtmlContainer,
  ButtonContainer,
  AboutImage,
  CommonHeaderText,
  AboutUsHeaderContainer,
  AboutUsDescriptionContainer,
  AboutSectionPadding,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import ReactHtmlParser from 'react-html-parser';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutUs = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  const matches = useMediaQuery('(max-width:600px)');
  const handleReadMore = useCallback(() => {
    setReadMore(!readMore);
  }, [readMore]);

  const getImage = useCallback(
    item => {
      return matches ? get(item, 'image_mobile', '') : get(item, 'image_desktop', '');
    },
    [data, matches]
  );
  return (
    get(data, 'is_visible_on_website') && (
      <AboutSectionPadding id="about">
        <Grid container>
          <Grid display="flex" flexDirection="column" size sm={8} xs={12}>
            <div>
              <AboutUsHeaderContainer>
                <CommonHeaderText>{get(data, 'title', 'N/A')}</CommonHeaderText>
              </AboutUsHeaderContainer>
              <AboutUsDescriptionContainer>
                <HtmlContainer>{ReactHtmlParser(get(data, 'description'))}</HtmlContainer>
              </AboutUsDescriptionContainer>
              {readMore && matches && <HtmlContainer>{ReactHtmlParser(get(data, 'read_more'))}</HtmlContainer>}
            </div>
            {!readMore && !matches && (
              <ButtonContainer>
                <ReadMore disableMargin={true} onClick={handleReadMore}>
                  Read {readMore ? 'less' : 'more'}
                </ReadMore>
              </ButtonContainer>
            )}
            {readMore && !matches && <HtmlContainer>{ReactHtmlParser(get(data, 'read_more'))}</HtmlContainer>}
            {readMore && !matches && (
              <ButtonContainer>
                <ReadMore onClick={handleReadMore}>Read {readMore ? 'less' : 'more'}</ReadMore>
              </ButtonContainer>
            )}
          </Grid>
          <Grid position="relative" size sm={4} xs={12}>
            <div style={{ position: 'relative' }}>
              <AboutImage
                src={getImage(data)}
                width={5000}
                height={5000}
                quality={70}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Grid>
        </Grid>

        {matches && (
          <ButtonContainer>
            <ReadMore onClick={handleReadMore}>Read {readMore ? 'less' : 'more'}</ReadMore>
          </ButtonContainer>
        )}
      </AboutSectionPadding>
    )
  );
};

AboutUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUs;
