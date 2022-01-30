export const squareList = (numbers) => {
  return numbers.filter((number) => Number.isInteger(number) && number >= 0).map(number => number * number);
};