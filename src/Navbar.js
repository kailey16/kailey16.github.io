import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className="nav justify-content-center">
      <Link className="navOption nav-link" to="/" style={{color: "#660033"}}>HOME</Link>
      <Link className="navOption nav-link" to="/aboutme" style={{color: "#660033"}}>ABOUT</Link>
      <Link className="navOption nav-link" to="/project" style={{color: "#660033"}}>PROJECT</Link>
      <Link className="navOption nav-link" to="/blog" style={{color: "#660033"}}>BLOG</Link>
    </div>
  )
}

export default Navbar