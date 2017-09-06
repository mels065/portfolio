import React, {Component} from 'react';
import './stylesheet/Portfolio.css';

import NavBar from './NavBar';
import Section from './Section';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

// SKILL IMGS
import html5Img from './assets/images/skills/html5.png';
import css3Img from './assets/images/skills/css3.png';
import javascriptImg from './assets/images/skills/javascript.png';
import reactImg from './assets/images/skills/react.png';
import jqueryImg from './assets/images/skills/jquery.png';
import sassImg from './assets/images/skills/sass.png';
import gitImg from './assets/images/skills/git.png';
import npmImg from './assets/images/skills/npm.png';
import gulpImg from './assets/images/skills/gulp.png';

// PROJECT IMGS
import markdownRendererImg from './assets/images/markdown-renderer.png';
import reactCalculatorImg from './assets/images/react-calculator.png';

// CONTACT ICONS
import {wordpress} from 'react-icons-kit/icomoon/wordpress';
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import {github} from 'react-icons-kit/icomoon/github';
import {mail2} from 'react-icons-kit/icomoon/mail2';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <NavBar
          menuItems={[
            "About",
            "Skills",
            "Projects",
            "Contact"
          ]} />
        <header>
          <h1>Brandon Mellus</h1>
        </header>

        <Section
        sectionId="About"
        sectionHeading="Who Am I?"
        sectionContents={(
          <div className="contents">
            <p>I am an enthusiastic front-end developer looking to challenge myself</p>
            <p>I am also looking to get into the backend interface of web development as
            well, and will showcase my work on it in the future</p>
          </div>
        )} />

        <Section
        sectionId="Skills"
        sectionHeading="My Skills"
        sectionContents={(
          <div className="contents">
            <h3>Languages:</h3>
            <div id="Languages" className="container">
              <div className="row">
                <Skill
                  skillName="HTML5"
                  skillImg={html5Img} />
                <Skill
                  skillName="CSS3"
                  skillImg={css3Img} />
                <Skill
                  skillName="Sass"
                  skillImg={sassImg} />
              </div>
              <div className="row">
                <Skill
                  skillName="JavaScript (ES6 & below)"
                  skillImg={javascriptImg} />
              </div>
            </div>
            <h3>Libraries:</h3>
            <div id="Libraries" className="container">
              <div className="row">
                <Skill
                  skillName="React"
                  skillImg={reactImg} />
                <Skill
                  skillName="jQuery"
                  skillImg={jqueryImg} />
              </div>
            </div>
            <h3>Tools:</h3>
            <div id="Tools" className="container">
              <div className="row">
                <Skill
                  skillName="Git"
                  skillImg={gitImg} />
                  <Skill
                    skillName="npm"
                    skillImg={npmImg} />
                  <Skill
                    skillName="gulp.js"
                    skillImg={gulpImg} />
              </div>
            </div>
          </div>
        )} />

        <Section
        sectionId="Projects"
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
        sectionId="Contact"
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
      <footer>
        <p className="copyright">Brandon Mellus &copy; (2017)</p>
      </footer>
      </div>
    );
  }
}

export default Portfolio;
