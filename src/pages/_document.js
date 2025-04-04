import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Script from 'next/script';

// Add this script that will be injected before the Google Maps script loads
const initMapScript = `
  window.initMap = function() {
    // This function will be called when Google Maps API loads
    // Maps will be initialized in components that need them
  };
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    const { nonce } = this.props;
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to critical domains for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://checkout.razorpay.com" crossOrigin="anonymous" />

          {/* Google Tag Manager */}
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N6M6CH9');
              `,
            }}
          />

          {/* Load critical scripts with proper strategies */}
          <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" nonce={nonce} />

          {/* Favicon configuration */}
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" />
          <link rel="shortcut icon" href="/static/favicon/favicon.png" />

          {/* Meta tags */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Load third-party scripts with defer when possible */}
          <script
            nonce={nonce}
            defer
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/clevertap-web-sdk/clevertap.min.js"
          />

          {/* Add initMap function BEFORE Google Maps loads */}
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: initMapScript
            }}
          />

          {/* Load Google Maps API with the callback pattern for better performance */}
          <script
            async
            defer
            nonce={nonce}
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5i2xBMc10GAeGvEjq58C5CrvVkPEZFbY&loading=async&libraries=places&callback=initMap"
          />

          {/* Emotion styles */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6M6CH9"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript nonce={nonce} />

          {/* Add this to avoid layout shifts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Prevent FOUC (Flash of Unstyled Content)
                document.documentElement.classList.add('js-loaded');
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache(ctx.req ? ctx.req.headers['x-nonce'] : '');
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      nonce={ctx.req ? ctx.req.headers['x-nonce'] : ''}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    nonce: ctx.req ? ctx.req.headers['x-nonce'] : '',
  };
};

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};

export default MyDocument;
