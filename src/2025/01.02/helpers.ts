/**
 * Parse the input string into an array of rotation instructions
 */
export const parseInput = (input: string): string[] => {
  return input.trim().split(" ");
};

/**
 * Parse a single rotation instruction into direction and distance
 */
export const parseRotation = (
  instruction: string
): { direction: "L" | "R"; distance: number } => {
  const direction = instruction[0] as "L" | "R";
  const distance = parseInt(instruction.slice(1), 10);
  return { direction, distance };
};

/**
 * True modulo operation (always returns positive result)
 * JavaScript's % operator is remainder, not modulo
 */
export const mod = (a: number, n: number): number => {
  return ((a % n) + n) % n;
};

/**
 * Calculate the final position after a rotation
 */
export const calculateFinalPosition = (
  current: number,
  distance: number,
  direction: "L" | "R"
): number => {
  const rawPosition = direction === "R" ? current + distance : current - distance;
  return mod(rawPosition, 100);
};

/**
 * Count how many times the dial points at position 0 during a rotation
 * 
 * Logic:
 * 1. Full rotations (distance >= 100) always pass 0
 * 2. Partial rotation passes 0 if we "wrapped around":
 *    - Right: next position < current position (wrapped from 99 to 0)
 *    - Left: next position > current position (wrapped from 0 to 99)
 *    - Or landed exactly on 0
 * 3. Special case: if starting at 0, only full rotations count
 */
export const countZeroCrossings = (
  current: number,
  distance: number,
  direction: "L" | "R"
): number => {
  let count = 0;
  
  // Full rotations always pass 0
  const fullRotations = Math.floor(distance / 100);
  count += fullRotations;
  
  // Partial rotation check (only if not starting at 0)
  if (current !== 0) {
    const next = calculateFinalPosition(current, distance, direction);
    
    const landedOnZero = next === 0;
    const wrappedRight = direction === "R" && next < current;
    const wrappedLeft = direction === "L" && next > current;
    
    if (landedOnZero || wrappedRight || wrappedLeft) {
      count++;
    }
  }
  
  return count;
};
