import React, { navigate, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'


function Login() {
    const { handleAuth } = useContext(AuthContext)


    const navigate = useNavigate()
    return (
        <div>
            <input type={'text'} placeholder="type your First Name"></input>
            <input type={'text'} placeholder="type your Last Name"></input>
            <button onClick={() => {
                handleAuth(true)
                navigate('/userlist');

            }}>Submit</button>
        </div>
    )
}

export default Login