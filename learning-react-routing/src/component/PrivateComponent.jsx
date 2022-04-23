import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

function PrivateComponent({ children }) {

    const { isAuth } = useContext(AuthContext)
    console.log(isAuth)
    if (!isAuth) {
        return <Navigate to='/userlist/login' replace={true} />;
    }
    return (
        children
    )
}

export default PrivateComponent