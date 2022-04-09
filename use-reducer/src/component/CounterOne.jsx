import React, { useReducer } from 'react'
let intialValue = 0;


function reducer(state, action) {

    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}
function CounterOne() {
    let [count, dispatch] = useReducer(reducer, intialValue)

    return (
        <div><div>{count}</div>
            <button onClick={() => {
                dispatch('increment')
            }}>Increment</button>
            <button onClick={() => {
                dispatch('decrement');
            }}>Decrement</button>
            <button onClick={() => {
                dispatch('reset');
            }}>Reset</button></div>
    )
}

export default CounterOne