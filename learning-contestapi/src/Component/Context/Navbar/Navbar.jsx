import React, { useContext } from 'react'
import { CartContext } from '../CartContextProvider'

function Navbar() {
    const { cart, handleChange } = useContext(CartContext);
    console.log(cart)


    return (
        <div>
            <h1>{cart}</h1>
            <button onClick={() => {
                handleChange(2);
            }}> Increment</button>
        </div>
    )
}

export default Navbar