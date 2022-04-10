import React, { useContext } from 'react'
import { ChannelContext, UserContext, CounterContext } from '../App'



function ComponentF() {
    console.log("component F is rending");
    // let user = useContext(UserContext);
    // let channel = useContext(ChannelContext);
    let counter = useContext(CounterContext);
    console.log(counter);
    // console.log(counter.counter, counter.increment);



    return (
        <div>
            <div>{counter.newCounter.newCounter}</div>
            <button onClick={() => {
                counter.dispatch({ type: 'increment', value: 1 })
            }}>Increment</button>
            <button onClick={() => {
                counter.dispatch({ type: "decrement", value: 1 })
            }}>Decrement</button>
        </div>
    )
}
export default ComponentF