import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import './Register.css';

function Register({ onLoginClick }) {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className='registercenter'>
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        
        <div className="input-box">
          <input 
            type="text" 
            placeholder='Username' 
            {...register("username", { required: "Username is required" })} 
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
          />
          <FaLock />
        </div>
        {errors.password && <p className="error red">{errors.password.message}</p>}

        <div className="input-box">
          <input 
            type="password" 
            placeholder='Confirm Password' 
            {...register("confirmPassword", { 
              required: "Please confirm your password", 
              validate: value => value === watch("password") || "Passwords do not match" 
            })} 
          />
          <FaLock />
        </div>
        {errors.confirmPassword && <p className="error red">{errors.confirmPassword.message}</p>}
        
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