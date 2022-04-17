import React, { useEffect, useState } from 'react'
import Cell from './Cell';





function Board() {

    const [allWhitefillPosition, setWhiteAllFillPosition] = useState([]);
    const [allBlackfillPosition, setBlackAllFillPosition] = useState([]);
    const [possiblePosition, setpossiblePosition] = useState([]);
    const [isCurrentChance, setCurrentChance] = useState('Black');
    const [focusIdentity, setFocusIndentity] = useState('');
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


    const chessCoreLogic = (index, identity) => {

        if (isCurrentChance === 'White') {


            if (identity === 'PawnWhite') {
                const pawnLogic = () => {
                    let [row, col] = index;
                    const whitePossibleAheadChances = allWhitefillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row + 1 && newCol === col);
                    });

                    const blackPossibleAheadChances = allBlackfillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row + 1 && newCol === col);
                    });

                    const whitePossibleNewAheadChances = [];
                    if (whitePossibleAheadChances.length === 0 && blackPossibleAheadChances.length === 0) whitePossibleNewAheadChances.push([row + 1, col]);

                    const whitePossbileCrossChances = allWhitefillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row + 2 && newCol === col)
                    });

                    const blackPossibleCrossChances = allBlackfillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row + 2 && newCol === col);
                    });
                    const whitePossibleNewCrossChances = [];

                    if ((whitePossbileCrossChances.length === 0 && row === 1 && blackPossibleCrossChances.length === 0)) whitePossibleNewCrossChances.push([row + 2, col]);
                    console.log(whitePossbileCrossChances.length);


                    const blackPossibleChances = allBlackfillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row + 1 && newCol === col + 1) || (newRow === row + 1 && newCol === col - 1);
                    })
                    // console.log(whitePossibleAheadChances, whitePossibleAheadChances, blackPossibleChances)

                    return [...whitePossibleNewAheadChances, ...whitePossibleNewCrossChances, ...blackPossibleChances]





                }
                return pawnLogic();
            }

            if(identity==="KnightWhite") {
                 
            }
        }

        console.log(isCurrentChance, identity);
        if (isCurrentChance === 'Black') {
            if (identity === 'PawnBlack') {
                console.log(isCurrentChance, identity);
                const pawnLogic = () => {
                    let [row, col] = index;
                    const blackPossibleAheadChances = allBlackfillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row - 1 && newCol === col);
                    });

                    const whitePossibleAheadChances = allWhitefillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row - 1 && newCol === col);
                    });

                    console.log(whitePossibleAheadChances.length);

                    const blackPossibleNewAheadChances = [];
                    if (blackPossibleAheadChances.length === 0 && whitePossibleAheadChances.length === 0) blackPossibleNewAheadChances.push([row - 1, col]);

                    const blackPossbileCrossChances = allBlackfillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row - 2 && newCol === col)
                    });

                    const whitePossbileCrossChances = allWhitefillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row - 2 && newCol === col)
                    });


                    const blackPossibleNewCrossChances = [];


                    if (blackPossbileCrossChances.length === 0 && row === 6 && whitePossbileCrossChances.length === 0) blackPossibleNewCrossChances.push([row - 2, col]);

                    const whitePossibleChances = allWhitefillPosition.filter((item) => {
                        const [newRow, newCol] = item;
                        return (newRow === row - 1 && newCol === col + 1) || (newRow === row - 1 && newCol === col - 1);
                    })
                    // console.log(whitePossibleAheadChances, whitePossibleAheadChances, blackPossibleChances)

                    return [...blackPossibleNewAheadChances, ...blackPossibleNewCrossChances, ...whitePossibleChances]
                }
                return pawnLogic();
            }
        }


        console.log(allWhitefillPosition);
        console.log(allBlackfillPosition);



    }









    let [board, setBoard] = useState(Array(8).fill(Array(8).map((item) => item.fill(null))));
    let [focusIndex, setFocusIndex] = useState([]);
    // console.log(board)
    // console.log(focusIndex);

    const changeFocus = (index, identity) => {
        // console.log(index, identity);
        setFocusIndex([...index]);
        let possibleChances = chessCoreLogic(index, identity);
        console.log(possibleChances);

        setpossiblePosition([...possibleChances]);
        setFocusIndentity(identity);

    }



    const ChangingPosition = (row, col, current, identity) => {
        console.log(row, col)

        if (isCurrentChance === 'White') {

            if (current === "Black") {
                // console.log(current);
                const duplicateBlackBoard = [...blackBoard[identity]];
                // console.log(row, col);
                // console.log(duplicateWhiteBoard);

                const duplicateNewBlackBoard = duplicateBlackBoard.filter((item) => {
                    let [newRow, newCol] = item
                    // console.log(newRow == row && newCol == col);
                    return !(newRow === row && newCol === col);
                })
                // console.log(duplicateNewBlackBoard)
                setBlackBoard((perv) => ({
                    ...perv,
                    [identity]: duplicateNewBlackBoard
                }))

            }
            console.log('focusIdentity' + focusIdentity);
            const duplicateWhiteBoard = [...whiteBoard[focusIdentity]];
            // console.log(row, col);
            // console.log(duplicateWhiteBoard);
            let [currentFocusRow, currentFocusCol] = focusIndex;

            const duplicateNewWhiteBoard = duplicateWhiteBoard.filter((item) => {
                let [newRow, newCol] = item
                return !(newRow === currentFocusRow && newCol === currentFocusCol);
            })

            duplicateNewWhiteBoard.push([row, col]);

            setWhiteBoard((perv) => ({
                ...perv,
                [focusIdentity]: duplicateNewWhiteBoard
            }))
            setCurrentChance((perv) => {
                if (perv === 'White') return "Black";
                else return 'White';
            });
            setFocusIndex([]);

        }


        else {
            console.log("Black ")

            if (current === "White") {
                // console.log(current);
                const duplicateWhiteBoard = [...whiteBoard[identity]];
                // console.log(row, col);
                // console.log(duplicateWhiteBoard);

                const duplicateNewWhiteBoard = duplicateWhiteBoard.filter((item) => {
                    let [newRow, newCol] = item
                    return !(newRow === row && newCol === col);
                })
                // console.log(duplicateNewWhiteBoard)
                setWhiteBoard((perv) => ({
                    ...perv,
                    [identity]: duplicateNewWhiteBoard
                }))





            }

            const duplicateBlackBoard = [...blackBoard[focusIdentity]];
            // console.log(row, col);
            // console.log(duplicateWhiteBoard);
            let [currentFocusRow, currentFocusCol] = focusIndex;

            const duplicateNewBlackBoard = duplicateBlackBoard.filter((item) => {
                let [newRow, newCol] = item
                return !(newRow === currentFocusRow && newCol === currentFocusCol);
            })

            duplicateNewBlackBoard.push([row, col]);
            console.log(duplicateNewBlackBoard);

            setBlackBoard((perv) => ({
                ...perv,
                [focusIdentity]: duplicateNewBlackBoard
            }))
            setCurrentChance((perv) => {
                if (perv === 'White') return "Black";
                else return 'White';
            });
            setFocusIndex([]);

        }







    }










    // console.log(board);

    // providing position of white pieces of chess into board
    useEffect(() => {
        let duplicateBoard = Array(8).fill().map(() => Array(8).fill(null));
        const duplicateWhiteBoard = [];
        const duplicateBlackBoard = [];
        for (let key in whiteBoard) {

            whiteBoard[key].forEach((item) => {
                // console.log(item)
                duplicateWhiteBoard.push(item);
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
                duplicateBlackBoard.push(item);
                let [row, col] = item;
                // console.log(row, col);
                // console.log(key);


                duplicateBoard[row][col] = key;

                // console.log(duplicateBoard);

            })

        }
        setBoard(duplicateBoard);
        setBlackAllFillPosition(duplicateBlackBoard);
        setWhiteAllFillPosition(duplicateWhiteBoard);


    }

        , [isCurrentChance])









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
                            possiblePosition={possiblePosition}
                            ChangingPosition={ChangingPosition}
                            focusIdentity={focusIdentity} />))

            }
        </div>
    )
}

export default Board