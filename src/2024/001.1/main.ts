export const main = (listOne: number[], listTwo: number[]) => {
  listOne.sort();
  listTwo.sort();
  return listOne.reduce((total, _, index) => {
    const left = listOne[index];
    const right = listTwo[index];
    const distance = Math.abs(left - right);
    return total + distance;
  }, 0);
};
