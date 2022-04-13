

import React from 'react'

function Count(props) {
    console.log(props.text + ' is reindering')
    return (
        <div>
            <p>{props.text} - {props.count}</p>
        </div>
    )
}

export default React.memo(Count)