/* eslint-disable max-len */
/**
 *
 * Mohtv
 *
 */

import React, { useCallback, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';

import { createStructuredSelector } from 'reselect';
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import ScrollContainer from 'react-indiana-drag-scroll';
import InfiniteScroll from 'react-infinite-scroll-component';
import dynamic from 'next/dynamic';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import find from 'lodash/find';
import Image from 'utils/CustomImage';

import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  makeSelectMohtvCategoryShows,
  makeSelectSearchSuggestions,
  makeSelectMohtvCategories,
  makeSelectMohtvActiveTab,
  makeSelectSearchedShows,
} from './selectors';

import {
  Container,
  BannerContainer,
  TabLabel,
  TabsContainer,
  TabPanContainer,
  SubContainer,
  Heading,
  HeadingContainer,
} from './styles';

import MohtvShowType from 'components/MohtvShowType';

const HomePageText = dynamic(() => import('components/HomePageText'));
import ShowCard from 'components/ShowCard';
import SearchBar from 'components/SearchBar';
const Footer = dynamic(() => import('components/Footer'));
const HeaderBar = dynamic(() => import('components/HeaderBar'));

import { getSearchSuggestion, clearSuggestion, getSearchResult, getCategoryShows } from './actions';

import { EVENT_NAME } from 'constants/constants';

