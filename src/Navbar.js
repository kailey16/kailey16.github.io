import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <a id="homeTitle" className="navbar-brand" href="/">K.Lee</a>
        </div>
        <div className="nav navbar-nav navbar-right navRight">
          <Link className="navOption nav-item nav-link active" to="/aboutme">About</Link>
          <Link className="navOption nav-item nav-link active" to="/project">Project</Link>
          <Link className="navOption nav-item nav-link active" to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar