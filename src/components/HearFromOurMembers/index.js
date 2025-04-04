/**
 *
 * HearFromOurMembers
 *
 */
import React, { memo, useState } from 'react';
import Box from '@mui/material/Box';
import get from 'lodash/get';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { CustomReactPlayer, ImageContainer, PlayContainer } from './styles';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
import Image from 'utils/CustomImage';
import dynamic from 'next/dynamic';
import replace from 'lodash/replace';
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));

function HearFromOurMembers({ data, isFromBP }) {
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '100%', md: '80%' },
    height: { xs: '80%', md: '80%' },
    boxShadow: 24,
    p: 4,
  };

  const handleModelPop = () => {
    pushEvent(EVENT_NAME.VIDEO_WATCHED, {
      video_name: get(data, 'member_name'),
      block_name: 'Hear from our members',
    });
    setOpen(!open);
  };

  return (
    <>
      <HomePageBox
        padding={{ sm: isFromBP && '0 3rem 0 2rem', md: isFromBP && '0 3rem 0 2rem' }}
        backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
        onClick={handleModelPop}
        overflow={{ xs: 'hidden' }}
        borderRadius={{ xs: '2rem', md: '2rem' }}
        height={{ xs: isFromBP ? '30rem' : 'auto', md: isFromBP ? '55rem' : 'auto' }}
        margin={{ md: '0rem 1rem', xs: '0rem 0.75rem', sm: '0rem 0.75rem' }}>
        <ImageContainer style={{ height: isFromBP && '100%' }}>
          <Image src={get(data, 'youtube_thumbnail_url')} fill style={{ objectFit: 'cover', borderRadius: '2rem' }} />
          <PlayContainer>
            <Image src="/static/images/play_circle.webp" fill />
          </PlayContainer>
        </ImageContainer>
        <HomePageBox
          padding={{ xs: '22px 15px 25px 15px', md: '1.5rem 15px 30px 15px' }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column">
          <HomePageText
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            fontSize={{ xs: '2.0rem', md: '2.2rem' }}
            fontWeight={{ xs: '600', md: '600' }}
            padding={{ xs: '5px 0 10px 0', md: '0 2px 0 0' }}>
            {get(data, 'member_name')}
          </HomePageText>
          <HomePageText
            fontSize={{ xs: '1.7rem', md: '1.7rem' }}
            className="truncate"
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            fontWeight={{ xs: '400', md: '500' }}
            padding={{ xs: '0 0 0 0', md: '10px 0 0 0' }}>
            {replace(get(data, 'testimony'), 'MOH TV', 'Moh TV')}
          </HomePageText>
        </HomePageBox>
      </HomePageBox>

      {open && (
        <Modal open={open} onClose={handleModelPop}>
          <Box sx={style}>
            <HomePageBox height={{ xs: '100%', md: '100%' }}>
              <CustomReactPlayer playing={open} controls url={get(data, 'youtube_video_url')} volume={1} />
            </HomePageBox>
          </Box>
        </Modal>
      )}
    </>
  );
}

HearFromOurMembers.propTypes = {
  data: PropTypes.object,
  isFromBP: PropTypes.bool,
};

export default memo(HearFromOurMembers);
