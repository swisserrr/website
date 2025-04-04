/**
 *
 * HomeServiceSection
 *
 */

import React, { useCallback, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'utils/CustomImage';
import ScrollContainer from 'react-indiana-drag-scroll';
import PropTypes from 'prop-types';
import {
  ServicesCardContainer,
  ServicesHeading,
  ServicesDescription,
  ServiceImageContainer,
  CustomButton,
  SlideRightContainer,
  SlideRight,
  SlideLeft,
  SlideLeftContainer,
} from './styles';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import gt from 'lodash/gt';
import map from 'lodash/map';
import { useRouter } from 'next/router';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import ServicesCard from 'components/ServicesCard';

import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
function HomeServiceSection({ homePageData }) {
  const [activeService, setActiveService] = useState({ activeItem: homePageData?.concierge_services?.[0] });
  const [leftSlideActive, setLeftSlideActive] = useState(false);
  const [rightSlideActive, setRightSlideActive] = useState(true);
  const matches = useMediaQuery('(max-width:600px)');
  const container = useRef(null);
  const router = useRouter();
  const getImageUrl = () => {
    if (isEqual(get(activeService, 'activeItem.cover_image', ''), null)) {
      return '';
    }
    return get(activeService, 'activeItem.cover_image');
  };

  const handleNavigateUser = () => {
    pushEvent(EVENT_NAME.VIEW_ALL, {
      block_name: 'How we help',
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
    router.push('/services');
  };

  const handleRightButton = useCallback(() => {
    if (container.current) {
      container.current.scrollTo(container?.current?.scrollLeft + 200, 0);
      if (isEqual(container?.current?.scrollLeft, 0)) {
        setLeftSlideActive(false);
      } else {
        setLeftSlideActive(true);
      }
      if (gt(container?.current?.scrollLeft, matches ? 470 : 800)) {
        setRightSlideActive(false);
      } else {
        setRightSlideActive(true);
      }
    }
  }, [matches]);

  const handleLeftButton = useCallback(() => {
    if (container.current) {
      container.current.scrollTo(container?.current?.scrollLeft - 200, 0);
      if (isEqual(container?.current?.scrollLeft, 0)) {
        setLeftSlideActive(false);
      } else {
        setLeftSlideActive(true);
      }
      if (gt(container?.current?.scrollLeft, matches ? 470 : 800)) {
        setRightSlideActive(false);
      } else {
        setRightSlideActive(true);
      }
    }
  }, [matches]);

  const handleEndScroll = useCallback(() => {
    if (container.current) {
      if (isEqual(container?.current?.scrollLeft, 0)) {
        setLeftSlideActive(false);
      } else {
        setLeftSlideActive(true);
      }
      if (gt(container?.current?.scrollLeft, matches ? 470 : 800)) {
        setRightSlideActive(false);
      } else {
        setRightSlideActive(true);
      }
    }
  }, [matches]);

  const bookServices = useCallback(() => {
    pushEvent(EVENT_NAME.BOOK_SERVICES, {
      Category: get(activeService, 'activeItem.category', 'N/A'),
    });
    router.push(
      {
        pathname: '/services',
        query: { activeId: activeService?.activeItem?.id },
      },
      '/services'
    );
  }, [activeService]);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <HomePageBox
          margin={{ xs: '0 22px', md: '0' }}
          padding={{ xs: '2.0rem 0rem 1.5rem 0', md: '0rem 0rem 3rem 0' }}>
          <HomePageBox
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <HomePageText
              variant={'h2'}
              textTransform={{ xs: 'none', md: 'none' }}
              fontSize={{ xs: '2.8rem', md: '3.6rem' }}
              fontWeight={{ xs: '600', md: '600' }}
              lineHeight={{ xs: '3.4rem', md: '5.6rem' }}
              color={{ xs: '#000', md: '#000' }}>
              Solutions for Every Senior’s Needs
            </HomePageText>
            {!matches && (
              <HomePageButton
                onClick={handleNavigateUser}
                variant="text"
                letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight={{ xs: '500', md: '500' }}
                alignSelf="center"
                lineHeight={{ xs: '1.3rem', md: '3.2rem' }}
                color={{ xs: '#000', md: '#000' }}>
                View all &#8594;
              </HomePageButton>
            )}
          </HomePageBox>
        </HomePageBox>
      </Container>
      <Container maxWidth="lg">
        <ServicesCardContainer container>
          {!matches && (
            <>
              <SlideLeftContainer hide={leftSlideActive} onClick={handleLeftButton}>
                <SlideLeft>
                  <Image priority src={'/static/images/arrow_forward.webp'} height={20} width={25} alt="View All" />
                </SlideLeft>
              </SlideLeftContainer>
              <SlideRightContainer hide={rightSlideActive} onClick={handleRightButton}>
                <SlideRight>
                  <Image priority src={'/static/images/arrow_forward.webp'} height={20} width={25} alt="View All" />
                </SlideRight>
              </SlideRightContainer>
            </>
          )}

          <ScrollContainer
            onEndScroll={handleEndScroll}
            innerRef={container}
            style={{ display: 'flex' }}
            horizontal
            component="div">
            {map(homePageData?.concierge_services, (itemVal, index) => (
              <ServicesCard
                fullData={get(homePageData, 'concierge_services')}
                item={itemVal}
                activeService={activeService?.activeItem}
                width="100%"
                name="Test"
                key={index}
                setActiveService={setActiveService}
              />
            ))}
          </ScrollContainer>
        </ServicesCardContainer>
      </Container>
      <Container maxWidth="lg" sx={{ padding: { xs: '0 38px' } }}>
        <HomePageBox padding={{ xs: '2.0rem 0rem', md: '5.0rem 0rem' }}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              order={{ xs: 2, md: 1 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', md: 'start' },
                alignItems: { xs: 'flex-start', md: 'start' },
              }}>
              <ServicesHeading>{get(activeService, 'activeItem.category', 'N/A')}</ServicesHeading>
              <ServicesDescription>{get(activeService, 'activeItem.website_description', 'N/A')}</ServicesDescription>
              <CustomButton variant="contained" onClick={bookServices}>
                Book Services
              </CustomButton>
            </Grid>
            <Grid
              order={{ xs: 1, md: 2 }}
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ServiceImageContainer>
                <Image src={getImageUrl()} fill alt="Show Image" style={{ objectFit: 'cover', borderRadius: 40 }} />
              </ServiceImageContainer>
            </Grid>
          </Grid>
        </HomePageBox>
      </Container>
    </div>
  );
}

HomeServiceSection.propTypes = {
  handleCreateConcierge: PropTypes.func,
  homePageData: PropTypes.object,
  setOpenModal: PropTypes.func,
  user: PropTypes.object,
};

export default HomeServiceSection;
