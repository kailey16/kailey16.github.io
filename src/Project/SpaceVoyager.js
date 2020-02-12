import React from 'react'
import '../style/SV.css'
import SVdemo from '../media/SpaceVoyager/SVdemo.mp4'

const SpaceVoyager = () => {
  return(
    <div id="SpaceVoyager">
      <div id="SVtitle">SpaceVoyager</div>
      <video id='SVdemo' controls src={SVdemo} />
    </div>
  )
}

export default SpaceVoyager