import React from 'react';
import { useForm } from 'react-hook-form';
import './Sellwaste.css';

function Sellwaste() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
  //form submission
    console.log("Product Data:", data);
    //  API call 
  };

  return (
    <>
      <div className="sell">
      <h1>Please add your Selling waste details</h1>
      <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form first">
       <div className="details personal">
      <div className="fields">
      <div className="input-field">
      <label>Product Name</label>
      <input type="text" placeholder="Enter your product name" {...register("productName", { 
                        required: "Product name is required",
                        minLength: {
                          value: 3,
                          message: "Product name must be at least 3 characters"
                        }
                      })}
                    />{errors.productName && <p className="error red">{errors.productName.message}</p>}
      </div>
      <div className="input-field">
      <label>Product Description</label>
      <input type="text" placeholder="Enter your product description" 
                        {...register("description", { 
                        required: "Product description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters"
                        }
                      })}
                    />
                    {errors.description && <p className="error red">{errors.description.message}</p>}
                  </div>
      <div className="input-field">
      <label>Product Price</label>
      <input type="number"  placeholder="Enter your product price" {...register("price", { 
                        required: "Price is required",
                        min: {
                          value: 0,
                          message: "Price cannot be negative"
                        }
                      })}
                    />{errors.price && <p className="error red">{errors.price.message}</p>}
                    </div>
       <div className="input-field">
       <label>Product Quantity</label>
      <input type="number" placeholder="Enter your product quantity"  {...register("quantity", { 
                        required: "Quantity is required",
                        min: {
                          value: 1,
                          message: "Quantity must be at least 1"
                        }
                      })}
                    />
                    {errors.quantity && <p className="error red">{errors.quantity.message}</p>}
                  </div>
        <div className="input-field">
        <label>Product Image</label>
        <input type="file" 
                  {...register("image", { 
                        required: "Product image is required",
                        validate: {
                          acceptedFormats: (files) => 
                            ['image/jpeg', 'image/png', 'image/gif'].includes(
                              files[0]?.type
                            ) || "Only PNG, JPEG and GIF files are allowed",
                        }
                      })}
                    />
                    {errors.image && <p className="error red">{errors.image.message}</p>}
                  </div>
                </div>
         </div>
          <button  type="submit" className="nextBtn">
                <span className="btnText">Add Product</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Sellwaste;
