import React from 'react'
import { Link } from 'react-router-dom'

const HomeText = () => {
  return (
    <div id="homeText">

      <div className="mainTitle animated slideInLeft">
        <p>{`{ ' Junior Developer + logical thinking '`}</p>
        <p className="mainTitleLine2">: ' <span className="mainTitleName">KAILEY LEE</span> ' }</p>
      </div>

      <div className="mainIcons animated fadeIn delay-1s">
        <Link to="/aboutme">
          <i className="fas fa-info-circle mainIcon" />
        </Link>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16">
          <i className="fab fa-github mainIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaileyleemcintosh/">
          <i className="fab fa-linkedin mainIcon" />
        </a>
      </div>

    </div>
  )
}

export default HomeText
