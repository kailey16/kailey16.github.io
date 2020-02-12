import React from 'react'
import '../style/Project.css'
import Preview from './Preview'

const Project = () => {
  return (
    <div id="project">
      <div id="projectCon">
        <Preview title="SPACE VOYAGER" src={require('../media/SpaceVoyager/SVmain.png')} />
        <Preview title="MOVIE HANGOUT" src={require('../media/MovieHangout/MHmain.png')} />
        <Preview title="FLOOF FINDER" src={require('../media/FloofFinder/FF1.png')} />
      </div>
    </div>
  )
}

export default Project