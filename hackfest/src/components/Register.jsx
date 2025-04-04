import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register({ onLoginClick }) {
  const { 
    register, 
    watch, 
    formState: { errors } 
  } = useForm();

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{username, email, password})
    .then(res => {console.log(res)
    navigate('/login')
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='registercenter'>
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        
        <div className="input-box">
          <input 
            type="text" 
            placeholder='Username' 
            {...register("username", { required: "Username is required" })} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUserAlt />
        </div>
        {errors.username && <p className="error red">{errors.username.message}</p>}
        
        <div className="input-box">
          <input 
            type="email" 
            placeholder='Email' 
            {...register("email", { 
              required: "Email is required", 
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                message: "Invalid email address" 
              }
            })} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope />
        </div>
        {errors.email && <p className="error red">{errors.email.message}</p>}

        <div className="input-box">
          <input 
            type="password" 
            placeholder='Password' 
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Password must be at least 6 characters" }
            })} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock />
        </div>
        {errors.password && <p className="error red">{errors.password.message}</p>}

        
        <div className="terms">
          <label>
            <input type="checkbox" {...register("terms", { required: "You must accept the terms" })} />
            I agree to the terms & conditions
          </label>
        </div>
        {errors.terms && <p className="error red">{errors.terms.message}</p>}

        <button type="submit">Register</button>
        
        <div className="login-link">
          <p>Already have an account? 
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}>Login</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;