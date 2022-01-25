/* TASK 1 */

export let basicOp = (operand, a, b) => {
  switch (operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};


/* TASK 2 */

export function stringMerge (str1, str2, letter) {
   let word = str1.slice(0, str1.indexOf(letter)) + str2.slice(str2.indexOf(letter));
   return word;
}

/* TASK 3 */

export function phoneNumber(arr) {
  const [a, b, c, d, e, f, g, h, j, k] = arr;

  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${j}${k}`;
}

/* TASK 4 */

export function getOperands(expression) {
  let el = expression.split(" ");

  return `a: ${+el[0]}, b: ${+el[2]}`;
}

/* TASK 5 */

export function getTime(string) {
  let matches = string.match(/\b((0|1)\d|2[0-3]):[0-5]\d\b/g) ?? [];
  return matches.slice(0, 1).join("");
}

/* TASK 6 */

export function isPalindrome(text) {
  text = text.toLowerCase().match(/\w/g).join("");
  let palindrome = text.split("").reverse().join("");

  return text === palindrome ? true : false;
}

/* TASK 7 */

export function swapCase(letters) {
  let str = letters.split("").map((item) => {
    if (item == item.toUpperCase()) {
      return (item = item.toLowerCase());
    } else {
      return (item = item.toUpperCase());
    }
  });
  return str.join("");
}

/* TASK 8 */

export function countOccurrences(phrase, letter) {
  let counter = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === letter) {
      counter++;
    }
  }
  return counter;
}

/* TASK 9 */

export function vowelCount(string) {
  let str = string.match(/[aeiou]/g);

  return str.length;
}

/* TASK 10 */

export function alphabetPosition(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let letters = string.toLowerCase().match(/[a-z]/g);
  const numbers = [];

  for (let i = 0; i < letters.length; i++) {
    letters[i] = alphabet.indexOf(letters[i]) + 1;
    numbers.push(letters[i]);
  }

  return numbers.join(" ");
}
