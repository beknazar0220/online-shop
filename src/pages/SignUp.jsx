import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import image3 from "./image/image3.png"

function SignUp() {
  return (
    <div className='input'> 
    <div className='block4'>
      <div className='box1'>
       <h3>Регистратция</h3>
      <input type="text"/>
      <label>Username</label>
      </div>
      <div className='box1'>
      <input type="@gmail"/>
      <label>@gmail</label>
      </div>
      <div className='box1'>
      <input type="Password"/>
      <label>Password</label>
      </div>
      <Link to="/account"><button>войти</button></Link>
      <Link to="/servis"><button>назад</button></Link>
      </div>
    </div>
  )
}

export default SignUp