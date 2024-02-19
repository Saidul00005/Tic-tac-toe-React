import React from 'react'
import Box from './Box'


const GameBoard = ({ Boxes, onPlay, xIsNext }) => {

        function handleClick(i) {
                if ((Boxes[i]) || (calculateWinner(Boxes))) {
                        return;
                }
                const nextBoxes = Boxes.slice();
                if (xIsNext) {
                        nextBoxes[i] = 'X'
                }
                else {
                        nextBoxes[i] = 'O'
                }
                onPlay(nextBoxes)
        }

        const winner = calculateWinner(Boxes);
        let status;
        if (winner) {
                status = "Winner: " + winner;
        }
        else {
                status = "Next Player: " + (xIsNext ? "X" : "0");
        }

        function calculateWinner(Boxes) {
                const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

                for (let i = 0; i < lines.length; i++) {
                        const [a, b, c] = lines[i];
                        if (Boxes[a] && Boxes[a] === Boxes[b] && Boxes[a] === Boxes[c]) {
                                return Boxes[a];
                        }

                }
                return null
        }

        return (
                <>
                        <center><div className="container"><h3>{status}</h3></div></center>
                        <div className='grid text-center my-1'>
                                <Box value={Boxes[0]} onSquareClick={() => { handleClick(0) }} />
                                <Box value={Boxes[1]} onSquareClick={() => { handleClick(1) }} />
                                <Box value={Boxes[2]} onSquareClick={() => { handleClick(2) }} />
                        </div>
                        <div className='grid text-center my-1'>
                                <Box value={Boxes[3]} onSquareClick={() => { handleClick(3) }} />
                                <Box value={Boxes[4]} onSquareClick={() => { handleClick(4) }} />
                                <Box value={Boxes[5]} onSquareClick={() => { handleClick(5) }} />
                        </div>
                        <div className='grid text-center my-1'>
                                <Box value={Boxes[6]} onSquareClick={() => { handleClick(6) }} />
                                <Box value={Boxes[7]} onSquareClick={() => { handleClick(7) }} />
                                <Box value={Boxes[8]} onSquareClick={() => { handleClick(8) }} />
                        </div>
                </>

        )
}

export default GameBoard