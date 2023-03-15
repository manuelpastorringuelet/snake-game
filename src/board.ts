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
    containerCell.classList.add("grid-square", "hover:bg-rose-200");

    // add a unique id to each single div Element (hint "0-0" "0-1" "0-2")
    containerCell.id = coordToId([Math.floor(i / numCols), i % numCols]);
    // append the divs to the container
    container?.appendChild(containerCell);
  }
}
