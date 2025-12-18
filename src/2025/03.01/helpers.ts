// Helper functions for Day 3

export const formatInput = (input: string) => {
  return input.split(",");
};

export const findHighestNumber = (input: string) => {
  if (input.length <= 2) return input;

  let highest = input[0]; // 1
  let secondHighest = input[1]; // 3

  for (let i = 2; i < input.length; i++) {
    const current = input[i]; // 2
    if (current > secondHighest) {
      if (secondHighest > highest) {
        highest = secondHighest;
      }
      secondHighest = current;
    } else if (secondHighest > highest) {
      highest = secondHighest;
      secondHighest = current;
    }
  }

  return highest + secondHighest;
};

export const reduceTotal = (input: string[]) => {
  return input.reduce((total, current) => {
    return total + Number(current);
  }, 0);
};
