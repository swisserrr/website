/**
 *
 * PlanCard
 *
 */

import React, { memo, useCallback, useEffect, useState } from 'react';

import { Content, CustomBox, SlashText, AdditionalGST, PersonCovered } from './styles';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import split from 'lodash/split';
import size from 'lodash/size';
import toLower from 'lodash/toLower';
import { libre } from 'utils/fonts';
import Image from 'utils/CustomImage';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-scroll';
// import queryString from 'query-string';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
function PlanCard({
  item,
  setActivePlan,
  activePlan,
  planNameVariant,
  onExploreMore,
  onPlanClick,
  buttonText,
  cardFrom,
  index,
  changesFromCorporate,
  planFor,
  fromApollo,
  withOutCarousel,
  centerScaled,
}) {
  const handleClickPlan = () => {
    onPlanClick(get(item, 'plan[0].name'), index);
    setActivePlan && setActivePlan(get(item, 'plan[0].name'));
  };
  const router = useRouter();
  const shouldShowEmpower = !(
    router.pathname.startsWith('/enterprise/kotak') || router.pathname.startsWith('/enterprise/federal')
  );
  const handleExploreMore = useCallback(
    item => {
      if (router.pathname.startsWith('/enterprise/kotak') || router.pathname.startsWith('/enterprise/federal')) {
        localStorage.setItem('selectedPlan', JSON.stringify(item));
        Cookie.set('pos_node_id', get(item, 'plan.[0].pos_node_id'), { expires: 365 });
        onExploreMore();
      } else {
        const url = fromApollo ? get(item, 'plan[0].razorPayUrl') : get(item, 'plan[0].name');
        onExploreMore && onExploreMore(url);
      }
    },
    [router, onExploreMore]
  );
  return (
    <CustomBox
      cardFrom={cardFrom}
      style={{
        margin: `${withOutCarousel && '0rem 2rem 2rem 2rem'}`,
        padding: centerScaled ? '3rem 0.5rem' : '',
        transform:
          centerScaled && isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name'))) ? 'scale(1.1)' : 'scale(1)',
        zIndex: centerScaled && isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name'))) ? 2 : 1,
        position: 'relative',
        width: '100%',
      }}>
      <Link to="plan_benefits" smooth duration={200} offset={-50}>
        <HomePageBox
          margin={{ xs: '0.5rem 0rem', md: '2rem 0rem 2rem 0rem' }}
          hover={isEqual(cardFrom, 'membership') ? null : { backgroundColor: '#CC4746', color: '#FFFFFF' }}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          borderRadius={{ xs: '2.5rem', md: '3rem' }}
          padding={{ xs: '3.5rem 2.652rem 3.5rem 2.652rem', md: '3.403rem 3.054rem 3.403rem 3.054rem' }}
          backgroundColor={
            isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
              ? { xs: '#ffffff', md: '#ffffff' }
              : { xs: '#FBEEED', md: '#FBEEED' }
          }
          color={
            isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
              ? { xs: '#1A1A1A', md: '#1A1A1A' }
              : { xs: '#1A1A1A', md: '#1A1A1A' }
          }
          onClick={handleClickPlan}
          activePlan={activePlan}
          cursor="pointer"
          height={{ xs: '55.4rem', md: '72rem' }}
          boxShadow={{ xs: 4, md: 6 }}>
          <Content>
            <HomePageText
              color={{ xs: 'none', md: 'none' }}
              letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
              fontWeight={{ xs: '600', md: '600' }}
              fontSize={{ xs: '2.2rem', md: '2.8rem' }}
              variant={planNameVariant}
              textAlign={`${withOutCarousel && 'center'}`}
              lineHeight={{ xs: '2.663rem', md: '3.389rem' }}>
              {shouldShowEmpower && <span>Empower</span>}{' '}
              <span style={{ color: '#CC4746' }}>{get(item, 'plan[0].name2')}</span>
            </HomePageText>
            <HomePageText
              color={{ xs: 'none', md: 'none' }}
              letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
              fontWeight={{ xs: '400', md: '400' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              padding={{ xs: '1.5rem 0 0 0', md: '1.1rem 0 0 0' }}
              height={{ xs: '9.1rem', md: '9.1rem' }}
              overflow={{ xs: 'hidden', md: 'hidden' }}
              textTransform={{ xs: 'none', md: 'none' }}
              lineHeight={{ xs: '1.735rem', md: '2.0rem' }}>
              {get(item, 'plan[0].description')}
            </HomePageText>
            {changesFromCorporate &&
              (size(split(get(item, 'plan[0].plan_prices[0].price_cut'), ' ')) >= 2 ? (
                <span>
                  <SlashText
                    variant="span"
                    width={{ xs: 'fit-content', md: 'fit-content' }}
                    fontFamily={libre.style.fontFamily}
                    color={{ xs: 'none', md: 'none' }}
                    fontWeight={{ xs: '400', md: '400' }}
                    letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
                    fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                    padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                    lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                    <span>
                      <span style={{ fontWeight: '500' }}>&#8377;</span>{' '}
                      {split(get(item, 'plan[0].plan_prices[0].price_cut'), ' ')[0]}
                    </span>
                  </SlashText>
                  <HomePageText
                    variant="span"
                    width={{ xs: 'fit-content', md: 'fit-content' }}
                    fontFamily={libre.style.fontFamily}
                    color={{ xs: 'none', md: 'none' }}
                    fontWeight={{ xs: '400', md: '400' }}
                    letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
                    fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                    padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                    lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                    {' / '}
                  </HomePageText>
                  <SlashText
                    variant="span"
                    width={{ xs: 'fit-content', md: 'fit-content' }}
                    fontFamily={libre.style.fontFamily}
                    color={{ xs: 'none', md: 'none' }}
                    fontWeight={{ xs: '400', md: '400' }}
                    letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
                    fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                    padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                    lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                    <span>
                      &#36;
                      {split(get(item, 'plan[0].plan_prices[0].price_cut'), ' ')[1]}
                    </span>
                  </SlashText>
                </span>
              ) : isEmpty(get(item, 'plan[0].plan_prices[0].price_cut')) ? (
                <HomePageText
                  width={{ xs: 'fit-content', md: 'fit-content' }}
                  fontFamily={libre.style.fontFamily}
                  color={{ xs: 'none', md: 'none' }}
                  fontWeight={{ xs: '400', md: '400' }}
                  letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
                  fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                  height={{ xs: '1.7rem', md: '2.1rem' }}>
                  {isEmpty(get(item, 'plan[0].plan_prices[0].price_cut')) ? (
                    <>
                      <span style={{ fontWeight: '500', visibility: 'hidden' }}> </span>{' '}
                      {get(item, 'plan[0].plan_prices[0].price_cut')}
                    </>
                  ) : (
                    <>
                      <span style={{ fontWeight: '500' }}>&#8377;</span> {get(item, 'plan[0].plan_prices[0].price_cut')}
                    </>
                  )}
                </HomePageText>
              ) : (
                <SlashText
                  width={{ xs: 'fit-content', md: 'fit-content' }}
                  fontFamily={libre.style.fontFamily}
                  color={{ xs: 'none', md: 'none' }}
                  fontWeight={{ xs: '400', md: '400' }}
                  letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
                  fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                  padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
                  lineHeight={{ xs: '1.7rem', md: '2.1rem' }}>
                  {isEqual(get(item, 'plan[0].plan_prices[0].symbol'), '$') ? (
                    <span style={{ fontWeight: '500' }}>&#36;</span>
                  ) : (
                    <span style={{ fontWeight: '500' }}>&#8377;</span>
                  )}{' '}
                  {get(item, 'plan[0].plan_prices[0].price_cut')}
                </SlashText>
              ))}
            <HomePageText
              fontFamily={libre.style.fontFamily}
              color={{ xs: 'none', md: 'none' }}
              fontWeight={{ xs: '400', md: '400' }}
              letterSpacing={{ xs: '-0.01em', ms: '-0.01em' }}
              fontSize={{ xs: '2.8rem', md: '3.6rem' }}
              padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}
              lineHeight={{ xs: '3.472rem', md: '4.464rem' }}
              textTransform={{ xs: '', md: '' }}>
              {isEqual(get(item, 'plan[0].plan_prices[0].symbol'), '$') ? (
                <span style={{ fontWeight: '500' }}>&#36;</span>
              ) : (
                <span style={{ fontWeight: '500' }}>&#8377;</span>
              )}
              {get(item, 'plan[0].plan_prices[0].price') + `${centerScaled ? `/month` : ''}`}
              {get(item, 'plan[0].additional_GST') && <AdditionalGST>+ Additional GST</AdditionalGST>}
            </HomePageText>
            <HomePageText
              fontFamily={libre.style.fontFamily}
              fontWeight={{ xs: '400', md: '400' }}
              color={{ xs: '#CC4746', md: '#CC4746' }}
              fontSize={{ xs: '0.7rem', md: '1.1rem' }}
              margin={{ xs: '0.194rem 0 0 0', md: '0.194rem 0 0 0' }}
              padding={{ xs: '0rem 0rem', md: '0rem 0rem' }}
              textTransform="none">
              {centerScaled
                ? get(item, 'plan[0].plan_prices[0].price_type')
                : changesFromCorporate
                ? get(item, 'plan[0].plan_prices[0].price_type')
                : 'for 12 months/' + planFor}
            </HomePageText>
            <Content style={{ textAlign: `${withOutCarousel && 'center'}` }}>
              <HomePageButton
                textTransform={{ xs: 'none', md: 'none' }}
                onClick={() => {
                  handleExploreMore(item); // Call the handleExploreMore function
                }}
                hover={
                  isEqual(cardFrom, 'membership')
                    ? null
                    : { backgroundColor: '#FFFFFF', color: '#1A1A1A', opacity: '1' }
                }
                margin={{ xs: '2.9rem 0', md: '4.8rem 0' }}
                borderRadius={{ xs: '3.5rem', md: '3.5rem' }}
                backgroundColor={
                  isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
                    ? { xs: '#CC4746', md: '#CC4746' }
                    : { xs: '#CC4746', md: '#CC4746' }
                }
                color={
                  isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
                    ? { xs: '#fff', md: '#fff' }
                    : { xs: '#fff', md: '#fff' }
                }>
                <HomePageText
                  color={{ xs: 'none', md: 'none' }}
                  textTransform={{ xs: 'none', md: 'none' }}
                  fontWeight={'400'}
                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}
                  padding={{ xs: '0.5rem 0.8rem', md: '1rem 1.3rem' }}
                  lineHeight={{ xs: 'normal', md: 'normal' }}>
                  {buttonText}
                </HomePageText>
              </HomePageButton>
            </Content>
            {get(item, 'plan[0].personCovered.covered') && (
              <PersonCovered>{`Person covered : ${get(item, 'plan[0].personCovered.value')}`}</PersonCovered>
            )}
            <div
              style={{
                height: 2,
                backgroundColor: `${
                  !(centerScaled && isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name'))))
                    ? 'rgba(204, 71, 70, 0.25)'
                    : 'rgba(241, 240, 243, 1)'
                }`,
              }}></div>
            <HomePageText
              color={{ xs: '#CC4746', md: '#CC4746' }}
              textTransform={{ xs: 'none', md: 'none' }}
              fontWeight={{ xs: 500, md: 500 }}
              fontSize={{ xs: '0.9rem', md: '1.6rem' }}
              padding={{ xs: '0', md: '0' }}
              margin={{ xs: '1.6rem 0 0 0', md: '2.6rem 0 0 0' }}
              lineHeight={{ xs: '1.4rem', md: '2.4rem' }}>
              Key Features
            </HomePageText>
            <HomePageBox padding={{ xs: '0rem 0rem 0rem 0rem', md: '0rem 0rem 0rem 0rem' }}>
              {map(get(item, 'plan[0].plan_services'), (palnServicesItem, key) => (
                <HomePageBox
                  key={key}
                  padding={{ xs: '0.6rem 0rem 0rem 0rem', md: '1.2rem 0rem 0rem 0rem' }}
                  alignItems="center"
                  fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                  fontWeight={{ xs: '400', md: '400' }}
                  lineHeight={{ xs: '1.573rem', md: '1.815rem' }}
                  display="flex">
                  <div style={{ width: '15px', height: '15px', position: 'relative' }}>
                    <Image src={'/static/images/check_black.webp'} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <HomePageText
                    color={{ xs: 'none', md: 'none' }}
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    lineHeight={{ xs: '1.6rem', md: '1.8rem' }}
                    padding={{ xs: '0rem 0rem 0rem 0.6rem', md: '0rem 0rem 0rem 1.8rem' }}>
                    {get(palnServicesItem, 'name')}
                  </HomePageText>
                </HomePageBox>
              ))}
            </HomePageBox>
          </Content>
        </HomePageBox>
      </Link>
    </CustomBox>
  );
}

PlanCard.propTypes = {
  item: PropTypes.object,
  setActivePlan: PropTypes.func,
  activePlan: PropTypes.string,
  planNameVariant: PropTypes.string,
  onExploreMore: PropTypes.func,
  onPlanClick: PropTypes.func,
  buttonText: PropTypes.string,
  cardFrom: PropTypes.string,
  index: PropTypes.number,
  changesFromCorporate: PropTypes.array,
  planFor: PropTypes.string,
};

PlanCard.defaultProps = {
  setActivePlan: null,
  activePlan: null,
  onExploreMore: null,
  onPlanClick: null,
  cardFrom: null,
};

export default memo(PlanCard);
