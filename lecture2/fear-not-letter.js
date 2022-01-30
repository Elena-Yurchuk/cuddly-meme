export const fearNotLetter = (letters) => {
  let firstLetter = letters.charCodeAt(0) + 1;
  let missingLetter = '';

  for (let i = 1; i < letters.length; i++) {
    if(letters.charCodeAt(i) !== firstLetter){
      missingLetter += String.fromCharCode(firstLetter);
      firstLetter++;
    }
    firstLetter++;
  } 
    
  if (missingLetter === '') {
    missingLetter = undefined;
  }

  return missingLetter;
};