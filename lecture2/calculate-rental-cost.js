export const calculateRentalCost = (days) => {
  let rentalCost = 0;

  if (days <= 2) {
    rentalCost = days * 40;
  } else if (days >= 3 && days < 7) {
    rentalCost = days * 40 - 20;
  } else {
    rentalCost = days * 40 - 50;
  }
	
  return rentalCost;
};