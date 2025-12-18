import { solve } from "./main";
import { input } from "./input";

describe("Day 3 - Part 1", () => {
  test("987654321111111", () => {
    expect(solve("987654321111111")).toBe(98);
  });
  test("811111111111119", () => {
    expect(solve("811111111111119")).toBe(89);
  });
  test("234234234234278", () => {
    expect(solve("234234234234278")).toBe(78);
  });
  test("818181911112111", () => {
    expect(solve("818181911112111")).toBe(92);
  });
  test("Prompt Input Example", () => {
    expect(
      solve("987654321111111,811111111111119,234234234234278,818181911112111")
    ).toBe(357);
  });

  test("puzzle input", () => {
    expect(solve(input)).toBe(17092);
  });
});
