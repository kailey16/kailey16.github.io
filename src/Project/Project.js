import React from 'react'
import Navbar from '../Navbar'
import '../style/Project.css'
import Preview from './Preview'

const Project = () => {
  return (
    <div id="project">
      <Navbar color="#660033" />
      <div id="projectCon">
        <Preview title="SpaceVoyager" src={require('../media/SpaceVoyager/SVmain.png')} />
        <Preview title="Movie Hangout" src={require('../media/SpaceVoyager/SVmain.png')} />
        <Preview title="Floof Finder" src={require('../media/SpaceVoyager/SVmain.png')} />
      </div>
    </div>
  )
}

export default Project