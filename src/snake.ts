import { Direction } from "./types";
import { coordToId, idToCoord } from "./utils";

export function updateSnake(snake: Array<string>, snakeDirection: Direction) {
  // input ["11-11", "12-11", "13-11"]

  // find the head of the snake
  const snakeHead = snake[0];

  // write idToCoord function [11, 13] (extract x and y the opposite of the coordToId function)

  // update new verticalPosition of snakeHead
  const snakeHeadV = idToCoord(snakeHead)[0] + snakeDirection.v;

  // update new horizontalPosition of snakeHead
  const snakeHeadH = idToCoord(snakeHead)[1] + snakeDirection.h;

  // convert the new snake into string with coordToId function
  const newSnakeHead = coordToId([snakeHeadV, snakeHeadH]);

  // create new snake array with updated head and remove tail
  const slicedSnake = snake.slice(0, snake.length - 1);

  // return updated snake array
  return [newSnakeHead, ...slicedSnake]; // output ['10-11', '11-11', '12-11']
}

export function drawSnake(snake: Array<string>) {
  const snakeSquareStyle = "snake-square";

  const allSnakeSquares = document.querySelectorAll(`.${snakeSquareStyle}`);

  allSnakeSquares.forEach((snakeBlock) => {
    snakeBlock.classList.remove(snakeSquareStyle);
  });

  // loop trough snake array
  snake.forEach((id) => {
    // querySelector all snake squares
    const snakeSquare = document.getElementById(id) as HTMLDivElement;
    // add class "snake-square" to it
    snakeSquare?.classList.add(snakeSquareStyle);
  });

  // remove style of the tail
  let snakeTailSquare = document.getElementById(snake[snake.length]);
  snakeTailSquare?.classList.remove(snakeSquareStyle);
}
