import React, { useEffect, useState } from 'react'
// const ChessSymbols = {
//     'P' : 
// }




function Cell({ identity, index, handleClick, focusIndex, possiblePosition, isCurrentChance }) {
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
                if (identity !== null) {
                    for (let i = identity.length - 5; i != identity.length && identity !== null; i++) {
                        current += identity[i];
                    }
                }
                console.log(current);
                if (identity !== null && current === isCurrentChance) handleClick(index, identity);

            }
        }>
            <div style={{ color: 'red' }} >{identity}</div>

        </div >
    )
}

export default Cell