const rotatePosition = (
  currentPosition: number,
  direction: string,
  amount: number
) => {};

export const main = (rotations: string[]) => {
  console.log("rotations.length", rotations.length);
  // "The dial starts by pointing at 50.""
  // Step 1: initialize current position at 50
  let currentPosition = 50;

  // Step 1: For each rotatation
  rotations.forEach((rotation) => {
    // - split on the first index so [character, number]
    const [direction, number] = rotation.slice(0);

    if (direction === "L") {
      rotatePosition;
    } else if (direction === "R") {
    } else {
      throw new Error("Direction is not right");
    }

    // const direction = rotation.charAt(0);
    // const distance = parseInt(rotation.slice(1), 10);

    // // - determine direction from character
    // if (direction === "L") {
    //   currentPosition -= distance;
    // } else if (direction === "R") {
    //   currentPosition += distance;
    // }

    // // - calculate new position, if updating goes past 100, wrap around to 1 or 99
    // if (currentPosition > 100) {
    //   currentPosition = 1;
    // } else if (currentPosition < 1) {
    //   currentPosition = 99;
    // }
  });
};

const input = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
];

main(input);
