import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <>
      {showLogin ? 
        <Login onRegisterClick={toggleForm} /> : 
        <Register onLoginClick={toggleForm} />
      }
    </>
  )
}

export default App
