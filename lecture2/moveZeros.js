export const moveZeros = (arrayOfValues) => {
  if (arrayOfValues.constructor !== Array) {
    return 'Error: wrong type of argument';
  }

  const zeros = arrayOfValues.filter(value => value === 0);
  const otherValues = arrayOfValues.filter(value => value !== 0);

  return otherValues.concat(zeros);
};