import React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';   
import { useState } from 'react';

function Login() {
  const { 
    register,  
    formState: { errors } 
  } = useForm();
  
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(res => {
        console.log("Login response:", res);

        if (res.status === 200 && res.data.message === 'OK') {
          const userId = res.data.user.id;
          navigate('/profile', { state: { userId } });

        } else if (res.data === 'incorrect password') {
          alert("Incorrect password");
        } else if (res.data === 'User not found') {
          alert("User not found");
        } else {
          alert("Something went wrong");
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        alert("Server error. Try again.");
      });
  };

  return (
    <div className='logincenter'>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input 
              placeholder='Username' 
              {...register("username", {
                required: "Please enter the username", 
                minLength: { value: 3, message: "Minimum 3 characters required" },
                maxLength: { value: 30, message: "Maximum 30 characters allowed" }
              })} 
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUserAlt />
            {errors.username && <p className='error-message red'>{errors.username.message}</p>}
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder='Password' 
              {...register("password", {
                required: "Please enter your password", 
                minLength: { value: 8, message: "Password must be at least 8 characters long" }
              })} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock />
            {errors.password && <p className='error-message red'>{errors.password.message}</p>}
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? 
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
