/**
 *
 * ViewAllShows
 *
 */

import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { Container, Heading, HeadingContainer } from './styles';
import MuiContainer from '@mui/material/Container';
import InfinitScroll from 'react-infinite-scroll-component';
import ShowCard from 'components/ShowCard';
function ViewAllShows({ data, addMoreData }) {
  return (
    <Container>
      <MuiContainer maxWidth="lg">
        <InfinitScroll
          style={{ overflowY: 'hidden' }}
          dataLength={data?.mohtv_sub_category_shows?.length}
          next={addMoreData}
          hasMore={data?.total_count > data?.page_size}
          loader={<h1>Loading ... </h1>}>
          <Grid container>
            <HeadingContainer>
              <Grid size lg={12} md={12} sm={12} xs={12}>
                <Heading>{data?.mohtv_sub_category_name}</Heading>
              </Grid>
            </HeadingContainer>
            <ShowCard data={data?.mohtv_sub_category_shows} />
          </Grid>
        </InfinitScroll>
      </MuiContainer>
    </Container>
  );
}

ViewAllShows.propTypes = {
  addMoreData: PropTypes.func,
  data: PropTypes.object,
};

export default ViewAllShows;
