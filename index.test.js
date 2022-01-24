import {
  basicOp,
  phoneNumber,
  getOperands,
  getTime,
  swapCase,
  isPalindrome,
  countOccurrences,
  vowelCount,
  alphabetPosition,
  stringMerge,
} from "./index";

describe("basicOp", () => {
  test("should return 27 when passed 13 and 14", () => {
    const result = basicOp("+", 13, 14);
    expect(result).toBe(27);
  });
});

describe("basicOp", () => {
  test("should return -7 when passed 13 and 20", () => {
    const result = basicOp("-", 13, 20);
    expect(result).toBe(-7);
  });
});

describe("basicOp", () => {
  test("multiply 7 * 1 to equal 7", () => {
    const result = basicOp("*", 1, 7);
    expect(result).toBe(7);
  });
});

describe("basicOp", () => {
  test("should return 7 when passed 49 and 7", () => {
    const result = basicOp("/", 49, 7);
    expect(result).toBe(7);
  });
});

describe("basicOp", () => {
  test("should return 0 when passed 7, 7", () => {
    const result = basicOp(">", 7, 7);
    expect(result).toBe(0);
  });
});

describe("basicOp", () => {
  test("should return 0 when passed 104, 3", () => {
    const result = basicOp("||", 31, 8);
    expect(result).toBe(0);
  });
});

describe("stringMerge", () => {
  test("should return a word that begins of the first word and ends of the second one, with the dividing letter in the middle", () => {
    const result = stringMerge("coding", "anywhere", "n");
    expect(result).toBe("codinywhere");
  });
});

describe("phoneNumber", () => {
  test("should return (123) 456-7890 when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]", () => {
    const result = phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toBe("(123) 456-7890");
  });
});

describe("getOperands", () => {
  test('should return 2 operands in the format: "a: <first_operand>, b: <second_operand>" when passed Math expression', () => {
    const result = getOperands("1.2 * -3.4");
    expect(result).toBe("a: 1.2, b: -3.4");
  });
});

describe("getTime", () => {
  test('should return first valid time in the string or empty string if valid time is not found. Valid time has format "hh:mm"', () => {
    const result = getTime(
      "Breakfast at 09:59, Dinner at 21:00 in the room number 18:99"
    );
    expect(result).toBe("09:59");
  });
});

describe("isPalindrome", () => {
  test("text should be read the same backward as forward", () => {
    const result = isPalindrome("Hello");
    expect(result).toBe(false);
  });
});

describe("swapCase", () => {
  test("the case for each of the letter in the string should be swapped", () => {
    const result = swapCase("TodaY IS goinG to Be a GREAT day!");
    expect(result).toBe("tODAy is GOINg TO bE A great DAY!");
  });
});

describe("countOccurrences", () => {
  test("should return the number of times the letter appears in the phrase", () => {
    const result = countOccurrences("ability", "i");
    expect(result).toBe(2);
  });
});

describe("vowelCount", () => {
  test("should return the number of vowels a, e, i, o, u but not y", () => {
    const result = vowelCount("The sunset sets at twelve o' clock.");
    expect(result).toBe(9);
  });
});

describe("alphabetPosition", () => {
  test("should replace every letter with its position in the alphabet", () => {
    const result = alphabetPosition("The sunset sets at twelve o' clock.");
    expect(result).toBe(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
  });
});

// describe ('division', function () {
//     test ('should return 7 when passed 49 and 7',
//     function () {
//         const result = division(49, 7);
//         expect(result).toBe(7)
//     });
// });
