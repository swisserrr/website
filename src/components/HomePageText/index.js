/**
 *
 * HomePageText
 *
 */

import React, { memo } from 'react';

import PropTypes from 'prop-types';
import get from 'lodash/get';

import Typography from '@mui/material/Typography';

function HomePageText(props) {
  return (
    <Typography
      className={get(props, 'className')}
      variant={get(props, 'variant')}
      onClick={get(props, 'onClick')}
      sx={{
        fontFamily: get(props, 'fontFamily') || 'Inter',
        display: { xs: get(props, 'display.xs'), md: get(props, 'display.md') },
        justifyContent: get(props, 'justifyContent'),
        position: get(props, 'position'),
        top: get(props, 'top'),
        left: { xs: get(props, 'left.xs'), md: get(props, 'left.md') },
        right: get(props, 'right'),
        bottom: get(props, 'bottom'),
        textAlign: get(props, 'textAlign'),
        fontWeight: { xs: get(props, 'fontWeight.xs'), md: get(props, 'fontWeight.md') },
        fontSize: { xs: get(props, 'fontSize.xs'), md: get(props, 'fontSize.md') },
        padding: { xs: get(props, 'padding.xs'), md: get(props, 'padding.md') || '1rem 0rem' },
        backgroundColor: {
          xs: get(props, 'backgroundColor.xs') || 'transparent',
          md: get(props, 'backgroundColor.md') || 'transparent',
        },
        height: {
          xs: get(props, 'height.xs'),
          md: get(props, 'height.md'),
        },
        letterSpacing: { xs: get(props, 'letterSpacing.xs'), md: get(props, 'letterSpacing.md') },
        margin: { xs: get(props, 'margin.xs'), md: get(props, 'margin.md') },
        marginTop: { xs: get(props, 'marginTop.xs'), md: get(props, 'marginTop.md') },
        marginLeft: { xs: get(props, 'marginLeft.xs'), md: get(props, 'marginLeft.md') },
        color: { xs: get(props, 'color.xs') || '#1A1A1A', md: get(props, 'color.md') || '#1A1A1A' },
        lineHeight: { xs: get(props, 'lineHeight.xs'), md: get(props, 'lineHeight.md') },
        width: { xs: get(props, 'width.xs'), md: get(props, 'width.md') },
        overflow: { xs: get(props, 'overflow.xs'), md: get(props, 'overflow.md') },
        cursor: get(props, 'cursor'),
        textTransform: get(props, 'textTransform')
          ? { xs: get(props, 'textTransform.xs'), md: get(props, 'textTransform.md') }
          : 'capitalize',
        zIndex: { xs: get(props, 'zIndex.xs'), md: get(props, 'zIndex.md') },
      }}>
      {get(props, 'children')}
    </Typography>
  );
}

HomePageText.propTypes = {
  props: PropTypes.object,
};

export default memo(HomePageText);
