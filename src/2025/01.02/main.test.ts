import { solve } from "./main";
import { input } from "./input";

describe("Day 1, Part 2: Secret Entrance Password", () => {
  test("example input from problem description", () => {
    const exampleInput = "L68 L30 R48 L5 R60 L55 L1 L99 R14 L82";
    expect(solve(exampleInput)).toBe(6);
  });

  test("puzzle input", () => {
    const result = solve(input);
    console.log("Puzzle answer:", result);
    expect(result).toBeGreaterThan(0);
  });

  test("simple case: land on zero once", () => {
    // Start at 50, R50 lands on 100 (position 0)
    expect(solve("R50")).toBe(1);
  });

  test("simple case: pass through zero once", () => {
    // Start at 50, R60 lands on 110 (position 10), passing through 100 (position 0)
    expect(solve("R60")).toBe(1);
  });

  test("multiple rotations landing on zero", () => {
    // R50 lands on 0, L50 lands on 50, R50 lands on 0 again
    expect(solve("R50 L50 R50")).toBe(2);
  });

  test("R1000 from start position crosses zero 10 times", () => {
    expect(solve("R1000")).toBe(10);
  });
});
