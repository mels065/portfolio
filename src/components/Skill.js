import React, {Component} from 'react';
import './stylesheet/Skill.css';
import {getValidIcon} from './utils/get-icon'

class Skill extends Component {
  render() {
    return (
      <figure className="Skill">
        <div>{getValidIcon(this.props.skillIcon)}</div>
        <figcaption>{this.props.skillName}</figcaption>
      </figure>
    );
  }
}

export default Skill;
