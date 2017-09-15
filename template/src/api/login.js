import fetch from 'utils/fetch';
import URL from './url';

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
  };
  return fetch({
    url: URL['authLogin'],
    method: 'post',
    data,
  });
}

export function logout() {
  return fetch({
    url: URL['authLogout'],
    method: 'post',
  });
}

export function getUserInfo(token) {
  return fetch({
    url: URL['userInfo'],
    method: 'post',
    params: { token },
  });
}

