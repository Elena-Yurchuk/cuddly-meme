export const isPrime = (number) => {
  if (typeof number !== 'number') {
    return 'Error: wrong type of argument';
  }

  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return number > 1;
};