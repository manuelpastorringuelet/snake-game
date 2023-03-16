import { Coordinates } from "./type";

export function coordToId([x, y]: Coordinates) {
  return `${x}-${y}`;
}

export function idToCoord(id: string) {
  const [row, col] = id.split("-");
  return [+row, +col];
}
