import React from 'react'
import MHdemo from '../media/MovieHangout/MHdemo.mp4'

const MovieHangout = () => {
  return(
    <div className="projectShow">
      <div className="projectTitle animated rotateIn">MovieHangout</div>

      <div className="projectDetail animated rotateInUpRight">
        Single page web application where you can see details of movies and find the most popular and rated movies at the current moment. You can share your thoughts about the movie by leaving comments and save the movies that you like under your favorite list!
      </div>

      {/* Image Carousel */}
      <div id="carouselExampleIndicators" class="carousel slide projectCarousel animated rotateInUpLeft" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('../media/MovieHangout/MHmain.png')} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
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

      <div className="frontbackDetail">
        <div>
          <div className="endTitle">Backend
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/movie-hangout-backend">
              <i className="fab fa-github showIcon" />
              </a>
            </span>
          </div>

          <i className="fas fa-caret-right arrowIcon"/> Ruby on Rails<br/>
          <i className="fas fa-caret-right arrowIcon"/> PostgreSQL<br/>
          <i className="fas fa-caret-right arrowIcon"/> RESTful API + MVC pattern<br/>
          <i className="fas fa-caret-right arrowIcon"/> Full validations and authentication with Bcrypt ruby gem and JWT token<br/>
          <i className="fas fa-caret-right arrowIcon"/> Dynamically communicating with multiple THE MOVIE DB APIs by fetching with Restclient gem
        </div>
        <div>
          <div className="endTitle">Frontend
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kailey16/movie-hangout-frontend">
              <i className="fab fa-github showIcon" />
              </a>
            </span>
          </div>

          <i className="fas fa-caret-right arrowIcon"/> Javascript + React<br/>
          <i className="fas fa-caret-right arrowIcon"/> Custom CSS + Semantic UI framework<br/>
          <i className="fas fa-caret-right arrowIcon"/> Importing up-to-date data from THE MOVIE DB APIs by fetching to the backend<br/>
          <i className="fas fa-caret-right arrowIcon"/> Including multiple search and sort functions: search by keyword, sort by genre, name, and rating
        </div>
      </div>

      <div className="demo">
          <div className="demoTitle">DEMO Video</div>
          <video className="demoVideo" controls src={MHdemo} />
      </div>

    </div>
  )
}

export default MovieHangout