import { pushEvent, utmDataHandler } from 'utils/cleverTap';
import useMediaQuery from '@mui/material/useMediaQuery';
export function Mohtv({
  mohTvCategoryShow,
  searchSuggestions,
  getSearchSuggestionHandler,
  clearSuggestionHandler,
  mohtvCategories,
  activeTabId,
  searchedShows,
  getSearchedShowsHandler,
  getCategoryShowsHandler,
}) {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router?.asPath, '/') ? '/Home' : router?.asPath },
      ...utmDataHandler(router?.query),
    });
  }, [router]);

  const activeTabHandler = useCallback(
    categoryVal => {
      pushEvent(EVENT_NAME.SELECT_CATEGORY, {
        category: categoryVal?.mohtv_category_name,
        // page_type  clear it from Varchus
      });
      if (!isEqual(activeTabId, categoryVal?.mohtv_category_uuid)) {
        if (!categoryVal?.mohtv_category_uuid) {
          router?.push('/mohtv', undefined, { scroll: false });
        } else {
          router?.push(
            {
              pathname: `/mohtv`,
              query: {
                category: categoryVal?.mohtv_category_name,
                category_uuid: categoryVal?.mohtv_category_uuid,
              },
            },
            undefined,
            { scroll: false }
          );
        }
      }
    },
    [activeTabId]
  );

  useEffect(() => {
    AOS.init({ once: true, duration: 300, disable: window.innerWidth <= 768 });
  }, []);

  const handleOnReachEnd = useCallback(() => {
    const searchPayload = {
      topic: searchedShows?.topic,
      page_size: 10,
      page_number: searchedShows?.page_number + 1,
    };
    getSearchedShowsHandler(searchPayload);
  }, [searchedShows]);

  const addMoreData = useCallback(() => {
    // lazy loading is not needed here
    if (mohTvCategoryShow?.total_count > mohTvCategoryShow?.data?.length) {
      const payload = {
        page_size: 10,
        mohtv_category_uuid: mohTvCategoryShow?.mohtv_category_uuid ? mohTvCategoryShow?.mohtv_category_uuid : '',
        mohtv_sub_category_uuid: '',
        page_number: mohTvCategoryShow?.page_number + 1,
      };
      getCategoryShowsHandler(payload);
    }
  }, [mohTvCategoryShow]);

  const mohTvCategoryBanner = useCallback(() => {
    const categoryObj = find(mohtvCategories, item => isEqual(item?.mohtv_category_uuid, activeTabId));
    if (
      !isNil(categoryObj) &&
      !isEmpty(categoryObj) &&
      !isNil(categoryObj?.mohtv_category_image) &&
      !isEmpty(categoryObj?.mohtv_category_image)
    ) {
      return {
        text: categoryObj?.mohtv_category_text,
        img: matches ? categoryObj?.mohtv_category_image_mobile : categoryObj?.mohtv_category_image,
      };
    }
    return matches ? '/static/images/more_all_mob.webp' : '/static/images/more_all.webp';
  }, [mohtvCategories, activeTabId]);

  return (
    <>
      <Head>
        <title>MohTV- Your Ultimate Destination for Entertaining and Informative Videos for Seniors</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Mohtv offers a vast collection of videos ranging from entertainment, news, education, lifestyle, and more. Explore our platform and discover your favorite videos today."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MohTV- Your Ultimate Destination for Entertaining and Informative Videos for Seniors"
        />
        <meta
          property="og:description"
          content="Mohtv offers a vast collection of videos ranging from entertainment, news, education, lifestyle, and more. Explore our platform and discover your favorite videos today."
        />
        <link rel="canonical" href={`https://emoha.com${router?.asPath}`} />
        <meta property="og:url" content="https://www.emoha.com/" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Emoha" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="An Elder Care Community  " />
        <meta
          name="twitter:description"
          content="Emoha is a connected community of elders, bringing together world-class expertise in a range of health, emergency, online activities at home for elders."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="Emoha" />
      </Head>
      <HeaderBar />
      <Container>
        <Grid container>
          <BannerContainer style={{ position: 'relative' }}>
            <Image alt="banner_image" src={mohTvCategoryBanner().img} priority fill style={{ objectFit: 'cover' }} />
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
                variant={'h2'}
                height={{ xs: '8.1rem', md: 'auto' }}
                position={{ xs: 'relative', md: 'relative' }}
                margin={{ xs: '0 0 8vh 0', md: '0 0 0 0' }}
                display="flex"
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
                {mohTvCategoryBanner().text}
              </HomePageText>
            </MuiContainer>
          </BannerContainer>

          <Grid size lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
            <SubContainer>
              <TabsContainer className="tabs">
                <MuiContainer maxWidth="md" style={{ position: 'relative' }}>
                  <ScrollContainer style={{ display: 'flex', marginRight: 40 }}>
                    {map(mohtvCategories, categoryVal => (
                      <TabLabel
                        onClick={() => activeTabHandler(categoryVal)}
                        active={isEqual(categoryVal?.mohtv_category_uuid, activeTabId)}
                        key={categoryVal?.mohtv_category_uuid}>
                        {categoryVal?.mohtv_category_name}
                      </TabLabel>
                    ))}
                  </ScrollContainer>
                  <SearchBar
                    suggestions={searchSuggestions?.data}
                    isSearchActive={!isEmpty(searchedShows)}
                    searchedShows={searchedShows}
                    clearSuggestion={clearSuggestionHandler}
                    getSearchSuggestion={getSearchSuggestionHandler}
                  />
                </MuiContainer>
              </TabsContainer>

              <TabPanContainer>
                {!isEmpty(searchedShows) && (
                  <MuiContainer maxWidth="lg">
                    <InfiniteScroll
                      dataLength={searchedShows?.data?.length || 0}
                      style={{ overflowY: 'hidden' }}
                      next={handleOnReachEnd}
                      hasMore={searchedShows?.total_count > searchedShows?.data?.length}
                      loader={<h1>Loading ... </h1>}>
                      <Grid container>
                        <HeadingContainer>
                          <Grid size lg={10} md={10} sm={10} xs={9}>
                            <Heading>{`Showing result for "${searchedShows?.topic}"`}</Heading>
                          </Grid>
                        </HeadingContainer>
                        <ShowCard data={searchedShows?.data} />
                      </Grid>
                    </InfiniteScroll>
                  </MuiContainer>
                )}
                <MohtvShowType
                  data={mohTvCategoryShow?.data}
                  addMoreData={addMoreData}
                  categoryId={activeTabId}
                  lazy={mohTvCategoryShow?.total_count > mohTvCategoryShow?.data?.length}
                />
              </TabPanContainer>
            </SubContainer>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Mohtv.propTypes = {
  mohTvCategoryShow: PropTypes.object,
  getMohTvShowsHandler: PropTypes.func,
  searchSuggestions: PropTypes.object,
  getSearchSuggestionHandler: PropTypes.func,
  clearSuggestionHandler: PropTypes.func,
  mohtvCategories: PropTypes.array,
  activeTabId: PropTypes.string,
  searchedShows: PropTypes.object,
  getSearchedShowsHandler: PropTypes.func,
  getCategoryShowsHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mohTvCategoryShow: makeSelectMohtvCategoryShows(),
  searchSuggestions: makeSelectSearchSuggestions(),
  mohtvCategories: makeSelectMohtvCategories(),
  activeTabId: makeSelectMohtvActiveTab(),
  searchedShows: makeSelectSearchedShows(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getSearchSuggestionHandler: payload => dispatch(getSearchSuggestion(payload)),
    clearSuggestionHandler: () => dispatch(clearSuggestion()),
    getSearchedShowsHandler: payload => dispatch(getSearchResult(payload)),
    getCategoryShowsHandler: payload => dispatch(getCategoryShows(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Mohtv);
