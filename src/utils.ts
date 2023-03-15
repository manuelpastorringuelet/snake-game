import { Coordinates, Id } from "./type";

export function coordToId([x, y]: Coordinates) {
  return `${x}-${y}`;
}

export function idToCoord(id: Id) {
  const [row, col] = id.split("-");
  return [+row, +col];
}
