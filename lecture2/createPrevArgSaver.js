export const createPrevArgSaver = () => {
  let lastValue;
  const result = (arg) => {
    const temp = lastValue;

    lastValue = arg;

    return temp;
  };

  return result;
};
