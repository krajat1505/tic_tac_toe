import React, { useState } from "react";
import Board from "./Board";

const TicTacToeGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (squares[index]) return;
    squares[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [x, y, z] = winningCombinations[i];
      if (
        squares[x] === squares[y] &&
        squares[x] === squares[z] &&
        squares[x]
      ) {
        return squares[x];
      }
    }
    return false;
  };

  const winner = checkWinner();

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <>
      <div className="ticTacContainer">
        {!winner ? (isXTurn ? "Now X turn" : "Now O turn") : ""}
        {winner ? (
          <p className="winStatus">{`${winner} Won`}</p>
        ) : (
          <Board onClick={handleClick} squares={squares} />
        )}

        <button className="resetButton" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default TicTacToeGame;
