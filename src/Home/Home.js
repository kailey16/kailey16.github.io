import React from 'react'
import '../style/Home.css'
import HomeText from './HomeText'
import MainVideo from '../media/mainvideo.mp4'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div id="home">
      <Navbar color="#660033"/>
      <video id='homeVideo' autoPlay loop muted>
        <source src={MainVideo} type='video/mp4' />
      </video>
      <HomeText />
    </div>
  )
}

export default Home