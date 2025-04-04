/**
 *
 * ServicesCard
 *
 */

import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import Image from 'utils/CustomImage';

import { Container, ImageContainer, ServicesName, ServicesNameH2 } from './styles';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';

function ServicesCard({ item, setActiveService, activeService, fullData, isPlansPage }) {
  const checkSelected = useCallback(() => {
    if (isEqual(item?.id, activeService?.id)) {
      return true;
    }
    return false;
  }, [item, activeService]);

  const cardClickHandler = useCallback(() => {
    const result = findIndex(fullData, ele => ele.id === item.id);
    setActiveService({ activeItem: item, index: result });
    pushEvent(EVENT_NAME.CLICK_VAS, {
      Category: get(item, 'category', 'N/A'),
    });
  }, [item]);

  const getImageUrlForInactive = () => {
    return item?.website_icon ? item?.website_icon : '';
  };

  const getImageUrlForActive = () => {
    return item?.website_hover_icon ? item?.website_hover_icon : '';
  };

  const getImageUrl = () => {
    if (checkSelected()) {
      return getImageUrlForActive();
    }
    return getImageUrlForInactive();
  };

  return (
    <Container onClick={cardClickHandler} selected={checkSelected()} style={{ sx: { marginLeft: { xs: '1.313rem' } } }}>
      <ImageContainer>
        <Image src={getImageUrl()} fill alt="Show Image" style={{ objectFit: 'fill' }} />
      </ImageContainer>
      {!isPlansPage ? (
        <ServicesName selected={checkSelected()}>{get(item, 'category', 'N/A')}</ServicesName>
      ) : (
        <ServicesNameH2 selected={checkSelected()}>{get(item, 'category', 'N/A')}</ServicesNameH2>
      )}
    </Container>
  );
}

ServicesCard.propTypes = {
  item: PropTypes.object,
  activeService: PropTypes.object,
  setActiveService: PropTypes.func,
  fullData: PropTypes.object,
  isPlansPage: PropTypes.bool,
};

export default memo(ServicesCard);
