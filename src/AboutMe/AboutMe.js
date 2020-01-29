import React from 'react'
import '../style/AboutMe.css'


// resume https://drive.google.com/file/d/1SbjTS29VEL5foaeoAJDQ4nFTkxRkUs5z/view?usp=sharing

const AboutMe = () => {
  return (
    <div id="aboutme">

      <div className="bio">
        <p className="bioName">{`{`}</p>
        <p className="bioLine bioName">
          <span className="colorYellow">Kailey Lee</span> &nbsp; : &nbsp;Full Stack Web Developer ,
        </p>
        <p className="bioLine bioDetail">
          <span className="colorYellow bioStatus">Who is she?</span> &nbsp; : &nbsp;Kailey Lee is a junior software engineer specializing in Ruby on Rails and Javascript accompanying React and Redux ,
        </p>
        <p className="bioLine bioDetail">
          <span className="colorYellow bioStatus">Background?</span>&nbsp; : &nbsp;Her educational background is in Chemical Engineering and Business(MBA). She has experience working in Retail Operation Management focusing on client satisfaction and business partner relations coupled with event planning and management. She truly loves problem solving and developing logical thought process, so she decided to change her career to software engineering ,
        </p>
        <p className="bioLine skillDetail">
          <span className="colorYellow bioStatus">Technical Skills</span>&nbsp; : &nbsp;[ &nbsp;&nbsp;<span className="colorYellow">Ruby on Rails</span> , <span className="colorYellow">Javascript</span> , <span className="colorYellow">React.js</span> , <span className="colorYellow">Redux.js</span> ,<br/>
          <span className="colorYellow skillLine">HTML5</span> , <span className="colorYellow">CSS/Bootstrap/Semantic UI</span> , <span className="colorYellow">SQL/SQLite3/PostgreSQL</span> ,<br/>
          <span className="colorYellow skillLine">RESTful architecture</span> , <span className="colorYellow">MVC pattern</span> , <span className="colorYellow">RSpec</span> , <span className="colorYellow">Git</span> , <span className="colorYellow">APIs</span>&nbsp; ]<br/>
        </p>
        <p className="bioName">{`}`}</p>
      </div>


      <div className="aboutmeIcons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16">
          <i className="fab fa-github aboutmeIcon" />
        </a><br/>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaileyleemcintosh/">
          <i className="fab fa-linkedin aboutmeIcon" />
        </a><br/>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@klee.mcintosh">
          <i className="fab fa-medium aboutmeIcon"></i>
        </a>
      </div>

    </div>
  )
}

export default AboutMe