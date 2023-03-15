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
import { idToCoord } from "./utils";

// grab new game button
const startBtn = document.getElementById("start");

function updateSnake(snake: Array<string>, snakeDirection: Direction) {
  console.log(snake, snakeDirection);
  // input ["11-11", "12-11", "13-11"]

  // find the head of the snake
  let snakeHead = snake[0];
  console.log(snakeHead);

  // write idToCoord function [11, 13] (extract x and y the opposite of the coordToId function)
  idToCoord(snakeHead);
  console.log(snakeHead);

  // update new verticalPosition of snakeHead
  // snakeHead = idToCoord(snakeHeadId);

  // update new horizontalPosition of snakeHead

  // convert teh new snake into string with coordToId function

  // create new snake array with updated head and remove tail

  // return updated snake array

  // output ['10-11', '11-11', '12-11']
}

function drawSnake() {
  console.log("I'm draw");
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
      window.requestAnimationFrame(gameLoop);
    }, speed);
  }
  window.requestAnimationFrame(gameLoop);
}

// listen to click event
startBtn?.addEventListener("click", init);
