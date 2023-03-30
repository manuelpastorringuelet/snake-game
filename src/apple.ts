import { ROWS, COLS, INITIAL_SPEED } from "./gameConfig";
import { randomCoordinate, coordToId } from "./utils";

const appleStyle = "apple-square";
let counter = 0;
const counterParagraph = document.getElementById(
  "counter"
) as HTMLParagraphElement;

export function getRandomApple() {
  const [appleRow, appleColumn] = randomCoordinate(ROWS, COLS);

  return coordToId([appleRow, appleColumn]);
}

export function drawApple(appleCoords: string) {
  const appleBlock = document.getElementById(appleCoords) as HTMLDivElement;

  if (
    !appleBlock?.classList.contains("snake-square") &&
    !appleBlock?.classList.contains(appleStyle)
  ) {
    appleBlock.classList.add(appleStyle);
  }
}

export function updateApple(snake: Array<string>, apple: string) {
  const appleBlock = document.getElementById(apple) as HTMLDivElement;

  // check if snakeHead is equal to apple
  if (snake[0] === apple) {
    // remove the apple and generate a new one
    appleBlock.classList.remove(appleStyle);
    const newApple = getRandomApple();
    counter++;
    counterParagraph.innerText = `${counter}`;
    return newApple;
  }
  // return the apple
  return apple;
}
