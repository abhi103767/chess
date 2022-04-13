import React, { useState } from 'react'
import Cell from './Cell';

const ans = [[0, 1, 2],
[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setisX] = useState(true);
    const [winner, setWinner] = useState('');


    const Winner = (board) => {
        console.log(board);

        let row = ans.length;
        let col = ans[0].length;



        for (let i = 0; i < row; i++) {
            let required = '';
            for (let j = 0; j < col; j++) {
                if (board[ans[i][j]] === null) break;
                required += board[ans[i][j]];
            }
            console.log(required);

            if (required === 'XXX') return 'X';
            else if (required === "OOO") return "O"

        }




        return '';


    }




    // console.log(board.length);

    const toggleXorO = (index) => {
        console.log(index);

        if (board[index] === null) {
            board[index] = isX ? 'X' : 'O';
        }

        setisX(!isX);


        if (Winner(board) === "X") {
            alert("X is Winner");
            setBoard(Array(9).fill(null));
        }

        else if (Winner(board) === "O") {
            alert("O is Winner")
            setBoard(Array(9).fill(null));
        }

        else if (
            board.every((item) => {
                return item !== null
            })
        ) {
            alert("Match is Draw");
            setBoard(Array(9).fill(null));

        }



    }


    return (
        <div className="board" >

            {board.map((item, i) => {
                return <Cell index={i} handleClick={toggleXorO} value={board[i]} />
            })}
        </div>
    )
}

export default Board