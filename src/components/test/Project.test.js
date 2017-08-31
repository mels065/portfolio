import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../Project';

describe('Project component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Project />, div);
  });
});
