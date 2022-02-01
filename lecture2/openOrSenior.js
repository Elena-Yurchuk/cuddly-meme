export const openOrSenior = (listOfPairs) => {
  const listOfOpenOrSenior = listOfPairs.map(
    (pair) => (pair[0] >= 40 && pair[1] >= 15) ? 'Senior' : 'Open');

  return listOfOpenOrSenior;
};