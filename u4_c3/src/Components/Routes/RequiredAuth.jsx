import axios from "axios";
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const RequiredAuth = ({ children }) => {

    // const [token, setToken] = useState('');


    // const handleLogin = (email, password) => {

    // }

    // const [token, ]

    //   get the token from auth context and if token exists return the children otherwise return the follwoing
    return <h3>Please <Link to="/login">login</Link> to access this page</h3>
}