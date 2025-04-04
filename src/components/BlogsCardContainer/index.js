/**
 *
 * BlogsCardContainer
 *
 */

import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import map from 'lodash/map';
import { useRouter } from 'next/router';

import { Container, Heading, HeadingContainer, ContainerGrid } from './styles';
import HomePageButton from 'components/HomePageButton';
import ShowCard from 'components/BlogsCard';

function BlogType({ data, disableRem }) {
  const router = useRouter();
  return (
    <Container disableRem={disableRem}>
      {map(data, (user, index) => {
        return (
          <ContainerGrid display={'flex'} container key={index}>
            <MuiContainer maxWidth="lg">
              <HeadingContainer disableRem={disableRem}>
                <Grid size lg={6} md={6} sm={6} xs={8}>
                  <Heading disableRem={disableRem}>More {get(user, 'show_type')}</Heading>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={6}
                  xs={4}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-end'}>
                  <HomePageButton
                    onClick={() => router.push(`/blogs/${get(user, 'catSlug')}`)}
                    variant="text"
                    color={{ xs: '#1a1a1a !important' }}
                    letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                    margin={{ xs: '0', md: '0 24px 0 0' }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                    View all &#8594;
                  </HomePageButton>
                </Grid>
              </HeadingContainer>
              <ShowCard disableRem={disableRem} category={get(user, 'catSlug')} data={get(user, 'data')} />
            </MuiContainer>
          </ContainerGrid>
        );
      })}
    </Container>
  );
}

BlogType.propTypes = {
  addMoreData: PropTypes.func,
  data: PropTypes.array,
  setViewAllTopic: PropTypes.func,
  disableRem: PropTypes.bool,
};

export default BlogType;
