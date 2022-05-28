import React, { useEffect, useState } from 'react'
import Cell from './Cell';





function Board() {

    const [allWhitefillPosition, setWhiteAllFillPosition] = useState([]);
    const [allBlackfillPosition, setBlackAllFillPosition] = useState([]);
    const [possiblePosition, setpossiblePosition] = useState([]);
    const [checkingKing, setcheckingKing] = useState(false);
    const [isCurrentChance, setCurrentChance] = useState('White');
    const [focusIdentity, setFocusIndentity] = useState('');
    const [attackOnWhiteKing, setAttackOnWhiteKing] = useState(false);
    const [attackOnBlackKing, setAttackOnBlackKing] = useState(false);
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


    const chessCoreLogic = (team, index, identity) => {





        const kingLogic = (index) => {
            const [row, col] = index;
            console.log(index);

            let allTeamMemberPosition;
            let enemyAllPosition;
            if (isCurrentChance === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }


            const revelantIndex = () => {
                let [row, col] = index;
                let possibleChances = [];
                const row1 = row + 1; const col1 = col;
                possibleChances.push([row1, col1]);
                const row2 = row + 1; const col2 = col - 1;
                possibleChances.push([row2, col2]);
                const row3 = row + 1; const col3 = col + 1;
                possibleChances.push([row3, col3]);
                const row4 = row; const col4 = col + 1;
                possibleChances.push([row4, col4]);
                const row5 = row; const col5 = col - 1;
                possibleChances.push([row5, col5]);
                const row6 = row - 1; const col6 = col;
                possibleChances.push([row6, col6]);
                const row7 = row - 1; const col7 = col - 1;
                possibleChances.push([row7, col7]);
                const row8 = row - 1; const col8 = col + 1;
                possibleChances.push([row8, col8]);

                const revelantPossibleChances = possibleChances.filter((item) => {
                    let [newRow, newCol] = item;
                    return (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                })

                return revelantPossibleChances;
            }

            const allRevelentIndexes = revelantIndex();
            console.log(allRevelentIndexes);

            const teamRevelantIndexes = allRevelentIndexes.filter((item) => {
                let [newRow, newCol] = item;

                const chances = allTeamMemberPosition.filter((item) => {
                    const [row, col] = item;
                    return (newRow === row && newCol === col)
                });


                if (chances.length === 0) return [newRow, newCol];
            });




            return teamRevelantIndexes;


        }

        const rookLogic = (index) => {
            const possibleVerticalIndexes = verticalChecking(index);
            const possibleHorizontalIndexes = horizontalChecking(index);
            return [...possibleHorizontalIndexes, ...possibleVerticalIndexes];
        }

        const bishopLogic = (index) => {
            const possibleMainDiagonalIndexes = MaindiagonalChecking(index);
            const possibleAlternateDiagonalIndexes = AlternatediagonalChecking(index);
            // console.log(possibleMainDiagonalIndexes);
            return [...possibleMainDiagonalIndexes, ...possibleAlternateDiagonalIndexes];
        }

        const pawnLogic = (index) => {
            console.log("Pawn" + index);
            let allTeamMemberPosition;
            let enemyPosition;
            let op;
            let reverse_op;

            function VarOperator(op) { //you object containing your operator
                this.operation = op;

                this.evaluate = function evaluate(param, value) {
                    switch (this.operation) {
                        case "+":
                            return param + value;
                        case "-":
                            return param - value;
                        default:
                            return param
                    }
                }
            }


            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyPosition = allBlackfillPosition;
                op = new VarOperator("+");
                reverse_op = new VarOperator('-');

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyPosition = allWhitefillPosition;
                op = new VarOperator("-")
                reverse_op = new VarOperator('+');
            }





            let [row, col] = index;
            // console.log(allTeamMemberPosition);
            const teamPossibleAheadChances = allTeamMemberPosition.filter((item) => {
                const [newRow, newCol] = item;
                console.log(newRow === op.evaluate(row, 1) && newCol === col)
                return (newRow === op.evaluate(row, 1) && newCol === col);
            });



            const enemyPossibleAheadChances = enemyPosition.filter((item) => {
                const [newRow, newCol] = item;
                return (newRow === op.evaluate(row, 1) && newCol === col);
            });
            // console.log(enemyPossibleAheadChances)
            // console.log(teamPossibleAheadChances);

            const teamPossibleNewAheadChances = [];
            if (teamPossibleAheadChances.length === 0 && enemyPossibleAheadChances.length === 0) teamPossibleNewAheadChances.push([op.evaluate(row, 1), col]);
            console.log(teamPossibleNewAheadChances);
            const teamPossbileCrossChances = allTeamMemberPosition.filter((item) => {
                const [newRow, newCol] = item;
                return (newRow === op.evaluate(row, 2) && newCol === col)
            });


            const enemyPossibleCrossChances = enemyPosition.filter((item) => {
                const [newRow, newCol] = item;
                return (newRow === op.evaluate(row, 2) && newCol === col);
            });
            const teamPossibleNewCrossChances = [];

            if ((teamPossbileCrossChances.length === 0 && row === 1 && enemyPossibleCrossChances.length === 0)) teamPossibleNewCrossChances.push([op.evaluate(row, 2), col]);
            if ((teamPossbileCrossChances.length === 0 && row === 6 && enemyPossibleCrossChances.length === 0)) teamPossibleNewCrossChances.push([op.evaluate(row, 2), col]);
            // console.log(teamPossbileCrossChances);




            const enemyPossibleChances = enemyPosition.filter((item) => {
                const [newRow, newCol] = item;
                return (newRow === op.evaluate(row, 1) && newCol === op.evaluate(col, 1)) || (newRow === op.evaluate(row, 1) && newCol === reverse_op.evaluate(col, 1))
            });
            console.log(enemyPossibleChances)

            // console.log([...teamPossibleNewAheadChances, ...teamPossibleNewCrossChances, ...enemyPossibleChances]);
            // console.log(enemyPossibleChances, teamPossibleNewAheadChances, teamPossibleNewCrossChances)


            return [...teamPossibleNewAheadChances, ...teamPossibleNewCrossChances, ...enemyPossibleChances]
        }
        // console.log(whitePossibleAheadChances, whitePossibleAheadChances, blackPossibleChances)

        const knight = (index) => {
            let allTeamMemberPosition;
            let enemyPosition;
            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyPosition = allWhitefillPosition;
            }


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

            const teamRevelantIndexes = allRevelentIndexes.filter((item) => {
                let [newRow, newCol] = item;

                const chances = allTeamMemberPosition.filter((item) => {
                    const [row, col] = item;
                    return (newRow === row && newCol === col)
                });


                if (chances.length === 0) return [newRow, newCol];
            });




            return teamRevelantIndexes;
        }

        const MaindiagonalChecking = (index) => {
            let allTeamMemberPosition;
            let enemyAllPosition;
            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }


            const [row, col] = index;
            console.log(index);

            // upper and left part
            let i = row - 1
            let j = col - 1;
            const totalPosition = [];


            while (i >= 0 && j >= 0) {

                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(teamPosition);


                if (teamPosition.length !== 0) break;


                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
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

                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(teamPosition);


                if (teamPosition.length !== 0) break;


                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
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

            let allTeamMemberPosition;
            let enemyAllPosition;
            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }


            // upper and right part


            let i = row - 1
            let j = col + 1;
            const totalPosition = [];


            while (i >= 0 && j <= 7) {

                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(teamPosition);


                if (teamPosition.length !== 0) break;


                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
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

                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                console.log(teamPosition);


                if (teamPosition.length !== 0) break;


                const enemyPosition = allBlackfillPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && j === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
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
            let allTeamMemberPosition;
            let enemyAllPosition;
            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }





            // left side of position of chess icon
            while (i >= 0) {
                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })
                console.log('white' + teamPosition)

                if (teamPosition.length !== 0) break;



                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
                    break;
                }
                console.log([i, col]);
                totalPosition.push([i, col]);

                i--;
            }


            i = row + 1;

            // right side of positicohess icn
            while (i <= 7) {
                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })

                if (teamPosition.length !== 0) break;


                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (i === newRow && col === newCol);
                })
                console.log(enemyPosition);
                if (enemyPosition.length !== 0) {
                    totalPosition.push(enemyPosition[0]);
                    break;
                }

                totalPosition.push([i, col]);
                i++;
            }
            return totalPosition;



        }


        const queenLogic = (index) => {
            return [...horizontalChecking(index), ...verticalChecking(index), ...MaindiagonalChecking(index), ...AlternatediagonalChecking(index)];
        }

        const horizontalChecking = (index) => {
            const position = [];
            let [row, col] = index;
            let i = col - 1;

            const totalPosition = [];
            let allTeamMemberPosition;
            let enemyAllPosition;
            if (team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }


            // left side of position of chess icon


            while (i >= 0) {
                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })
                console.log('white' + teamPosition)

                if (teamPosition.length !== 0) break;



                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })

                if (enemyPosition.length !== 0) {

                    totalPosition.push(enemyPosition[0]);
                    break;
                }
                console.log([row, i]);
                totalPosition.push([row, i]);

                i--;
            }


            i = col + 1;

            // right side of positicohess icn
            while (i <= 7) {
                const teamPosition = allTeamMemberPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })

                if (teamPosition.length !== 0) break;


                const enemyPosition = enemyAllPosition.filter((item) => {
                    const [newRow, newCol] = item;
                    return (row === newRow && i === newCol);
                })
                console.log(enemyPosition);
                if (enemyPosition.length !== 0) {
                    totalPosition.push(enemyPosition[0]);
                    break;
                }

                totalPosition.push([row, i]);
                i++;
            }
            return totalPosition;

        }

        if (identity === "KingSafe") {

            const isKingAttacked = () => {
                let enemy = team === "White" ? "Black" : "White";
                let allEnemyPosition;
                let allTeamMemberPosition;
                const totalPosition = [];
                console.log(`king ${team} is attacked`);

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
                console.log('index ' + row + " " + col);

                function isKingInUnderAttacked(row, col) {

                    // Pawn Attack on the king
                    const PawnEnemy = [...pawnLogic([row, col])];
                    console.log(PawnEnemy);

                    const isPawnEnemyPresent = PawnEnemy.map((item) => {
                        const [pawnRow, pawnCol] = item;
                        const isPawnPresent = allEnemyPosition[pawnEnemyPositionName].filter((item) => {
                            const [newPawnRow, newPawnCol] = item;
                            return (pawnRow === newPawnRow && pawnCol === newPawnCol);
                        })
                        if (isPawnPresent.length !== 0) return true;
                        return false
                    });
                    console.log(isPawnEnemyPresent);
                    if (!isPawnEnemyPresent.every((item) => item === false)) return true;



                    // Knight Attack on the king
                    const knightEnemy = [...knight([row, col])];
                    // console.log(knightEnemy);
                    const isKnightEnemyPresent = knightEnemy.map((item) => {
                        const [knightRow, knightCol] = item;
                        const isKnightPresent = allEnemyPosition[knightEnemyPositionName].filter((item) => {
                            const [newKnightRow, newKnightCol] = item;
                            return (knightRow === newKnightRow && knightCol === newKnightCol);
                        })
                        console.log(isKnightPresent)
                        if (isKnightPresent.length !== 0) return true;
                        return false;
                    })
                    console.log(isKnightEnemyPresent);

                    if (!isKnightEnemyPresent.every((item) => item === false)) return true;


                    // Bisop and Queen Attack on the king

                    const BishopAndQueenEnemy = [...bishopLogic([row, col])];

                    const isBishopAndQueenEnemy = BishopAndQueenEnemy.map((item) => {

                        const [bisopAndQueenRow, bishopAndQueenCol] = item;
                        const isBishopPresent = allEnemyPosition[bishopEnemyPositionName].filter((item) => {
                            const [newBishopRow, newBishopCol] = item;
                            return (bisopAndQueenRow === newBishopRow && bishopAndQueenCol === newBishopCol);
                        });
                        if (isBishopPresent.length !== 0) return true;

                        const isQueenPresent = allEnemyPosition[queenEnemyPositionName].filter((item) => {
                            const [newQueenRow, newQueenCol] = item;
                            return (bisopAndQueenRow === newQueenRow && bishopAndQueenCol === newQueenCol);
                        });
                        if (isQueenPresent.length !== 0) return true;
                        return false;

                    })
                    console.log(isBishopAndQueenEnemy);

                    if (!isBishopAndQueenEnemy.every((item) => item === false)) return true;


                    // Rook and Queen Attack on the king

                    const RookAndQueenEnemy = [...rookLogic([row, col])];

                    const isRookAndQueenEnemy = RookAndQueenEnemy.map((item) => {

                        const [rookAndQueenRow, rookAndQueenCol] = item;
                        const isRookPresent = allEnemyPosition[rookEnemyPositionName].filter((item) => {
                            const [newRookRow, newRookCol] = item;
                            return (rookAndQueenRow === newRookRow && rookAndQueenCol === newRookCol);
                        });
                        if (isRookPresent.length !== 0) return true;

                        const isQueenPresent = allEnemyPosition[queenEnemyPositionName].filter((item) => {
                            const [newQueenRow, newQueenCol] = item;
                            return (rookAndQueenRow === newQueenRow && rookAndQueenCol === newQueenCol);
                        });
                        if (isQueenPresent.length !== 0) return true;
                        return false;
                    })
                    console.log(isRookAndQueenEnemy);

                    if (!isRookAndQueenEnemy.every((item) => item === false)) return true;


                    // Enemy king attack on our king.

                    const KingEnemy = [...kingLogic([row, col])];
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

            }
            return isKingAttacked();

        }



        if (team === 'White') {


            if (identity === 'PawnWhite') {
                return pawnLogic(index);
            }

            if (identity === "KnightWhite") {
                return knight(index);
            }
            if (identity === 'RookWhite') {

                return [...rookLogic(index)];
            }

            if (identity === "BishopWhite") {
                // console.log(possibleMainDiagonalIndexes);
                return [...bishopLogic(index)];
            }

            if (identity === 'QueenWhite') {

                return [...queenLogic(index)];

            }
            if (identity === 'KingWhite') {
                return [...kingLogic(index)];
            }

        }

        console.log(isCurrentChance, identity);
        if (team === 'Black') {
            if (identity === 'PawnBlack') {
                return pawnLogic(index);
            }

            if (identity === "KnightBlack") {
                return knight(index);

            }

            if (identity === 'RookBlack') {
                return rookLogic(index);
            }

            if (identity === "BishopBlack") {
                // console.log(possibleMainDiagonalIndexes);
                return bishopLogic(index);
            }

            if (identity === 'QueenBlack') {

                return [...queenLogic(index)];

            }
            if (identity === 'KingBlack') {
                return [...kingLogic(index)];
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
        let possibleChances = chessCoreLogic(isCurrentChance, index, identity);
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
        setcheckingKing(checkingKing === true ? false : true);
        setBlackAllFillPosition(duplicateBlackBoard);
        setWhiteAllFillPosition(duplicateWhiteBoard);


    }
        , [isCurrentChance])

    // checking king in on attack


    useEffect(() => {

        const iskingAttacked = chessCoreLogic(isCurrentChance, [], 'KingSafe');
        if (iskingAttacked === true && isCurrentChance === "White") setAttackOnWhiteKing(true);
        if (iskingAttacked === true && isCurrentChance === "Black"); setAttackOnBlackKing(true);
    }, [checkingKing])




    useEffect(() => {
        if (attackOnBlackKing) {
            setAttackOnBlackKing(false)

        }
        if (attackOnWhiteKing) {
            alert('White is under Attack')


        }




    }, [attackOnBlackKing, attackOnWhiteKing])









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