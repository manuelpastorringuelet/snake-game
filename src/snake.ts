import { COLS, ROWS } from "./gameConfig";
import { Direction } from "./types";
import { coordToId, idToCoord, mod } from "./utils";

export function updateSnake(
  snake: Array<string>,
  snakeDirection: Direction,
  apple: string
) {
  // input ["11-11", "12-11", "13-11"]

  // find the head of the snake
  const snakeHead = snake[0];

  // write idToCoord function [11, 13] (extract x and y the opposite of the coordToId function)

  // update new verticalPosition of snakeHead
  const snakeHeadV = idToCoord(snakeHead)[0] + snakeDirection.v;

  // update new horizontalPosition of snakeHead
  const snakeHeadH = idToCoord(snakeHead)[1] + snakeDirection.h;

  // wrap snake around if moves out of bounds
  const newSnakeV = mod(snakeHeadV, ROWS);
  const newSnakeH = mod(snakeHeadH, COLS);

  // convert the new snake into string with coordToId function
  const newSnakeHead = coordToId([newSnakeV, newSnakeH]);

  // check if snakeHead is crossing the snake body
  if (snake.includes(newSnakeHead)) {
    throw new Error("GAME OVER!");
  }

  // create new snake array with updated head and remove tail
  const slicedSnake =
    // check if snake eat some apple
    newSnakeHead !== apple ? snake.slice(0, snake.length - 1) : snake;

  const newSnake = [newSnakeHead, ...slicedSnake];

  // return updated snake array
  return newSnake; // output ['10-11', '11-11', '12-11']
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
