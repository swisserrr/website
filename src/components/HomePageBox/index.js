/**
 *
 * HomePageBox
 *
 */

import React, { memo } from 'react';

import PropTypes from 'prop-types';
import get from 'lodash/get';
import Box from '@mui/material/Box';

function HomePageBox(props) {
  return (
    <Box
      onClick={get(props, 'onClick')}
      className={get(props, 'className')}
      sx={{
        textAlign: { xs: get(props, 'textAlign.xs'), md: get(props, 'textAlign.md') },
        marginTop: { xs: get(props, 'marginTop.xs'), md: get(props, 'marginTop.md') },
        borderBottomLeftRadius: get(props, 'borderRadiusBottomLeft'),
        borderBottomRightRadius: get(props, 'borderRadiusBottomRight'),
        position: { xs: get(props, 'position.xs') || 'relative', md: get(props, 'position.md') || 'relative' },
        top: { xs: get(props, 'top.xs'), md: get(props, 'top.md') },
        bottom: { xs: get(props, 'bottom.xs'), md: get(props, 'bottom.md') },
        padding: { xs: get(props, 'padding.xs'), sm: get(props, 'padding.sm'), md: get(props, 'padding.md') },
        backgroundColor: {
          xs: get(props, 'backgroundColor.xs') || 'transparent',
          md: get(props, 'backgroundColor.md') || 'transparent',
        },
        maxWidth: get(props, 'maxWidth'),
        overflow: get(props, 'overflow'),
        width: { xs: get(props, 'width.xs'), md: get(props, 'width.md') },
        margin: { xs: get(props, 'margin.xs'), sm: get(props, 'margin.sm'), md: get(props, 'margin.md') },
        color: { xs: get(props, 'color.xs'), md: get(props, 'color.md') },
        height: { xs: get(props, 'height.xs') || 'auto', md: get(props, 'height.md') || 'auto' },
        borderRadius: { xs: get(props, 'borderRadius.xs'), md: get(props, 'borderRadius.md') },
        zIndex: { xs: get(props, 'zIndex.xs'), md: get(props, 'zIndex.md') },
        border: { xs: get(props, 'border.xs'), md: get(props, 'border.md') },
        borderBottom: { xs: get(props, 'borderBottom.xs'), md: get(props, 'borderBottom.md') },
        '&:hover': get(props, 'hover') && {
          color: get(props, 'hover.color'),
          backgroundColor: get(props, 'hover.backgroundColor'),
        },
        boxShadow: { xs: get(props, 'boxShadow.xs'), md: get(props, 'boxShadow.md') },
        display: get(props, 'display'),
        alignItems: get(props, 'alignItems'),
        justifyContent: get(props, 'justifyContent'),
        flexDirection: get(props, 'flexDirection'),
        cursor: get(props, 'cursor'),
        left: { xs: get(props, 'left.xs'), md: get(props, 'left.md') },
        gap: { xs: get(props, 'gap.xs'), md: get(props, 'gap.md') },
      }}>
      {get(props, 'children')}
    </Box>
  );
}

HomePageBox.propTypes = {
  props: PropTypes.object,
};

export default memo(HomePageBox);
