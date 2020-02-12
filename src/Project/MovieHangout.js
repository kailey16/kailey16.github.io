import React from 'react'
// import MHdemo from '../media/MovieHangout/MHdemo.mp4'

const MovieHangout = () => {
  return(
    <div className="projectShow">
      <div className="projectTitle">MovieHangout</div>
      <div className="projectDetail">
      MovieHangout
      </div>

      {/* <video className="demoVideo" controls src={SVdemo} /> */}

      <div id="carouselExampleIndicators" class="carousel slide projectCarousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('../media/MovieHangout/MHmovies.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/MovieHangout/MHprofile.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/MovieHangout/MHshow.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require('../media/MovieHangout/MHshow2.png')} class="d-block w-100" alt="..." />
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

export default MovieHangout