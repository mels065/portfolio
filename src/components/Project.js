import React, {Component} from 'react';
import './stylesheet/Project.css';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <a href={this.props.projectLink} target="_blank">
          <figure>
            <img
              src={this.props.projectImg} alt={`${this.props.projectName} thumbnail`} />
            <figcaption>{this.props.projectName}</figcaption>
          </figure>
        </a>
      </div>
    )
  }
}

export default Project;
