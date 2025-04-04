/**
 *
 * CustomGoogleMap
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import config from '../../config';
function CustomGoogleMap({ containerStyle, zoom, latLang, infoWindowShow, setInfoWindowShow }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLE_API_KEY,
  });

  const center = {
    lat: latLang?.latitude || 28.425019515073743,
    lng: latLang?.longitude || 77.06804049612484,
  };

  const handleInfoWindowClose = () => {
    setInfoWindowShow(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
      <Marker position={center} />
      {infoWindowShow ? (
        <InfoWindow
          onClose={handleInfoWindowClose}
          position={{
            lat: parseFloat(center.lat) + 0.0018,
            lng: parseFloat(center.lng),
          }}>
          <div>
            <p>{latLang?.addressName}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  ) : (
    <></>
  );
}

CustomGoogleMap.propTypes = {
  containerStyle: PropTypes.object,
  zoom: PropTypes.number,
  latLang: PropTypes.object,
  infoWindowShow: PropTypes.bool,
  setInfoWindowShow: PropTypes.func,
};

export default CustomGoogleMap;
