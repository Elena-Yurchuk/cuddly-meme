const requestURL = 'https://fakestoreapi.com/products';

const sendRequest = (method, url) => {
  return fetch(url).then(response => {
    return response.json();
  });
};

sendRequest('GET', requestURL)
  .then((data) => {
    const products = [];
    const prices = [];

    for (const item of data) {
      products.push(item.title);
      prices.push(item.price);
    }
    products.sort();
    prices.sort((a, b) => b - a);

    return products, prices;
  })
  .catch(err => {
    throw new Error ('Error: ', err);
  });

