import React, {Component} from 'react';
import './stylesheet/Portfolio.css';

import Section from './Section';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1>Brandon Mellus</h1>

        <Section
        sectionClass="intro"
        sectionHeading="Who Am I?"
        sectionContents={(
          <div className="contents">
            <p>I am an enthusiastic front-end developer looking to challenge myself</p>
            <p>I am also looking to get into the backend interface of web development as
            well, and will showcase my work on them in the future</p>
          </div>
        )} />

        <Section
        sectionClass="projects"
        sectionHeading="My Projects"
        sectionContents={(
          <div className="contents"></div>
        )} />

        <Section
        sectionClass="contact"
        sectionHeading="Contact Me"
        sectionContents={(
          <div className="contents"></div>
        )} />
      </div>
    );
  }
}

export default Portfolio;
