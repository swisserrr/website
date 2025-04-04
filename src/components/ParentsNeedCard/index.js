/**
 *
 * ParentsNeedCard
 *
 */

import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { browserConfigHandler } from 'utils/common';
import dynamic from 'next/dynamic';
import { CustomCard, CardBottom, TextContainer, ButtonContainer, CustomReactPlayer } from './styles';
import LinearProgress from '@mui/material/LinearProgress';
import get from 'lodash/get';
import { useRouter } from 'next/router';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const ControlContainer = dynamic(() => import('./styles').then(module => module.ControlContainer), { ssr: false });
function ParentsNeedCard({ index, sliderRef, item, changesFromCorporate }) {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:600px)');
  const [videoState, setVideoState] = useState({
    played: 0,
    seeking: false,
    buffer: true,
  });
  const { played, seeking, buffer } = videoState;
  const progressHandler = state => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const bufferStartHandler = () => {
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    setVideoState({ ...videoState, buffer: false });
  };

  const onEnded = () => {
    sliderRef.current.slickNext();
  };

  const handleResponsive = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches) {
      return 0;
    }
    return 1;
  };

  const routeToSpecificArea = useCallback(() => {
    pushEvent(EVENT_NAME.EXPLORE_SERVICE, {
      service_type: get(item, 'text_heading'),
    });
    switch (get(item, 'text_heading')) {
      case 'More Safety':
        router.push({
          pathname: '/emergency',
        });
        break;
      case 'More Health':
        router.push(
          {
            pathname: '/services',
            query: { activeId: item?.category_id, activeIndex: 2 },
          },
          '/services'
        );
        break;
      case 'More Convenience':
        router.push(
          {
            pathname: '/services',
            query: { activeId: item?.category_id, activeIndex: 6 },
          },
          '/services'
        );
        break;
      case 'More Busy':
        router.push({
          pathname: '/mohtv',
        });
        break;
    }
  }, [item]);

  return (
    <CustomCard className="react-player">
      <CustomReactPlayer
        width="100%"
        height="100%"
        muted
        playing
        buffer={buffer}
        playsinline
        light={index == handleResponsive() ? false : get(item, 'thumbnail_image')}
        url={matches ? get(item, 'image_url_mobile') : get(item, 'image_url')}
        config={browserConfigHandler()}
        onProgress={progressHandler}
        progressInterval={50}
        onBuffer={bufferStartHandler}
        onBufferEnd={bufferEndHandler}
        onEnded={onEnded}
      />

      <CardBottom>
        <TextContainer>
          <HomePageText
            variant={'h3'}
            padding={{ xs: '0rem 0 0.5rem 0', md: '0rem 0 1rem 0' }}
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            fontSize={{ xs: '1.6rem', md: '3rem' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontWeight={{ xs: '700', md: '700' }}
            lineHeight={{ xs: '2rem', md: '4.4rem' }}
            letterSpacing={{ xs: '-0.335895px', md: '-0.335895px' }}>
            {get(item, 'text_heading')}
          </HomePageText>
          <HomePageText
            padding={{ xs: '0rem 0 2.1rem 0', md: '0rem 0 0rem 0' }}
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            fontSize={{ xs: '1.4rem', md: '2.2rem' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontWeight={{ xs: '400', md: '400' }}
            lineHeight={{ xs: '1.8rem', md: '2.7rem' }}>
            {get(item, 'text_normal')}
          </HomePageText>
        </TextContainer>
        <ButtonContainer>
          {!changesFromCorporate && (
            <HomePageButton
              onClick={routeToSpecificArea}
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              margin={{ xs: '0rem 0 2.4rem 0', md: '0rem 0 0rem 0' }}
              fontWeight={{ xs: '500', md: '500' }}
              borderRadius={{ xs: '4.2rem', md: '5rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              fontSize={{ xs: '1.2rem', md: '1.6rem' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              backgroundColor={{ xs: '#F4F4F4', md: '#F4F4F4' }}>
              Learn more
            </HomePageButton>
          )}
        </ButtonContainer>
      </CardBottom>

      <ControlContainer>
        <LinearProgress variant="determinate" value={played * 100} />
      </ControlContainer>
    </CustomCard>
  );
}

ParentsNeedCard.propTypes = {
  index: PropTypes.number,
  sliderRef: PropTypes.object,
  item: PropTypes.object,
  changesFromCorporate: PropTypes.bool,
};

export default memo(ParentsNeedCard);
