const productsEndpoint = 'https://fakestoreapi.com/products';

export const sortedListOfProducts = async() => {
  try {
    const listResponse = await fetch(productsEndpoint);

    const list = await listResponse.json();
    
    return list.sort((a, b) => a.category.localeCompare(b.category) || b.price - a.price);
  } catch (err) {
    throw new Error('Error: ', err);
  }
};

(async() => {
  await sortedListOfProducts();
});
