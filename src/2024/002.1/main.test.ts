import { main, isLevelValid } from "./main";
import { Level, Report } from "./types";
import { input } from "./input";

describe("main()", () => {
  test("Returns correct sum for example input", () => {
    const reports: Report = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];
    expect(main(reports)).toBe(2);
  });
  test("Returns correct sum for provided input", () => {
    expect(main(input)).toBe(463);
  });
});

describe("helper functions", () => {
  describe("isLevelValid()", () => {
    test("returns true when all levels decreasing", () => {
      const input: Level = [5, 4, 3, 2, 1];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns true when all levels increasing", () => {
      const input: Level = [1, 2, 3, 4, 5];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns false when no levels increase", () => {
      const input: Level = [1, 1];
      expect(isLevelValid(input)).toBe(false);
    });
    test("returns false when directions change", () => {
      const input: Level = [1, 2, 1];
      expect(isLevelValid(input)).toBe(false);
    });
    test("returns true levels change by 1, increasing", () => {
      const input: Level = [1, 2];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns true levels change by 2, increasing", () => {
      const input: Level = [1, 3];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns true levels change by 3, increasing", () => {
      const input: Level = [1, 4];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns false levels change by 4, increasing", () => {
      const input: Level = [1, 5];
      expect(isLevelValid(input)).toBe(false);
    });
    test("returns true levels change by 1, decreasing", () => {
      const input: Level = [2, 1];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns true levels change by 2, decreasing", () => {
      const input: Level = [3, 1];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns true levels change by 3, decreasing", () => {
      const input: Level = [4, 1];
      expect(isLevelValid(input)).toBe(true);
    });
    test("returns false levels change by 4, decreasing", () => {
      const input: Level = [5, 1];
      expect(isLevelValid(input)).toBe(false);
    });
  });
});
