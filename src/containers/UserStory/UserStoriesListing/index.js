/**
 *
 * UserStoriesListing
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';
import get from 'lodash/get';

import Container from '@mui/material/Container';
import InfinitScroll from 'react-infinite-scroll-component';
import { createStructuredSelector } from 'reselect';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BannerContainer, HeadingContainer, Heading, Relativecard, PageContainer } from './styles';
import makeSelectUserStoriesListing from './selectors';
// import { constantValues } from './constantValues';
import { getUserStoryAction } from './actions';

import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const UserStoryCard = dynamic(() => import('components/UserStoryCard'));
const Footer = dynamic(() => import('components/Footer'));

export function UserStoriesListing({ userStoriesListing, handleApiCall }) {
  const matches = useMediaQuery('(max-width:600px)');

  const handleOnReachEnd = useCallback(() => {
    handleApiCall({ page_number: get(userStoriesListing, 'pageNo') + 1, page_size: 20 });
  }, [get(userStoriesListing, 'pageNo')]);

  return (
    <>
      <HeaderBar />
      <Grid container>
        <Relativecard>
          <BannerContainer item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
            <Image
              src={matches ? '/static/images/userStoryMobileBanner.webp' : '/static/images/userStoryBanner.webp'}
              fill
              alt="Cover Image"
              style={{ objectFit: 'fill', zIndex: 0 }}
            />
          </BannerContainer>
        </Relativecard>
      </Grid>
      <PageContainer>
        <Container>
          <Grid container>
            <HeadingContainer item lg={12} md={12} sm={12} xs={12}>
              <Heading>User stories</Heading>
            </HeadingContainer>
            <div>
              <InfinitScroll
                style={{ overflowY: 'hidden' }}
                dataLength={get(userStoriesListing, 'userStoriesList.data').length}
                next={handleOnReachEnd}
                hasMore={
                  get(userStoriesListing, 'userStoriesList.data').length <
                  get(userStoriesListing, 'userStoriesList.total_count')
                }
                loader={<h1>Loading ... </h1>}>
                <UserStoryCard data={get(userStoriesListing, 'userStoriesList.data')} />
              </InfinitScroll>
            </div>
          </Grid>
        </Container>
      </PageContainer>
      <Footer />
    </>
  );
}

UserStoriesListing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userStoriesListing: PropTypes.object,
  handleApiCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userStoriesListing: makeSelectUserStoriesListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleApiCall: evt => dispatch(getUserStoryAction(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserStoriesListing);
