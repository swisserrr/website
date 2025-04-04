/**
 *
 * DiseaseCard
 *
 */

import React, { useCallback } from 'react';

import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';

import { ShowsContainer, Item, CardImage, ImageContainer, TopicForCard } from './styles';
import get from 'lodash/get';
function DiseaseCard({ data }) {
  const router = useRouter();

  const matches = useMediaQuery('(max-width:600px)');
  const onClick = useCallback(
    item => {
      router.push(`/disease-care/${item?.slug_name}`);
    },
    [router]
  );
  return (
    <ShowsContainer container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}>
      {data?.map((val, index) => {
        return (
          <Grid size key={index} xs={12} sm={4} onClick={() => onClick(val)}>
            <Item elevation={0}>
              <ImageContainer>
                <CardImage
                  src={matches ? get(val, `banner_mobile`) : get(val, `banner_desktop`)}
                  alt="Show Image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
              <TopicForCard>{get(val, `title`)}</TopicForCard>
            </Item>
          </Grid>
        );
      })}
    </ShowsContainer>
  );
}

DiseaseCard.propTypes = {
  data: PropTypes.object,
};

export default DiseaseCard;
