const productsEndpoint = 'https://fakestoreapi.com/products';

const sortedListOfProducts = async() => {
  try {
    const listResponse = await fetch(productsEndpoint);

    const list = await listResponse.json();
    
    list.sort((a, b) => a.category.localeCompare(b.category))
      .sort((a, b) => {
        if (a.category === b.category) {
          return b.price - a.price;
        }
      });

    return list;
  } catch (err) {
    throw new Error('Error: ', err);
  }
};

sortedListOfProducts();