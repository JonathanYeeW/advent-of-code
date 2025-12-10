import {
  formatInput,
  movePosition,
  splitDirectionAndDistance,
} from "./helpers";

describe("Day 1 Helpers", () => {
  // Add helper tests here
  describe("formatInput", () => {
    test("formats the input correctly", () => {
      const example = "L68 L30 R48 L5 R60 L55 L1 L99 R14 L82";
      const expected = [
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82",
      ];
      const result = formatInput(example);
      expect(result).toEqual(expected);
    });
  });

  describe("splitDirectionAndDistance", () => {
    test("splits the direction and distance correctly", () => {
      const example = "L68";
      const expected = { direction: "L", distance: 68 };
      const result = splitDirectionAndDistance(example);
      expect(result).toEqual(expected);
    });
    test("splits the direction and distance correctly", () => {
      const example = "R3";
      const expected = { direction: "R", distance: 3 };
      const result = splitDirectionAndDistance(example);
      expect(result).toEqual(expected);
    });
    test("splits the direction and distance correctly", () => {
      const example = "R0";
      const expected = { direction: "R", distance: 0 };
      const result = splitDirectionAndDistance(example);
      expect(result).toEqual(expected);
    });
    test("splits the direction and distance correctly", () => {
      const example = "L178";
      const expected = { direction: "L", distance: 178 };
      const result = splitDirectionAndDistance(example);
      expect(result).toEqual(expected);
    });
    test("splits the direction and distance correctly", () => {
      const example = "R436";
      const expected = { direction: "R", distance: 436 };
      const result = splitDirectionAndDistance(example);
      expect(result).toEqual(expected);
    });
  });

  describe("movePosition", () => {
    test("moves up", () => {
      expect(movePosition(10, 5, "R")).toBe(15);
    });
    test("moves down", () => {
      expect(movePosition(10, 5, "L")).toBe(5);
    });
    test("moves up, and transitions", () => {
      expect(movePosition(99, 1, "R")).toBe(0);
      expect(movePosition(99, 2, "R")).toBe(1);
      expect(movePosition(99, 3, "R")).toBe(2);
      expect(movePosition(99, 100, "R")).toBe(99);
      expect(movePosition(99, 200, "R")).toBe(99);
    });
    test("moves down, and transitions", () => {
      expect(movePosition(0, 1, "L")).toBe(99);
      expect(movePosition(0, 2, "L")).toBe(98);
      expect(movePosition(0, 3, "L")).toBe(97);
      expect(movePosition(0, 99, "L")).toBe(1);
      expect(movePosition(0, 100, "L")).toBe(0);
      expect(movePosition(0, 101, "L")).toBe(99);
    });
  });
});
