// Helper functions for Day 1

// # Helpers #
// format the input
// split direction and distance
// 99 transition
// 0 transition

export const formatInput = (input: string) => {
  return input.split(" ");
};

export const splitDirectionAndDistance = (instruction: string) => {
  const direction = instruction.slice(0, 1) as "L" | "R";
  const distance = Number(instruction.slice(1));
  return { direction, distance };
};

export const movePosition = (
  current: number,
  distance: number,
  direction: "L" | "R"
) => {
  let result = 0;
  if (direction === "R") {
    result = current + distance;
  } else {
    result = current - distance;
  }

  while (result > 99) {
    result = result - 100;
  }

  while (result < 0) {
    result = result + 100;
  }

  return result;
};
