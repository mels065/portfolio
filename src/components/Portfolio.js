import React, {Component} from 'react';
import './stylesheet/Portfolio.css';

import Section from './Section';
import Project from './Project';
import Contact from './Contact';

import markdownRendererImg from './assets/markdown-renderer.png';
import reactCalculatorImg from './assets/react-calculator.png';

// ICONS
import {wordpress} from 'react-icons-kit/icomoon/wordpress';
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import {github} from 'react-icons-kit/icomoon/github';
import {mail2} from 'react-icons-kit/icomoon/mail2';

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

        <Section
        sectionClass="contact"
        sectionHeading="Contact Me"
        sectionContents={(
          <div className="contents">
            <div className="row">
              <Contact
                contactIcon={wordpress}
                contactLink="https://brandonmellus.wordpress.com" />

              <Contact
                contactIcon={twitter}
                contactLink="https://twitter.com/brandonm056" />

              <Contact
                contactIcon={linkedin}
                contactLink="https://linkedin.com/in/brandonmellus/" />

              <Contact
                contactIcon={github}
                contactLink="https://github.com/mels065" />

              <Contact
                contactIcon={mail2}
                contactLink="mailto:mellusbrandon@gmail.com" />
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default Portfolio;
