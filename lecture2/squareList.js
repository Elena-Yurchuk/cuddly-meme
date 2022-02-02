export const squareList = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 'Error: wrong type of argument';
  }

  return numbers
    .filter((number) => Number.isInteger(number) && number >= 0)
    .map(number => number * number);
};