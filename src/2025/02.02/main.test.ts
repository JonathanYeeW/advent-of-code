import { solve } from "./main";
import { input } from "./input";

describe("Day 2 - Part 1", () => {
  test("example input, one range", () => {
    const exampleInput = "11-22";
    expect(solve(exampleInput)).toEqual({
      total: 33,
      results: [11, 22],
    });
  });
  test("example input, one range", () => {
    const exampleInput = "99-115";
    expect(solve(exampleInput)).toEqual({
      total: 210,
      results: [99, 111],
    });
  });
  test("example input, one range", () => {
    const exampleInput = "998-1012";
    expect(solve(exampleInput)).toEqual({
      total: 2009,
      results: [999, 1010],
    });
  });
  test("example input, one range", () => {
    const exampleInput = "222220-222224";
    expect(solve(exampleInput)).toEqual({
      total: 222222,
      results: [222222],
    });
  });
  test("example input, one range", () => {
    expect(solve("1698522-1698528")).toEqual({
      total: 0,
      results: [],
    });
  });
  test("example input, one range", () => {
    expect(solve("446443-446449")).toEqual({
      total: 446446,
      results: [446446],
    });
  });
  test("example input, one range", () => {
    expect(solve("38593856-38593862")).toEqual({
      total: 38593859,
      results: [38593859],
    });
  });
  test("example input, one range", () => {
    expect(solve("565653-565659")).toEqual({
      total: 565656,
      results: [565656],
    });
  });
  test("example input, one range", () => {
    expect(solve("824824821-824824827")).toEqual({
      total: 824824824,
      results: [824824824],
    });
  });
  test("example input, one range", () => {
    expect(solve("2121212118-2121212124")).toEqual({
      total: 2121212121,
      results: [2121212121],
    });
  });
});
