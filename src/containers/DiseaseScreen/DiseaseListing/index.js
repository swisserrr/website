/**
 *
 * DiseaseListingPage
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import Image from 'utils/CustomImage';
import get from 'lodash/get';

import Container from '@mui/material/Container';
import InfinitScroll from 'react-infinite-scroll-component';
import { createStructuredSelector } from 'reselect';
import { useMediaQuery } from '@mui/material';
import { BannerContainer, HeadingContainer, Heading, Relativecard, PageContainer } from './styles';
import makeSelectDiseaseListing from './selectors';
// import { constantValues } from './constantValues';
import { getDiseaseAction } from './actions';
import DiseaseCard from 'components/DiseaseCard';
import dynamic from 'next/dynamic';
import HeaderBar from 'components/HeaderBar';
const Footer = dynamic(() => import('components/Footer'));

export function DiseaseListingPage({ diseaseListing, handleApiCall }) {
  const matches = useMediaQuery('(max-width:600px)');

  const handleOnReachEnd = useCallback(() => {
    handleApiCall({ page_number: get(diseaseListing, 'pageNo') + 1, page_size: 20 });
  }, [get(diseaseListing, 'pageNo')]);

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
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
          </BannerContainer>
        </Relativecard>
      </Grid>
      <PageContainer>
        <Container>
          <HeadingContainer>
            <Heading>Disease Care</Heading>
          </HeadingContainer>
          <InfinitScroll
            style={{ overflowY: 'hidden' }}
            dataLength={get(diseaseListing, 'diseaseList.data')?.length || 0}
            next={handleOnReachEnd}
            hasMore={get(diseaseListing, 'diseaseList.data')?.length < get(diseaseListing, 'diseaseList.total_count')}
            loader={<h1>Loading ... </h1>}>
            <DiseaseCard data={get(diseaseListing, 'diseaseList.data')} />
          </InfinitScroll>
        </Container>
      </PageContainer>
      <Footer />
    </>
  );
}

DiseaseListingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  diseaseListing: PropTypes.object,
  handleApiCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  diseaseListing: makeSelectDiseaseListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleApiCall: evt => dispatch(getDiseaseAction(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DiseaseListingPage);
