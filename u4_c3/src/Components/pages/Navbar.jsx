
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/' style={{ padding: '5px' }}>Home</Link>
        <Link to='/about' style={{ padding: '5px' }}>About</Link>
        <Link to='/books' style={{ padding: '5px' }}>Books</Link>
        <Link to='/login' style={{ padding: '5px' }}>Login</Link>
      </nav>
    </>
  );
};
