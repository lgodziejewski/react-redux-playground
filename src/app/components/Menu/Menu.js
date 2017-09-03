import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <p>Menu</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/photos">Photos</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
