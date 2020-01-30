import React from 'react'
import Navbar from '../Navbar'
import '../style/Project.css'
import Preview from './Preview'

const Project = () => {
  return (
    <div id="project">
      <Navbar color="#660033" />
      <Preview title="SpaceVoyager" src={require('../media/SpaceVoyager/SVmain.png')} />
      <Preview title="Movie Hangout" src="" />
      <Preview title="Floof Finder" src="" />
    </div>
  )
}

export default Project