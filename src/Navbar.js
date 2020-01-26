import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav justify-content-center">
        <Link className="nav-item navOption" to="/searchpage">PROJECT</Link>
        <Link className="nav-item navOption" to="/searchpage">ABOUT</Link>
        <Link className="nav-item navOption" to="/searchpage">BLOG</Link>
      </div>
    </div>
  )
}

export default Navbar