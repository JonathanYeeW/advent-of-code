export const main = (listOne: number[], listTwo: number[]) => {
  const numberMap = getNumberMap(listTwo);

  return listOne.reduce((total, current) => {
    const count = numberMap[current];
    if (count) {
      const weightedSum = count * current;
      return total + weightedSum;
    }
    return total;
  }, 0);
};

export const getNumberMap = (list: number[]) => {
  const result: { [num: number]: number } = {};
  list.forEach((number) => {
    if (result[number]) {
      result[number] += 1;
    } else {
      result[number] = 1;
    }
  });
  return result;
};
