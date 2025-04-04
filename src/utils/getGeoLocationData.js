/* eslint-disable no-undef */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position.coords);
        },
        error => {
          reject(error.message);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

export const getAddressFromLatLng = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    var geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({ location: latLng }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          resolve(results[0]);
        } else {
          reject('No results found');
        }
      } else {
        reject('Geocoder failed due to: ' + status);
      }
    });
  });
};
