/**
 - we need to remove the invalid product ids
 - they provide me the range of product ids to look at, i decide what's invalid
 - if the pattern matches, it's invalid
 - find all the invalid id's and then add them/return the sum
 */

import {
  formatInput,
  getTotal,
  isValidProductId,
  splitRangeIndexes,
} from "./helpers";

export const solve = (input: string) => {
  // Step 1: take the input and format it into an array of ranges
  const results: number[] = [];
  const ranges = formatInput(input);
  // Step 2: Loop over all the ranges
  ranges.forEach((range) => {
    // for each position in the range, if it's invalid add it to the results array
    const { start, end } = splitRangeIndexes(range);
    for (let productId = start; productId <= end; productId++) {
      const isValid = isValidProductId(productId);
      if (isValid) {
        results.push(productId);
      } else {
        continue;
      }
    }
  });
  // Step 3: sum all of the results and return
  const total = getTotal(results);
  return { total, results };
};
