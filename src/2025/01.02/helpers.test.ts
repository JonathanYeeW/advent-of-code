import {
  parseInput,
  parseRotation,
  mod,
  countZeroCrossings,
  calculateFinalPosition,
} from "./helpers";

describe("parseInput", () => {
  test("splits input string by spaces", () => {
    const input = "L68 L30 R48";
    expect(parseInput(input)).toEqual(["L68", "L30", "R48"]);
  });

  test("handles extra whitespace", () => {
    const input = "  L68 L30  R48  ";
    expect(parseInput(input)).toEqual(["L68", "L30", "R48"]);
  });
});

describe("parseRotation", () => {
  test("parses left rotation", () => {
    expect(parseRotation("L68")).toEqual({ direction: "L", distance: 68 });
  });

  test("parses right rotation", () => {
    expect(parseRotation("R48")).toEqual({ direction: "R", distance: 48 });
  });

  test("handles large distances", () => {
    expect(parseRotation("R1000")).toEqual({ direction: "R", distance: 1000 });
  });
});

describe("mod", () => {
  test("positive numbers", () => {
    expect(mod(7, 5)).toBe(2);
  });

  test("negative numbers return positive result", () => {
    expect(mod(-18, 100)).toBe(82);
  });

  test("exactly divisible", () => {
    expect(mod(100, 100)).toBe(0);
  });
});

describe("calculateFinalPosition", () => {
  test("right rotation within bounds", () => {
    expect(calculateFinalPosition(50, 30, "R")).toBe(80);
  });

  test("right rotation wrapping around", () => {
    expect(calculateFinalPosition(95, 10, "R")).toBe(5);
  });

  test("left rotation within bounds", () => {
    expect(calculateFinalPosition(50, 30, "L")).toBe(20);
  });

  test("left rotation wrapping around", () => {
    expect(calculateFinalPosition(5, 10, "L")).toBe(95);
  });

  test("multiple wraps", () => {
    expect(calculateFinalPosition(50, 1000, "R")).toBe(50);
  });

  test("landing exactly on zero", () => {
    expect(calculateFinalPosition(52, 48, "R")).toBe(0);
    expect(calculateFinalPosition(55, 55, "L")).toBe(0);
  });
});

describe("countZeroCrossings", () => {
  describe("right rotations", () => {
    test("landing exactly on zero", () => {
      // From 52, R48 lands on 0
      expect(countZeroCrossings(52, 48, "R")).toBe(1);
    });

    test("wrapping past zero without landing", () => {
      // From 95, R60 wraps to 55 (passed through 0)
      expect(countZeroCrossings(95, 60, "R")).toBe(1);
    });

    test("not wrapping", () => {
      // From 10, R30 goes to 40 (no wrap)
      expect(countZeroCrossings(10, 30, "R")).toBe(0);
    });

    test("full rotation returns to same spot", () => {
      // From 50, R1000 = 10 full rotations back to 50
      expect(countZeroCrossings(50, 1000, "R")).toBe(10);
    });

    test("starting at zero - no partial crossing", () => {
      // From 0, R5 goes to 5 (can't cross 0 in partial rotation when starting at 0)
      expect(countZeroCrossings(0, 5, "R")).toBe(0);
    });

    test("starting at zero - full rotation counts", () => {
      // From 0, R100 = 1 full rotation back to 0
      expect(countZeroCrossings(0, 100, "R")).toBe(1);
    });
  });

  describe("left rotations", () => {
    test("wrapping past zero", () => {
      // From 50, L68 goes to 82 (wrapped left past 0)
      expect(countZeroCrossings(50, 68, "L")).toBe(1);
    });

    test("landing exactly on zero", () => {
      // From 55, L55 lands on 0
      expect(countZeroCrossings(55, 55, "L")).toBe(1);
    });

    test("not wrapping", () => {
      // From 82, L30 goes to 52 (no wrap)
      expect(countZeroCrossings(82, 30, "L")).toBe(0);
    });

    test("starting at zero - no partial crossing", () => {
      // From 0, L5 goes to 95 (can't cross 0 when starting at 0)
      expect(countZeroCrossings(0, 5, "L")).toBe(0);
    });

    test("multiple full rotations with partial", () => {
      // From 50, L250 = 2 full rotations + 50 steps = wraps to 0
      expect(countZeroCrossings(50, 250, "L")).toBe(3); // 2 full + 1 landing
    });
  });

  describe("example rotations from problem", () => {
    test("L68 from 50 crosses once", () => {
      expect(countZeroCrossings(50, 68, "L")).toBe(1);
    });

    test("R60 from 95 crosses once", () => {
      expect(countZeroCrossings(95, 60, "R")).toBe(1);
    });

    test("L82 from 14 crosses once", () => {
      expect(countZeroCrossings(14, 82, "L")).toBe(1);
    });
  });
});
