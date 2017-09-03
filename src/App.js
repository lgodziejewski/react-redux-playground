import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-menu-container">
          <p>Menu</p>
        </div>
        <div className="app-content-container">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default App;
