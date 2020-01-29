import React from 'react'
import '../style/AboutMe.css'

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="bio">
        Welcome to visit my website!<br/>
        My name is <span className="bioName">Kailey Lee</span> and I am a <span className="bioStatus">Full Stack Web Developer</span>
        
        <p className="bioDetail">
          Kailey Lee is a junior software engineer specializing in Ruby on Rails and Javascript along with React and Redux. Her educational background is in Chemical Engineering and Business(MBA). She has experience working in Retail Operation Management focusing on client satisfaction and business partner relations coupled with event planning and management. She wanted to change her career to software engineering because she truly loves problem solving and developing logical thought process.
        </p>
        
        {`{'Technical Skills': [ Ruby on Rails, Javascript, React.js, Redux.js, HTML5, CSS/Bootstrap/Semantic UI, SQL/SQLite3/PostgreSQL, RESTful architecture, MVC pattern, RSpec, Git, APIs ]`}

      </div>
    </div>
  )
}

export default AboutMe