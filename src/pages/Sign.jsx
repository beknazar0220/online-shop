import React, { useState } from 'react'
import "./Sign.scss"
import image3 from "./image/image3.png"
import { Link } from 'react-router-dom'
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Sign() {
  const [user, setUser] = useState({ email: "", password: "", });
  const [active, setActive] = useState(false)

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value })
  }

  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(auth, user.email, user.password)
      if(res) {
        toast.success("user was success created")
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("user alredy in use")
    }
  }


  return (
    <div className='sing-main'>
      <div className='sing-1'>
        <img src={image3} alt="" />
      </div>
      <div className='sing-2'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '530px' }}>
          <div style={{ padding: '20px', borderRadius: '10px', width: '371px', height: '530px' }}>
            <h2 style={{
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Inter',
              fontSize: '36px',
              fontWeight: '500',
              lineHeight: '30px',
              letterSpacing: '4%',
              textAlign: 'left',
              marginBottom: '20px'
            }}
            >Create an account</h2>
            <p style={{/* Title/16PX Regular */
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0%',
              textAlign: 'left'
            }} >Enter your details below</p>
            <div style={{ marginTop: '40px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Name"
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                placeholder="Email or Phone Number"
                value={user.email}
                name="email"
                onChange={handler}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div className='inputs'>
              <input
                type={active? "text" : "password"}
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={handler}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
              />
              {active ?<IoEyeSharp onClick={() => setActive(false)} />:<FaEyeSlash onClick={() => setActive(true)} />}
              </div>
            </div>
            <button onClick={() => createUser()} type="submit" style={{ width: '100%', height: '50px', padding: '10px', backgroundColor: '#d9534f', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Create Account
            </button>
            <div style={{ width: '100%', height: '100%', marginTop: '10px', textAlign: 'center' }}>
              <button style={{ width: '100%', height: '50px', padding: '10px', backgroundColor: 'white', color: 'black', border: '1px solid black', borderRadius: '5px', cursor: 'pointer', position: 'relative' }}>
                Sign up with Google <img src="" alt="" style={{ position: 'absolute', width: '20px', height: '20px', left: '75px', top: '15px' }} />
              </button>
            </div>
            <div style={{ marginTop: '-430px', textAlign: 'center' }}>
              <Link to="/account">  <a href="/login" style={{ color: 'black', textDecoration: 'none' }}>Already have an account? Log in</a> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign