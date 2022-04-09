import React, { useReducer } from 'react'

let intialValue = {
    firstCounter : 0
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'increment' :
      return { firstCounter : state.firstCounter + action.value};
            case 'decrement' :
          return { firstCounter : state.firstCounter - action.value};
        case  'increaseBy5' :
            return { firstCounter: state.firstCounter + action.value};
        case 'reset' :
            return {firstCounter : 0};
            default :
            return state;
    }
}

function CounterTwo() {

    let [count,dispatch] = useReducer(reducer,intialValue);
  return (
    <div>
        <p>{count.firstCounter}</p>
        <button onClick={() => {
            dispatch({type : 'increment' , value : 1});
        }}>Increment</button>
        <button onClick={() => {
            dispatch({type: 'decrement', value : 1});
        }}>Decrement</button>
        <button onClick={() => {
            dispatch({type : 'reset'});
        }}>Reset</button>
        <button onClick={() => {
            dispatch({type:'increaseBy5', value : 5})
        }}>IncreaseBy5</button>
    </div>
  )
}

export default CounterTwo