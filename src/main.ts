import "./style.css";
import {
  COLS,
  DEFAULT_SNAKE,
  DEFAULT_SNAKE_DIRECTION,
  INITIAL_SPEED,
  ROWS,
} from "./gameConfig";
import { boardControls, createBoard } from "./board";
import { Direction } from "./types";
import { drawSnake, updateSnake } from "./snake";
import { getRandomApple, drawApple, updateApple } from "./apple";

// grab new game button
const startBtn = document.getElementById("start") as HTMLButtonElement;

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
    startBtn.disabled = true;
  }

  // listen to event
  document.addEventListener("keydown", (event) => {
    boardControls(event, snakeDirection);
  });

  let apple = getRandomApple();

  drawApple(apple);

  // setup game loop
  function gameLoop() {
    // update snake & update apple
    const updatedSnake = updateSnake(snake, snakeDirection);
    snake = updatedSnake;

    const updatedApple = updateApple(snake, apple);

    // check if snake eat some apple
    if (snake[0] === apple) {
      snake.push(apple);
    }

    apple = updatedApple;

    //draw snake & draw apple
    drawSnake(snake);
    drawApple(apple);

    setTimeout(() => {
      window.requestAnimationFrame(gameLoop);
    }, speed);
  }
  window.requestAnimationFrame(gameLoop);
}

// listen to click event
startBtn?.addEventListener("click", init);
