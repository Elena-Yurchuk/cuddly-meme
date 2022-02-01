export const createPrevArgSaver = () => {
  let lastValue;
  const result = (...args) => {
    const temp = lastValue;

    lastValue = args[0];

    return temp;
  };

  return result;
};

const argSaver = createPrevArgSaver();

argSaver(123);
argSaver(456);
argSaver(100, 200, 300);
argSaver();
argSaver(741);
