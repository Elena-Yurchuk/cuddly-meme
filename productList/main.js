const productsEndpoint = 'https://fakestoreapi.com/products';

const sortedListOfProducts = async () => {
  try {
    const listResponse = await fetch(productsEndpoint);

    const list = await listResponse.json();
    
    list.sort((a, b) => (a.category > b.category) ? 1 : (a.category === b.category) ? ((a.price < b.price) ? 1 : -1) : -1);
  } catch (err) {
    throw new Error('Error: ', err);
  }
};

sortedListOfProducts();