import React, { useEffect, useState } from 'react'
import Cell from './Cell';





function Board() {

    const [allWhitefillPosition, setWhiteAllFillPosition] = useState([]);
    const [possiblePosition, setpossiblePosition] = useState([]);
    const [isCurrentChance, setCurrentChance] = useState('White');
    const [whiteBoard, setWhiteBoard] = useState({
        'PawnWhite': [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]],
        'KnightWhite': [[0, 1], [0, 6]],
        'RookWhite': [[0, 0], [0, 7]],
        'BishopWhite': [[0, 2], [0, 5]],
        "QueenWhite": [[0, 3]],
        "KingWhite": [[0, 4]]
    })

    const [blackBoard, setBlackBoard] = useState({
        'PawnBlack': [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7]],
        'KnightBlack': [[7, 1], [7, 6]],
        'RookBlack': [[7, 0], [7, 7]],
        'BishopBlack': [[7, 2], [7, 5]],
        "QueenBlack": [[7, 3]],
        "KingBlack": [[7, 4]]
    })


    function logicalChess(identity, index) {
        const newWhiteBoard = whiteBoard;
        const newBlackBoard = blackBoard;
        const [newRow, newCol] = index;
        const possbileChanges = [];



        if (identity === 'PawnBlack') {
            const nextMovePawn = newRow + 1;

            // possbileChanges.push([newMovePawn, newCol]);



        }
    }








    let [board, setBoard] = useState(Array(8).fill(Array(8).map((item) => item.fill(null))));
    let [focusIndex, setFocusIndex] = useState([]);
    console.log(board)
    console.log(focusIndex);

    const changeFocus = (index, identity) => {
        console.log(index, identity);
        setFocusIndex([...index]);
        setpossiblePosition([[2, 4], [3, 4]]);
        setCurrentChance((perv) => {
            if (perv === 'White') return "Black";
            else return 'White';
        });





    }







    // console.log(board);

    // providing position of white pieces of chess into board
    useEffect(() => {
        let duplicateBoard = Array(8).fill().map(() => Array(8).fill(null));

        for (let key in whiteBoard) {

            whiteBoard[key].forEach((item) => {
                // console.log(item)
                let [row, col] = item;


                // console.log(row, col);
                // console.log(key);


                duplicateBoard[row][col] = key;

                // console.log(duplicateBoard);

            })

        }
        for (let key in blackBoard) {

            blackBoard[key].forEach((item) => {
                // console.log(item)
                let [row, col] = item;
                // console.log(row, col);
                // console.log(key);


                duplicateBoard[row][col] = key;

                // console.log(duplicateBoard);

            })

        }

        setBoard(duplicateBoard);

    }

        , [])









    return (
        <div className='board'>
            {
                board.map((item, row) =>
                    item.map((subitem, col) =>
                        <Cell
                            identity={subitem}
                            index={[row, col]}
                            handleClick={changeFocus}
                            isCurrentChance={isCurrentChance}
                            focusIndex={focusIndex}
                            possiblePosition={possiblePosition} />))

            }
        </div>
    )
}

export default Board