import React from 'react'
// import FFdemo from '../media/FloofFinder/FFdemo.mp4'

const FloofFinder = () => {
  return(
    <div className="projectShow">
      <div className="projectTitle">FloofFinder</div>
      <div className="projectDetail">
      FloofFinder
      </div>

      {/* <video className="demoVideo" controls src={FFdemo} /> */}

      <div id="carouselExampleIndicators" class="carousel slide projectCarousel" data-ride="carousel">
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
    </div>
  )
}

export default FloofFinder