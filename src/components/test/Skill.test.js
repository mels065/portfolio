import React from 'react';
import ReactDOM from 'react-dom';
import Skill from '../Skill';

describe('Skill component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Skill />, div);
  });
});
