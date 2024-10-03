import React from 'react'
import "./NotFound.scss"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className='error'>
      <h1>404 Not Found</h1>
      <h6>Your visited page not found. You may go home page.</h6>
      <Link to="/"><button>Back to home page</button></Link>
      </div>
    </div>
  )
}

export default NotFound