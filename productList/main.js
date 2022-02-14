const listOfProducts = document.getElementById('products');
const listOfPrices = document.getElementById('prices');

const requestURL = 'https://fakestoreapi.com/products';

fetch(requestURL)
  .then((res) => res.json())
  .then((data) =>
    data.map(({ title, price }) => {
      return {
        title,
        price,
      };
    }),
  )
  .then((data) => {
    displayProductList(data);
    displayPricesList(data);
  })
  .catch((err) => {
    throw new Error('Error: ', err);
  });

const listOfProductsTitle = document.createElement('h1');

listOfProductsTitle.style.color = 'blue';

listOfProductsTitle.innerHTML = 'List of Products';
listOfProducts.prepend(listOfProductsTitle);

const displayProductList = (data) => {
  const products = data.map((item) => item.title);

  products.sort().forEach((product) => {
    const li = document.createElement('li');

    li.innerHTML = `${product}`;
    listOfProducts.appendChild(li);
  });
};

const sortedListOfPrices = document.createElement('h1');

sortedListOfPrices.style.color = 'blue';

sortedListOfPrices.innerHTML = 'List of Prices';
listOfPrices.prepend(sortedListOfPrices);

const displayPricesList = (data) => {
  const prices = data.map((item) => item.price);

  prices
    .sort((a, b) => a - b)
    .forEach((price) => {
      const li = document.createElement('li');

      li.innerHTML = `${price}`;
      listOfPrices.appendChild(li);
    });
};
