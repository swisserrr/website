/**
 *
 * PlanCard
 *
 */

import React, { memo } from 'react';

import { Content, CustomBox, SlashText, AdditionalGST, PersonCovered } from './styles';
import map from 'lodash/map';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import split from 'lodash/split';
import size from 'lodash/size';
import toLower from 'lodash/toLower';
import { libre } from 'utils/fonts';
import Image from 'utils/CustomImage';
import isEmpty from 'lodash/isEmpty';

import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
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
  return (
    <CustomBox
      cardFrom={cardFrom}
      style={{
        margin: `${withOutCarousel && '0rem 2rem 2rem 2rem'}`,
        padding: centerScaled ? '3rem 0.5rem' : '',
        transform:
          centerScaled && isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name'))) ? 'scale(1.1)' : 'scale(1)',
      }}>
      <HomePageBox
        margin={{ xs: '0.5rem 0.8rem', md: '0rem 1.2rem 2rem 1.2rem' }}
        hover={isEqual(cardFrom, 'membership') ? null : { backgroundColor: '#CC4746', color: '#FFFFFF' }}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        borderRadius={{ xs: '2.5rem', md: '3rem' }}
        padding={{ xs: '3.5rem 2.652rem 3.5rem 2.652rem', md: '3.403rem 3.054rem 3.403rem 3.054rem' }}
        backgroundColor={
          isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
            ? { xs: '#CC4746', md: '#CC4746' }
            : { xs: '#ffffff', md: '#ffffff' }
        }
        color={
          isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
            ? { xs: '#ffffff', md: '#ffffff' }
            : { xs: '#1A1A1A', md: '#1A1A1A' }
        }
        onClick={handleClickPlan}
        activePlan={activePlan}
        cursor="pointer"
        height={{ xs: '50.4rem', md: '61rem' }}
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
            {get(item, 'plan[0].name')}
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
            fontWeight={{ xs: '700', md: '700' }}
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
            color={{ xs: 'none', md: 'none' }}
            fontWeight={{ xs: '500', md: '500' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            margin={{ xs: '0.194rem 0 0 0', md: '0.194rem 0 0 0' }}
            padding={{ xs: '0rem 0rem', md: '0rem 0rem' }}
            textTransform="none">
            {centerScaled
              ? get(item, 'plan[0].plan_prices[0].price_type')
              : changesFromCorporate
              ? get(item, 'plan[0].plan_prices[0].price_type')
              : 'for 12 months/' + planFor}
          </HomePageText>
          {get(item, 'plan[0].personCovered.covered') && (
            <PersonCovered>{`Person covered : ${get(item, 'plan[0].personCovered.value')}`}</PersonCovered>
          )}
          <HomePageBox padding={{ xs: '1.8rem 0rem 0rem 0rem', md: '2rem 0rem 0rem 0rem' }}>
            {map(get(item, 'plan[0].plan_services'), (palnServicesItem, key) => (
              <HomePageBox
                key={key}
                padding={{ xs: '0.6rem 0rem 0rem 0rem', md: '1rem 0rem 0rem 0rem' }}
                alignItems="center"
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight={{ xs: '400', md: '400' }}
                lineHeight={{ xs: '1.573rem', md: '1.815rem' }}
                display="flex">
                <div style={{ width: '15px', height: '15px', position: 'relative' }}>
                  <Image
                    src={
                      !isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
                        ? '/static/images/check_black.webp'
                        : '/static/images/check_white.webp'
                    }
                    fill
                    style={{ objectFit: 'cover' }}
                  />
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
          <HomePageText
            color={{ xs: 'none', md: 'none' }}
            fontSize={{ xs: '1.1rem', md: '1.3rem' }}
            padding={{ xs: '3.2rem 0rem 0rem 0rem', md: '3.2rem 0rem 0rem 0rem' }}>
            {get(item, 'plan[0].addition_service')}
          </HomePageText>
        </Content>
        <Content style={{ textAlign: `${withOutCarousel && 'center'}` }}>
          <HomePageButton
            textTransform={{ xs: 'none', md: 'none' }}
            onClick={() => {
              if (onExploreMore) {
                onExploreMore(fromApollo ? get(item, 'plan[0].razorPayUrl') : get(item, 'plan[0].name'));
              }

              if (fromApollo) {
                pushEvent(EVENT_NAME.BUY_NOW, {
                  price: get(item, 'plan[0].plan_prices[0].price'),
                  planName: get(item, 'plan[0].name'),
                });
              }
            }}
            hover={
              isEqual(cardFrom, 'membership') ? null : { backgroundColor: '#FFFFFF', color: '#1A1A1A', opacity: '1' }
            }
            width={{ xs: `${withOutCarousel ? '50%' : '75%'}`, md: `${withOutCarousel ? '50%' : '75%'}` }}
            borderRadius={{ xs: '3.5rem', md: '3.5rem' }}
            backgroundColor={
              isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
                ? { xs: '#FFFFFF', md: '#FFFFFF' }
                : { xs: '#CC4746', md: '#CC4746' }
            }
            color={
              isEqual(toLower(activePlan), toLower(get(item, 'plan[0].name')))
                ? { xs: '#1A1A1A', md: '#1A1A1A' }
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
      </HomePageBox>
    </CustomBox>
  );
}

PlanCard.propTypes = {
  ...PlanCard,
};

PlanCard.defaultProps = {
  setActivePlan: null,
  activePlan: null,
  onExploreMore: null,
  onPlanClick: null,
  cardFrom: null,
};

export default memo(PlanCard);
