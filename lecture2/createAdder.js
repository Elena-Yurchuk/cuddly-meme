export const createAdder = (initialValue = 0) => {
  let sum = initialValue;
  
  return (...args) => {
    return sum += args.reduce((acc, value) => acc + value, 0);
  };
};

const adder1 = createAdder();

adder1();
adder1(10, 20);
adder1(30, 40);

const adder2 = createAdder(100);

adder2(10);
adder2(20, 30, 40);
adder2();
