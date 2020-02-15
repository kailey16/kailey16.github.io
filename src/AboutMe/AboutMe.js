import React from 'react'
import '../style/AboutMe.css'

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="bio">
        <div className="bioName animated slideInDown">
          <span className="color1">Kailey (Kyeonga) Lee</span> : Full Stack Web Developer
        </div>


        <div className="bioDetails animated fadeInLeft delay-1s">
          <div className="bioDetail">
            <div className="color1 bioDetailTitle">
              Who is she?
            </div>
            <div>
            Junior software engineer specializing in Ruby on Rails and Javascript accompanying React and Redux
            </div>
          </div>

          <div className="bioDetail">
            <div className="color1 bioDetailTitle">
              Background?
            </div>
            <div>
              Her educational background is in Chemical Engineering and Business(MBA). She has experience working in Retail Operation Management focusing on client satisfaction and business partner relations coupled with event planning / management. She truly loves problem solving and developing logical thought process, so she decided to change her career to software engineering
            </div>
          </div>

          <div className="bioDetail">
            <div className="color1 bioDetailTitle">
              Technical Skills
            </div>
            <div className="color2">
              <i className="fas fa-check skillIcon"/> Ruby on Rails<br/>
              <i className="fas fa-check skillIcon"/> Javascript, React.js, Redux.js<br/>
              <i className="fas fa-check skillIcon"/> HTML5, CSS, Bootstrap, Semantic UI<br/>
              <i className="fas fa-check skillIcon"/> SQL, SQLite3, PostgreSQL<br/>
              <i className="fas fa-check skillIcon"/> RESTful architecture, MVC pattern<br/>
              <i className="fas fa-check skillIcon"/> RSpec, Git, APIs          
            </div>
          </div>
         </div> 
      </div>


      <div className="aboutmeIcons animated fadeInRight delay-1s">
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1SbjTS29VEL5foaeoAJDQ4nFTkxRkUs5z/view?usp=sharing">
          <i className="far fa-file-pdf aboutmeIcon" />
          <p className="resume">RESUME</p>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16">
          <i className="fab fa-github aboutmeIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaileyleemcintosh/">
          <i className="fab fa-linkedin aboutmeIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@klee.mcintosh">
          <i className="fab fa-medium aboutmeIcon"></i>
        </a>
      </div>

    </div>


  )
}

export default AboutMe