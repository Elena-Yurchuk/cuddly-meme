export const createAdder = (initialValue = 0) => {
  let sum = initialValue;
  
  return (...args) => {
    return sum += args.reduce((acc, value) => acc + value, 0);
  };
};

