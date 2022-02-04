export const makeArmy = (number) => {
  if (typeof number !== 'number') {
    return 'Error: wrong type of argument';
  }
  
  const army = [];
  let counter = 0;

  while (counter < number) {
    const temp = counter;

    army.push(() => temp);
    counter++;
  }

  return army;
};

