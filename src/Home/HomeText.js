import React from 'react'

const HomeText = () => {
  return (
    <div id="homeText">

      <div className="mainTitle">
        <p>{`{ 'Junior Developer + logical thinker'`}</p>
        <p className="mainTitleLine2">: ' <span className="mainTitleName">&nbsp;KAILEY LEE&nbsp;</span> ' }</p>
      </div>

      <div className="mainIcons">
        <a href="/aboutme">
          <i class="fas fa-info-circle mainIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16">
          <i class="fab fa-github mainIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaileyleemcintosh/">
          <i class="fab fa-linkedin mainIcon" />
        </a>
      </div>

    </div>
  )
}

export default HomeText
