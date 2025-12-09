# Advent of Code Solutions

My solutions for [Advent of Code](https://adventofcode.com/) puzzles, built with TypeScript and a test-driven development workflow.

## Quick Start

### Setup

```bash
# Install dependencies
yarn install

# Create a new day
yarn new-day 01

# Run tests for a specific day
yarn test ./src/2025/01

# Run all tests in watch mode
yarn test:watch
```

## Workflow

This repository is designed for a **test-driven development** approach to solving Advent of Code puzzles:

### Step-by-Step Process

1. **Scaffold the day**

   ```bash
   yarn new-day 01
   ```

2. **Save the problem**

   - Go to [Advent of Code](https://adventofcode.com/)
   - Copy the day's prompt
   - Paste into `PROMPT.md`
   - Copy your puzzle input
   - Paste into `input.ts`

3. **Pseudocode your approach**

   - Open `main.ts`
   - Write out your solution logic in comments
   - Think through the algorithm before coding

4. **Identify helper functions**

   - What reusable utilities do you need?
   - Parsing? Validation? Calculations?

5. **Write helper tests first** (TDD!)

   - Open `helpers.test.ts`
   - Write tests for each helper function
   - Define expected behavior before implementation

6. **Implement helpers**

   - Open `helpers.ts`
   - Write code to make tests pass
   - Run: `yarn test ./src/2025/01/helpers.test`

7. **Test with example input**

   - Copy example from prompt into `main.test.ts`
   - Wire up helpers in `main.ts`
   - Validate solution matches expected output

8. **Solve with real input**

   - Update the puzzle input test expectation
   - Get your answer
   - Submit to Advent of Code! 🎄

9. **Part 2**
   - Create `main2.ts` and `main2.test.ts`
   - Update `PROMPT.md` or create `PROMPT_PART2.md`
   - Reuse helpers as needed
   - Repeat the process!

## Directory Structure

```
advent-of-code/
├── README.md                 # This file
├── package.json              # Dependencies and scripts
├── jest.config.js            # Test configuration
├── tsconfig.json             # TypeScript configuration
├── scripts/
│   └── new-day.js            # Scaffolding script
└── src/
    └── 2025/                 # Current year
        └── 01/               # Day 01
            ├── PROMPT.md          # Problem description
            ├── input.ts           # Your puzzle input
            ├── helpers.ts         # Utility functions
            ├── helpers.test.ts    # Helper tests
            ├── main.ts            # Part 1 solution
            ├── main.test.ts       # Part 1 tests
            ├── main2.ts           # Part 2 solution (created later)
            └── main2.test.ts      # Part 2 tests (created later)
```

## File Purposes

### `PROMPT.md`

The full problem description from Advent of Code. Include:

- Problem narrative
- Example input/output
- Any special rules or constraints
- Your own notes or observations

### `input.ts`

Your unique puzzle input as a string export:

```typescript
export const input = `
paste your input here
`.trim();
```

### `helpers.ts`

Reusable utility functions shared between parts:

```typescript
export const parseInput = (input: string) => {
  // Implementation
};

export const validateData = (data: any) => {
  // Implementation
};
```

### `helpers.test.ts`

Test-driven development for your helpers:

```typescript
import { parseInput } from "./helpers";

describe("Day 01 Helpers", () => {
  describe("parseInput", () => {
    test("parses example correctly", () => {
      const input = "1 2 3";
      expect(parseInput(input)).toEqual([1, 2, 3]);
    });
  });
});
```

### `main.ts`

Your solution for Part 1:

```typescript
import { parseInput } from "./helpers";

export const solve = (input: string) => {
  const data = parseInput(input);
  // Your solution logic
  return result;
};
```

### `main.test.ts`

Validate your solution:

```typescript
import { solve } from "./main";
import { input } from "./input";

describe("Day 01 - Part 1", () => {
  test("example input", () => {
    const example = `example from prompt`;
    expect(solve(example)).toBe(expectedAnswer);
  });

  test("puzzle input", () => {
    expect(solve(input)).toBe(actualAnswer);
  });
});
```

### `main2.ts` & `main2.test.ts`

Same pattern as Part 1, created after completing Part 1.

## Commands Reference

### Creating New Days

```bash
# Create day 1
yarn new-day 1

# Create day 15
yarn new-day 15
```

Days are automatically zero-padded (01, 02, etc.).

### Running Tests

```bash
# Run all tests once
yarn test

# Run tests for specific day
yarn test ./src/2025/01

# Run specific test file
yarn test ./src/2025/01/helpers.test.ts

# Watch mode - reruns tests on file changes
yarn test:watch

# Watch mode with pattern filtering
yarn test:watch
# Then press 'p' and type '01' to filter to day 1
```

### Jest Watch Mode Controls

When running `yarn test:watch`:

- Press `a` to run all tests
- Press `f` to run only failed tests
- Press `p` to filter by filename pattern
- Press `t` to filter by test name pattern
- Press `q` to quit

## Tips & Tricks

### Test-Driven Development

Write tests before implementation! It helps you:

- Understand the problem better
- Catch edge cases early
- Build confidence in your solution
- Refactor safely

### Example Input First

Always validate against the example from the prompt before running on real input. It's faster to debug!

### Helper Functions

Break down complex logic into testable units:

- Parsing functions
- Validation functions
- Core algorithm pieces
- Data transformations

### Debugging

```typescript
// Add console.logs in your tests
test("debug example", () => {
  const result = solve(exampleInput);
  console.log("Result:", result);
  expect(result).toBe(expected);
});
```

### Part 2 Strategy

Often Part 2 builds on Part 1:

- Reuse helpers from Part 1
- Sometimes refactor Part 1 to be more general
- Sometimes Part 2 needs a completely different approach

### Performance

If a solution is too slow:

- Profile with `console.time()` and `console.timeEnd()`
- Look for algorithmic improvements (O(n²) → O(n))
- Consider memoization for recursive solutions
- Sometimes brute force is fine! ⏱️

## Technology Stack

- **TypeScript** - Type safety and modern JavaScript features
- **Jest** - Fast, feature-rich testing framework
- **Node.js** - Runtime environment

## Why This Setup?

This workflow optimizes for:

- **Speed** - Scaffold a day in seconds
- **Focus** - Files guide you through the TDD process
- **Testing** - Run only what you're working on
- **Reusability** - Share helpers between parts
- **Fun** - Less friction, more puzzle-solving joy! 🎄✨

## Progress Tracker

### 2025

- [ ] Day 01
- [ ] Day 02
- [ ] Day 03
- [ ] Day 04
- [ ] Day 05
- [ ] Day 06
- [ ] Day 07
- [ ] Day 08
- [ ] Day 09
- [ ] Day 10
- [ ] Day 11
- [ ] Day 12
- [ ] Day 13
- [ ] Day 14
- [ ] Day 15
- [ ] Day 16
- [ ] Day 17
- [ ] Day 18
- [ ] Day 19
- [ ] Day 20
- [ ] Day 21
- [ ] Day 22
- [ ] Day 23
- [ ] Day 24
- [ ] Day 25

---

Happy coding! 🎅🎄⭐
