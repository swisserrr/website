/* eslint-disable max-len */
/**
 *
 * ShowDetails
 *
 */

import React, { memo, useCallback, useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import size from 'lodash/size';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';
import Image from 'utils/CustomImage';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import {
  Container,
  VideoContainer,
  Banner,
  CenterViewContainer,
  PlayButton,
  ButtonContainer,
  VideoPlayerContainer,
  // ChipView,
  HostImageTextContainer,
  HostImageContainer,
  HostDescriptionContainer,
  HostImage,
  HeadingContainer,
  Heading,
  ViewAllContainer,
  ViewAllText,
  CategoryText,
  CategoryTextNormal,
  CategoryItemContainer,
  CategoryTile,
  DateText,
  HeadingMain,
  Description,
  DescriptionText,
  PastShowsContainer,
  ConductedBy,
} from './styles';
import { useInView } from 'react-intersection-observer';
import makeSelectShowDetails, { makeSelectMeetingDetails } from './selectors';
import isAuthenticated from 'utils/isAuthenticated';
import { browserConfigHandler } from 'utils/common';

const Button = dynamic(() => import('components/CustomButton'));
const ShowCard = dynamic(() => import('components/ShowCard'), { ssr: false });
const Footer = dynamic(() => import('components/Footer'));
const HeaderBar = dynamic(() => import('components/HeaderBar'));

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
export function ShowDetails({ meetingDetails }) {
  const [isPlaying, setPlaying] = useState(false);
  const router = useRouter();
  dayjs.extend(advancedFormat);
  const videoURL = get(meetingDetails, 'meetings.[0].video', meetingDetails?.videoUrl ?? '');

  const { ref: onScrollSectionRef, inView: scrollSectionInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  const formatDate = useCallback(() => {
    const dateStr = get(meetingDetails, 'meetings.[0].date');

    if (!isNil(dateStr) && !isEmpty(dateStr) && dayjs(dateStr).isValid()) {
      return dayjs(dateStr).format('Do MMM YYYY');
    }
    return 'N/A';
  }, [meetingDetails]);

  const makeHamburger = useCallback(() => {
    const subCategory = !isNil(get(meetingDetails, 'meetings.[0].mohtvSubCategoryName'))
      ? get(meetingDetails, 'meetings.[0].mohtvSubCategoryName')
      : 'N/A';

    const title = get(meetingDetails, 'meetings.[0].title', 'N/A');

    return [subCategory, title];
  }, [meetingDetails]);

  const play = useCallback(() => {
    if (isAuthenticated()) {
      const eventPayload = {
        date: new Date(get(meetingDetails, 'meetings.[0].date')),
        zoomJoinURL: get(meetingDetails, 'meetings.[0].zoomJoinURL', 'N/A'),
        meeting_details_uuid: get(meetingDetails, 'meetings.[0].meeting_details_uuid', 'N/A'),
        zoom_user_uuid: get(meetingDetails, 'meetings.[0].zoom_user_uuid', 'N/A'),
        session_topic: get(meetingDetails, 'meetings.[0].title', 'N/A'),
        language: get(meetingDetails, 'meetings.[0].meeting_langauge', 'N/A'),
        video: get(meetingDetails, 'videoUrl', 'N/A'),
        isRecordingAvailable: get(meetingDetails, 'meetings.[0].isRecordingAvailable', false),
        host_uuid: get(meetingDetails, 'meetings.[0].host_uuid', 'N/A'),
        startTime: new Date(get(meetingDetails, 'meetings.[0].date')),
        endTime: new Date(get(meetingDetails, 'meetings.[0].endTime')),
        id: get(meetingDetails, 'meetings.[0].show_id'),
      };
      if (get(meetingDetails, 'meetings.[0].isRecordingAvailable', false)) {
        pushEvent(EVENT_NAME.WATCH_RECORDING, {
          ...eventPayload,
          ...utmDataHandler(router.query),
        });
      } else {
        pushEvent(EVENT_NAME.WATCH_TRAILER, {
          ...eventPayload,
          ...utmDataHandler(router.query),
        });
      }
      setPlaying(true);
    } else {
      router.push(
        {
          pathname: '/login',
          query: {
            from: router.asPath,
          },
        },
        '/login'
      );
    }
  }, [router]);

  const viewAllClickHandler = useCallback(() => {
    router.push({
      pathname: `/mohtv/[subCategories]`,
      query: {
        subCategories: get(meetingDetails, 'pastShows.mohtv_sub_category_name'),
        category_uuid: get(meetingDetails, 'pastShows.mohtv_category_uuid'),
        subCategory_uuid: get(meetingDetails, 'pastShows.mohtv_sub_category_uuid'),
      },
    });
  }, [get(meetingDetails, 'pastShows')]);

  return (
    <>
      <HeaderBar position="relative" backgroundColor="rgba(0,0,0,0.65)" />
      <Head>
        <title>MohTV - Your Ultimate Destination for Entertaining and Informative Videos for Seniors</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Mohtv offers a vast collection of videos ranging from entertainment, news, education, lifestyle, and more. Explore our platform and discover your favorite videos today."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MohTV - Your Ultimate Destination for Entertaining and Informative Videos for Seniors"
        />
        <meta
          property="og:description"
          content="Mohtv offers a vast collection of videos ranging from entertainment, news, education, lifestyle, and more. Explore our platform and discover your favorite videos today."
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
        <MuiContainer sx={{ paddingBottom: { xs: '30px' } }}>
          <CategoryItemContainer>
            <CategoryText>
              {makeHamburger()[0]}
              {' > '}
              <CategoryTextNormal>{makeHamburger()[1]}</CategoryTextNormal>
            </CategoryText>
          </CategoryItemContainer>
          <VideoContainer>
            <VideoPlayerContainer isPlaying={isPlaying}>
              <ReactPlayer
                url={videoURL}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls
                playsinline
                volume={1}
                config={browserConfigHandler()}
              />
            </VideoPlayerContainer>

            {!isPlaying && (
              <CenterViewContainer>
                <Banner
                  src={
                    !isNil(get(meetingDetails, 'meetings.[0].image'))
                      ? get(meetingDetails, 'meetings.[0].image', '')
                      : ''
                  }
                  fill
                />
                <ButtonContainer>
                  <PlayButton
                    priority
                    src={'/static/images/play.webp'}
                    height={44}
                    width={44}
                    alt="view_all"
                    onClick={play}
                  />
                </ButtonContainer>
              </CenterViewContainer>
            )}
          </VideoContainer>
          <div style={{ padding: 'max(10px,min(5vw,100px)) 0' }}>
            <Grid container spacing={0}>
              <Grid width={'100%'} size md={4} sm={12}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    flexWrap: 'wrap',
                    padding: '10px 0',
                  }}>
                  <CategoryTile>
                    {!isNil(get(meetingDetails, 'meetings.[0].mohtvCategoryName'))
                      ? get(meetingDetails, 'meetings.[0].mohtvCategoryName')
                      : 'N/A'}
                  </CategoryTile>
                  <CategoryTile>
                    {!isNil(get(meetingDetails, 'meetings.[0].mohtvSubCategoryName'))
                      ? get(meetingDetails, 'meetings.[0].mohtvSubCategoryName')
                      : 'N/A'}
                  </CategoryTile>
                </div>
              </Grid>
              <Grid size md={8} sm={12}>
                <DateText>{formatDate()}</DateText>
                <HeadingMain>{get(meetingDetails, 'meetings.[0].title', 'N/A')}</HeadingMain>
                <Description>DESCRIPTION</Description>
                <DescriptionText>{get(meetingDetails, 'meetings.[0].description', 'N/A')}</DescriptionText>
                <hr />
                <HostImageTextContainer>
                  <HostImageContainer>
                    <HostImage
                      src={
                        !isNil(get(meetingDetails, 'meetings.[0].conductedBy.profilePicture'))
                          ? get(meetingDetails, 'meetings.[0].conductedBy.profilePicture')
                          : ''
                      }
                      alt="host_image"
                      width={117.32}
                      height={117.32}
                    />
                  </HostImageContainer>
                  <HostDescriptionContainer>
                    <ConductedBy>COUNDUCTED BY</ConductedBy>
                    <DescriptionText>
                      {get(meetingDetails, 'meetings.[0].conductedBy.description', 'N/A')}
                    </DescriptionText>
                  </HostDescriptionContainer>
                </HostImageTextContainer>
              </Grid>
            </Grid>
          </div>
          <div ref={onScrollSectionRef}>
            {!isEqual(size(get(meetingDetails, 'pastShows.data', [])), 0) && scrollSectionInView && (
              <PastShowsContainer>
                <HeadingContainer>
                  <Grid size lg={10} md={10} sm={10} xs={9}>
                    <Heading>You may also like</Heading>
                  </Grid>
                  <Grid size lg={2} md={2} sm={2} xs={3}>
                    <ViewAllContainer>
                      <Button
                        padding={'0.8rem 0.1rem'}
                        disableRipple={true}
                        onClick={viewAllClickHandler}
                        variant="none"
                        endIcon={
                          <Image
                            priority
                            src={'/static/images/arrow_forward.webp'}
                            height={15}
                            width={15}
                            alt="View All"
                          />
                        }>
                        <ViewAllText>View All</ViewAllText>
                      </Button>
                    </ViewAllContainer>
                  </Grid>
                </HeadingContainer>
                <ShowCard data={get(meetingDetails, 'pastShows.data', [])} />
              </PastShowsContainer>
            )}
          </div>
        </MuiContainer>
      </Container>
      <Footer />
    </>
  );
}

ShowDetails.propTypes = {
  ...ShowDetails,
};

const mapStateToProps = createStructuredSelector({
  showDetails: makeSelectShowDetails(),
  meetingDetails: makeSelectMeetingDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ShowDetails);
