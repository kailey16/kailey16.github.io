import React from 'react'
import '../style/AboutMe.css'


// resume https://drive.google.com/file/d/1SbjTS29VEL5foaeoAJDQ4nFTkxRkUs5z/view?usp=sharing

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="bio">
        <p className="bioLine bioName">
          {`{ ' Kailey Lee ' : ' Full Stack Web Developer ' ,`}
        </p>

        <p className="bioLine bioDetail">
          {`' Who is she? ' : ' Kailey Lee is a junior software engineer specializing in Ruby on Rails and Javascript along with React and Redux. Her educational background is in Chemical Engineering and Business(MBA). She has experience working in Retail Operation Management focusing on client satisfaction and business partner relations coupled with event planning and management. She wanted to change her career to software engineering because she truly loves problem solving and developing logical thought process.', `}
        </p>
        <p className="bioLine bioDetail">
          {`' Technical Skills ': [ Ruby on Rails, Javascript, React.js, Redux.js, HTML5, CSS/Bootstrap/Semantic UI, SQL/SQLite3/PostgreSQL, RESTful architecture, MVC pattern, RSpec, Git, APIs ]}`}
        </p>
      </div>

      <div className="aboutmeIcons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16">
          <i class="fab fa-github aboutmeIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaileyleemcintosh/">
          <i class="fab fa-linkedin aboutmeIcon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@klee.mcintosh">
          <i class="fab fa-medium aboutmeIcon"></i>
        </a>
      </div>

    </div>
  )
}

export default AboutMe