import React from 'react'
import '../style/Project.css'
import Preview from './Preview'

const Project = () => {
  return (
    <div id="project">
      <div id="projectCon">
        <Preview title="SpaceVoyager" src={require('../media/SpaceVoyager/SVmain.png')} />
        <Preview title="Movie Hangout" src={require('../media/MovieHangout/MHmain.png')} />
        <Preview title="Floof Finder" src={require('../media/FloofFinder/FF1.png')} />
      </div>
    </div>
  )
}

export default Project