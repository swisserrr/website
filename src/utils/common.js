import React from 'react';
import isEqual from 'lodash/isEqual';
import split from 'lodash/split';

export const browserConfigHandler = () => {
  let config = {
    file: {
      forceHLS: true,
      forceVideo: true,
      attributes: {
        disablePictureInPicture: true,
      },
    },
  };

  if (!isEqual(typeof navigator, 'undefined')) {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        config = {
          file: {
            forceHLS: true,
            forceVideo: true,
            attributes: {
              disablePictureInPicture: true,
            },
          },
        }; // Chrome
      } else {
        config = {
          file: {
            forceVideo: true,
            attributes: {
              disablePictureInPicture: true,
            },
          },
        }; // Safari
      }
    }
  }
  return config;
};

export const metaResolver = (pageName, isProd) => {
  if (isEqual(split(pageName, '/')[1], 'lp' || 'lp-shc')) {
    return <meta name="robots" content="noindex, nofollow" />;
  }
  if (isEqual(pageName, '/delete-profile')) {
    return <meta name="robots" content="noindex, nofollow" />;
  }
  if (!isProd) {
    return <meta name="robots" content="noindex, nofollow" />;
  }

  return <meta name="robots" content="index, follow" />;
};

export const routeDisableHeader = path => {
  let isDisabled = false;

  switch (true) {
    case path.includes('kotak'):
      isDisabled = true;
      break;
    case path.includes('federal'):
      isDisabled = true;
      break;
    case path.includes('medibuddy'):
      isDisabled = true;
      break;
    case path.includes('apollo-onboarding'):
      isDisabled = true;
      break;
    default:
      isDisabled = false;
  }

  return { isDisabled };
};
