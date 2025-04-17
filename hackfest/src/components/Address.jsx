import React from 'react'
import { useForm } from 'react-hook-form';
import './Sellwaste.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Address() {

  const location = useLocation();
const product = location.state || {};
  
    const {
        register,
        formState: { errors }
      } = useForm();
    
      const [successMsg, setSuccessMsg] = useState('');
        const navigate = useNavigate();
    
      const [name, setname] = useState('');
      const [address, setaddress] = useState('');
      const [pincode, setpincode] = useState('');
      const [phoneno, setphoneno] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const data = {
            name,
            address,
            pincode,
            phoneno,
            productName: product.productName,
            productDescription: product.productDescription, 
            productPrice: product.productPrice,
            productQuantity: product.productQuantity,
            productImage: product.productImage,
          };
          
          try {
            const res = await axios.post('http://localhost:3001/address', data);
            setSuccessMsg('Added your waste details successfully');
            navigate('/oplaced');
          } catch (err) {
            console.error("Error submitting form:", err);
          }
          
      };

  return (
    <div className="sell">
      <h1>Please enter your address details</h1>
      <div className="wrapper">
      <form onSubmit={handleSubmit} >
      <div className="form first">
       <div className="details personal">
      <div className="fields">
      <div className="input-field">
      <label>Your name</label>
      <input type="text" placeholder="Enter your full name" {...register("name", { 
                        required: "Product name is required",
                        minLength: {
                          value: 3,
                          message: "Product name must be at least 3 characters"
                        }
                      })}
                      onChange={(e) => setname(e.target.value)}
                    />{errors.name && <p className="error red">{errors.name.message}</p>}
      </div>
      <div className="input-field">
      <label>Your address</label>
      <input type="text" placeholder="Enter your personal address" 
                        {...register("address", { 
                        required: "Product description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters"
                        }
                      })}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                    {errors.address && <p className="error red">{errors.address.message}</p>}
                  </div>
        <div className="input-field">
      <label>Pincode</label>
      <input type="text" placeholder="Enter your pincode" 
                        {...register("pincode", { 
                        required: "Product description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters"
                        }
                      })}
                      onChange={(e) => setpincode(e.target.value)}
                    />
                    {errors.pincode && <p className="error red">{errors.pincode.message}</p>}
                  </div>

                  <div className="input-field">
      <label>Phone no.</label>
      <input type="text" placeholder="Enter your phone number" 
                        {...register("phoneno", { 
                        required: "Product description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters"
                        }
                      })}
                      onChange={(e) => setphoneno(e.target.value)}
                    />
                    {errors.phoneno && <p className="error red">{errors.phoneno.message}</p>}
                  </div>
       
        
                </div>
         </div>
          <button  type="submit" className="nextBtn">
                <span className="btnText">Place order</span>
                <i className="uil uil-navigator"></i>
              </button>
              {successMsg && <p className="success green">{successMsg}</p>}
            </div>
          </form>
        </div>
      </div>
  )
}

export default Address