import React from 'react';
import {
  ProfileImageContainer,
  NavLinks,
  PopoverItems,
  BorderButton,
  RedDotContainerImage,
  RedDot,
  RedDotPreferenceContainer,
} from './styles';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import Image from 'utils/CustomImage';
import Popover from '@mui/material/Popover';

const LoginComponent = ({
  textColor,
  disableRem,
  user,
  access_token,
  sendEvent,
  handleClick,
  id,
  quesData,
  flattenedObj,
  router,
  handleClose,
  open,
  anchorEl,
  logout,
}) => {
  return (
    <div>
      {!isNil(user) && !isNil(access_token) && !isEmpty(access_token) ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <ProfileImageContainer disableRem={disableRem} aria-describedby={id} onClick={handleClick}>
              <Image
                src={
                  get(user, 'photoUrl')
                    ? get(user, 'photoUrl')
                    : get(user, 'profile_picture', '/static/images/preview.webp')
                }
                alt="Login screen image"
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
              {quesData &&
              isEmpty(quesData[quesData?.length - 1]?.children) &&
              quesData?.length === flattenedObj?.length ? null : (
                <RedDotContainerImage>
                  <RedDot />
                </RedDotContainerImage>
              )}
            </ProfileImageContainer>

            <Popover
              disableRem={disableRem}
              id={id}
              open={open}
              className="popover-style"
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              <PopoverItems disableRem={disableRem} onClick={() => router.push('/profile')}>
                Profile
              </PopoverItems>
              <PopoverItems disableRem={disableRem} onClick={() => router.push('/preferences')}>
                <RedDotPreferenceContainer>
                  Preference
                  {quesData &&
                  isEmpty(quesData[quesData?.length - 1]?.children) &&
                  quesData?.length === flattenedObj?.length ? null : (
                    <RedDot />
                  )}
                </RedDotPreferenceContainer>
              </PopoverItems>
              <PopoverItems disableRem={disableRem} onClick={logout}>
                Logout
              </PopoverItems>
            </Popover>
          </div>
          <div style={{ marginLeft: '1rem' }}>
            <NavLinks disableRem={disableRem} textColor={textColor} aria-describedby={id} href="" onClick={handleClick}>
              {isEmpty(user?.full_name) ? 'Guest' : user?.full_name}
            </NavLinks>
          </div>
        </div>
      ) : (
        <NavLinks disableRem={disableRem} borderColor textColor={textColor} href="/login" onClick={sendEvent}>
          <BorderButton>Log in </BorderButton>
        </NavLinks>
      )}
    </div>
  );
};

export default LoginComponent;
