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
            <li><NavLink to="/sellwaste">Sell waste</NavLink></li>
            <li><NavLink to="/buywaste">Buy waste</NavLink></li>
            <li><NavLink to="/orderdetail">Order details</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            
          </div>
          <div className='profile'>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          </div>
          </div>
        </nav>
    </div>
  )
}
