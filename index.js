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
   const word = str1.slice(0, str1.indexOf(letter)) + str2.slice(str2.indexOf(letter));
   return word;
}

/* TASK 3 */

export function phoneNumber(arr) {
  const [a, b, c, d, e, f, g, h, j, k] = arr;

  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${j}${k}`;
}

/* TASK 4 */

export function getOperands(expression) {
  const elements = expression.split(" ");

  return `a: ${elements[0]}, b: ${elements[2]}`;
}

/* TASK 5 */

export function getTime(string) {
  const matches = string.match(/\b((0|1)\d|2[0-3]):[0-5]\d\b/g) ?? [];
  return matches[0] ?? "";
}

/* TASK 6 */

export function isPalindrome(text) {
  let string = text.toLowerCase().match(/\w/g).join("");
  const palindrome = string.split("").reverse().join("");

  return string === palindrome ? true : false;
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
	const expression = phrase.toLowerCase();
  let counter = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == letter) {
      counter++;
    }
  }
  return counter;
}

/* TASK 9 */

export function vowelCount(string) {
  const str = string.match(/[aeiou]/gi) ?? [];
  return str.length;
}

/* TASK 10 */

export function alphabetPosition(string) {
	let result = "";
  for (let i = 0; i < string.length; i++) {
    const code = string.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) {
			result += (code - 64) + " ";
		}
  }
  return result.slice(0, result.length - 1);
}
