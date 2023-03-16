import { Direction } from "./types";
import { coordToId } from "./utils";

export function createBoard(
  numRows: number,
  numCols: number,
  container: HTMLDivElement
) {
  // add display grid to the container
  container?.classList.add("grid"); // add display grid

  // add cols and rows to the container
  container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;

  // add a div for each single row and column (hint loop)
  for (let i = 0; i < numRows * numCols; i++) {
    const containerCell = document.createElement("div");
    // add the class of "grid-square" to each div
    containerCell.classList.add("grid-square");

    // add a unique id to each single div Element (hint "0-0" "0-1" "0-2")
    containerCell.id = coordToId([Math.floor(i / numCols), i % numCols]);
    // append the divs to the container
    container?.appendChild(containerCell);
  }
}

export function boardControls(e: KeyboardEvent, snakeDirection: Direction) {
  switch (e.key) {
    case "ArrowLeft":
      if (snakeDirection.v === 0 && snakeDirection.h === 1) {
        break;
      } else {
        snakeDirection.v = 0;
        snakeDirection.h = -1;
        break;
      }

    case "ArrowUp":
      if (snakeDirection.v === 1 && snakeDirection.h === 0) {
        break;
      } else {
        snakeDirection.v = -1;
        snakeDirection.h = 0;
        break;
      }

    case "ArrowRight":
      if (snakeDirection.v === 0 && snakeDirection.h === -1) {
        break;
      } else {
        snakeDirection.v = 0;
        snakeDirection.h = 1;
        break;
      }

    case "ArrowDown":
      if (snakeDirection.v === -1 && snakeDirection.h === 0) {
        break;
      } else {
        snakeDirection.v = 1;
        snakeDirection.h = 0;
        break;
      }
  }
}
