import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav >
          <div className='navbar'>
          <div className="logo">
            logo
          </div>
          <div className='options'>
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            
          </div>
          <div className='profile'>
            profile
          </div>
          </div>
        </nav>
    </div>
  )
}
