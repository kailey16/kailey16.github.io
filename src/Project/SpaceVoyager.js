import React from 'react'
import '../style/ProjectShow.css'
import SVdemo from '../media/SpaceVoyager/SVdemo.mp4'

const SpaceVoyager = () => {
  return(
    <div className="projectShow">
      <div className="projectTitle">SpaceVoyager</div>

      <div className="projectDetail">
        Fun exploring single page web application where you can browse media from the NASA library and photos from the Mars rover Curiosity's cameras. You can check out the weather in Mars for the past week and NASA's astronomy picture of the day!
      </div>

      {/* Image Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide projectCarousel" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../media/SpaceVoyager/SVmain.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../media/SpaceVoyager/SVlib.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../media/SpaceVoyager/SVrover.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../media/SpaceVoyager/SVrover2.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../media/SpaceVoyager/SVweather.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../media/SpaceVoyager/SVprofile.png')} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="frontbackDetail">
          <div>
            <div className="endTitle">Backend
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/spacevoyager-backend">
                <i className="fab fa-github showIcon" />
                </a>
              </span>
            </div>

            <i className="fas fa-caret-right arrowIcon"/> Ruby on Rails<br/>
            <i className="fas fa-caret-right arrowIcon"/> PostgreSQL<br/>
            <i className="fas fa-caret-right arrowIcon"/> RESTful API + MVC pattern<br/>
            <i className="fas fa-caret-right arrowIcon"/> Full validations and authentication with Bcrypt ruby gem and JWT token<br/>
            <i className="fas fa-caret-right arrowIcon"/> Dynamically communicating with multiple NASA APIs by fetching with Restclient gem
          </div>
          <div>
            <div className="endTitle">Frontend
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/spacevoyager-frontend">
                <i className="fab fa-github showIcon" />
                </a>
              </span>
            </div>

            <i className="fas fa-caret-right arrowIcon"/> Javascript + React + Redux<br/>
            <i className="fas fa-caret-right arrowIcon"/> Custom CSS + Semantic UI framework<br/>
            <i className="fas fa-caret-right arrowIcon"/> Including search and filter functions: search by keyword, filter media by camera type
          </div>
        </div>

        <div className="demo">
          <div className="demoTitle">DEMO Video</div>
          <video className="demoVideo" controls src={SVdemo} />
        </div>
    </div>
  )
}

export default SpaceVoyager