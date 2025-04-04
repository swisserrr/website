/**
 *
 * PlansBenifitCard
 *
 */
import React, { useEffect, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Image from 'utils/CustomImage';
import PropTypes from 'prop-types';
import startsWith from 'lodash/startsWith';
import size from 'lodash/size';

import {
  ShowsContainer,
  Item,
  CardImage,
  ImageContainer,
  Description,
  Topic,
  ReadMoreButton,
  DownArrowImageContainer,
} from './styles';

import map from 'lodash/map';
function PlansBenefitCard({ data, changesFromCorporate }) {
  const matches = useMediaQuery('(max-width:600px)');

  const [showViewMore, setShowViewMore] = useState(false);
  const [planServices, setPlanServices] = useState(null);

  const ViewMoreIcon = () => (
    <DownArrowImageContainer style={{ width: '12px', height: '10px', position: 'relative', alignContent: 'center' }}>
      <Image src={'/static/images/down_arrow.png'} fill style={{ objectFit: 'cover', marginTop: '2px' }} />
    </DownArrowImageContainer>
  );

  useEffect(() => {
    if (size(data) > 15) {
      setShowViewMore(true);
    }
  }, [data]);

  useEffect(() => {
    if (showViewMore) {
      setPlanServices(data.slice(0, 15));
    } else {
      setPlanServices(data);
    }
  }, [showViewMore]);

  return (
    <>
      <ShowsContainer changesFromCorporate={changesFromCorporate} container spacing={{ xs: 1, sm: 1, md: 3, lg: 3 }}>
        {map(matches ? data : planServices, (item, index) => {
          return (
            <Grid size xs={12} sm={6} md={6} lg={4} key={index}>
              <Item changesFromCorporate={changesFromCorporate} elevation={0}>
                <ImageContainer>
                  <CardImage
                    src={`${
                      (matches ?? item?.icon_url) || (!matches ?? item?.image_url)
                        ? startsWith(matches ? item?.icon_url : item?.image_url, 'aws_gallery')
                          ? `https://d2ts1vii79fe9b.cloudfront.net/${matches ? item?.icon_url : item?.image_url}`
                          : matches
                            ? item?.icon_url
                            : item?.image_url
                        : ''
                    }`}
                    alt="Show Image"
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                </ImageContainer>
                <Topic>{item?.name}</Topic>
                <Description>{item?.description}</Description>
              </Item>
            </Grid>
          );
        })}
      </ShowsContainer>
      {!changesFromCorporate && showViewMore && !matches && (
        <ReadMoreButton
          disableRipple
          disableTouchRipple
          disableFocusRipple
          variant="none"
          onClick={() => setShowViewMore(false)}
          endIcon={<ViewMoreIcon />}>
          View more
        </ReadMoreButton>
      )}
    </>
  );
}

PlansBenefitCard.propTypes = { data: PropTypes.array, changesFromCorporate: PropTypes.bool };

export default PlansBenefitCard;
