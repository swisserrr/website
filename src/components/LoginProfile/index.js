/**
 *
 * LoginProfile
 *
 */

import React, { memo } from 'react';
import { Avatar, Container, Name } from './styles';
import PropTypes from 'prop-types';
import loginCoverImage from '../../../assets/login_cover.jpg';
function LoginProfile({ name, width }) {
  return (
    <Container width={width}>
      <Avatar src={loginCoverImage} />
      <Name>{name}</Name>
    </Container>
  );
}

LoginProfile.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
};

export default memo(LoginProfile);
