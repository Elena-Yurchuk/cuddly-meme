export const reverseWords  = (string) => {
  const reversedString = [];

  if (typeof string !== 'string') {
    return 'Error: wrong type of argument';
  }

  const words = string.split(' ');

  for (let word of words) {
    word = word.split('').reverse().join('');
    reversedString.push(word);
  }

  return reversedString.join(' ');
};