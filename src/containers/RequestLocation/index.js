/**
 *
 * RequestLocation
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';
import makeSelectRequestLocation from './selectors';
import HomePageButton from 'components/HomePageButton';
import { RequestLocationWrapper, HeadingPara, CustomPata } from './styles';
import { sendLocationAction } from './actions';
import Snackbar from '@mui/material/Snackbar';

export function RequestLocation({ sendLocation }) {
  const router = useRouter();
  const [alert, updateAlert] = useState(false);

  const getLocation = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          const mergedData = {
            ...router?.query, // Spread `router.query` properties
            latitude, // Add `latitude` property
            longitude, // Add `longitude` property
          };

          let newOb = {
            emergency_request_id: mergedData?.emergencyRequestId,
            latest_longitude: mergedData?.longitude,
            latest_latitude: mergedData?.latitude,
            latest_shared_by_user_type: mergedData?.userType,
            latest_shared_by_user_id: mergedData?.sharerId,
            consumer_id: mergedData?.consumerId,
          };
          sendLocation(newOb, updateAlert);
          // setLocation({ latitude, longitude });
        },
        error => {
          console.error('Error getting location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Snackbar
        open={alert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={() => updateAlert(false)}
        message="Location data received successfully"
        ContentProps={{
          style: {
            fontSize: '1.5rem',
            background: 'grey',
            color: 'white',
            // Adjust this value as needed
          },
        }}
        // key={'top' + 'left'}
      />
      <div style={{ padding: '20px', fontFamily: 'Inter' }}>
        <RequestLocationWrapper>
          <HeadingPara>Your Location Made Easy for Quick Help.</HeadingPara>
          <CustomPata>Share Your Coordinates with a Single Click</CustomPata>
          <HomePageButton
            hover={{ opacity: '1' }}
            boxShadow="none"
            width={{ xs: '200px', md: '300px' }}
            onClick={() => getLocation()}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontSize={{ xs: '1.5rem ', md: '2rem' }}
            lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
            padding={{ xs: '1.9rem 1.7rem', md: '1.8rem 3.6rem' }}
            borderRadius={{ xs: '1rem', md: '2rem' }}
            fontWeight={{ xs: 500, md: 500 }}
            margin={{ xs: '30px 0px' }}
            backgroundColor={{ xs: '#000', md: '#000' }}
            color={{ xs: '#fff', md: '#fff' }}>
            Share your location
          </HomePageButton>
        </RequestLocationWrapper>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  requestLocation: makeSelectRequestLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendLocation: (payload, callback) => dispatch(sendLocationAction(payload, callback)),
  };
}

RequestLocation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(RequestLocation);
