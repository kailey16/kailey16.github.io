import React from 'react'

const HomeText = () => {
  return (
    <div id="homeText">

      <div className="mainTitle">
        <p>{`{ ' Junior Developer + logical thinker '`}</p>
        <p className="mainTitleLine2">: ' <span className="mainTitleName">&nbsp;KAILEY LEE&nbsp;</span> ' }</p>
      </div>

      <div className="mainIcons">
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
