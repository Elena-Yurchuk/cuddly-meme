export const reverseWords  = (string) => {
  const reversedString = [];
  const words = string.split(' ');

  for (let word of words) {
    word = word.split('').reverse().join('');
    reversedString.push(word);
  }

  return reversedString.join(' ');
};