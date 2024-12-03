import { main } from "./main";
import { listOne, listTwo } from "./input";

test("Returns correct sum for example input", () => {
  const listOne = [3, 4, 2, 1, 3, 3];
  const listTwo = [4, 3, 5, 3, 9, 3];
  expect(main(listOne, listTwo)).toBe(11);
});

test("Returns correct sum for provided input", () => {
  expect(main(listOne, listTwo)).toBe(2970687);
});
