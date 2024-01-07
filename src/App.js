import './App.css';
import Square from './components/square';
import { useState } from 'react';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    // if square has already a value
    // dont add a new
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    // taking turns
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    // toggle
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = "Winner: " + winner;
    
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-teal-700">

      <h1 className='absolute top-4 text-3xl text-white font-bold'>Tic-Tac-Toe</h1>

      <h1 className='text-3xl text-white font-bold mb-3'>{status}</h1>

      <div className='flex flex-col h-96 w-96'>
        <div className="flex w-full h-full justify-center">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex w-full h-full justify-center ">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex w-full h-full justify-center ">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

    </div>
  );
}

export default App;
