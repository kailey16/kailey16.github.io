import React from 'react'
import '../style/AboutMe.css'

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="bio">
        <p className="bioName">{`{`}</p>
        <p className="bioLine bioName">
          <span className="color1">Kailey Lee</span> &nbsp; : &nbsp;Full Stack Web Developer ,
        </p>
        <p className="bioLine bioDetail">
          <span className="color1 bioStatus">Who is she?</span> &nbsp; : &nbsp;Kailey Lee is a junior software engineer specializing in Ruby on Rails and Javascript accompanying React and Redux ,
        </p>
        <p className="bioLine bioDetail">
          <span className="color1 bioStatus">Background?</span>&nbsp; : &nbsp;Her educational background is in Chemical Engineering and Business(MBA). She has experience working in Retail Operation Management focusing on client satisfaction and business partner relations coupled with event planning / management. She truly loves problem solving and developing logical thought process, so she decided to change her career to software engineering ,
        </p>
        <p className="bioLine skillDetail">
          <span className="color1 bioStatus">Technical Skills</span>&nbsp; : &nbsp;[ &nbsp;&nbsp;<span className="color2">Ruby on Rails</span> , <span className="color2">Javascript</span> , <span className="color2">React.js</span> , <span className="color2">Redux.js</span> , <span className="color2 skillLine">HTML5</span> , <span className="color2">CSS/Bootstrap/Semantic UI</span> , <span className="color2">SQL/SQLite3/PostgreSQL</span> , <span className="color2 skillLine">RESTful architecture</span> , <span className="color2">MVC pattern</span> , <span className="color2">RSpec</span> , <span className="color2">Git</span> , <span className="color2">APIs</span>&nbsp; ]
        </p>
        <p className="bioName">{`}`}</p>
      </div>


      <div className="aboutmeIcons">
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