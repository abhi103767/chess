import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
    console.log('component E is rendering');

    return (
        <div>
            <ComponentF />
        
        </div>
    )
}

export default ComponentE