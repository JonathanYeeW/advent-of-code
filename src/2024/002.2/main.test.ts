import { main, bruteForce } from "./main";
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
    expect(main(input)).toBe(514);
  });
});

describe("helper functions", () => {
  describe("bruteForce()", () => {
    test("returns true when all levels are valid", () => {
      expect(bruteForce([7, 6, 4, 2, 1])).toBe(true);
      expect(bruteForce([1, 3, 6, 7, 9])).toBe(true);
    });
    test("returns false when increase larger than 3", () => {
      const input: Level = [1, 2, 7, 8, 9];
      expect(bruteForce(input)).toBe(false);
    });
    test("returns false when increase larger than 3", () => {
      const input: Level = [9, 7, 6, 2, 1];
      expect(bruteForce(input)).toBe(false);
    });
    test("returns true after removing second level", () => {
      const input: Level = [1, 3, 2, 4, 5];
      expect(bruteForce(input)).toBe(true);
    });
    test("returns true after removing third level", () => {
      const input: Level = [8, 6, 4, 4, 1];
      expect(bruteForce(input)).toBe(true);
    });
    test("returns true after removing third level", () => {
      const input: Level = [8, 6, 4, 1, 4];
      expect(bruteForce(input)).toBe(true);
    });
    test("returns true after removing one", () => {
      expect(bruteForce([11, 12, 15, 18, 19, 18])).toBe(true);
      expect(bruteForce([84, 86, 88, 89, 92, 92])).toBe(true);
      expect(bruteForce([56, 59, 60, 61, 63, 66, 73])).toBe(true);
      expect(bruteForce([35, 37, 38, 39, 37, 41])).toBe(true);
      expect(bruteForce([18, 19, 21, 23, 24, 25, 29])).toBe(true);
    });
    test("returns false", () => {
      expect(bruteForce([11, 13, 15, 13, 15])).toBe(false);
      expect(bruteForce([36, 38, 36, 39, 42, 43, 40])).toBe(false);
      expect(bruteForce([21, 22, 23, 21, 21])).toBe(false);
      expect(bruteForce([56, 58, 55, 57, 58, 60, 61, 68])).toBe(false);
    });
  });
});
