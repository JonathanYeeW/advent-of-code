import {
  formatInput,
  movePosition,
  splitDirectionAndDistance,
} from "./helpers";

/**
 0-99
 start at 50
 L => down
 R => up

 current 5, L10, result 95
 current 11, R8, result 19
 current 99, R1, result 0
 current 0, L1, result 99

 how many times does the result land on exactly 0?

 Input: L68 L30 R48 L5 R60 L55 L1 L99 R14 L82 
 Output: 3
 */

export const solve = (input: string) => {
  let current = 50;
  let counter = 0;

  const rotations = formatInput(input);
  rotations.forEach((dial) => {
    const { direction, distance } = splitDirectionAndDistance(dial);
    current = movePosition(current, distance, direction);
    if (current === 0) {
      counter++;
    }
  });
  return counter;
};
