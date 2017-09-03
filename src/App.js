import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './app/components/Menu/Menu';

import './App.css';

const Home = () => (
  <div>
    <p>Welcome to home page</p>
  </div>
);

const Posts = () => (
  <div>
    <p>Posts</p>
  </div>
);

const Todos = () => (
  <div>
    <p>Todos</p>
  </div>
);

const Photos = () => (
  <div>
    <p>Photos</p>
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
              <Route path="/posts" component={Posts}/>
              <Route path="/todos" component={Todos}/>
              <Route path="/photos" component={Photos}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
