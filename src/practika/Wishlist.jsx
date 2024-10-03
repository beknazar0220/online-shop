import React from 'react'
import "./Wishlist.scss"
import wish1 from "../pages/image/wish1.png"
// import wish2 from "../pages/image/wish2.png"
// import wish3 from "../pages/image/wish3.png"
// import wish4 from "../pages/image/wish4.png"
import bag from "../assets/bag.svg"
import eyes from "../assets/eyes.svg"
import star from "../assets/star.svg"
import banner2 from "../pages/image/banner2.png"
import banner3 from "../pages/image/banner3.png"
import banner4 from "../pages/image/banner4.png"
import product from "../pages/image/product.png"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Wishlist(item) {
    const { items } = useSelector((state) => state.wishlist)


    async function deleteIMG(id) {
        try {
            const res =await apiClient.delete(`${id}`)
            console.log(res);
            setActive(error)
        } catch (error) {
            console.log(error);
            
        }
    }
    const dispatch = useDispatch()
    return (
        <div>
            <div className='wish'>
                <p onClick={() => dispatch(addWish(item))}>Wishlist</p>
                <button>Move All To Bag</button>
            </div>
            <div className='w-product'>
                
            </div>
            <div className='mill'>
                {
                items.map((data) => (

                <div className='wish-image'>
                    <img src={data.imageUrl} alt="" />
                    <h3>{data.title}</h3>
                    <div className='bag'>
                    <img onClick={() => deleteIMG(items.id)} src={bag} alt="" />
                    </div>
                    <div className='price'>
                        <p>${data.price}</p><h6>$600</h6>
                    </div>
                </div>
                ))
            }
            </div>
            <div className='produc'>
                <p>Just For You</p>
                <button>See All</button>
            </div>
            <div className='blur'>
                <div className='product'>
                    <div className='product-image'>
                        <img src={banner2} alt="" />
                    </div>
                    <div className='wishlist1'>
                        <img src={eyes} alt="" />
                    </div>
                    <div className='product-player'>
                        <h6>IPS LCD Gaming Monitor</h6>
                    </div>
                    <div className='price'>
                        <p>$960</p>
                        <h6>$1160</h6>
                    </div>
                    <div className='star'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <h6>(65)</h6>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-image'>
                        <img src={banner3} alt="" />
                    </div>
                    <div className='wishlist1'>
                        <img src={eyes} alt="" />
                    </div>
                    <div className='product-player'>
                        <h6>HAVIT HV-G92 Gamepad</h6>
                    </div>
                    <div className='price'>
                        <p>$1160</p>
                    </div>
                    <div className='star'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <h6>(65)</h6>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-image'>
                        <img src={banner4} alt="" />
                    </div>
                    <div className='wishlist1'>
                        <img src={eyes} alt="" />
                    </div>
                    <div className='product-player'>
                        <h6>AK-900 Wired Keyboard</h6>
                    </div>
                    <div className='price'>
                        <p>$560</p>
                    </div>
                    <div className='star'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <h6>(65)</h6>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-image'>
                        <img src={product} alt="" />
                    </div>
                    <div className='wishlist1'>
                        <img src={eyes} alt="" />
                    </div>
                    <div className='product-player'>
                        <h6>ASUS FHD Gaming Laptop</h6>
                    </div>
                    <div className='price'>
                        <p>$200</p>
                    </div>
                    <div className='star'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <h6>(65)</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist