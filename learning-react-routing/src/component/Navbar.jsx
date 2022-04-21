import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/userlist'>UserList</Link>

        </div>
    )
}

export default Navbar