import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Sellwaste from './components/Sellwaste';
import Buywaste from './components/Buywaste';
import Orderdetail from './components/Orderdetail';
import Profile from './components/Profile';
import SchemeUpdates from "./components/SchemeUpdates";

function App() {

  const router = createBrowserRouter([
    {
      path: '/home',
      element: <><Navbar/><Home /></>
    },
    {
      path: '/about',
      element: <><Navbar/><About/></>
    },
    {
      path: '/',
      element: <><Login/></>
    },
    {
      path: '/register',
      element: <><Register/></>
    },
    {
      path: '/sellwaste',
      element: <><Navbar/><Sellwaste/></>
    },
    {
      path: '/buywaste',
      element: <><Navbar/><Buywaste/></>
    },
    {
      path: '/orderdetail',
      element: <><Navbar/><Orderdetail/></>
    },
    {
      path: '/profile',
      element: <><Navbar/><Profile/></>
    }
  ])

  return (
    <>
      <div class="scheme-hub">
      <h1>Farmer's Info Hub</h1>
      <SchemeUpdates />
    </div>
     <RouterProvider router={router}/>
      
    </>
  )
}

export default App
