import React, {Component} from 'react';
import './stylesheet/Skill.css';

class Skill extends Component {
  render() {
    return (
      <figure className="Skill">
        <img src={this.props.skillImg} alt={this.props.skillName} />
        <figcaption>{this.props.skillName}</figcaption>
      </figure>
    );
  }
}

export default Skill;
