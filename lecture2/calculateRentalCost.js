export const calculateRentalCost = (days) => {
  let rentalCost = 0;
  const rentalCostOfOneDay = 40;
  const discountOnThirdRentalDay = 20;
  const discountOnSeventhRentalDay = 50;

  if (typeof days !== 'number') {
    return 'Error: wrong type of argument';
  }

  if (days <= 2) {
    rentalCost = days * rentalCostOfOneDay;
  } else if (days >= 3 && days < 7) {
    rentalCost = days * rentalCostOfOneDay - discountOnThirdRentalDay;
  } else {
    rentalCost = days * rentalCostOfOneDay - discountOnSeventhRentalDay;
  }
	
  return rentalCost;
};