import { findHighestNumber, formatInput, reduceTotal } from "./helpers";

describe("Day 3 Helpers", () => {
  describe("formatInput()", () => {
    test("multiple inputs", () => {
      expect(formatInput("1,2,3,4")).toEqual(["1", "2", "3", "4"]);
    });
    test("multiple inputs", () => {
      expect(formatInput("123,245")).toEqual(["123", "245"]);
    });
  });

  describe("findHighestNumber()", () => {
    describe("two-digit strings", () => {
      test("12", () => {
        expect(findHighestNumber("12")).toEqual("12");
      });
      test("21", () => {
        expect(findHighestNumber("21")).toEqual("21");
      });
      test("22", () => {
        expect(findHighestNumber("22")).toEqual("22");
      });
    });
    describe("three-digit strings", () => {
      test("123", () => {
        expect(findHighestNumber("123")).toEqual("23");
      });
      test("321", () => {
        expect(findHighestNumber("321")).toEqual("32");
      });
      test("132", () => {
        expect(findHighestNumber("132")).toEqual("32");
      });
    });
    describe("prompt tests", () => {
      test("987654321111111", () => {
        expect(findHighestNumber("987654321111111")).toEqual("98");
      });
      test("811111111111119", () => {
        expect(findHighestNumber("811111111111119")).toEqual("89");
      });
      test("234234234234278", () => {
        expect(findHighestNumber("234234234234278")).toEqual("78");
      });
      test("818181911112111", () => {
        expect(findHighestNumber("818181911112111")).toEqual("92");
      });
    });
  });

  describe("reduceTotal()", () => {
    describe("single digit array", () => {
      test("1", () => {
        expect(reduceTotal(["1"])).toEqual(1);
      });
      test("9", () => {
        expect(reduceTotal(["9"])).toEqual(9);
      });
    });
    describe("two digit array", () => {
      test("1,1", () => {
        expect(reduceTotal(["1", "1"])).toEqual(2);
      });
      test("9,5", () => {
        expect(reduceTotal(["9", "5"])).toEqual(14);
      });
    });
    describe("complex array", () => {
      test("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0", () => {
        expect(
          reduceTotal([
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "0",
          ])
        ).toEqual(120);
      });
    });
  });
});
