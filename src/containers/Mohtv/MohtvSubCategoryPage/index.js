/* eslint-disable max-len */
/**
 *
 * MohtvSubCategoryPage
 *
 */

import React, { useCallback, memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Static imports for critical UI
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, BannerContainer, TabsContainer } from './styles';
import HomePageText from 'components/HomePageText';
import Image from 'utils/CustomImage';

// Client-side only components with dynamic imports
const ScrollContainer = dynamic(() => import('react-indiana-drag-scroll'), { ssr: false });
const ViewAllShows = dynamic(() => import('components/ViewAllShows'), { ssr: true });
const SearchBar = dynamic(() => import('components/SearchBar'), { ssr: false });
const HeaderBar = dynamic(() => import('components/HeaderBar'), { ssr: true });
const Footer = dynamic(() => import('components/Footer'), { ssr: false });
const TabsComponent = dynamic(() => import('./components/TabsComponent'), { ssr: true });

// Selectors and actions
import {
  makeSelectSearchSuggestions,
  makeSelectMohtvCategories,
  makeSelectMohtvActiveTab,
  makeSelectSubCategoryShows,
  makeSelectSearchedShows,
} from '../MohtvHomePage/selectors';

import { getSearchSuggestion, clearSuggestion, getSubCategoryShows } from '../MohtvHomePage/actions';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent, utmDataHandler } from 'utils/cleverTap';

// SEO component
const SEOHead = memo(({ router, subCategory }) => (
  <Head>
    <title>MohTV - {subCategory || 'Subcategory'} Videos for Seniors</title>
    <meta
      name="description"
      content="Mohtv offers a vast collection of videos ranging from entertainment, news, education, lifestyle, and more. Explore our platform and discover your favorite videos today."
    />
    <link rel="canonical" href={`https://emoha.com${router?.asPath}`} />
    {/* <link rel="canonical" href={`https://emoha.com${router?.asPath}`} /> */}
    {/* Other meta tags */}
  </Head>
));

export function MohtvSubCategoryPage({
  searchSuggestions,
  getSearchSuggestionHandler,
  clearSuggestionHandler,
  mohtvCategories,
  activeTabId,
  subCategoryShows,
  getSubCategoryShowsHandler,
  searchedShows,
  subCategory,
  initialQuery,
  error,
}) {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');

  // Client-side analytics
  useEffect(() => {
    if (!router?.isReady) return;

    // Import analytics only on client
    import('utils/cleverTap').then(({ pushEvent, utmDataHandler }) => {
      pushEvent(EVENT_NAME.PAGE_VIEWED, {
        source_url: router?.asPath,
        ...utmDataHandler(router?.query),
      });
    });
  }, [router?.isReady, router?.asPath]);

  // Client-side animations
  useEffect(() => {
    // Lazy load animations only on client
    if (typeof window !== 'undefined') {
      import('aos').then(({ default: AOS }) => {
        AOS.init({
          once: true,
          duration: 300,
          disable: window.innerWidth <= 768,
        });
      });
    }
  }, []);

  // Memoized add more data function with proper dependencies
  const addMoreData = useCallback(() => {
    if (!subCategoryShows || subCategoryShows?.total_count <= subCategoryShows?.mohtv_sub_category_shows?.length) {
      return;
    }

    getSubCategoryShowsHandler({
      apiPayload: {
        page_size: 20,
        show_type: subCategoryShows?.show_type || '',
        mohtv_category_uuid: subCategoryShows?.mohtv_category_uuid || '',
        mohtv_sub_category_uuid: subCategoryShows?.mohtv_sub_category_uuid || '',
        page_number: (subCategoryShows?.page_number || 0) + 1,
      },
      categoryId: activeTabId,
    });
  }, [
    subCategoryShows?.total_count,
    subCategoryShows?.mohtv_sub_category_shows?.length,
    subCategoryShows?.page_number,
    subCategoryShows?.mohtv_category_uuid,
    subCategoryShows?.mohtv_sub_category_uuid,
    activeTabId,
    getSubCategoryShowsHandler,
  ]);

  // Memoized banner for performance
  const BannerSection = useMemo(
    () => (
      <BannerContainer style={{ position: 'relative' }}>
        <Image
          fill
          src={matches ? '/static/images/more_health_mob.webp' : '/static/images/more_health.webp'}
          style={{ objectFit: 'cover' }}
          priority
        />
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'end', md: 'center' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}>
          <HomePageText
            width={{ xs: '31.6rem', md: '62.2rem' }}
            textAlign={matches ? 'center' : 'left'}
            fontSize={{ xs: '2.2rem', md: '4.6rem' }}
            fontWeight={{ xs: '600', md: '500' }}
            variant="h2"
            position={{ xs: 'relative', md: 'relative' }}
            height={{ xs: '8.1rem', md: 'auto' }}
            margin={{ xs: '0 0 8vh 0', md: '0 0 0 0' }}
            display="flex"
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
            Your Health, Your Way - Streaming Wellness for Elders
          </HomePageText>
        </MuiContainer>
      </BannerContainer>
    ),
    [matches]
  );

  // Error state handling
  if (error) {
    return (
      <>
        <HeaderBar />
        <div>We're sorry, something went wrong. Please try again later.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead router={router} subCategory={subCategory} />
      <HeaderBar />
      <Container>
        <Grid container>
          {BannerSection}

          <Grid size lg={12} md={12} sm={12} xs={12} display="flex" justifyContent="center">
            <TabsComponent
              mohtvCategories={mohtvCategories}
              activeTabId={activeTabId}
              searchSuggestions={searchSuggestions}
              clearSuggestionHandler={clearSuggestionHandler}
              getSearchSuggestionHandler={getSearchSuggestionHandler}
              searchedShows={searchedShows}
              subCategoryShows={subCategoryShows}
              addMoreData={addMoreData}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

MohtvSubCategoryPage.propTypes = {
  searchSuggestions: PropTypes.object,
  getSearchSuggestionHandler: PropTypes.func,
  clearSuggestionHandler: PropTypes.func,
  mohtvCategories: PropTypes.array,
  activeTabId: PropTypes.string,
  subCategoryShows: PropTypes.object,
  getSubCategoryShowsHandler: PropTypes.func,
  searchedShows: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  searchSuggestions: makeSelectSearchSuggestions(),
  mohtvCategories: makeSelectMohtvCategories(),
  activeTabId: makeSelectMohtvActiveTab(),
  subCategoryShows: makeSelectSubCategoryShows(),
  searchedShows: makeSelectSearchedShows(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getSearchSuggestionHandler: payload => dispatch(getSearchSuggestion(payload)),
    clearSuggestionHandler: () => dispatch(clearSuggestion()),
    getSubCategoryShowsHandler: payload => dispatch(getSubCategoryShows(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(MohtvSubCategoryPage);
