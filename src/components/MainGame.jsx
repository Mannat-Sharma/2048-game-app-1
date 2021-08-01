import React, { useEffect, useState } from "react";
import Over from "./Over";
import Win from "./Win";

import {
  getEmptyBoard,
  generateStart,
  generateRandom,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  isOver,
  checkWin,
  TotalScore,
} from "./GameBoard";

const Cell = ({ number }) => {
  return <div className={`cell cell-${number}`}></div>;
};

const GameController = ({ setDisplay = { setDisplay } }) => {
  const [board, setBoard] = useState(generateStart(getEmptyBoard()));

  const checkEndGame = () => {
    if (checkWin(board)) {
      console.log("You win!");
    } else if (isOver(board)) {
      console.log("Game Over");
    }
  };

  const left = () => {
    const newBoard = moveLeft(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const right = () => {
    const newBoard = moveRight(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const up = () => {
    const newBoard = moveUp(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const down = () => {
    const newBoard = moveDown(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        left();
        break;
      case "ArrowRight":
        right();
        break;
      case "ArrowUp":
        up();
        break;
      case "ArrowDown":
        down();
        break;

      default:
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <>
      {checkWin(board) ? (
        <Win setDisplay={setDisplay} />
      ) : isOver(board) ? (
        <Over setDisplay={setDisplay} />
      ) : (
        <div className="game-board">
          {board.map((row, i) => {
            return (
              <div key={`row-${i}`} className="row">
                {row.map((cell, j) => (
                  <Cell key={`cell-${i}-${j}`} number={cell} />
                ))}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GameController;
