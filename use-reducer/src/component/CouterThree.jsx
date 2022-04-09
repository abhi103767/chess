import React, { useReducer } from 'react'
let intialValue = 0;

// we want of add another counter we can simply add it by declaring another 
// use Reducer and not repeating logic code again
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
function CounterThree() {
    let [count, dispatch] = useReducer(reducer, intialValue);
    let [countTwo, dispatchTwo] = useReducer(reducer, intialValue);

    return (
        <div><div>{count}</div>
            <button onClick={() => {
                dispatch('increment')
            }}>Increment</button>
            <button onClick={() => {
                dispatch('decrement');
            }}>Decrement</button>

            <div>{countTwo}</div>

            <button onClick={() => {
                dispatchTwo('increment')
            }}>Increment</button>
            <button onClick={() => {
                dispatchTwo('decrement');
            }}>Decrement</button>
            <button onClick={() => {
                dispatchTwo('reset');
            }}>Reset</button></div>
    )
}

export default CounterThree