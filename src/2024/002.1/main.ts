import { Level, Report } from "./types";

export const main = (reports: Report) => {
  return reports.reduce((total, current) => {
    if (isLevelValid(current)) {
      return total + 1;
    }
    return total;
  }, 0);
};

export const isLevelValid = (level: Level) => {
  let isIncreasing = level[0] < level[1];

  for (let i = 0; i < level.length - 1; i++) {
    const current = level[i];
    const next = level[i + 1];
    const isDifferenceIncreasing = current < next;

    if (isIncreasing !== isDifferenceIncreasing) {
      // There was a change in direction
      return false;
    }

    const totalChange = Math.abs(current - next);
    if (totalChange > 3 || totalChange === 0) {
      // levels changed by more than 3 or less than 1
      return false;
    }
  }

  return true;
};
