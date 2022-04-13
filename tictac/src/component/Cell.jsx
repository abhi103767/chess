import React from 'react'

function Cell({ index, handleClick, value }) {
    console.log(value);
    // console.log(handleClick(index))
    return (
        <div className='cell' onClick={() => {
            handleClick(index);
        }}>
            <p >{value}</p>
        </div>
    )
}

export default Cell