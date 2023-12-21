import "./App.css";
import { useState } from "react";

/**
 * Representa un componente, que es una celda de las 9 que tiene el tic-toc. Es nieto de Game y hijo de Board.
 * @prop {onSquareClick} function cada que le haga clicl al cuadrado llamo la funcion handleClick(i) en el componente padre. Donde i es la posicion de la celda a la que se dio click
 * @prop {value} string X/0 dependiendo del turno que vaya, va a pintar en el cuadrado un X o O
 * 
 * @returns retorna UN cuadrado marcado con X/0 en la posicion que se desencadeno por el evento Onclick que llama a la prop onSquareClic() 
 */
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/**
 * Es un componente, que une 9 cuadrados para crear un tablero. Dentro tiene la logica para identificar la jugada que se eligio y si hubo un ganador o no.
 * @prop {xIsNext} boolean, el padre le dice al hijo si el jugador siguiente será un X o 0, para que Board usando la funcion handleClick, sepa qué retornar en el cuadrado
 * @prop {squares}
 * @prop {*} param0 
 * @returns 
 */
function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  console.log('lo paso a calculateWinner: ' + squares)
  let status;

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    console.log('lo tengo en Board creando NextS: ' + squares)
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  if (winner) {
    status = "The winner is: " + winner;
  } else {
    status = "The next player is: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    {console.log('mando eso en una posicion para que Square nieto imprima' + squares)}
      <div className="status"> {status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/**
 * 
 * @returns 
 */

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  console.log('lo defino por primera vez: ' + currentSquares);
  function handleGame(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); //creates a new array that contains all the items in history, followed by nextSquares
    setCurrentMove(nextHistory.length - 1);
    console.log(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    console.log('segunda ' + nextMove);
    setCurrentMove(nextMove);//Cuando quiero devolverme, ajusta el movimiento actual al boton de la lista que le di click
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handleGame} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
