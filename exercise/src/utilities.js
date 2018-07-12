export const formatCurrencyPair = (currencyPair) => {
  return `${currencyPair.substr(0, 3).toUpperCase()}/${currencyPair.substr(3, 6).toUpperCase()}`;
}

export const get = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json()
          .then((error) => {
            return Promise.reject(error);
          });
      }
    });
}
