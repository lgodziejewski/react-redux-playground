import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import appStore from './app/reducers';

import PostsContainer from './app/containers/PostsContainer/PostsContainer';
import CommentsContainer from './app/containers/CommentsContainer/CommentsContainer';
import PhotosContainer from './app/containers/PhotosContainer/PhotosContainer';

import Menu from './app/components/Menu/Menu';

import './App.css';

const Home = () => (
  <div>
    <p>Welcome to home page</p>
  </div>
);

const store = createStore(appStore, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-container">
            <div className="app-menu-container">
              <Menu/>
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
      </Provider>
    );
  }
}

export default App;
