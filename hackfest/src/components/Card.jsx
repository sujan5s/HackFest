import React from 'react'
import './Card.css'
import Buywaste from './Buywaste'
import { useNavigate } from 'react-router-dom'  

const Card = ({productImage,productName,productDescription,productPrice,productQuantity}) => {

  const navigate = useNavigate();

  const Buywaste=(e)=>{
    e.preventdefault();
    navigate('/address');
  }

  return (
    <container>
        <image>
            <img src={productImage} alt="img"/>
        </image>
        <description>
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <p>{productPrice}</p>
            <p>{productQuantity}</p>
            <button onClick={Buywaste}>Buy</button>
        </description>
    </container>
  )
}


export default Card