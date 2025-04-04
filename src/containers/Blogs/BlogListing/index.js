/* eslint-disable max-len */
/**
 *
 * Blogs
 *
 */

import React, { useCallback, memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Image from 'utils/CustomImage';
import { createStructuredSelector } from 'reselect';
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import { makeSelectAllCategoriesBlogs } from '../BlogsHomePage/selectors';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
  Container,
  BannerContainer,
  TabLabel,
  TabsContainer,
  TabPanContainer,
  SubContainer,
  MaxWidthContainer,
} from './styles';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { addBlogsCategoryData } from '../BlogsHomePage/actions';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent, utmDataHandler } from 'utils/cleverTap';
import HomePageText from 'components/HomePageText';
import SearchBar from 'components/SearchBar';
import BlogsLazyLoading from 'components/BlogsLazyLoading';
import HeaderBar from 'components/HeaderBar';
const Footer = dynamic(() => import('components/Footer'));
import config from 'config';

export function Blogs({ blogsData, addBlogs }) {
  console.log('blogsconfiggg', config.BLOGS_SLUG);
  const [hasMore, setHasMore] = useState(true);
  const scrollRef = useRef(null);
  const router = useRouter();
  const [search, setSearch] = useState([]);
  const matches = useMediaQuery('(max-width:600px)');
  const getSuggestionHandler = ({ topic }) => {
    axios
      .get(`${config.BLOGS_SLUG}/api/v2/user/blogs/search?searchtitle=${topic}`)
      .then(data => {
        setSearch(data.data.data);
      })
      .catch(() => {
        setSearch([]);
      });
  };
  const clearSuggestion = () => {
    setSearch([]);
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 300, disable: 'mobile' });
  }, []);

  useEffect(() => {
    setHasMore(true);
  }, []);

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  const bannerChecker = useCallback(
    data => {
      if (isEqual(data, 'safety')) {
        return {
          text: 'Securing Lives, One Stream at a Time',
          image: matches ? '/static/images/more_safety_mob.webp' : '/static/images/more_safety.webp',
        };
      }
      if (isEqual(data, 'nutrition')) {
        return {
          text: 'Nutrition at Your Fingertips, Streaming Well-being for Seniors ',
          image: matches ? '/static/images/more_nutrition_mob.webp' : '/static/images/more_nutrition.webp',
        };
      }
      if (isEqual(data, 'health')) {
        return {
          text: 'Your Health, Your Way - Streaming Wellness for Elders',
          image: matches ? '/static/images/more_health_mob.webp' : '/static/images/more_health.webp',
        };
      }
      if (isEqual(data, 'fitness')) {
        return {
          text: 'Stream Your Way to Active Ageing',
          image: matches ? '/static/images/more_fitness_mob.webp' : '/static/images/more_fitness.webp',
        };
      }
      if (isEqual(data, 'busy')) {
        return {
          text: 'Embark on a Journey of Discovery and Connection',
          image: matches ? '/static/images/more_busy_mob.webp' : '/static/images/more_busy.webp',
        };
      }
      if (isEqual(data, 'convenience')) {
        return {
          text: 'Discover a World of Entertainment, Tailored for the Golden Generation',
          image: matches ? '/static/images/more_convenience.webp' : '/static/images/more_convenience.webp',
        };
      }
      return {
        text: 'Streaming Memories, Connecting Elders Through the Screen',
        image: matches ? '/static/images/more_all_mob.webp' : '/static/images/more_all.webp',
      };
    },
    [matches]
  );

  const Tab = useCallback(
    (label, tabIndex, slug) => {
      return (
        <TabLabel
          onClick={() => {
            pushEvent(EVENT_NAME.SELECT_CATEGORY, {
              category: slug,
            });
          }}
          scroll={false}
          href={!isEqual(tabIndex, 0) ? `/blogs/${slug}` : '/blogs'}
          active={router.asPath === `/blogs/${slug}`}>
          {label}
        </TabLabel>
      );
    },
    [router]
  );
  return (
    <>
      <Head>
        <title>Emoha - Senior Care Services & Elder Care Blog</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Emoha's senior care services & elder care blog is your go-to destination for information, tips, and advice on caregiving, aging, health, wellness, and more"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emoha - Senior Care Services & Elder Care Blog" />
        <meta
          property="og:description"
          content="Emoha's senior care services & elder care blog is your go-to destination for information, tips, and advice on caregiving, aging, health, wellness, and more"
        />
        <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
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
      <Container>
        <HeaderBar />
        <MaxWidthContainer>
          <Grid container>
            <BannerContainer>
              <Image
                fill
                priority={true}
                src={bannerChecker(router.query.categories).image}
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
                  {bannerChecker(router.query.categories).text}
                </HomePageText>
              </MuiContainer>
            </BannerContainer>

            <Grid size lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
              <SubContainer>
                <TabsContainer className="tabs">
                  <MuiContainer maxWidth="md" style={{ position: 'relative' }}>
                    <ScrollContainer style={{ display: 'flex', marginRight: 40 }} ref={scrollRef}>
                      {[{ name: 'All', slug: 'all' }, ...get(blogsData, 'allCategories', [])].map((data, index) => {
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
                <TabPanContainer>
                  <MuiContainer>
                    <BlogsLazyLoading
                      topic={`${get(blogsData, 'categoryInfo.name', [])}`}
                      catSlug={router.query.categories}
                      data={get(blogsData, 'paginatedData', [])}
                      hasMore={hasMore}
                      addMoreData={async page => {
                        const res = await fetch(
                          `${config.BLOGS_SLUG}/api/v2/user/blogs/categories?slug=${router.query.categories}&page=${page}`
                        ).then(res => res.json());
                        if (res.data.length === 0) {
                          setHasMore(false);
                        }
                        addBlogs(res.data);
                      }}
                    />
                  </MuiContainer>
                </TabPanContainer>
              </SubContainer>
            </Grid>
          </Grid>
        </MaxWidthContainer>
        <Footer />
      </Container>
    </>
  );
}

Blogs.propTypes = {
  addBlogs: PropTypes.func,
  blogsData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogsData: makeSelectAllCategoriesBlogs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addBlogs: payload => dispatch(addBlogsCategoryData(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Blogs);
