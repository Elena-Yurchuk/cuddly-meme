export const openOrSenior = (listOfPairs) => {
  if (listOfPairs.constructor !== Array) {
    return 'Error: wrong type of argument';
  }

  const age = 40;

  const experience = 15;

  const listOfOpenOrSenior = listOfPairs.map(
    (pair) => (pair[0] >= age && pair[1] >= experience) ? 'Senior' : 'Open');

  return listOfOpenOrSenior;
};