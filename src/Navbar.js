import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div id="navbar" className="nav justify-content-center">
      <Link className="navOption nav-link" to="/" style={{color: props.color}}>HOME</Link>
      <Link className="navOption nav-link" to="/aboutme" style={{color: props.color}}>ABOUT</Link>
      <Link className="navOption nav-link" to="/project" style={{color: props.color}}>PROJECT</Link>
      <Link className="navOption nav-link" to="/blog" style={{color: props.color}}>BLOG</Link>
    </div>
  )
}

export default Navbar