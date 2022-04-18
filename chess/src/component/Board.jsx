import React, { useEffect, useState } from 'react'
import Cell from './Cell';





function Board() {

    const [allWhitefillPosition, setWhiteAllFillPosition] = useState([]);
    const [allBlackfillPosition, setBlackAllFillPosition] = useState([]);
    const [possiblePosition, setpossiblePosition] = useState([]);
    const [isCurrentChance, setCurrentChance] = useState('White');
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



        const MaindiagonalChecking = (index) => {
            const [row, col] = index;
            console.log(index);

            // upper and left part
            let i = row - 1
            let j = col - 1;
            const totalPosition = [];


            while (i >= 0 && j >= 0) {

                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(whitePosition);


                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([i, j]);
                totalPosition.push([i, j]);

                i--;
                j--;
            }

            // lower right
            i = row + 1;
            j = col + 1;


            while (i <= 7 && j <= 7) {

                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(whitePosition);


                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([i, j]);
                totalPosition.push([i, j]);

                i++;
                j++;
            }

            return totalPosition;
        }


        const AlternatediagonalChecking = (index) => {
            const [row, col] = index;
            console.log(index);

            // upper and right part
            let i = row - 1
            let j = col + 1;
            const totalPosition = [];


            while (i >= 0 && j <= 7) {

                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(whitePosition);


                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([i, j]);
                totalPosition.push([i, j]);

                i--;
                j++;
            }

            // lower left
            i = row + 1;
            j = col - 1;


            while (i <= 7 && j >= 0) {

                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(whitePosition);


                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([i, j]);
                totalPosition.push([i, j]);

                i++;
                j--;
            }

            return totalPosition;
        }



        const verticalChecking = (index) => {
            const position = [];
            let [row, col] = index;
            let i = row - 1;
            const totalPosition = [];



            // left side of position of chess icon
            while (i >= 0) {
                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })
                console.log('white' + whitePosition)

                if (whitePosition.length !== 0) break;



                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([i, col]);
                totalPosition.push([i, col]);

                i--;
            }


            i = row + 1;

            // right side of positicohess icn
            while (i <= 7) {
                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })

                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })
                console.log(blackPosition);
                if (blackPosition.length !== 0) {
                    totalPosition.push(blackPosition[0]);
                    break;
                }

                totalPosition.push([i, col]);
                i++;
            }
            return totalPosition;
        }


        const horizontalChecking = (index) => {
            const position = [];
            let [row, col] = index;
            let i = col - 1;

            const totalPosition = [];


            // left side of position of chess icon
            while (i >= 0) {
                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })
                console.log('white' + whitePosition)

                if (whitePosition.length !== 0) break;



                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })

                if (blackPosition.length !== 0) {

                    totalPosition.push(blackPosition[0]);
                    break;
                }
                console.log([row, i]);
                totalPosition.push([row, i]);

                i--;
            }


            i = col + 1;

            // right side of positicohess icn
            while (i <= 7) {
                const whitePosition = allWhitefillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })

                if (whitePosition.length !== 0) break;


                const blackPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })
                console.log(blackPosition);
                if (blackPosition.length !== 0) {
                    totalPosition.push(blackPosition[0]);
                    break;
                }

                totalPosition.push([row, i]);
                i++;
            }
            return totalPosition;
        }

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

            if (identity === "KnightWhite") {

                const revelantIndex = () => {
                    let [row, col] = index;
                    let possibleChances = [];
                    const row1 = row + 2; const col1 = col - 1;
                    possibleChances.push([row1, col1]);
                    const row2 = row + 2; const col2 = col + 1;
                    possibleChances.push([row2, col2]);
                    const row3 = row - 2; const col3 = col - 1;
                    possibleChances.push([row3, col3]);
                    const row4 = row - 2; const col4 = col + 1;
                    possibleChances.push([row4, col4]);
                    const row5 = row - 1; const col5 = col + 2;
                    possibleChances.push([row5, col5]);
                    const row6 = row - 1; const col6 = col - 2;
                    possibleChances.push([row6, col6]);
                    const row7 = row + 1; const col7 = col + 2;
                    possibleChances.push([row7, col7]);
                    const row8 = row + 1; const col8 = col - 2;
                    possibleChances.push([row8, col8]);

                    const revelantPossibleChances = possibleChances.filter((item) => {
                        let [newRow, newCol] = item;
                        return (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                    })

                    return revelantPossibleChances;
                }

                const allRevelentIndexes = revelantIndex();
                console.log(allRevelentIndexes);

                const whiteRevelantIndexes = allRevelentIndexes.filter((item) => {
                    let [newRow, newCol] = item;

                    const chances = allWhitefillPosition.filter((item) => {
                        const [row, col] = item;
                        return (newRow === row && newCol === col)
                    });


                    if (chances.length === 0) return [newRow, newCol];
                });




                return whiteRevelantIndexes;

            }
            if (identity === 'RookWhite') {

                const possibleVerticalIndexes = verticalChecking(index);
                const possibleHorizontalIndexes = horizontalChecking(index);
                return [...possibleHorizontalIndexes, ...possibleVerticalIndexes];
            }

            if (identity === "BishopWhite") {

                const possibleMainDiagonalIndexes = MaindiagonalChecking(index);
                const possibleAlternateDiagonalIndexes = AlternatediagonalChecking(index);
                // console.log(possibleMainDiagonalIndexes);
                return [...possibleMainDiagonalIndexes, ...possibleAlternateDiagonalIndexes];
            }

            if (identity === 'QueenWhite') {
                const possibleVerticalIndexes = verticalChecking(index);
                const possibleHorizontalIndexes = horizontalChecking(index);
                const possibleMainDiagonalIndexes = MaindiagonalChecking(index);
                const possibleAlternateDiagonalIndexes = AlternatediagonalChecking(index);
                return [...possibleVerticalIndexes, ...possibleHorizontalIndexes, ...possibleMainDiagonalIndexes, ...possibleAlternateDiagonalIndexes]

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

            if (identity === "KnightBlack") {

                const revelantIndex = () => {
                    let [row, col] = index;
                    let possibleChances = [];
                    const row1 = row + 2; const col1 = col - 1;
                    possibleChances.push([row1, col1]);
                    const row2 = row + 2; const col2 = col + 1;
                    possibleChances.push([row2, col2]);
                    const row3 = row - 2; const col3 = col - 1;
                    possibleChances.push([row3, col3]);
                    const row4 = row - 2; const col4 = col + 1;
                    possibleChances.push([row4, col4]);
                    const row5 = row - 1; const col5 = col + 2;
                    possibleChances.push([row5, col5]);
                    const row6 = row - 1; const col6 = col - 2;
                    possibleChances.push([row6, col6]);
                    const row7 = row + 1; const col7 = col + 2;
                    possibleChances.push([row7, col7]);
                    const row8 = row + 1; const col8 = col - 2;
                    possibleChances.push([row8, col8]);

                    const revelantPossibleChances = possibleChances.filter((item) => {
                        let [newRow, newCol] = item;
                        return (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                    })

                    return revelantPossibleChances;
                }

                const allRevelentIndexes = revelantIndex();
                console.log(allRevelentIndexes);

                const blackRevelantIndexes = allRevelentIndexes.filter((item) => {
                    let [newRow, newCol] = item;

                    const chances = allBlackfillPosition.filter((item) => {
                        const [row, col] = item;
                        return (newRow === row && newCol === col)
                    });


                    if (chances.length === 0) return [newRow, newCol];
                });




                return blackRevelantIndexes;

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