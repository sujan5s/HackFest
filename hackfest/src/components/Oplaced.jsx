import React from 'react'
import './Oplaced.css'
import { useNavigate } from 'react-router-dom'  

function Oplaced() {

    const navigate = useNavigate();

    const home = (e) => {
        navigate('/home');
    }
    const order = (e) => {
        navigate('/orderdetail');
    }
        
  return (
    <div className='oplaced'>
        <div className='oplaced-container'>
            <h1>Your order has been placed successfully</h1>
            <h2>Thank you for your purchase!</h2>
            <p>We will notify you once your order is shipped.</p>
            <button className='btn' onClick={home}>Go to Home</button>
            <button className='btn' onClick={order}>View Order Details</button>
        </div>
    </div>
  )
}

export default Oplaced