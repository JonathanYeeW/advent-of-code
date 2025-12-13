/**
 * Day 2: Gift Shop - Invalid Product ID Detection
 *
 * Problem: Find and sum invalid product IDs within given ranges.
 * Invalid IDs are numbers where a digit sequence repeats exactly twice:
 *   55 (5+5), 6464 (64+64), 123123 (123+123)
 */

/**
 * Parses comma-separated range string into array.
 * @param {string} input - Format: "11-22,95-115,998-1012"
 * @returns {string[]} Array of range strings
 */
export const formatInput = (input: string) => {
  return input.split(",");
};

/**
 * Extracts start and end values from a range string.
 * @param {string} range - Format: "11-22"
 * @returns {{ start: number, end: number }}
 */
export const splitRangeIndexes = (range: string) => {
  const [start, end] = range.split("-").map((a) => Number(a));
  return { start, end };
};

/**
 * Counts the total numbers in a given range (inclusive).
 * Unused in solution but validates range iteration logic.
 *
 * @param {string} range - Format: "11-22"
 * @returns {number} Count of numbers in the range
 *
 * @example
 * loopOverRange("11-22") // returns 12 (11 through 22 inclusive)
 */
export const loopOverRange = (range: string) => {
  const { start, end } = splitRangeIndexes(range);
  let counter = 0;
  for (let i = start; i <= end; i++) {
    counter++;
  }
  return counter;
};

/**
 * Splits a string into two equal halves.
 *
 * @param {string} input - String to split
 * @returns {{ start: string, end: string }} First and second half
 *
 * @example
 * getHalfsOfString("6464") // returns { start: "64", end: "64" }
 * getHalfsOfString("1234") // returns { start: "12", end: "34" }
 */
export const getHalfsOfString = (input: string) => {
  const start = input.slice(0, input.length / 2);
  const end = input.slice(input.length / 2);
  return { start, end };
};

/**
 * Checks if a number is odd.
 *
 * @param {number} input - Number to check
 * @returns {boolean} True if odd, false if even
 */
export const isOddNumber = (input: number) => {
  return input % 2 === 1;
};

/**
 * Determines if a product ID is valid.
 *
 * Invalid IDs have even-length digits where both halves match (e.g., 6464 = "64" + "64").
 * Odd-length IDs are always valid (can't split evenly into repeated halves).
 *
 * @param {number} productId - The product ID to validate
 * @returns {boolean} True if valid, false if invalid
 *
 * @example
 * isValidProductId(55)      // false (5 + 5)
 * isValidProductId(6464)    // false (64 + 64)
 * isValidProductId(123123)  // false (123 + 123)
 * isValidProductId(101)     // true (odd length)
 * isValidProductId(1234)    // true (12 ≠ 34)
 */
export const isValidProductId = (productId: number) => {
  const stringified = String(productId);
  if (stringified.length === 1) return true;
  // when 11 or 22, valid means they don't match
  if (stringified.length === 2) {
    const { start, end } = getHalfsOfString(stringified);
    return start !== end;
  }

  const isMatching = findMatchingSubstring(String(productId));
  if (isMatching) return false;
  return true;
};

/**
 * Sums all numbers in an array.
 *
 * @param {number[]} numbers - Array of numbers to sum
 * @returns {number} Total sum
 */
export const getSumOfProductIds = (numbers: number[]) => {
  return numbers.reduce((total, current) => total + current, 0);
};

export const findMatchingSubstring = (string: string) => {
  // edge case: when string is "11", just compare first and last
  if (string.length === 2) {
    const { start, end } = getHalfsOfString(string);
    return start === end;
  }

  // edge case: when all characters are the same, return true
  if (isAllCharactersSame(string)) return true;

  // edge case: unless all characters are the same, length 3 will never match
  if (string.length === 3) return false;
  // Step 1: start a loop the length of string, starting index at 1

  const boundary = string.length / 2;

  for (let i = 2; i <= boundary; i++) {
    // Step 2: split the string into substring and test group
    const { substring, testGroup } = getSubstring(string, i);
    if (substring.length > testGroup.length) return false;
    // Step 3: if substring exists in test group, return true
    const isMatching = hasMatchingSubstring(substring, testGroup);
    if (isMatching) return true;
  }
  return false;
};

export const hasMatchingSubstring = (searchIn: string, pattern: string) => {
  const regex = new RegExp(searchIn);
  const result = regex.test(pattern);
  return result;
};

export const getSubstring = (string: string, length: number) => {
  const substring = string.slice(0, length);
  const testGroup = string.slice(length, string.length);
  return {
    substring,
    testGroup,
  };
};

export const isAllCharactersSame = (string: string) => {
  return string.split("").every((char) => char === string[0]);
};
