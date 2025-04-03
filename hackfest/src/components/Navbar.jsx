import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </nav>
    </div>
  )
}
