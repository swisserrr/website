/**
 *
 * YAxisCarousel
 *
 */

import React, { memo, useRef, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { CustmBox, CustomContainer } from './styles';
import { useRouter } from 'next/router';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';

const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const StackImages = dynamic(() => import('components/StackImages'));
function YAxisCarousel({ group }) {
  const observer = useRef(null);
  const router = useRouter();

  const timeOut = (item, index) => {
    setTimeout(() => {
      item.classList.add(`img_${index}`);
    }, index * 1000);
  };

  const callBacckFunc = function (item) {
    if (item[0].isIntersecting) {
      const one = item[0].target;

      const two = one.querySelectorAll('img');
      two.forEach((item, index) => {
        timeOut(item, index);
      });

      observer.current.unobserve(item[0].target);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(callBacckFunc, { threshold: 0.3 });

    const box = document.querySelectorAll('.test_');

    box.forEach(item => {
      observer.current.observe(item);
    });
  }, [observer]);

  const handleRoute = (key, category_id) => {
    switch (key) {
      case '24*7 Emergency Support':
        router.push('/emergency');
        break;
      case 'Community Support':
        router.push('/mohtv');
        break;
      default:
        router.push(
          {
            pathname: '/services',
            query: { activeId: category_id },
          },
          '/services'
        );
        break;
    }
    pushEvent(EVENT_NAME.EXPLORE_SERVICE, {
      service_type: key,
    });
  };
  return (
    <Grid container>
      <Grid size xs={12} md={12}>
        <CustomContainer>
          {map(group, (item, key) => {
            return (
              <CustmBox key={key} className="test_">
                <Grid
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  container
                  justify="flex-start">
                  <Grid
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      height: '100%',
                      display: { xl: 'flex' },
                      justifyContent: { xl: 'center' },
                      flexDirection: { xl: 'column' },
                      alignItems: { xl: 'start' },
                    }}
                    item
                    xs={12}
                    md={6}
                    order={{ xs: 2, md: 1 }}>
                    <HomePageText
                      fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      lineHeight={{ xs: '2.0rem', md: '5.8rem' }}
                      padding={{
                        xs: '1rem 0rem 0rem 0rem',
                        md: '10.8rem 0 0 0',
                      }}
                      variant={'h3'}
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}>
                      {get(item?.[0], 'title')}
                    </HomePageText>
                    <HomePageText
                      fontSize={{ xs: '1.7rem', md: '1.7rem' }}
                      fontWeight={{ xs: '400', md: '400' }}
                      lineHeight={{ xs: '2.1rem', md: '2.1rem' }}
                      width={{ md: '400px' }}
                      padding={{
                        xs: '1.5rem 0rem 0rem 0rem',
                        md: '3.0rem 0 0 0',
                      }}
                      color={{ xs: '#1A1A1A !important', md: '#1A1A1A !important' }}>
                      {get(item?.[0], 'description')}
                    </HomePageText>
                    <HomePageButton
                      onClick={() => handleRoute(key, get(item?.[0], 'category_id'))}
                      fontWeight={{ xs: '500', md: '500' }}
                      margin={{ xs: '2.5rem 0rem 0rem 0rem', md: '10.2rem 0rem 0rem 0rem' }}
                      borderRadius={{ xs: '5rem', md: '5rem' }}
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      fontSize={{ xs: '17px', md: '17px' }}
                      border={{ xs: '2px solid #1A1A1A !important', md: '2px solid #1A1A1A !important' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      backgroundColor={{ xs: '#F8F8F8', md: '#F8F8F8' }}>
                      Learn more
                    </HomePageButton>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      marginTop: { xl: '10%' },
                      height: { xs: '40%', md: '100%', xl: '50rem' },
                      alignItems: { xs: 'center', md: 'center', xl: 'start' },
                    }}
                    item
                    xs={12}
                    md={6}
                    order={{ xs: 1, md: 2 }}>
                    {map(item, (item2, key) => {
                      return (
                        <StackImages
                          width={150}
                          key={key}
                          height={150}
                          duration={`0.8s`}
                          src={get(item2, 'image_url')}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </CustmBox>
            );
          })}
        </CustomContainer>
      </Grid>
    </Grid>
  );
}

YAxisCarousel.propTypes = {
  group: PropTypes.object,
};

export default memo(YAxisCarousel);
