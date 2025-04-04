import Cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

function isAuthenticated() {
  if (!isEmpty(Cookie.get('access_token')) && !isNil(Cookie.get('access_token'))) {
    return true;
  }
  return false;
}

export default isAuthenticated;
