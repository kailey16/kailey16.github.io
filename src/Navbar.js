import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="nav justify-content-center">
        <Link className="nav-item navOption" to="/">HOME</Link>
        <Link className="nav-item navOption" to="/aboutme">ABOUT</Link>
        <Link className="nav-item navOption" to="/project">PROJECT</Link>
        <Link className="nav-item navOption" to="/blog">BLOG</Link>
      </div>
    </div>
  )
}

export default Navbar