export const fearNotLetter = (letters) => {
  if (typeof letters !== 'string') {
    return 'Error: wrong type of argument';
  }

  let firstLetter = letters.charCodeAt(0) + 1;
  let missingLetter;

  for (let i = 1; i < letters.length; i++) {
    if(letters.charCodeAt(i) !== firstLetter){
      missingLetter = String.fromCharCode(firstLetter);
      firstLetter++;
    }
    firstLetter++;
  }
 
  return missingLetter;
};