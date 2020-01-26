import React from 'react'
import '../style/Home.css'
import HomeText from './HomeText'
import MainVideo from '../media/mainvideo.mp4'

const Home = () => {
  return (
    <div id="home">
      <video id='homeVideo' autoPlay loop muted>
        <source src={MainVideo} type='video/mp4' />
      </video>
      <HomeText />
    </div>
  )
}

export default Home