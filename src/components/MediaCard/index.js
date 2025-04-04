/**
 *
 * MediaCard
 *
 */

import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// import { CardContainer } from './styles';
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
function MediaCard({ item, key, date, title }) {
  return (
    <Grid
      key={key}
      sx={{
        width: { xs: '100%' },
        textAlign: { xs: 'center' },
        marginBottom: 5,
      }}
      item
      xs={12}
      sm={6}
      md={4}>
      <div data-aos="zoom-in">
        <HomePageBox
          key={key}
          width={{ xs: '100%', md: '36.1rem' }}
          margin={{
            xs: '0 2rem 5rem 0',
            md: '0 2rem 7rem 0',
          }}
          padding={{
            xs: '5px',
          }}
          height={{ xs: '20.1rem', md: '23.0rem' }}>
          <Link href={get(item, 'hyperlink')} target="_blank" style={{ textDecoration: 'none' }} data-aos="zoom-in">
            <HomePageImage src={get(item, 'image_url')} borderRadius="20px" height="100%" width="100%"></HomePageImage>
            <HomePageText
              fontWeight={{ xs: '400', md: '400' }}
              fontSize={{ xs: '1.3rem', md: '1.3rem' }}
              lineHeight={{ xs: '1.6rem', md: '1.6rem' }}
              textAlign={{ xs: 'center', md: 'center' }}
              paddingTop={{ xs: '2.0rem', md: '2.0rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}>
              {date}
            </HomePageText>
            <HomePageText
              fontWeight={{ xs: '600', md: '600' }}
              fontSize={{ xs: '2.1rem', md: '2.2rem' }}
              lineHeight={{ xs: '2.1rem', md: '2.2rem' }}
              textAlign={{ xs: 'center', md: 'center' }}
              paddingTop={{ xs: '2.0rem', md: '2.0rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}>
              {title}
            </HomePageText>
          </Link>
        </HomePageBox>
      </div>
    </Grid>
  );
}

MediaCard.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default memo(MediaCard);
