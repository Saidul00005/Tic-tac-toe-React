import './App.css';
import GameBoard from './Components/GameBoard';
import { useState } from 'react'


function App() {
  const [history, sethistory] = useState([Array(9).fill(null)]);
  const [currentMove, setcurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentBox = history[currentMove];

  function handlePlay(nextBoxes) {
    const nexthistory = ([...history.slice(0,currentMove +1), nextBoxes]);
    sethistory(nexthistory);
    setcurrentMove(nexthistory.length - 1);

  }

  function jumpTo(nextMove) {
    setcurrentMove(nextMove);
  }

  const moves = history.map((Boxes, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    }
    else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
      <button type="button" style={{marginRight:"2px"}} className='btn btn-primary my-1' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })


  return (
    <>
      <div className="App">
        <h1 className='my-5'><center>Tic-tac-toe Game</center></h1>
        <div className="container">
          <GameBoard xIsNext={xIsNext} Boxes={currentBox} onPlay={handlePlay} />

          <center><h1 className='my-5'>Game Info</h1></center>
          <center>{moves}</center>
        

        </div>
      </div>
    </>
  );

}

export default App;
