import { solve } from "./main";
import { input } from "./input";

describe("Day 2 - Part 1", () => {
  // test("example input, one range", () => {
  //   const exampleInput = "11-22";
  //   expect(solve(exampleInput)).toEqual({
  //     total: 33,
  //     results: [11, 22],
  //   });
  // });
  test("example input, one range", () => {
    const exampleInput = "99-115";
    expect(solve(exampleInput)).toEqual({
      total: 99,
      results: [99],
    });
  });
  test("example input, two ranges", () => {
    const exampleInput = "11-22,95-115";
    const result = solve(exampleInput);
    expect(result.total).toBe(132);
  });
  test("example input, two ranges", () => {
    const exampleInput = "11-22,95-115";
    const result = solve(exampleInput);
    expect(result.total).toBe(132);
  });
  test("example input, two ranges", () => {
    const exampleInput =
      "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";
    const result = solve(exampleInput);
    expect(result.total).toBe(1227775554);
  });
  test("actual", () => {
    // const exampleInput =
    //   "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";
    const result = solve(input);
    expect(result.total).toBe(22062284697);
  });
});
