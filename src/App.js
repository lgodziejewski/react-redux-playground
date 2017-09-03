import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './app/components/Menu/Menu';

import './App.css';
import PostsContainer from './app/containers/PostsContainer/PostsContainer';
import CommentsContainer from './app/containers/CommentsContainer/CommentsContainer';
import PhotosContainer from './app/containers/PhotosContainer/PhotosContainer';

const Home = () => (
  <div>
    <p>Welcome to home page</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <div className="app-menu-container">
            <Menu />
          </div>
          <div className="app-content-container">
            <Switch>
              <Route path="/posts" component={PostsContainer}/>
              <Route path="/comments" component={CommentsContainer}/>
              <Route path="/photos" component={PhotosContainer}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
