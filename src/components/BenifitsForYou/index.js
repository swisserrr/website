/**
 *
 * BenifitsForYou
 *
 */
import React, { useCallback, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'utils/CustomImage';
import ScrollContainer from 'react-indiana-drag-scroll';
import PropTypes from 'prop-types';
import {
  ServicesCardContainer,
  SlideRightContainer,
  SlideRight,
  SlideLeft,
  SlideLeftContainer,
  ImageContainer,
  FadeContainer,
  FadeContainer2,
  LeafContainerLeft,
  LeafContainerRight,
} from './styles';
import isEqual from 'lodash/isEqual';
import gt from 'lodash/gt';
import map from 'lodash/map';
import { useRouter } from 'next/router';

import HomePageButton from 'components/HomePageButton';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';

function BenifitsForYou() {
  const [leftSlideActive, setLeftSlideActive] = useState(false);
  const [rightSlideActive, setRightSlideActive] = useState(true);
  const matches = useMediaQuery('(max-width:600px)');
  const container = useRef(null);
  const router = useRouter();

  const handleRightButton = useCallback(() => {
    if (container.current) {
      container.current.scrollTo(container?.current?.scrollLeft + 400, 0);
      if (isEqual(container?.current?.scrollLeft, 0)) {
        setLeftSlideActive(false);
      } else {
        setLeftSlideActive(true);
      }
      if (gt(container?.current?.scrollLeft, matches ? 470 : 1900)) {
        setRightSlideActive(false);
      } else {
        setRightSlideActive(true);
      }
    }
  }, [matches]);

  const handleLeftButton = useCallback(() => {
    if (container.current) {
      container.current.scrollTo(container?.current?.scrollLeft - 400, 0);
      if (isEqual(container?.current?.scrollLeft, 0)) {
        setLeftSlideActive(false);
      } else {
        setLeftSlideActive(true);
      }
      if (gt(container?.current?.scrollLeft, matches ? 470 : 1900)) {
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
      if (gt(container?.current?.scrollLeft, matches ? 470 : 1900)) {
        setRightSlideActive(false);
      } else {
        setRightSlideActive(true);
      }
    }
  }, [matches]);

  const staticData = [
    {
      id: 1,
      imageUrl: '/static/images/benifit1.webp',
    },
    {
      id: 2,
      imageUrl: '/static/images/benifit2.webp',
    },
    {
      id: 3,
      imageUrl: '/static/images/benifit3.webp',
    },
    {
      id: 4,
      imageUrl: '/static/images/benifit4.webp',
    },
    {
      id: 5,
      imageUrl: '/static/images/benifit5.webp',
    },
    {
      id: 6,
      imageUrl: '/static/images/benifit6.webp',
    },
    {
      id: 7,
      imageUrl: '/static/images/benift7.webp',
    },
    {
      id: 8,
      imageUrl: '/static/images/benifit8.webp',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F4F1EB',
        paddingBottom: matches ? '0px' : '40px',
        overflow: 'clip',
      }}>
      <LeafContainerLeft>
        <Image
          priority
          src={'/static/images/left_flower.png'}
          width={matches ? 250 : 500}
          height={matches ? 250 : 500}
          alt="View All"
          style={{ zIndex: -1 }}
        />
      </LeafContainerLeft>
      <FadeContainer />

      <Container maxWidth="lg">
        <HomePageBox
          margin={{ xs: '0 22px', md: '0' }}
          padding={{ xs: '2.0rem 0rem 1.5rem 0', md: '6rem 0rem 3rem 0' }}>
          <HomePageBox color={{ xs: '#FFFFFF', md: '#FFFFFF' }} alignItem="center">
            <HomePageText
              variant={'h2'}
              textTransform={{ xs: 'none', md: 'none' }}
              fontSize={{ xs: '2.2rem', md: '3.6rem' }}
              fontWeight={{ xs: '600', md: '600' }}
              margin={{ xs: '2rem 0rem 0 1rem', md: '0 15rem 0 15rem' }}
              lineHeight={{ xs: '2.8rem', md: '5.6rem' }}
              textAlign={{ xs: 'left', md: 'center' }}
              color={{ xs: '#000', md: '#000' }}>
              Benefits for you
            </HomePageText>
            <HomePageText
              variant={'h2'}
              display={{ xs: 'block', md: 'none' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontSize={{ xs: '1.4rem', md: '2.4rem' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '2rem', md: '4.0rem' }}
              textAlign={{ xs: 'left', md: 'center' }}
              margin={{ xs: '1.2rem 1.5rem 2rem 1rem', md: '0 16rem 0 16rem' }}
              color={{ xs: '#000', md: '#000' }}>
              Our solutions our designed to give you
              <text style={{ fontStyle: 'italic', fontWeight: 600 }}>
                {' '}
                <br /> peace of mind{' '}
              </text>
              and the comfort of knowing
              <br /> there is an expert partner by your side.
            </HomePageText>
            <HomePageText
              variant={'h2'}
              display={{ xs: 'none', md: 'block' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontSize={{ xs: '1.4rem', md: '2.4rem' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '2rem', md: '4.0rem' }}
              textAlign={{ xs: 'left', md: 'center' }}
              margin={{ xs: '1.2rem 1.5rem 2rem 1rem', md: '0 16rem 0 16rem' }}
              color={{ xs: '#000', md: '#000' }}>
              Our solutions our designed to give you
              <text style={{ fontStyle: 'italic', fontWeight: 600 }}> peace of mind </text>
              and the comfort of knowing there is an expert partner by your side.
            </HomePageText>
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
            {map(staticData, itemVal => (
              <Container
                style={{
                  marginLeft: '0.5rem',
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                }}>
                <ImageContainer>
                  <Image src={itemVal?.imageUrl} fill alt="Show Image" style={{ objectFit: 'fill' }} />
                </ImageContainer>
              </Container>
            ))}
          </ScrollContainer>
        </ServicesCardContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: matches ? '40px' : '80px',
          }}>
          <HomePageButton
            onClick={() => router.push('/plans')}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            margin={{ xs: '4rem 0 2.4rem 0', md: '14rem 0 0rem 0' }}
            padding={{ xs: '12.2px 3rem', md: '1.5rem 4.5rem' }}
            fontWeight={{ xs: '500', md: '500' }}
            borderRadius={{ xs: '4.2rem', md: '5rem' }}
            color={{ xs: '#DA504A', md: '#DA504A' }}
            fontSize={{ xs: '1.5rem', md: '2rem' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            border={{ xs: '1px solid', md: '2px solid' }}
            borderColor={{ xs: '#DA504A', md: '#DA504A' }}
            boxShadow="none"
            backgroundColor={{ xs: 'transparent', md: 'transparent' }}>
            Explore Plans
          </HomePageButton>
        </div>
      </Container>

      <LeafContainerRight>
        <Image
          priority
          src={'/static/images/left_flower.png'}
          width={matches ? 250 : 550}
          height={matches ? 250 : 550}
          alt="View All"
        />
      </LeafContainerRight>
      <FadeContainer2 />
    </div>
  );
}

BenifitsForYou.propTypes = {
  handleCreateConcierge: PropTypes.func,
  setOpenModal: PropTypes.func,
  user: PropTypes.object,
};

export default BenifitsForYou;
