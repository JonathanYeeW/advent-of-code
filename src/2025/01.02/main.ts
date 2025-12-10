import {
  parseInput,
  parseRotation,
  countZeroCrossings,
  calculateFinalPosition,
} from "./helpers";

/**
 * Day 1, Part 2: Secret Entrance Password (Method 0x434C49434B)
 * 
 * Count the total number of times the dial points at position 0,
 * including both passes during rotations and landings at the end of rotations.
 * 
 * The dial:
 * - Has positions 0-99 in a circle
 * - Starts at position 50
 * - L rotates left (toward lower numbers, wraps 0→99)
 * - R rotates right (toward higher numbers, wraps 99→0)
 */
export const solve = (input: string): number => {
  let currentPosition = 50;
  let totalZeroCrossings = 0;

  const rotations = parseInput(input);

  for (const rotation of rotations) {
    const { direction, distance } = parseRotation(rotation);
    
    // Count how many times we hit position 0 during this rotation
    const crossings = countZeroCrossings(currentPosition, distance, direction);
    totalZeroCrossings += crossings;
    
    // Update position for next rotation
    currentPosition = calculateFinalPosition(currentPosition, distance, direction);
  }

  return totalZeroCrossings;
};
