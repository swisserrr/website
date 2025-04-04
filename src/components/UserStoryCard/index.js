/**
 *
 * UserStoryCard
 *
 */

import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { ShowsContainer, Item, CardImage, ImageContainer, TopicForCard } from './styles';

import get from 'lodash/get';

function UserStoryCard({ data }) {
  const router = useRouter();
  const onClick = useCallback(
    item => {
      router.push(`/user-stories/${item?.uuid}`);
    },
    [router]
  );
  return (
    <ShowsContainer container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}>
      {data?.map((val, index) => {
        return (
          <Grid size key={index}>
            <Item elevation={0} onClick={() => onClick(val)}>
              <ImageContainer>
                <CardImage src={get(val, `thumbnail`)} alt="Show Image" fill />
              </ImageContainer>
              <TopicForCard>{get(val, `title`)}</TopicForCard>
            </Item>
          </Grid>
        );
      })}
    </ShowsContainer>
  );
}

UserStoryCard.propTypes = {
  data: PropTypes.object,
};

export default UserStoryCard;
