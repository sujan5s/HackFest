import React, { useEffect } from 'react'
import Card from './Card'
import { Buffer } from 'buffer';


function Buywaste() {
  const [product,setProduct] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/sellwaste');
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    {
      Array.isArray(product) &&
      product.map((item) => (
        <Card
          key={item._id}
          productImage={`data:${item.productImage.contentType};base64,${Buffer.from(item.productImage.data).toString('base64')}`} // Assuming productImage is a base64 string
          productName={item.productName}
          productDescription={item.productDescription}
          productPrice={item.productPrice}
          productQuantity={item.productQuantity}
        />
      ))
    }
    
    
    </>
  )
}

export default Buywaste