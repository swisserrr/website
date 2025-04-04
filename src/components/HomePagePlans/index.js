/**
 *
 * HomePagePlans
 *
 */

import React from 'react';

import { Content, CustomBox, CardImage } from './styles';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import dynamic from 'next/dynamic';

const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));

function HomePagePlans({
  item,
  setActivePlan,
  activePlan,
  planNameVariant,
  onExploreMore,
  onPlanClick,
  buttonText,
  cardFrom,
  index,
}) {
  const handleClickPlan = () => {
    onPlanClick(get(item, 'category'), index);
    setActivePlan && setActivePlan(get(item, 'category'));
  };

  return (
    <CustomBox cardFrom={cardFrom}>
      <HomePageBox
        className="home-page-plan"
        margin={{ xs: '0rem 1rem', md: '0rem 1.2rem' }}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        borderRadius={{ xs: '2rem', md: '2rem' }}
        padding={{ xs: '2.354rem 2rem 2.354rem 1.6rem', md: '4rem 4.8rem 4rem 4.6rem' }}
        onClick={handleClickPlan}
        activePlan={activePlan}
        cursor="pointer"
        height={{ xs: '50.4rem', md: '61rem' }}>
        <CardImage
          className="planImage"
          // src={get(item, 'plan[0].plan_website_image_url')}
          src={
            index === 0
              ? '/static/images/first.png'
              : index === 1
              ? '/static/images/second.png'
              : index === 2
              ? '/static/images/third.png'
              : ''
          }
          alt={`${get(item, 'plan[0].name')} image`}
          fill
          style={{ objectFit: 'cover' }}
        />
        <Content>
          <HomePageButton
            textTransform={{ xs: 'none', md: 'none' }}
            borderRadius={{ xs: '3.5rem', md: '3.5rem' }}
            backgroundColor={{ xs: 'rgba(0,0,0,0)', md: 'rgba(0,0,0,0)' }}
            border={{ xs: '1px solid #ffffff !important', md: '1px solid #ffffff !important' }}
            hover={{ backgroundColor: 'rgba(0,0,0,0)', color: '#FFFFFF', opacity: '1' }}
            padding={{ xs: '0.938rem 2rem', md: '1.125rem 2.25rem' }}
            margin={{ xs: '1rem 0rem 0rem 0rem', md: '1.5rem 0rem 0rem 0rem' }}
            variant="outlined">
            <HomePageText
              fontWeight={'500'}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              letterSpacing={{ xs: '-0.04em', md: '-0.04' }}
              lineHeight={{ xs: '1.6rem', md: '1.8rem' }}
              padding={{ xs: '0rem 0rem', md: '0rem 0rem' }}
              textTransform="none"
              color={{ xs: '#ffffff', md: '#ffffff' }}>
              {capitalize(get(item, 'plan[0].plan_website_text', 'N/A'))}
            </HomePageText>
          </HomePageButton>
        </Content>

        <Content>
          <HomePageText
            color={{ xs: '#ffffff', md: '#ffffff' }}
            textAlign={{ xs: 'center', md: 'center' }}
            letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
            fontWeight={{ xs: '600', md: '600' }}
            fontSize={{ xs: '2.8rem', md: '3.5rem' }}
            variant={planNameVariant}
            position="relative"
            textTransform="none"
            margin={{ xs: '0 0 2.428rem 0', md: '0 0 2.853rem 0' }}
            lineHeight={{ xs: '2.7rem', md: '3.2rem' }}>
            {startCase(toLower(get(item, 'category')))}
          </HomePageText>
          <HomePageButton
            textTransform={{ xs: 'none', md: 'none' }}
            onClick={() => onExploreMore && onExploreMore(get(item, 'category'))}
            hover={{ backgroundColor: '#FFFFFF', color: '#1A1A1A', opacity: '1' }}
            borderRadius={{ xs: '3.5rem', md: '3.5rem' }}
            backgroundColor={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            padding={{ xs: '0.938rem 2rem', md: '1.125rem 2.25rem' }}
            margin={{ xs: '0 0 2.938rem 0', md: '0 0 3.5rem 0' }}
            color={{ xs: '#1A1A1A', md: '#1A1A1A' }}>
            <HomePageText
              fontWeight={'500'}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              padding={{ xs: '0rem 0rem', md: '0rem 0rem' }}
              letterSpacing={{ xs: '-0.04em', md: '-0.04' }}
              textTransform="none"
              lineHeight={{ xs: '1.6rem', md: '1.8rem' }}>
              {capitalize(buttonText)}
            </HomePageText>
          </HomePageButton>
        </Content>
      </HomePageBox>
    </CustomBox>
  );
}

HomePagePlans.propTypes = {
  item: PropTypes.object,
  setActivePlan: PropTypes.func,
  activePlan: PropTypes.string,
  planNameVariant: PropTypes.string,
  onExploreMore: PropTypes.func,
  onPlanClick: PropTypes.func,
  buttonText: PropTypes.string,
  cardFrom: PropTypes.string,
  index: PropTypes.number,
};

HomePagePlans.defaultProps = {
  setActivePlan: null,
  activePlan: null,
  onExploreMore: null,
  onPlanClick: null,
  cardFrom: null,
};

export default HomePagePlans;
