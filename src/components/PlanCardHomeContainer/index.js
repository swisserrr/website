/**
 *
 * PlanCardContainer
 *
 */

import React, { memo } from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';

// const CarouselContainer = dynamic(() => import('components/CarouselContainer'));
// const PlanCard = dynamic(() => import('components/PlanCard'));

import CarouselContainer from 'components/CarouselContainer';
import PlanCard from 'components/PlanCardHome';
function PlanCardContainer({
  dataSet,
  setActivePlan,
  activePlan,
  planNameVariant,
  onExploreMore,
  onPlanClick,
  buttonText,
  cardFrom,
  planIndex,
  sliderRef,
  changesFromCorporate,
  planFor,
  fromApollo,
  withOutCarousel,
  centerScaled,
}) {
  if (withOutCarousel) {
    return map(dataSet, (item, index) => (
      <div key={get(item, 'id')}>
        <PlanCard
          item={item}
          changesFromCorporate={changesFromCorporate}
          setActivePlan={setActivePlan}
          activePlan={activePlan}
          planNameVariant={planNameVariant}
          onExploreMore={onExploreMore}
          onPlanClick={onPlanClick}
          buttonText={buttonText}
          cardFrom={cardFrom}
          index={index}
          planFor={planFor}
          fromApollo={fromApollo}
          withOutCarousel={withOutCarousel}
        />
      </div>
    ));
  }

  return (
    <CarouselContainer
      dots={false}
      slides={changesFromCorporate ? { xs: 1, md: changesFromCorporate.length } : null}
      infinite={{ xs: true, md: true }}
      sliderRef={sliderRef}
      slidIndex={planIndex}
      centerMode={{ xs: true, md: true }}
      centerPadding={'9.5%'}>
      {map(dataSet, (item, index) => (
        <div key={get(item, 'id')}>
          <PlanCard
            item={item}
            changesFromCorporate={changesFromCorporate}
            setActivePlan={setActivePlan}
            activePlan={activePlan}
            planNameVariant={planNameVariant}
            onExploreMore={onExploreMore}
            onPlanClick={onPlanClick}
            buttonText={buttonText}
            cardFrom={cardFrom}
            index={index}
            planFor={planFor}
            fromApollo={fromApollo}
            centerScaled={centerScaled}
          />
        </div>
      ))}
    </CarouselContainer>
  );
}

PlanCardContainer.propTypes = {
  dataSet: PropTypes.array,
  setActivePlan: PropTypes.func,
  activePlan: PropTypes.string,
  planNameVariant: PropTypes.string,
  onExploreMore: PropTypes.func,
  onPlanClick: PropTypes.func,
  buttonText: PropTypes.string,
  cardFrom: PropTypes.string,
  planIndex: PropTypes.number,
  sliderRef: PropTypes.object,
  changesFromCorporate: PropTypes.array,
  planFor: PropTypes.string,
  fromApollo: PropTypes.Boolean || PropTypes.object,
};

PlanCardContainer.defaultProps = {
  setActivePlan: null,
  activePlan: null,
  planNameVariant: 'h2',
  onExploreMore: null,
  onPlanClick: null,
  buttonText: 'Learn more',
  cardFrom: null,
  planIndex: null,
  sliderRef: null,
  fromApollo: null,
};

export default memo(PlanCardContainer);
