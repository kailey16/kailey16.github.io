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
    </div>
  );
}

export default App;
