/**
 *
 * MeetYourEmohaDaughters
 *
 */
import React, { memo, useState } from 'react';
import { CustomReactPlayer } from './styles';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));
function MeetYourEmohaDaughters({ src }) {
  const [seeText, setseeText] = useState(true);

  const handleClickPreview = () => {
    pushEvent(EVENT_NAME.VIDEO_WATCHED, {
      video_name: 'https://www.youtube.com/watch?v=8nEtKyE4HZk&t=2s',
      block_name: 'Emoha Daughters',
    });
    setseeText(!seeText);
  };

  return (
    <HomePageBox position={{ xs: 'relative', md: 'relative' }} height={{ xs: '26.0rem', md: '63.7rem' }}>
      <HomePageText
        position="absolute"
        bottom={{ xs: '40px', md: '100px' }}
        variant={'h3'}
        display="flex"
        justifyContent="center"
        width={{ xs: '100%', md: '100%' }}
        fontSize={{ xs: '1.7rem', md: '3.6rem' }}
        color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
        fontWeight={{ xs: '500', md: '500' }}>
        {seeText && ' Meet Your Emoha Daughters'}
      </HomePageText>

      <CustomReactPlayer
        playing={!seeText}
        onClickPreview={handleClickPreview}
        light={src}
        controls
        volume={1}
        url="https://www.youtube.com/watch?v=8nEtKyE4HZk&t=2s"
      />
    </HomePageBox>
  );
}

MeetYourEmohaDaughters.propTypes = {
  src: PropTypes.string,
};

export default memo(MeetYourEmohaDaughters);
