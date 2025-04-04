import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import isNil from 'lodash/isNil';
import isEqual from 'lodash/isEqual';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import wrapper from 'utils/configure-store';
import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';
import '../../i18n';
import '../utils/styles.css';
import '../utils/input-css.css';
import '../utils/card.css';
import 'react-intl-tel-input/dist/main.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Head from 'next/head';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from 'utils/globalStyles';
import { inter } from 'utils/fonts';
import { axiosInstance } from 'utils/request';
import { initializeClevertap } from 'utils/cleverTap';
import SeoSchema from '../components/SeoSchema/';
import ScrollToTop from 'utils/scrollToTop';
import GlobalConfig from '../utils/globalVariables';
import SessionTimeout from '../utils/sessionTimeout';
import { metaResolver } from 'utils/common';
import LoadingContainer from 'containers/Loading';
import Script from 'next/script';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Suppress webpack HMR 404 errors in console during development
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      args.length > 0 &&
      typeof args[0] === 'string' &&
      (args[0].includes('ChunkLoadError') || args[0].includes('webpack'))
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

function Srr({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  const { nonce } = pageProps;
  const path = useRouter().asPath;
  // smoothscroll.polyfill();
  SessionTimeout();

  if (!isNil(Cookie.get('access_token'))) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${Cookie.get('access_token')}`;
  }

  if (isEqual(GlobalConfig.isClevertapInitialised, false)) {
    initializeClevertap();
  }

  // useEffect(() => {
  //   const isWindows = navigator.userAgent.includes('Windows');

  //   if (isWindows) {
  //     document.body.style.zoom = '90%';
  //   }
  // }, []);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {metaResolver(path, true)}
          <SeoSchema />
          <Script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
       var n=d.querySelector('[nonce]'); n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N6M6CH9');`,
            }}
          />
        </Head>
        <main className={inter.className}>
          <EmotionThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastContainer />
              <GlobalStyles styles={globalStyles} />
              <Provider store={store}>
                <PersistGate loading={null} persistor={store.__persistStore}>
                  {() => (
                    <>
                      <Component {...pageProps} />
                      <ScrollToTop />
                      <LoadingContainer />
                    </>
                  )}
                </PersistGate>
              </Provider>
            </ThemeProvider>
          </EmotionThemeProvider>
        </main>
      </CacheProvider>
    </>
  );
}

Srr.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default Srr;
