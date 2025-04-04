/**
 *
 * HomePagePlanContainer
 *
 */

import React, { memo } from 'react';
import map from 'lodash/map';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const HomePagePlans = dynamic(() => import('components/HomePagePlans'));
function HomePagePlanContainer({
  dataSet,
  setActivePlan,
  activePlan,
  planNameVariant,
  onExploreMore,
  onPlanClick,
  buttonText,
  cardFrom,
}) {
  return (
    <Grid
      container
      justifyContent={'center'}
      rowSpacing={{ xs: 3, sm: 3, md: 4 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ display: 'flex', flexWrap: 'wrap' }}>
      {map(dataSet, (item, index) => (
        <Grid size xs={12} sm={6} md={4} lg={4} key={get(item, 'id')}>
          <HomePagePlans
            item={item}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            planNameVariant={planNameVariant}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText={buttonText}
            cardFrom={cardFrom}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
}

HomePagePlanContainer.propTypes = {
  dataSet: PropTypes.array,
  setActivePlan: PropTypes.func,
  activePlan: PropTypes.string,
  planNameVariant: PropTypes.string,
  onExploreMore: PropTypes.func,
  onPlanClick: PropTypes.func,
  buttonText: PropTypes.string,
  cardFrom: PropTypes.string,
};

HomePagePlanContainer.defaultProps = {
  setActivePlan: null,
  activePlan: null,
  planNameVariant: 'h2',
  onExploreMore: null,
  onPlanClick: null,
  buttonText: 'Learn more',
  cardFrom: null,
};

export default memo(HomePagePlanContainer);
