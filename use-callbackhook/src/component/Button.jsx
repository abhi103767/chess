import React from 'react'

function Button({ handleClick, text }) {
    console.log("button is" + text);
    return (
        <div>
            <button onClick={handleClick}>Increase {text}</button>
        </div>
    )
}

export default React.memo(Button)