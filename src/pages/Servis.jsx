import React from 'react'
import "./servis.css"
import { Link } from 'react-router-dom'

function Servis() {
  return (
    <div className='nav'>
      <Link to="/sign"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
      <div className='nav-logo'>
      </div>
    </div>
  )
}

export default Servis