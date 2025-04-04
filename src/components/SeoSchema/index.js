/* eslint-disable max-len */
/**
 *
 * SeoSchema
 *
 */

import React from 'react';
import Script from 'next/script';
// import PropTypes from 'prop-types';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Emoha',
  description: '',
  url: 'https://emoha.com/',
  logo: '',
  brand: 'Emoha',
  numberOfEmployees: '200+',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '216, Ocus Quantum Plaza, Sector 51',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122203',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '1800-203-5135',
      contactType: '',
      contactOption: 'TollFree',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1888-866-0486',
      contactType: '',
      contactOption: 'TollFree',
    },
  ],
};

const faqSchema = {
  '@context': 'http://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Emoha Eldercare provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Emoha Eldercare provides a range of services including in-home care, medical assistance, companionship, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Emoha Eldercare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You can contact Emoha Eldercare by calling India Toll-Free: 1800-203-5135, International Toll-Free: +1888-866-0486 or visiting our website at https://emoha.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your caregivers trained?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our caregivers undergo comprehensive training to ensure they provide high-quality care to seniors.',
      },
    },
  ],
};
const reviewSchema = {
  '@context': 'http://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Product',
    name: 'Emoha Eldercare Services',
  },
  author: {
    '@type': 'Person',
    name: 'Kanika Singh',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.6',
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody: 'Emoha service is highly recommended. The staff is really caring and have prompt support.',
  publisher: {
    '@type': 'Organization',
    name: 'Emoha Eldercare',
  },
  datePublished: '2023-08-18',
};
function SeoSchema() {
  return (
    <>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

SeoSchema.propTypes = {};

export default SeoSchema;
