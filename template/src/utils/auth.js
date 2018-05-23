import Cookies from 'js-cookie'; // @todo 替换为localStorage

const TokenKey = 'Admin-Token';

export function getToken() {
  return true;
  // return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
