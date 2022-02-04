export const squareList = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 'Error: wrong type of argument';
  }

  return numbers
    .filter((number) => Number.isInteger(number) && Math.sign(number) > 0)
    .map(number => Math.pow(number, 2));
};