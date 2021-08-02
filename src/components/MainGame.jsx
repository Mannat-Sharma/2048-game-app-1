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
  DisplayScore
} from "./GameBoard";

import styled from "styled-components";

import restartAudio from "../Audio/click_restart.mp3";
import someSound from "../Audio/merge_tile_sound.mp3";

let mergeTileAudio = new Audio(someSound);
let restartButtonAudio = new Audio(restartAudio);

const Cell = ({ number }) => {
  return <div className={`cell cell-${number}`}>{number>0? number:""}</div>;
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
  
  const Buttons = styled.button`
    margin-top: 1.5rem;
    margin-left: 2rem;
    align-self: center;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    margin-bottom:2vh;
    border: none;
    border-radius: 10px;
    background: transparent;
    outline: none
    cursor: pointer;
    color: orange;
    border: 2px solid orange;`;

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
    if(!isOver(board)){
      mergeTileAudio.play();
    }
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
        <div>
        <div className="game-board">
          <h1>2 0 4 8</h1>
          <h2>GAME</h2>
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
        <Buttons
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.93,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            onClick={() => {
              setBoard(generateStart(getEmptyBoard()));
              restartButtonAudio.play();
            }}
            style={{cursor:"pointer"}}
          >
            Restart
        </Buttons>
        </div>
      )}
            {/* <DisplayScore board={board}/> */}
    </>
  );
};

export default GameController;
