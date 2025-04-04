/**
 *
 * BlogsCard
 *
 */

import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { ShowsContainer, Item, CardImage, ImageContainer, DateForCard, TopicForCard, CardContainer } from './styles';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent } from 'utils/cleverTap';
export function BlogCard({ data, disableRem, category, disableHover }) {
  const router = useRouter();
  dayjs.extend(advancedFormat);
  const onClick = useCallback(() => {
    pushEvent(EVENT_NAME.SELECT_CARD, {
      category: category,
      time: dayjs(get(data, 'date', 'N/A')).format('hh:mm:ss'),
      date: dayjs(get(data, 'date', 'N/A')).format('DD/MM/YYYY'),
      title: get(data, 'title.rendered', 'N/A'),
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
  }, [router]);

  return (
    <div data-aos="zoom-in">
      <CardContainer disableHover={disableHover} onClick={onClick}>
        <Item disableRem={disableRem} elevation={0} href={`/blogs/${category}/${get(data, 'slug')}`}>
          <ImageContainer>
            <CardImage
              disableRem={disableRem}
              src={get(data, `source_url`)}
              alt={get(data, `altTag`)}
              fill
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </ImageContainer>
          <DateForCard disableRem={disableRem}>{dayjs(get(data, `date`)).format('Do MMM YYYY')}</DateForCard>
          <TopicForCard
            className="truncate"
            disableRem={disableRem}
            dangerouslySetInnerHTML={{ __html: get(data, `title.rendered`) }}
          />
        </Item>
      </CardContainer>
    </div>
  );
}
BlogCard.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string,
  disableRem: PropTypes.bool,
  disableHover: PropTypes.bool,
};

function BlogsShowCard({ data, disableRem, category }) {
  return (
    <ShowsContainer container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
      {data.map((val, index) => {
        return (
          <Grid size xs={12} sm={6} md={6} lg={4} key={index}>
            <BlogCard data={val} category={category} disableRem={disableRem} />
          </Grid>
        );
      })}
    </ShowsContainer>
  );
}

BlogsShowCard.propTypes = {
  data: PropTypes.object,
  category: PropTypes.string,
  disableRem: PropTypes.bool,
};

export default BlogsShowCard;
