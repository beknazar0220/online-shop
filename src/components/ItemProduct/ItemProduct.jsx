import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./ItemProduct.scss"

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"

function ItemProduct() {
  const { id } = useParams() 
  const [product, setProduct] = useState({}); 
  const [image, setImage] = useState("") 


  async function getProductById() {
    try {
      const res = await axios.get(`${API}/${id}`);  
      setProduct(res.data);
      setImage(res.data.imageUrl)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductById();
  }, [id]);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='box container'>
      <div className='image-map'>
        {
          product.imagesUrl?.map((item) => (
            <img onClick={() => setImage(item)} className='i' src={item} alt="" />
          ))
        }
        </div>
            <div className='box-product'>
        <img src={image} alt={product.title} />
        <div className='box-datas'>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          {product.discount && <p>Discount: {product.discount}%</p>}
          <p>Description: {product.description}</p>
          <div className='size'>
            <p>Size:</p>
               {
              product.size?.map((x, index) => (
                <button key={index}>{x}</button>
              ))}
          </div>
          <div className='plus'>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct;
