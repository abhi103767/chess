import React, { useEffect, useState } from 'react'
// const ChessSymbols = {
//     'P' : 
// }




function Cell({ identity, focusIdentity, index, handleClick, focusIndex, possiblePosition, isCurrentChance, ChangingPosition }) {
    const [row, col] = index;
    const [newRow, newCol] = focusIndex;


    // console.log(focusIndex);

    // console.log(identity, row, col);
    const [isBackgroundColor, setIsBackgroundColor] = useState('');

    // row === newRow && col === newCol && isBackgroundColor('backgroundFocus');

    useEffect(() => {
        setIsBackgroundColor((perv) => {

            if (newRow === row && newCol === col) {
                return 'backGroundFocus'
            }
            else {
                perv = (row + col) % 2 === 0 ? 'backgroundBlack' : 'backgroundWhite';
                return perv
            }

        })
    }, [newRow, newCol])
    const cell = 'cell';

    return (
        <div className={`${isBackgroundColor} ${cell}`
        } onClick={
            () => {
                let current = '';
                let currentFocus = '';
                if (identity !== null) {
                    for (let i = identity.length - 5; i != identity.length && identity !== null; i++) {
                        current += identity[i];
                    }

                    for (let i = focusIdentity.length - 5; i != focusIdentity.length && focusIdentity !== null; i++) {
                        currentFocus += focusIdentity[i];
                    }
                }


                if (identity !== null && current === isCurrentChance) handleClick(index, identity);
                else if (identity === null
                    || (currentFocus === 'White' && current === "Black")
                    || (currentFocus === 'Black' && current === "White")) {
                    possiblePosition.forEach((item) => {
                        let [possibleRow, possibleCol] = item;
                        if (possibleRow === row && possibleCol === col) ChangingPosition(row, col, current, identity);
                    })
                }

            }
        }>
            <div style={{ color: 'red' }} >{identity}</div>

        </div >
    )
}

export default Cell