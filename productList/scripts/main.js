import { } from 'dotenv/config';

export const sortedListOfProducts = async() => {
  try {
    const listResponse = await fetch(process.env.PRODUCTS_ENDPOINT);

    const list = await listResponse.json();
    
    return list.sort((a, b) => a.category.localeCompare(b.category) || b.price - a.price);
  } catch (err) {
    throw new Error('Error: ', err);
  }
};

(async() => {
  await sortedListOfProducts();
});
