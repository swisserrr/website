/**
 *
 * ShowCard
 *
 */

import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import map from 'lodash/map';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import { ShowsContainer, Item, CardImage, ImageContainer, DateForCard, TopicForCard, CardContainer } from './styles';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent } from 'utils/cleverTap';
export function ShowCardComponent({ item, onClick }) {
  return (
    <div data-aos="zoom-in">
      <Item elevation={0} onClick={() => onClick(item)}>
        <CardContainer>
          <ImageContainer>
            <CardImage
              src={`${item?.meeting_thumbnail_image ? item?.meeting_thumbnail_image : ''}`}
              alt="Show Image"
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </ImageContainer>
          <DateForCard>{dayjs(item?.zoom_occurrences_start_time).format('DD MMM YYYY')}</DateForCard>
          <TopicForCard>{item?.session_topic}</TopicForCard>
        </CardContainer>
      </Item>
    </div>
  );
}
ShowCardComponent.propTypes = {
  ...ShowCardComponent,
};

function ShowCard({ data }) {
  const router = useRouter();

  const onClick = useCallback(
    item => {
      pushEvent(EVENT_NAME.SELECT_CARD, {
        timeline: get(item, 'mohtv_sub_category_name', 'N/A'),
        host_name: get(item, 'event_host_name', 'N/A'),
        category: get(item, 'mohtv_category_name', 'N/A'),
        sub_category: get(item, 'event_name', 'N/A'),
        time: dayjs(get(item, 'zoom_occurrences_start_time', 'N/A')).format('hh:mm:ss'),
        date: dayjs(get(item, 'zoom_occurrences_start_date', 'N/A')).format('DD/MM/YYYY'),
        title: get(item, 'meeting_topic', 'N/A'),
        source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
      });
      router.push(`/showDetails/${item?.meeting_details_uuid}`);
    },
    [router]
  );
  return (
    <ShowsContainer container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
      {map(data, (item, index) => {
        return (
          <Grid size xs={12} sm={6} md={6} lg={4} key={index}>
            <ShowCardComponent item={item} onClick={onClick} />
          </Grid>
        );
      })}
    </ShowsContainer>
  );
}

ShowCard.propTypes = { ...ShowCard };

export default ShowCard;
