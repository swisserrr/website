/**
 *
 * TabsComponent
 *
 */

import React, { memo } from 'react';

// import PropTypes from 'prop-types';
// import {} from './styles';

import { useTranslation } from 'react-i18next';

function TabsComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('tabsComponent.title')}</h3>
    </div>
  );
}

TabsComponent.propTypes = {};

export default memo(TabsComponent);
