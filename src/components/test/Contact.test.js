import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../Contact';
import {font} from 'react-icons-kit/icomoon/font';

describe('Contact component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact contactIcon={font} />, div);
  });
});
