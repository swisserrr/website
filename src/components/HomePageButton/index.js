/**
 *
 * HomePageButton
 *
 */

import React, { memo } from 'react';

import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import get from 'lodash/get';
function HomePageButton(props) {
  return (
    <Button
      className={get(props, 'className')}
      variant={get(props, 'variant') || 'contained'}
      onClick={get(props, 'onClick')}
      sx={{
        display: { xs: get(props, 'display.xs'), md: get(props, 'display.md') },
        fontFamily: 'Inter',
        zIndex: get(props, 'zIndex', 1),
        fontWeight: { xs: get(props, 'fontWeight.xs'), md: get(props, 'fontWeight.md') },
        fontSize: { xs: get(props, 'fontSize.xs'), md: get(props, 'fontSize.md') },
        textTransform: { xs: get(props, 'textTransform.xs'), md: get(props, 'textTransform.md') },
        padding: { xs: get(props, 'padding.xs'), md: get(props, 'padding.md') },
        backgroundColor: {
          xs: get(props, 'backgroundColor.xs') || '#cc4746',
          md: get(props, 'backgroundColor.md') || '#cc4746',
        },
        alignSelf: { xs: get(props, 'alignSelf.xs'), md: get(props, 'alignSelf.md') },
        letterSpacing: { xs: get(props, 'letterSpacing.xs'), md: get(props, 'letterSpacing.md') },
        minWidth: { xs: get(props, 'minWidth.xs'), md: get(props, 'minWidth.md') },
        width: { xs: get(props, 'width.xs'), md: get(props, 'width.md'), sm: get(props, 'width.sm') },
        margin: { xs: get(props, 'margin.xs'), md: get(props, 'margin.md') },
        color: { xs: get(props, 'color.xs') || '#FFFFFF', md: get(props, 'color.md') || '#FFFFFF' },
        height: { xs: get(props, 'height.xs') || 'auto', md: get(props, 'height.md') || 'auto' },
        borderRadius: { xs: get(props, 'borderRadius.xs'), md: get(props, 'borderRadius.md') },
        lineHeight: { xs: get(props, 'lineHeight.xs'), md: get(props, 'lineHeight.md') },
        position: { xs: get(props, 'position.xs'), md: get(props, 'position.md') },
        top: { xs: get(props, 'top.xs'), md: get(props, 'top.md') },
        left: { xs: get(props, 'left.xs'), md: get(props, 'left.md') },

        marginLeft: { xs: get(props, 'marginLeft.xs'), md: get(props, 'marginLeft.md') },
        bottom: { xs: get(props, 'bottom.xs'), md: get(props, 'bottom.md') },
        borderColor: { xs: get(props, 'borderColor.xs'), md: get(props, 'borderColor.md') },
        border: { xs: get(props, 'border.xs'), md: get(props, 'border.md') },
        boxShadow: get(props, 'boxShadow'),
        '&:hover': {
          color: get(props, 'hover.color'),
          opacity: get(props, 'hover.opacity') || 0.5,
          backgroundColor: get(props, 'hover.backgroundColor') || get(props, 'backgroundColor.xs'),
        },
      }}>
      {get(props, 'children')}
    </Button>
  );
}

HomePageButton.propTypes = {
  props: PropTypes.object,
};

export default memo(HomePageButton);
