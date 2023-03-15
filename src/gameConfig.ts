// number of board cols and rows
export const ROWS = 21;
export const COLS = 21;
export const INITIAL_SPEED = 1000; // speed in ms

// 0 is not moving in that direction
// +1 for rows is downwards, -1 is upwards
// +1 for cols is rightwards, -1 is leftwards
export const DEFAULT_SNAKE_DIRECTION = {
  v: -1, // ["10-11", "11-11", "11-11"]
  h: 0,
};

// array of coordinates specifying snake
// first element is always the head of snake
// last element is always the tail of snake
export const DEFAULT_SNAKE = ["11-11", "12-11", "13-11"];
