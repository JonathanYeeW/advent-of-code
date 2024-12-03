import { getNumberMap, main } from "./main";
import { listOne, listTwo } from "./input";

test("Returns correct sum for example input", () => {
  const listOne = [3, 4, 2, 1, 3, 3];
  const listTwo = [4, 3, 5, 3, 9, 3];
  expect(main(listOne, listTwo)).toBe(31);
});

test("Returns correct sum for provided input", () => {
  expect(main(listOne, listTwo)).toBe(23963899);
});

describe("helper methods", () => {
  test("getNumberMap", () => {
    const list = [1, 2, 3, 3, 3, 4, 4, 4, 4];
    const result = { 1: 1, 2: 1, 3: 3, 4: 4 };
    expect(getNumberMap(list)).toEqual(result);
  });
});
