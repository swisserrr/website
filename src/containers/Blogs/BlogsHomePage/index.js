/**
 *
 * Blogs
 *
 */

import React, { useCallback, memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { createStructuredSelector } from 'reselect';
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import { makeSelectAllBlogs } from './selectors';
import ScrollContainer from 'react-indiana-drag-scroll';
import dynamic from 'next/dynamic';
import {
  Container,
  BannerContainer,
  TabLabel,
  TabsContainer,
  TabPanContainer,
  SubContainer,
  SliderContainer,
  MostPopular,
  MostPopularContainer,
  Containerfluid,
} from './styles';

import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import map from 'lodash/map';
import replace from 'lodash/replace';
import './styles.module.css';
import Head from 'next/head';
import CarouselContainer from 'components/CarouselContainer';
import SearchBar from 'components/SearchBar';
import axios from 'axios';
import Image from 'utils/CustomImage';
import { BlogCard } from 'components/BlogsCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pushEvent, utmDataHandler } from 'utils/cleverTap';
import { EVENT_NAME } from 'constants/constants';
import HomePageText from 'components/HomePageText';
import BlogShowType from 'components/BlogsCardContainer';
import Header from 'components/HeaderBar';
const Footer = dynamic(() => import('components/Footer'));
export function Blogs({ blogsData }) {
  const router = useRouter();
  const [search, setSearch] = useState([]);
  const categoriesName = get(blogsData, 'allCategories', []);
  const matches = useMediaQuery('(max-width:600px)');

  const Tab = useCallback((label, tabIndex, slug) => {
    return (
      <TabLabel
        onClick={() => {
          pushEvent(EVENT_NAME.SELECT_CATEGORY, {
            category: slug,
          });
        }}
        scroll={false}
        href={!isEqual(tabIndex, 0) ? `/blogs/${slug}` : '/blogs'}
        active={isEqual(tabIndex, 0)}>
        {label}
      </TabLabel>
    );
  }, []);

  const getSuggestionHandler = useCallback(({ topic }) => {
    axios
      .get(`/api/search/${topic}`)
      .then(data => {
        setSearch(data.data.data);
      })
      .catch(() => {
        setSearch([]);
      });
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 300, disable: window.innerWidth <= 768 });
  }, []);

  const clearSuggestion = useCallback(() => {
    setSearch([]);
  }, []);

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  return (
    <>
      <Head>
        {Object.keys(get(blogsData, 'metaTags.json', {}))?.map((data, i) => {
          if (data === 'title') {
            return <title key={i}>{get(blogsData, 'metaTags.json')[data]}</title>;
          }
          if (data === 'canonical') {
            return;
          }
          if (data === 'description') {
            return <meta key={i} name="description" content={get(blogsData, 'metaTags.json')[data]} />;
          }
          if (data === 'robots') {
            let content = '';
            Object.keys(get(blogsData, 'metaTags.json')[data]).map(obj => {
              content += get(blogsData, 'metaTags.json')[data][obj] + ', ';
            });

            return <meta key={i} name="robots" content={content} />;
          }
          if (
            typeof get(blogsData, 'metaTags.json')[data] === 'object' ||
            Array.isArray(get(blogsData, 'metaTags.json')[data])
          ) {
            if (data === 'twitter_misc') {
              const twitter = Object.keys(get(blogsData, 'metaTags.json')[data]).map(obj => {
                return <meta key={obj} name={obj} content={get(blogsData, 'metaTags.json')[data][obj]} />;
              });
              return twitter;
            }
            if (data === 'og_image') {
              const ogimage = Object.keys(get(blogsData, 'metaTags.json')[data][0]).map(obj => {
                return <meta key={obj} name={obj} content={get(blogsData, 'metaTags.json')[data][0][obj]} />;
              });
              return ogimage;
            }
            if (data === 'canonical') {
              return;
            }
            return;
          }
          return (
            <meta
              key={i}
              name={data.replace('_', ':')}
              content={replace(get(blogsData, 'metaTags.json')[data], 'testing.emoha.com', 'emoha.com')}
            />
          );
        })}
        <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
      </Head>
      <Container>
        <Header />
        <Grid container>
          <BannerContainer>
            <Image
              fill
              src={matches ? '/static/images/blog_mob.webp' : '/static/images/blog_banner.webp'}
              quality={100}
              priority={true}
              style={{ objectFit: 'cover' }}
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
                variant={'h2'}
                position={{ xs: 'relative', md: 'relative' }}
                height={{ xs: '8.1rem', md: 'auto' }}
                margin={{ xs: '0 0 8vh 0', md: '0 0 0 0' }}
                display="flex"
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
                Unveiling Elder Care: Stories, Tips, and Resources
              </HomePageText>
            </MuiContainer>
          </BannerContainer>

          <Grid size lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
            <SubContainer>
              <>
                <TabsContainer>
                  <MuiContainer maxWidth="md" style={{ position: 'relative' }}>
                    <ScrollContainer style={{ display: 'flex', marginRight: 40 }}>
                      {[{ name: 'All', slug: 'all' }, ...categoriesName].map((data, index) => {
                        return Tab(`${!isEqual(data.name, 'All') ? 'More' : ''} ${data.name}`, index, data.slug);
                      })}
                    </ScrollContainer>
                    <SearchBar
                      suggestions={search}
                      isBlogsSearch
                      clearSuggestion={clearSuggestion}
                      getSearchSuggestion={getSuggestionHandler}
                    />
                  </MuiContainer>
                </TabsContainer>
                <SliderContainer>
                  <MuiContainer position="relative" sx={{ padding: { xs: '0' } }}>
                    <MostPopularContainer>
                      <MostPopular>Most popular</MostPopular>
                    </MostPopularContainer>
                    <CarouselContainer
                      nextArrrow={true}
                      centerPadding="12%"
                      dotsInMobile={false}
                      ArrrowInMobile={false}
                      prevArrow={true}
                      leftArrowMargin={'-4rem'}
                      rightArrowMargin={'-4rem'}>
                      {map(get(blogsData, 'topPosts'), val => {
                        return <BlogCard data={val} category={val.catName} disableHover />;
                      })}
                    </CarouselContainer>
                  </MuiContainer>
                </SliderContainer>

                <Containerfluid>
                  <TabPanContainer>
                    <BlogShowType data={get(blogsData, 'categoriesPosts', {})} />
                  </TabPanContainer>
                </Containerfluid>
              </>
            </SubContainer>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  );
}

Blogs.propTypes = {
  blogsData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogsData: makeSelectAllBlogs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Blogs);
