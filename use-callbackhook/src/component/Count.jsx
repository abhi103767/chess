

import React from 'react'

function Count(props) {
    console.log('Count is reindering')
    return (
        <div>
            <p>{props.text} - {props.count}</p>
        </div>
    )
}

export default Count