import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Profile />
      </div>
    );
  }
}

export default App;
