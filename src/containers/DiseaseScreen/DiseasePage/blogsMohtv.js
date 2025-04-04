import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import MuiContainer from '@mui/material/Container';
import HomePageBox from 'components/HomePageBox';
import HomePageButton from 'components/HomePageButton';
import HomePageText from 'components/HomePageText';
import HomePageMohTvShows from 'components/HomePageMohTvShows';
import { useRouter } from 'next/router';
import { AboutSection, AboutSectionNew } from './styles';

const BlogsMohtv = ({ blogs, mohtv }) => {
  const router = useRouter();
  return (
    <>
      {get(blogs, 'is_visible_on_website') && (
        <AboutSection id="blogs">
          <HomePageBox backgroundColor={{ xs: '#F8F8F8', md: '#F8F8F8' }}>
            <MuiContainer maxWidth="lg" sx={{ padding: { xs: '0' } }}>
              <HomePageBox padding={{ xs: '2.3rem 0rem', md: '1rem 0 1rem 0rem' }}>
                <HomePageBox padding={{ xs: '1.2rem 1.6rem', md: '0rem 0rem 0rem 1rem' }}>
                  <HomePageBox display="flex" justifyContent="space-between" alignItems="center">
                    <HomePageText
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      variant={'h2'}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                      Blogs
                    </HomePageText>
                    <HomePageButton
                      onClick={() => router.push(`/blogs/${get(blogs, 'view_all_navigation')}`)}
                      variant="text"
                      color={{ xs: '#1a1a1a !important' }}
                      letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                      margin={{ xs: '0', md: '0 24px 0 0' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                      View all &#8594;
                    </HomePageButton>
                  </HomePageBox>
                </HomePageBox>
                <HomePageMohTvShows dots={true} mohtv={false} dataSet={get(blogs, 'url_data')} imageToggle={true} />
              </HomePageBox>
            </MuiContainer>
          </HomePageBox>
        </AboutSection>
      )}
      {get(mohtv, 'is_visible_on_website') && (
        <AboutSectionNew id="mohtv">
          <HomePageBox backgroundColor={{ xs: '#F8F8F8', md: '#F8F8F8' }}>
            <MuiContainer maxWidth="lg" sx={{ padding: { xs: '0' } }}>
              <HomePageBox padding={{ xs: '2.3rem 0rem', md: '1rem 0 1rem 0rem' }}>
                <HomePageBox padding={{ xs: '1.2rem 2rem', md: '0rem 0rem 0rem 1rem' }}>
                  <HomePageBox color={{ xs: '#1A1A1A', md: '#1A1A1A' }} display="flex" justifyContent="space-between">
                    <HomePageText
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      variant={'h2'}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                      Watch Videos
                    </HomePageText>

                    <HomePageButton
                      onClick={() =>
                        router.push(
                          `/mohtv/${get(mohtv, 'mohtv_sub_category_name')}?category_uuid=${get(
                            mohtv,
                            'mohtv_category_uuid'
                          )}&subCategory_uuid=${get(mohtv, 'mohtv_sub_category_uuid')}`
                        )
                      }
                      variant="text"
                      color={{ xs: '#1a1a1a', md: '#1a1a1a' }}
                      margin={{ xs: '0', md: '0 24px 0 0' }}
                      letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
                      View all &#8594;
                    </HomePageButton>
                  </HomePageBox>
                </HomePageBox>
                <HomePageMohTvShows
                  dots={true}
                  mohtv={true}
                  dataSet={get(mohtv, 'mohtv_sub_category_shows')}
                  imageToggle={true}
                />
              </HomePageBox>
            </MuiContainer>
          </HomePageBox>
        </AboutSectionNew>
      )}
    </>
  );
};

BlogsMohtv.propTypes = {
  blogs: PropTypes.object.isRequired,
  mohtv: PropTypes.object.isRequired,
  blogsTileData: PropTypes.object.isRequired,
};

export default BlogsMohtv;
