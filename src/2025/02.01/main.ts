/**
 - we need to remove the invalid product ids
 - they provide me the range of product ids to look at, i decide what's invalid
 - if the pattern matches, it's invalid
 - find all the invalid id's and then add them/return the sum
 */

import {
  formatInput,
  getSumOfProductIds,
  isValidProductId,
  splitRangeIndexes,
} from "./helpers";

export const solve = (input: string) => {
  const invalidProductIds: number[] = [];
  const ranges = formatInput(input);
  ranges.forEach((range) => {
    const { start, end } = splitRangeIndexes(range);
    for (let productId = start; productId <= end; productId++) {
      const isValid = isValidProductId(productId);
      if (!isValid) invalidProductIds.push(productId);
    }
  });
  const total = getSumOfProductIds(invalidProductIds);
  return { total, results: invalidProductIds };
};
