import React, {Component} from 'react';
import './stylesheet/Portfolio.css';

import Section from './Section';
import Project from './Project';

import markdownRendererImg from './assets/markdown-renderer.png';
import reactCalculatorImg from './assets/react-calculator.png';

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
            well, and will showcase my work on it in the future</p>
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
          <div className="contents">
            <div className="container">
              <div className="row">
                <Project
                projectName="Markdown Renderer"
                projectImg={markdownRendererImg}
                projectLink="https://mels065.github.io/markdown" />

                <Project
                projectName="React Calculator"
                projectImg={reactCalculatorImg}
                projectLink="https://mels065.github.io/react-calculator" />
              </div>
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default Portfolio;
