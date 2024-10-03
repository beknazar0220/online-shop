import React from 'react'
import "./Chek.scss"
import bank from "../../assets/bank.svg"
import banks from "../../assets/banks.svg"
import banki from "../../pages/image/bank.png"
import bankis from "../../pages/image/bank1.png"
import bankir from "../../pages/image/bank2.png"
import bankid from "../../pages/image/bank3.png"

function Chek() {
  return (
    <div>
        <div className='account'> 
        Account / My Account / Product / View Cart / CheckOut
       </div>
       <div className='billing-details'>
        <h1>Billing Details</h1>
       </div>
       <div className='flag'>
       <div className='blocket'>
        <h6>First Name*</h6>  
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Company Name</h6>
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Street Address*</h6>
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Apartment, floor, etc. (optional)</h6>
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Town/City*</h6>
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Phone Number*</h6>
        <input type="text" />
        </div>
        <div className='blocket'>
        <h6>Email Address*</h6>
        <input type="text" />
        </div>
        </div>
        <div className='productive'>
            <p>LCD Monitor</p>
            <p>H1 Gamepad</p>
            <p>Subtotal:</p> 
            <hr />
            <p>Shipping:</p>
            <hr />
            <p>Total:</p>
            <img src={bank} alt="" /> Bank 
            <div className='kart'>
            <img src={banki} alt="" /> <img src={bankis} alt="" /> <img src={bankir} alt="" /> <img src={bankid} alt="" />
            </div>
            <div className='bank'>
            <img src={banks} alt="" /> Cash on delivery
            </div>
        </div>
       </div>
  )
}

export default Chek