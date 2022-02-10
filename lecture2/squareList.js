export const squareList = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 'Error: wrong type of argument';
  }
  
  return numbers.reduce((total, number) => {
    if (Number.isInteger(number) && Math.sign(number) > 0) {
      return [...total, Math.pow(number, 2)];
    }

    return [...total];
    
  }, []);


  // return numbers
  //   .filter((number) => Number.isInteger(number) && Math.sign(number) > 0)
  //   .map(number => Math.pow(number, 2));
};