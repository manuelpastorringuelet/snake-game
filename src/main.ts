import "./style.css";
import {
  COLS,
  DEFAULT_SNAKE,
  DEFAULT_SNAKE_DIRECTION,
  INITIAL_SPEED,
  ROWS,
} from "./gameConfig";
import { createBoard } from "./board";
import { Direction } from "./type";
import { coordToId, idToCoord } from "./utils";

// grab new game button
const startBtn = document.getElementById("start");

function updateSnake(snake: Array<string>, snakeDirection: Direction) {
  console.log(snake, snakeDirection);
  // input ["11-11", "12-11", "13-11"]

  // find the head of the snake
  let snakeHead = snake[0];

  // write idToCoord function [11, 13] (extract x and y the opposite of the coordToId function)

  // update new verticalPosition of snakeHead
  const snakeHeadVertPos = idToCoord(snakeHead)[0] + snakeDirection.v;

  // update new horizontalPosition of snakeHead
  const snakeHeadHorPos = idToCoord(snakeHead)[1] + snakeDirection.h;

  // convert the new snake into string with coordToId function
  snakeHead = coordToId([snakeHeadVertPos, snakeHeadHorPos]);

  // create new snake array with updated head and remove tail
  const newSnake = snake;
  newSnake.unshift(snakeHead);
  newSnake.pop(); // return updated snake array
  console.log(newSnake); // output ['10-11', '11-11', '12-11']
}

function drawSnake() {
  // console.log("I'm draw");
}

function init() {
  // setup
  const snakeContainer = document.getElementById(
    "snake-grid"
  ) as HTMLDivElement;
  let snake = DEFAULT_SNAKE;
  const snakeDirection = DEFAULT_SNAKE_DIRECTION as Direction;
  // snake speed
  let speed = INITIAL_SPEED;

  // create board
  createBoard(ROWS, COLS, snakeContainer);

  // if button is activate, change innerText to "new game"
  if (startBtn) {
    startBtn.textContent = "new game";
  }

  // setup game loop
  function gameLoop() {
    // update snake & update apple
    updateSnake(snake, snakeDirection);

    //draw snake & draw apple
    drawSnake();

    setTimeout(() => {
      // window.requestAnimationFrame(gameLoop);
    }, speed);
  }
  window.requestAnimationFrame(gameLoop);
}

// listen to click event
startBtn?.addEventListener("click", init);
