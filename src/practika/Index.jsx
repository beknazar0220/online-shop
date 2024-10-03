import React, {useState, useEffect} from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Index() {
  const [user, setUser] = useState({ email: "", password: "", });
  const [active, setActive] = useState(false)

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value })
  }
  async function createUser() {
    try {
      const res = await signInWithEmailAndPassword(auth, user.email, user.password)
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
    <div className='open'>
      <div className='box1'>
      <input
                type="email"
                placeholder="Email or Phone Number"
                value={user.email}
                name="email"
                onChange={handler}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
              />
      </div>
      {active ?<IoEyeSharp onClick={() => setActive(false)} />:<FaEyeSlash onClick={() => setActive(true)} />}
      <div className='box1'>
      <input
                type= {active? "text" : "password"}
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={handler}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
              />
      </div>
      <button onClick={() => createUser()} type="submit">Login</button>
      <Link to="/"><button>Home</button></Link>
    </div>
  )
}

export default Index