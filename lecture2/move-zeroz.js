export const moveZeros = (arrayOfValues) => {
  const zeros = arrayOfValues.filter(value => value === 0);
  const otherValues = arrayOfValues.filter(value => value !== 0);

  return otherValues.concat(zeros);
};