/**
 *
 * MohtvShowType
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';

// import get from 'lodash/get';
import { Heading, ViewAllContainer, HeadingContainer, ContainerGrid } from './styles';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent } from 'utils/cleverTap';
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const ShowCard = dynamic(() => import('components/ShowCard'));
function MohtvShowType({ data, addMoreData, lazy, categoryId }) {
  const router = useRouter();

  const viewAllClickHandler = useCallback(
    itemVal => {
      pushEvent(EVENT_NAME.VIEW_ALL, {
        source_url: router.pathname,
        block_name: itemVal?.mohtv_sub_category_name,
      });
      if (isEqual(itemVal?.show_type, 'past_shows') || isEqual(itemVal?.show_type, 'upcoming_shows')) {
        router.push({
          pathname: `/mohtv/[subCategories]`,
          query: {
            subCategories: itemVal?.show_type,
            show_type: itemVal?.show_type,
            categoryId,
          },
        });
      } else {
        router.push({
          pathname: `/mohtv/[subCategories]`,
          query: {
            subCategories: itemVal?.mohtv_sub_category_name,
            category_uuid: categoryId,
            subCategory_uuid: itemVal?.mohtv_sub_category_uuid,
          },
        });
      }
    },
    [categoryId]
  );

  const renderSection = useCallback(() => {
    return map(data, (itemVal, index) => {
      if (!isEqual(itemVal?.mohtv_sub_category_shows?.length, 0)) {
        return (
          <ContainerGrid container key={index}>
            <Container maxWidth="lg">
              <HeadingContainer>
                <Grid size lg={10} md={10} sm={10} xs={7}>
                  <Heading>{itemVal?.mohtv_sub_category_name}</Heading>
                </Grid>
                <Grid size lg={2} md={2} sm={2} xs={5}>
                  <ViewAllContainer>
                    <HomePageButton
                      onClick={() => viewAllClickHandler(itemVal)}
                      variant="text"
                      color={{ xs: '#1a1a1a !important' }}
                      letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                      margin={{ xs: '0', md: '0 24px 0 0' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                      View all &#8594;
                    </HomePageButton>
                  </ViewAllContainer>
                </Grid>
              </HeadingContainer>
              <ShowCard data={itemVal?.mohtv_sub_category_shows} />
            </Container>
          </ContainerGrid>
        );
      }
    });
  }, [data]);

  return (
    <InfiniteScroll dataLength={data?.length || 0} next={addMoreData} hasMore={lazy} loader={<h1>Loading ... </h1>}>
      {renderSection()}
    </InfiniteScroll>
  );
}

MohtvShowType.propTypes = {
  addMoreData: PropTypes.func,
  data: PropTypes.array,
  lazy: PropTypes.bool,
  categoryId: PropTypes.string,
  categoryName: PropTypes.string,
};

export default MohtvShowType;
