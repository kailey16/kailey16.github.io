import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="navOption" to="/">HOME</Link>
      <Link className="navOption" to="/aboutme">ABOUT</Link>
      <Link className="navOption" to="/project">PROJECT</Link>
      <Link className="navOption" to="/blog">BLOG</Link>
    </div>
  )
}

export default Navbar