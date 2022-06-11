import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import Pawn from "../Logic/Pawn";
import knight from "../Logic/Knight";
import queenLogic from "../Logic/Queen";
import rookLogic from "../Logic/Rook";
import bishopLogic from "../Logic/Bishop";
import kingLogic from "../Logic/King";

function Board() {
    const [allWhitefillPosition, setWhiteAllFillPosition] = useState([]);
    const [allBlackfillPosition, setBlackAllFillPosition] = useState([]);
    const [possiblePosition, setpossiblePosition] = useState([]);
    const [checkingKing, setcheckingKing] = useState(false);
    const [isCurrentChance, setCurrentChance] = useState("White");
    const [focusIdentity, setFocusIndentity] = useState("");
    const [attackOnWhiteKing, setAttackOnWhiteKing] = useState(false);
    const [attackOnBlackKing, setAttackOnBlackKing] = useState(false);
    const [whiteBoard, setWhiteBoard] = useState({
        PawnWhite: [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7],
        ],
        KnightWhite: [
            [0, 1],
            [0, 6],
        ],
        RookWhite: [
            [0, 0],
            [0, 7],
        ],
        BishopWhite: [
            [0, 2],
            [0, 5],
        ],
        QueenWhite: [[0, 3]],
        KingWhite: [[0, 4]],
    });

    const [blackBoard, setBlackBoard] = useState({
        PawnBlack: [
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 3],
            [6, 4],
            [6, 5],
            [6, 6],
            [6, 7],
        ],
        KnightBlack: [
            [7, 1],
            [7, 6],
        ],
        RookBlack: [
            [7, 0],
            [7, 7],
        ],
        BishopBlack: [
            [7, 2],
            [7, 5],
        ],
        QueenBlack: [[7, 3]],
        KingBlack: [[7, 4]],
    });

    const chessCoreLogic = (team, index, identity) => {
        if (identity === "KingSafe") {
            const isKingAttacked = () => {
                let enemy = team === "White" ? "Black" : "White";
                let allEnemyPosition;
                let allTeamMemberPosition;
                const totalPosition = [];
                // console.log(`king ${team} is attacked`);

                const kingPositionName = "King" + team;
                const kingEnemyPositionName = "King" + team;
                const pawnEnemyPositionName = "Pawn" + enemy;
                const knightEnemyPositionName = "Knight" + enemy;
                const rookEnemyPositionName = "Rook" + enemy;
                const bishopEnemyPositionName = "Bishop" + enemy;
                const queenEnemyPositionName = "Queen" + enemy;

                if (team === "White") {
                    allEnemyPosition = { ...blackBoard };
                    allTeamMemberPosition = { ...whiteBoard };
                }
                if (team === "Black") {
                    allEnemyPosition = { ...whiteBoard };
                    allTeamMemberPosition = { ...blackBoard };
                }

                const [row, col] = allTeamMemberPosition[kingPositionName][0];
                // console.log('index ' + row + " " + col);

                function isKingInUnderAttacked(row, col) {
                    // Pawn Attack on the king
                    const PawnEnemy = [
                        ...Pawn(
                            [row, col],
                            team,
                            allBlackfillPosition,
                            allWhitefillPosition
                        ),
                    ];
                    // console.log(PawnEnemy);

                    const isPawnEnemyPresent = PawnEnemy.map((item) => {
                        const [pawnRow, pawnCol] = item;
                        const isPawnPresent = allEnemyPosition[
                            pawnEnemyPositionName
                        ].filter((item) => {
                            const [newPawnRow, newPawnCol] = item;
                            return pawnRow === newPawnRow && pawnCol === newPawnCol;
                        });
                        if (isPawnPresent.length !== 0) return true;
                        return false;
                    });
                    // console.log(isPawnEnemyPresent);
                    if (!isPawnEnemyPresent.every((item) => item === false)) return true;

                    // Knight Attack on the king
                    const knightEnemy = [
                        ...knight(
                            [row, col],
                            team,
                            allBlackfillPosition,
                            allWhitefillPosition
                        ),
                    ];
                    // console.log(knightEnemy);
                    const isKnightEnemyPresent = knightEnemy.map((item) => {
                        const [knightRow, knightCol] = item;
                        const isKnightPresent = allEnemyPosition[
                            knightEnemyPositionName
                        ].filter((item) => {
                            const [newKnightRow, newKnightCol] = item;
                            return knightRow === newKnightRow && knightCol === newKnightCol;
                        });
                        // console.log(isKnightPresent)
                        if (isKnightPresent.length !== 0) return true;
                        return false;
                    });
                    // console.log(isKnightEnemyPresent);

                    if (!isKnightEnemyPresent.every((item) => item === false))
                        return true;

                    // Bisop and Queen Attack on the king

                    const BishopAndQueenEnemy = [
                        ...bishopLogic(
                            [row, col],
                            team,
                            allBlackfillPosition,
                            allWhitefillPosition
                        ),
                    ];

                    const isBishopAndQueenEnemy = BishopAndQueenEnemy.map((item) => {
                        const [bisopAndQueenRow, bishopAndQueenCol] = item;
                        const isBishopPresent = allEnemyPosition[
                            bishopEnemyPositionName
                        ].filter((item) => {
                            const [newBishopRow, newBishopCol] = item;
                            return (
                                bisopAndQueenRow === newBishopRow &&
                                bishopAndQueenCol === newBishopCol
                            );
                        });
                        if (isBishopPresent.length !== 0) return true;

                        const isQueenPresent = allEnemyPosition[
                            queenEnemyPositionName
                        ].filter((item) => {
                            const [newQueenRow, newQueenCol] = item;
                            return (
                                bisopAndQueenRow === newQueenRow &&
                                bishopAndQueenCol === newQueenCol
                            );
                        });
                        if (isQueenPresent.length !== 0) return true;
                        return false;
                    });
                    console.log(isBishopAndQueenEnemy);

                    if (!isBishopAndQueenEnemy.every((item) => item === false))
                        return true;

                    // Rook and Queen Attack on the king

                    const RookAndQueenEnemy = [
                        ...rookLogic(
                            [row, col],
                            team,
                            allBlackfillPosition,
                            allWhitefillPosition
                        ),
                    ];

                    const isRookAndQueenEnemy = RookAndQueenEnemy.map((item) => {
                        const [rookAndQueenRow, rookAndQueenCol] = item;
                        const isRookPresent = allEnemyPosition[
                            rookEnemyPositionName
                        ].filter((item) => {
                            const [newRookRow, newRookCol] = item;
                            return (
                                rookAndQueenRow === newRookRow && rookAndQueenCol === newRookCol
                            );
                        });
                        if (isRookPresent.length !== 0) return true;

                        const isQueenPresent = allEnemyPosition[
                            queenEnemyPositionName
                        ].filter((item) => {
                            const [newQueenRow, newQueenCol] = item;
                            return (
                                rookAndQueenRow === newQueenRow &&
                                rookAndQueenCol === newQueenCol
                            );
                        });
                        if (isQueenPresent.length !== 0) return true;
                        return false;
                    });
                    // console.log(isRookAndQueenEnemy);

                    if (!isRookAndQueenEnemy.every((item) => item === false)) return true;

                    // Enemy king attack on our king.

                    const KingEnemy = [
                        ...kingLogic(
                            [row, col],
                            team,
                            allBlackfillPosition,
                            allWhitefillPosition
                        ),
                    ];
                    // const isKingEnemyPresent = KingEnemy.map((item) => {
                    //     const [kingRow, kingCol] = item;
                    //     const isKingPresent = allEnemyPosition[kingEnemyPositionName].filter((item) => {
                    //         const [newKingRow, newKingCol] = item;
                    //         return (kingRow === newKingRow && newKingCol === kingCol);
                    //     })
                    //     if (isKingPresent.length !== 0) return true;
                    //     return false;
                    // })

                    // if (!isKingEnemyPresent.every((item) => item === false)) return true;

                    return false;
                }

                return isKingInUnderAttacked(row, col);
            };
            return isKingAttacked();
        }

        if (team === "White") {
            if (identity === "PawnWhite") {
                return Pawn(index, team, allBlackfillPosition, allWhitefillPosition);
            }

            if (identity === "KnightWhite") {
                return knight(index, team, allBlackfillPosition, allWhitefillPosition);
            }
            if (identity === "RookWhite") {
                return [
                    ...rookLogic(index, team, allBlackfillPosition, allWhitefillPosition),
                ];
            }

            if (identity === "BishopWhite") {
                // console.log(possibleMainDiagonalIndexes);
                return [
                    ...bishopLogic(
                        index,
                        team,
                        allBlackfillPosition,
                        allWhitefillPosition
                    ),
                ];
            }

            if (identity === "QueenWhite") {
                return [
                    ...queenLogic(
                        index,
                        team,
                        allBlackfillPosition,
                        allWhitefillPosition
                    ),
                ];
            }
            if (identity === "KingWhite") {
                return [
                    ...kingLogic(index, team, allBlackfillPosition, allWhitefillPosition),
                ];
            }
        }

        // console.log(isCurrentChance, identity);
        if (team === "Black") {
            if (identity === "PawnBlack") {
                return Pawn(index, team, allBlackfillPosition, allWhitefillPosition);
            }

            if (identity === "KnightBlack") {
                return knight(index, team, allBlackfillPosition, allWhitefillPosition);
            }

            if (identity === "RookBlack") {
                return rookLogic(
                    index,
                    team,
                    allBlackfillPosition,
                    allWhitefillPosition
                );
            }

            if (identity === "BishopBlack") {
                // console.log(possibleMainDiagonalIndexes);
                return bishopLogic(
                    index,
                    team,
                    allBlackfillPosition,
                    allWhitefillPosition
                );
            }

            if (identity === "QueenBlack") {
                return [
                    ...queenLogic(
                        index,
                        team,
                        allBlackfillPosition,
                        allWhitefillPosition
                    ),
                ];
            }
            if (identity === "KingBlack") {
                return [
                    ...kingLogic(index, team, allBlackfillPosition, allWhitefillPosition),
                ];
            }
        }

        // console.log(allWhitefillPosition);
        // console.log(allBlackfillPosition);
    };

    let [board, setBoard] = useState(
        Array(8).fill(Array(8).map((item) => item.fill(null)))
    );
    let [focusIndex, setFocusIndex] = useState([]);
    // console.log(board)
    // console.log(focusIndex);

    const changeFocus = (index, identity) => {
        // console.log(index, identity);
        setFocusIndex([...index]);
        let possibleChances = chessCoreLogic(isCurrentChance, index, identity);
        // console.log(possibleChances);

        setpossiblePosition([...possibleChances]);
        setFocusIndentity(identity);
    };

    const ChangingPosition = (row, col, current, identity) => {
        // console.log(row, col)

        if (isCurrentChance === "White") {
            if (current === "Black") {
                // console.log(current);
                const duplicateBlackBoard = [...blackBoard[identity]];
                // console.log(row, col);
                // console.log(duplicateWhiteBoard);

                const duplicateNewBlackBoard = duplicateBlackBoard.filter((item) => {
                    let [newRow, newCol] = item;
                    // console.log(newRow == row && newCol == col);
                    return !(newRow === row && newCol === col);
                });
                // console.log(duplicateNewBlackBoard)
                setBlackBoard((perv) => ({
                    ...perv,
                    [identity]: duplicateNewBlackBoard,
                }));
            }
            // console.log('focusIdentity' + focusIdentity);
            const duplicateWhiteBoard = [...whiteBoard[focusIdentity]];
            // console.log(row, col);
            // console.log(duplicateWhiteBoard);
            let [currentFocusRow, currentFocusCol] = focusIndex;

            const duplicateNewWhiteBoard = duplicateWhiteBoard.filter((item) => {
                let [newRow, newCol] = item;
                return !(newRow === currentFocusRow && newCol === currentFocusCol);
            });

            duplicateNewWhiteBoard.push([row, col]);

            setWhiteBoard((perv) => ({
                ...perv,
                [focusIdentity]: duplicateNewWhiteBoard,
            }));
            setCurrentChance((perv) => {
                if (perv === "White") return "Black";
                else return "White";
            });
            setFocusIndex([]);
        } else {
            if (current === "White") {
                // console.log(current);
                const duplicateWhiteBoard = [...whiteBoard[identity]];
                // console.log(row, col);
                // console.log(duplicateWhiteBoard);

                const duplicateNewWhiteBoard = duplicateWhiteBoard.filter((item) => {
                    let [newRow, newCol] = item;
                    return !(newRow === row && newCol === col);
                });
                // console.log(duplicateNewWhiteBoard)

                setWhiteBoard((perv) => ({
                    ...perv,
                    [identity]: duplicateNewWhiteBoard,
                }));
            }

            const duplicateBlackBoard = [...blackBoard[focusIdentity]];
            // console.log(row, col);
            // console.log(duplicateWhiteBoard);
            let [currentFocusRow, currentFocusCol] = focusIndex;

            const duplicateNewBlackBoard = duplicateBlackBoard.filter((item) => {
                let [newRow, newCol] = item;
                return !(newRow === currentFocusRow && newCol === currentFocusCol);
            });

            duplicateNewBlackBoard.push([row, col]);
            // console.log(duplicateNewBlackBoard);

            setBlackBoard((perv) => ({
                ...perv,
                [focusIdentity]: duplicateNewBlackBoard,
            }));
            setCurrentChance((perv) => {
                if (perv === "White") return "Black";
                else return "White";
            });
            setFocusIndex([]);
        }
    };

    // console.log(board);

    // providing position of white pieces of chess into board
    useEffect(() => {
        let duplicateBoard = Array(8)
            .fill()
            .map(() => Array(8).fill(null));
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
            });
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
            });
        }
        setBoard(duplicateBoard);
        setcheckingKing(checkingKing === true ? false : true);
        setBlackAllFillPosition(duplicateBlackBoard);
        setWhiteAllFillPosition(duplicateWhiteBoard);
    }, [isCurrentChance]);

    // checking king in on attack

    useEffect(() => {
        const iskingAttacked = chessCoreLogic(isCurrentChance, [], "KingSafe");
        // console.log(iskingAttacked)
        console.log(isCurrentChance);
        if (iskingAttacked === true && isCurrentChance === "White")
            setAttackOnWhiteKing(true);
        if (iskingAttacked === true && isCurrentChance === "Black");
        setAttackOnBlackKing(true);
    }, [checkingKing]);

    useEffect(() => {
        if (attackOnBlackKing) {
            setAttackOnBlackKing(false);
        }
        if (attackOnWhiteKing) {
            alert("White is under Attack");
        }
    }, [attackOnBlackKing, attackOnWhiteKing]);

    return (
        <div className="">
            <div className="">Current Chance  {isCurrentChance === "Black" ? "Red" : "Blue"}</div>
            <div className="board">
                {board.map((item, row) =>
                    item.map((subitem, col) => (
                        <Cell
                            identity={subitem}
                            index={[row, col]}
                            handleClick={changeFocus}
                            isCurrentChance={isCurrentChance}
                            focusIndex={focusIndex}
                            possiblePosition={possiblePosition}
                            ChangingPosition={ChangingPosition}
                            focusIdentity={focusIdentity}
                        />

                    ))
                )}
            </div>
        </div>
    );
}

export default Board;
