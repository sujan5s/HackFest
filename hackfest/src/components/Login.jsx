import React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import './Login.css';
import { useForm } from 'react-hook-form';

function Login({ onRegisterClick }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  const onSubmit = data => console.log(data);
  
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            placeholder='Username' 
            {...register("username", {
              required: "Please enter the username", 
              minLength: { value: 3, message: "Minimum 3 characters required" },
              maxLength: { value: 30, message: "Maximum 30 characters allowed" }
            })} 
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
              onRegisterClick();
            }}> Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
