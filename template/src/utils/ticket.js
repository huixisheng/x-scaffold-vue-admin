const STORE_TICKET = 'mhome_admin_ticket';

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// source.cancel('Operation canceled by the user.');

export function setStoreTicket(authorization) {
  const token = getStoreTicket();
  if (authorization !== token && authorization) {
    // @todo-ykq 储存慢的情况处理
    localStorage.setItem(STORE_TICKET, authorization);
  }
}

// setStoreMhomeTicket(CONFIG.authorization);

export function getStoreTicket() {
  return localStorage.getItem(STORE_TICKET);
}

export function removeStoreTickte() {
  localStorage.removeItem(STORE_TICKET);
}
