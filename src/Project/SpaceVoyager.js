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
      <div id="carouselExampleIndicators" class="carousel slide projectCarousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('../media/SpaceVoyager/SVlib.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/SpaceVoyager/SVrover.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/SpaceVoyager/SVrover2.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/SpaceVoyager/SVweather.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/SpaceVoyager/SVprofile.png')} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <video className="demoVideo" controls src={SVdemo} />

      <div className="frontbackDetail">
          <div>
            <div>Backend</div>
            <i className="fas fa-caret-right"/> Ruby on Rails, PostgreSQL, RESTful API, MVC pattern<br/>
            <i className="fas fa-caret-right"/> Full validations and authentication with Bcrypt ruby gem and JWT token<br/>
            <i className="fas fa-caret-right"/> Dynamically communicating with multiple NASA APIs by fetching with Restclient gem
          </div>
          <div>
            <div>Frontend</div>
            <i className="fas fa-caret-right"/> Javascript, React, Redux<br/>
            <i className="fas fa-caret-right"/> Custom CSS + Semantic UI framework
          </div>
        </div>


    </div>
  )
}

export default SpaceVoyager