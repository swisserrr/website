/**
 *
 * BlogsLazyLoading
 *
 */

import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Heading, HeadingContainer, LoadingContainer } from './styles';
import BlogsCard from 'components/BlogsCard';

function BlogsLazyLoading({ data, addMoreData, topic, hasMore, catSlug }) {
  const [page, setPage] = useState(1);
  const handleOnReachEnd = useCallback(page => {
    addMoreData(page);
    setPage(prev => prev + 1);
  }, []);

  return (
    <Container>
      <InfiniteScroll
        style={{ overflowY: 'hidden', padding: 10 }}
        dataLength={data?.length || 0}
        next={() => handleOnReachEnd(page)}
        hasMore={hasMore}
        loader={
          <LoadingContainer>
            <h1>Loading ... </h1>
          </LoadingContainer>
        }>
        <Grid container>
          <HeadingContainer>
            <Grid size lg={12} md={12} sm={12} xs={12}>
              <Heading>More {topic}</Heading>
            </Grid>
          </HeadingContainer>
          <BlogsCard data={data} category={catSlug} />
        </Grid>
      </InfiniteScroll>
    </Container>
  );
}

BlogsLazyLoading.propTypes = {
  addMoreData: PropTypes.func,
  data: PropTypes.array,
  topic: PropTypes.string,
  hasMore: PropTypes.bool,
  catSlug: PropTypes.string,
};

export default BlogsLazyLoading;
