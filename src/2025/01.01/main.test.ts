import { solve } from "./main";
import { input } from "./input";

describe("Day 1 - Part 1", () => {
  test("example input", () => {
    const exampleInput = "L68 L30 R48 L5 R60 L55 L1 L99 R14 L82";
    expect(solve(exampleInput)).toBe(3);
  });

  test("puzzle input", () => {
    expect(solve(input)).toBe(997);
  });
});
