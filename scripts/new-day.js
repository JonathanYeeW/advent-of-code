const fs = require("fs");
const path = require("path");

const dayNumber = process.argv[2];
if (!dayNumber) {
  console.error("Usage: yarn new-day <day-number>");
  process.exit(1);
}

const paddedDay = dayNumber.padStart(2, "0");
const year = new Date().getFullYear();
const dayDir = path.join(__dirname, "..", "src", year.toString(), paddedDay);

// Create directory
if (fs.existsSync(dayDir)) {
  console.error(`Day ${paddedDay} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dayDir, { recursive: true });

// Create template files
const templates = {
  "PROMPT.md": `# Day ${parseInt(dayNumber)}: [Title]

[Paste prompt here]

## Example

## Notes
`,

  "helpers.ts": `// Helper functions for Day ${parseInt(dayNumber)}

`,

  "helpers.test.ts": `

describe('Day ${parseInt(dayNumber)} Helpers', () => {
  // Add helper tests here
});
`,

  "main.ts": `

export const solve = (input: string) => {
  // TODO: Pseudocode
  
  return 0;
};
`,

  "main.test.ts": `import { solve } from './main';
import { input } from './input';

describe('Day ${parseInt(dayNumber)} - Part 1', () => {
  test('example input', () => {
    const exampleInput = \`\`;
    expect(solve(exampleInput)).toBe(0);
  });

  test('puzzle input', () => {
    expect(solve(input)).toBe(0);
  });
});
`,

  "input.ts": `export const input = \`

\`.trim();
`,
};

Object.entries(templates).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(dayDir, filename), content);
});

console.log(`✨ Created Day ${paddedDay} at ${dayDir}`);
console.log(`\nNext steps:`);
console.log(`1. Paste prompt into PROMPT.md`);
console.log(`2. Paste input into input.ts`);
console.log(`3. Run: yarn test ${dayDir}`);
console.log(`4. Start solving! 🎄`);
