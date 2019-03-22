import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default App;
