import { findHighestNumber, formatInput, reduceTotal } from "./helpers";

export const solve = (input: string) => {
  // TODO: Pseudocode
  // Step 1: grab the array of banks from the input string
  const banks = formatInput(input);
  const totals: string[] = [];
  // Step 2: For each bank
  banks.forEach((bank) => {
    const found = findHighestNumber(bank);
    totals.push(found);
  });
  // - find first highest number
  // - find the second highest number after the first highest number
  // return them joined
  // Step 3: reduce total fo all banks
  return reduceTotal(totals);
};
