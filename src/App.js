import React from 'react';
import './style/App.css';
import { Route } from 'react-router-dom';
import Home from './Home/Home'
import Navbar from './Navbar'

function App() {
  return (
    <div id="app">
      <Navbar />
      {/* <Route exact path='/marsrover' component={MarsRover} /> */}
      <Route exact path='/' component={Home} />
      <Route exact path='/whoami' component={WhoAmI} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/blog' component={Blog} />

    </div>
  );
}

export default App;
