import React, { useState } from 'react'

function Increament() {
    let [count, setCounter] = useState(0);
    console.log("Rending of Increament");

    function increament() {
        console.log('increament');
        setCounter((perv) => {
            return perv + 1;
        });
    }

    function ByFiveincreament() {

        for (let i = 0; i < 3; i++) {
            increament();
        }

        increament();
        increament();
    }
    return (

        <div>
            <h1>{count}</h1>

            <button onClick={increament}>Increament By 1</button>
            <button onClick={ByFiveincreament}>Increament By 5</button>
        </div>

    )
}

export default Increament