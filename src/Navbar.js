import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className="nav justify-content-center">
      <Link className="navOption nav-link" to="/">HOME</Link>
      <Link className="navOption nav-link" to="/aboutme">ABOUT</Link>
      <Link className="navOption nav-link" to="/project">PROJECT</Link>
      <Link className="navOption nav-link" to="/blog">BLOG</Link>
    </div>
  )
}

export default Navbar