import React from 'react';
import './style/App.css';
import { Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Project from './Project/Project'
import SpaceVoyager from './Project/SpaceVoyager'
import MovieHangout from './Project/MovieHangout'
import FloofFinder from './Project/FloofFinder'
import Blog from './Blog/Blog'

function App() {
  return (
    <div id="app">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/project' component={Project} />

      <Route exact path='/project/spacevoyager' component={SpaceVoyager} />
      <Route exact path='/project/moviehangout' component={MovieHangout} />
      <Route exact path='/project/flooffinder' component={FloofFinder} />

      <Route exact path='/blog' component={Blog} />

    </div>
  );
}

export default App;
