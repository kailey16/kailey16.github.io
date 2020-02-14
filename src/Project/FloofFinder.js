import React from 'react'
import FFdemo from '../media/FloofFinder/FFdemo.mp4'

const FloofFinder = () => {
  return(
    <div className="projectShow">
      <div className="projectTitle animated tada">FloofFinder</div>
      <div className="projectDetail animated tada">
        Floof Finder is a single page web application to find shelter dogs for adoption and collect their information
      </div>

      {/* Image Carousel */}
      <div id="carouselExampleIndicators" class="carousel slide projectCarousel animated fadeInLeft" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('../media/FloofFinder/FF1.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/FloofFinder/FF2.png')} class="d-block w-100" alt="..." />
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


      <div className="frontbackDetail">
        <div>
          <div className="endTitle">Backend
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/mod3-project-flooffinder">
              <i className="fab fa-github showIcon" />
              </a>
            </span>
          </div>

          <i className="fas fa-caret-right arrowIcon"/> Ruby on Rails<br/>
          <i className="fas fa-caret-right arrowIcon"/> SQLite3<br/>
          <i className="fas fa-caret-right arrowIcon"/> RESTful architecture + MVC pattern + Serialized JSON data<br/>
          <i className="fas fa-caret-right arrowIcon"/> Transported real-time data from PetFinder API<br/>
          <i className="fas fa-caret-right arrowIcon"/> Implemented sessions with Sessions controller
        </div>
        <div>
          <div className="endTitle">Frontend
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/mod3-project-flooffinder">
              <i className="fab fa-github showIcon" />
              </a>
            </span>
          </div>

          <i className="fas fa-caret-right arrowIcon"/> Javascript<br/>
          <i className="fas fa-caret-right arrowIcon"/> Custom CSS + Bootstrap framework<br/>
          <i className="fas fa-caret-right arrowIcon"/> Drag and drop function to save the pet under my list
        </div>
      </div>


      <div className="demo">
          <div className="demoTitle">DEMO Video</div>
          <video className="demoVideo" controls src={FFdemo} />
      </div>
    </div>
  )
}

export default FloofFinder