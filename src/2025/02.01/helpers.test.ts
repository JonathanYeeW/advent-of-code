import {
  formatInput,
  getHalfsOfString,
  getTotal,
  isOddNumber,
  isValidProductId,
  loopOverRange,
  splitRangeIndexes,
} from "./helpers";

describe("Day 2 Helpers", () => {
  describe("formatInput", () => {
    test("splits the input string correctly, single range", () => {
      const input = "11-22";
      expect(formatInput(input)).toEqual(["11-22"]);
    });
    test("splits the input string correctly, multiple ranges", () => {
      const input = "11-22,99-115";
      expect(formatInput(input)).toEqual(["11-22", "99-115"]);
    });
  });

  describe("splitRangeIndexes", () => {
    test("splits ranges correctly", () => {
      expect(splitRangeIndexes("11-22")).toEqual({ start: 11, end: 22 });
      expect(splitRangeIndexes("1188511880-1188511890")).toEqual({
        start: 1188511880,
        end: 1188511890,
      });
      expect(splitRangeIndexes("222220-222224")).toEqual({
        start: 222220,
        end: 222224,
      });
      expect(splitRangeIndexes("1698522-1698528")).toEqual({
        start: 1698522,
        end: 1698528,
      });
      expect(splitRangeIndexes("446443-446449")).toEqual({
        start: 446443,
        end: 446449,
      });
      expect(splitRangeIndexes("38593856-38593862")).toEqual({
        start: 38593856,
        end: 38593862,
      });
    });
  });

  describe("loopOverRange", () => {
    test("doins", () => {
      expect(loopOverRange("1-1")).toEqual(1);
    });
    test("doins", () => {
      expect(loopOverRange("1-2")).toEqual(2);
    });
    test("doins", () => {
      expect(loopOverRange("11-22")).toEqual(12);
    });
  });

  describe("isOddNumber", () => {
    test("true when odd", () => {
      expect(isOddNumber(1)).toEqual(true);
      expect(isOddNumber(3)).toEqual(true);
      expect(isOddNumber(5)).toEqual(true);
    });
    test("false when true", () => {
      expect(isOddNumber(2)).toEqual(false);
      expect(isOddNumber(4)).toEqual(false);
      expect(isOddNumber(6)).toEqual(false);
    });
    test("false when 0", () => {
      expect(isOddNumber(0)).toEqual(false);
    });
  });

  describe("getHalfsOfString", () => {
    test("works on even number", () => {
      expect(getHalfsOfString("11")).toEqual({ start: "1", end: "1" });
      expect(getHalfsOfString("1212")).toEqual({ start: "12", end: "12" });
      expect(getHalfsOfString("12124343")).toEqual({
        start: "1212",
        end: "4343",
      });
    });
    test("works on odd numbers", () => {
      expect(getHalfsOfString("11")).toEqual({ start: "1", end: "1" });
      expect(getHalfsOfString("1212")).toEqual({ start: "12", end: "12" });
      expect(getHalfsOfString("12124343")).toEqual({
        start: "1212",
        end: "4343",
      });
    });
  });

  describe("getTotal", () => {
    test("empty array", () => {
      expect(getTotal([])).toEqual(0);
    });
    test("one index array", () => {
      expect(getTotal([1])).toEqual(1);
    });
    test("two index array", () => {
      expect(getTotal([1, 2])).toEqual(3);
    });
    test("multiple index array", () => {
      expect(getTotal([1, 2, 1])).toEqual(4);
    });
  });

  // describe("isValidProductId", () => {
  //   test("valid product ids", () => {
  //     expect(isValidProductId(12)).toEqual(true);
  //     expect(isValidProductId(123)).toEqual(true);
  //     expect(isValidProductId(1234)).toEqual(true);
  //     expect(isValidProductId(12432)).toEqual(true);
  //   });
  //   test("invalid product ids, even numbers", () => {
  //     expect(isValidProductId(11)).toEqual(false);
  //     expect(isValidProductId(22)).toEqual(false);
  //     expect(isValidProductId(99)).toEqual(false);
  //     expect(isValidProductId(1010)).toEqual(false);
  //     expect(isValidProductId(11851185)).toEqual(false);
  //     expect(isValidProductId(222222)).toEqual(false);
  //     expect(isValidProductId(446446)).toEqual(false);
  //     expect(isValidProductId(38593859)).toEqual(false);
  //   });
  // });
});
