import React from 'react';
import './style/App.css';
import { Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Project from './Project/Project'
import Blog from './Blog/Blog'

function App() {
  return (
    <div id="app">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/blog' component={Blog} />

    </div>
  );
}

export default App;
