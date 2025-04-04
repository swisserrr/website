/**
 *
 * Loading
 *
 */

import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import useMediaQuery from '@mui/material/useMediaQuery';

import makeSelectLoading from './selectors';
import { LoadingContainer, Text } from './styles';

export function Loading({ loading }) {
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return loading ? (
    <LoadingContainer>
      <div style={{ padding: matches ? 10 : 20, backgroundColor: 'white', borderRadius: 10 }}>
        <Text style={{ fontSize: matches ? 10 : 20 }}>Please wait...</Text>
      </div>
    </LoadingContainer>
  ) : null;
}

Loading.propTypes = {
  ...Loading,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Loading);
