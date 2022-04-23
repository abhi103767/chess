import React, { createContext, useContext, useState } from 'react'
export const AuthContext = createContext();
function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);

    const handleAuth = (condition) => {
        setIsAuth(condition)
    }

    return (
        <AuthContext.Provider value={{ isAuth, handleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider 