import React, { createContext, useState } from 'react'

export const CartContext = createContext();


function CartContextProvider({ children }) {
    const [cart, setCart] = useState(0);

    const handleChange = (inc) => {
        setCart(cart + inc);
    }
    return (
        <CartContext.Provider value={{ cart, handleChange }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider