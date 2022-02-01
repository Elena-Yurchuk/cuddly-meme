export const makeArmy = (number) => {
  const arrayWithNumbers = [];
  let counter = 0;

  while (counter < number) {
    const temp = counter;

    arrayWithNumbers.push(() => temp);
    counter++;
  }

  return arrayWithNumbers;
};

const shooters = makeArmy(10);

shooters[0](); 		
shooters[5]();		
shooters[9]();
