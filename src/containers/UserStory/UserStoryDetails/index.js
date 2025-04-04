/* eslint-disable no-constant-condition */
/**
 *
 * UserStoryDetails
 *
 */

import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

import get from 'lodash/get';
import map from 'lodash/map';

import { createStructuredSelector } from 'reselect';
import {
  CustomContainer,
  TopImage,
  VideoContainer,
  CenterViewContainer,
  PlayButton,
  ButtonContainer,
  VideoPlayerContainer,
  // ParagraphText,
  TopHeading,
  ContentHeading,
  QuoteText,
  ImageContainer,
  TopImageContainer,
  HomePageButtonContainer,
} from './styles';
import makeSelectUserStoryDetails from './selectors';
import makeSelectUserStoriesListing from '../UserStoriesListing/selectors';
import { browserConfigHandler } from 'utils/common';
import isEmpty from 'lodash/isEmpty';
import ReactHtmlParser from 'react-html-parser';
import { pushEvent } from '../../../utils/cleverTap';
import { EVENT_NAME } from '../../../constants/constants';
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));
const ContactFormModal = dynamic(() => import('components/ContactFormModal'));
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const Footer = dynamic(() => import('components/Footer'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export function UserStoryDetails({ userStoriesListing }) {
  const { userStoryDetail } = userStoriesListing;
  const [playingIndex, setPlayingIndex] = useState(null);
  const [openContactFromModal, setOpenContactFromModal] = useState(false);
  const [openThankYouModal, setOpenThankYouModal] = useState(false);

  const playerRef = useRef(null);

  const play = useCallback(id => {
    setPlayingIndex(id);
  }, []);
  const connectWithUs = () => {
    pushEvent(EVENT_NAME.CONNECT_US, {
      plan_name: 'N/A',
    });
    setOpenContactFromModal(true);
  };
  const closeContactFormModal = useCallback(() => {
    setOpenContactFromModal(false);
  }, []);
  const closeThankYouModal = useCallback(() => {
    setOpenThankYouModal(false);
  }, []);

  const renderMiddleSectionMedia = useCallback(
    item => {
      if (get(item, 'media_type') === 'video') {
        return (
          <VideoContainer>
            <VideoPlayerContainer isPlaying={playingIndex === get(item, 'id')}>
              <ReactPlayer
                ref={playerRef}
                url={get(item, 'media')}
                width="100%"
                height="100%"
                playing={playingIndex === get(item, 'id')}
                controls
                playsinline
                volume={1}
                config={browserConfigHandler()}
              />
            </VideoPlayerContainer>
            {!(playingIndex === get(item, 'id')) && (
              <CenterViewContainer>
                <ButtonContainer>
                  <PlayButton
                    priority
                    src={'/static/images/play.webp'}
                    height={44}
                    width={44}
                    alt="view_all"
                    onClick={() => play(get(item, 'id'))}
                  />
                </ButtonContainer>
              </CenterViewContainer>
            )}
          </VideoContainer>
        );
      }
      return (
        <ImageContainer>
          <TopImage src={get(item, `media`)} alt="Show Image" fill />
        </ImageContainer>
      );
    },
    [playingIndex]
  );
  return (
    <>
      <HeaderBar backgroundColor="#000000" />
      <CustomContainer maxWidth="lg">
        <HomePageBox padding={{ xs: '13.5rem 0 0.5rem 0', md: '12.359rem 0 0.5rem 0' }}>
          {!isEmpty(get(userStoryDetail, 'top_section')) && (
            <div>
              <TopHeading>{get(userStoryDetail, 'top_section.title')}</TopHeading>
              <div className="userDetailParagraph">{ReactHtmlParser(get(userStoryDetail, 'top_section.subtitle'))}</div>
              <TopImageContainer>
                <TopImage src={get(userStoryDetail, `top_section.banner_image`)} alt="Show Image" fill />
                <HomePageButtonContainer>
                  <HomePageButton
                    hover={{ opacity: '1' }}
                    boxShadow="none"
                    onClick={connectWithUs}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                    lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                    padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
                    borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                    fontWeight={{ xs: 500, md: 500 }}
                    bottom={{ xs: '0rem', md: '0rem' }}>
                    Connect with us
                  </HomePageButton>
                </HomePageButtonContainer>
              </TopImageContainer>
              <div className="userDetailParagraph">
                {ReactHtmlParser(get(userStoryDetail, 'top_section.paragraph'))}
              </div>
              {/* <ParagraphText>{get(userStoryDetail, 'top_section.paragraph')}</ParagraphText> */}
              <QuoteText>&quot;{get(userStoryDetail, 'top_section.quote')}&quot;</QuoteText>
            </div>
          )}
          {!isEmpty(get(userStoryDetail, 'middle_section')) &&
            map(get(userStoryDetail, 'middle_section'), item => (
              <div key={get(item, 'uuid')}>
                <ContentHeading>{get(item, 'title')}</ContentHeading>
                {renderMiddleSectionMedia(item)}
                <div className="userDetailParagraph">{ReactHtmlParser(get(item, 'paragraph'))}</div>
                {/* <ParagraphText>{get(item, 'paragraph')}</ParagraphText> */}
              </div>
            ))}
          {!isEmpty(get(userStoryDetail, 'bottom_section')) && (
            <div>
              <ContentHeading>{get(userStoryDetail, 'bottom_section.sub_header')}</ContentHeading>
              <div className="userDetailParagraph">
                {ReactHtmlParser(get(userStoryDetail, 'bottom_section.paragraph'))}
              </div>
              {/* <ParagraphText>{get(userStoryDetail, 'bottom_section.paragraph')}</ParagraphText> */}
            </div>
          )}
        </HomePageBox>
      </CustomContainer>
      <Footer />
      {openThankYouModal && <ThankYouModal closeModal={closeThankYouModal} openModal={openThankYouModal} />}
      {openContactFromModal && (
        <ContactFormModal
          closeModal={closeContactFormModal}
          openModal={openContactFromModal}
          setOpenModal={setOpenThankYouModal}
          showsFrom="Connect with us"
        />
      )}
    </>
  );
}

UserStoryDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userStoriesListing: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userStoryDetails: makeSelectUserStoryDetails(),
  userStoriesListing: makeSelectUserStoriesListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserStoryDetails);
