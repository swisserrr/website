/**
 *
 * MostBookServiceCard
 *
 */

import React, { useCallback } from 'react';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { TopicForCard, Button } from './styles';
import isAuthenticated from 'utils/isAuthenticated';
import { pushEvent } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));

function MostBookServiceCard({ item, user }) {
  const router = useRouter();

  const getImage = useCallback(() => {
    if (isEqual(get(item, 'cover_image', ''), null)) {
      return '';
    }
    return get(item, 'cover_image', '');
  }, [item]);

  const makeConcierge = useCallback(() => {
    pushEvent(EVENT_NAME.MOST_BOOKED_SERVICE, {
      Category: get(item, 'category', 'N/A'),
      Sub_Category: get(item, 'service', 'N/A'),
    });
    if (isAuthenticated()) {
      router.push(
        {
          pathname: '/select-concierge-date',
          query: {
            from: router.asPath,
            service_Id: item?.uuid,
            service_name: get(item, 'service', 'N/A'),
          },
        },
        '/services'
        // '/select-concierge-date'
      );
    } else {
      router.push(
        {
          pathname: '/login',
          query: {
            from: router.asPath,
          },
        },
        '/login'
      );
    }
  }, [item, user]);

  return (
    <HomePageBox
      margin={{ xs: '0 0.5rem', md: '0 1rem' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <HomePageImage src={getImage()} height="100%" width="100%" />
      <TopicForCard>{get(item, 'service')}</TopicForCard>
      <Button onClick={makeConcierge} variant="outlined">
        Book service
      </Button>
    </HomePageBox>
  );
}

MostBookServiceCard.propTypes = {
  item: PropTypes.object,
  setOpenThankYouModal: PropTypes.func,
  user: PropTypes.object,
};

export default MostBookServiceCard;
