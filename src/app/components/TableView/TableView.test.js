import React from 'react';
import ReactDOM from 'react-dom';
import TableView from './TableView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableView />, div);
});
