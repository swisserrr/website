import React, { useCallback, useState } from 'react';
import { AboutUsText, ReadMore, AboutSection, HtmlContainer, ButtonContainer } from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import Image from 'utils/CustomImage';
import ReactHtmlParser from 'react-html-parser';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutUs = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  const matches = useMediaQuery('(max-width:600px)');
  const handleReadMore = useCallback(() => {
    setReadMore(!readMore);
  }, [readMore]);
  return (
    get(data, 'is_visible_on_website') && (
      <AboutSection id="about">
        <Grid container>
          <Grid size sm={8} xs={12}>
            <AboutUsText>{get(data, 'title', 'N/A')}</AboutUsText>
            <HtmlContainer>{ReactHtmlParser(get(data, 'description'))}</HtmlContainer>
          </Grid>
          <Grid position="relative" size sm={4} xs={12}>
            <div style={{ position: 'relative' }}>
              <Image
                src={get(data, matches ? 'image_mobile' : 'image_desktop', '/static/images/delete1.png')}
                width={5000}
                height={5000}
                quality={70}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Grid>
        </Grid>
        {readMore && <HtmlContainer>{ReactHtmlParser(get(data, 'read_more'))}</HtmlContainer>}
        <ButtonContainer>
          <ReadMore onClick={handleReadMore}>Read {readMore ? 'less' : 'more'}</ReadMore>
        </ButtonContainer>
      </AboutSection>
    )
  );
};

AboutUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUs;
