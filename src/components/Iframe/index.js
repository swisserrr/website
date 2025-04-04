/**
 *
 * Iframe
 *
 */

import React, { memo } from 'react';

import { IframeView } from './styles';

function Iframe({ page }) {
  return <IframeView url={`https://testing.emoha.com/${page}`} position="relative" />;
}

Iframe.propTypes = { ...Iframe };

export default memo(Iframe);
